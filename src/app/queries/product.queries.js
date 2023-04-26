const {check, validationResult} = require('express-validator')
// Database connexion info
const {Pool} = require("pg");
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'productmanager',
  password: 'root',
  dialect: 'postgres',
  port: 5432
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error(
      'Error acquiring client', err.stack)
  }
  client.query('SELECT NOW()', (err, result) => {
    release()
    if (err) {
      return console.error(
        'Error executing query', err.stack)
    }
    console.log("Connected to Database !")
  })
})


const createProduct = (request, response) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(400).json({
        errors: errors.array()
      });
    }
    const {uid, name, description, price, image, quantity, available, store, created_at} = request.body
    pool.query(`INSERT INTO product(uid, name, description, price, image, quantity, available, store, created_at)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8,
                        $9)`, [uid, name, description, price, image, quantity, available, store, created_at],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send(request.body);
      })
  } catch (err) {
    return next(err);
  }

}

const getProducts = (request, response) => {
  pool.query(`SELECT *
              FROM product
              ORDER BY "created_at" ASC`, (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  });
}

const getProductById = (request, response) => {
  const productUid = request.params.uid
  pool.query(`SELECT *
              FROM product
              WHERE uid = $1`, [productUid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows[0])
  });
}

const updateProduct = (request, response) => {
  const productUid = request.params.uid
  const {name, description, price, image, quantity, available, store, created_at, updated_at} = request.body

  pool.query(`UPDATE product
              SET name        = $1,
                  description = $2,
                  price       = $3,
                  image       = $4,
                  quantity    = $5,
                  available   = $6,
                  store       = $7,
                  created_at  = $8,
                  updated_at  = $9
              WHERE uid = $10`, [name, description, price, image, quantity, available, store, created_at, updated_at, productUid],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(request.body);
    });
}

const deleteProduct = (request, response) => {
  const productUid = request.params.uid

  pool.query(`DELETE
              FROM product
              WHERE uid = $1`, [productUid],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Product Deleted, ${results.rows}`);
    });
}

const validate = (method) => {
  switch (method) {
    case 'createProduct': {
      return [
        check('uid').notEmpty().withMessage('Uid is required').isLength({min: 10}).withMessage('uid must be at least 10 characters'),
        check('name').notEmpty().withMessage('Product name is required').isLength({min: 3}).withMessage('Product name must be at least 3 characters'),
        check('price').notEmpty().withMessage('The price is required').isDecimal().withMessage('The price must be a decimal'),
        check('quantity').notEmpty().withMessage('The quantity is required').isInt(),
        check('available').notEmpty(),
        check('store').notEmpty().withMessage('Product\'s store name is required')
      ]
    }

    case 'updateProduct': {
      return [
        check('name').notEmpty().withMessage('Product name is required').isLength({min: 3}).withMessage('Product name must be at least 3 characters'),
        check('price').notEmpty().withMessage('The price is required').isDecimal().withMessage('The price must be a decimal'),
        check('quantity').notEmpty().withMessage('The quantity is required').isInt(),
        check('available').notEmpty(),
        check('store').notEmpty().withMessage('Product\'s store name is required'),
      ]
    }
  }
};

module.exports = {
  createProduct, updateProduct,
  deleteProduct, getProducts, getProductById, validate
}
