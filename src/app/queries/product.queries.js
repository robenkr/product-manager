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
  const {uid, name, description, price, image, quantity, available, store, created_at} = request.body
  pool.query(`INSERT INTO product(uid, name, description, price, image, quantity, available, store, created_at)
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8,
                      $9)`, [uid, name, description, price, image, quantity, available, store, created_at],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(request.body);
    })
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

module.exports = {
  createProduct, updateProduct,
  deleteProduct, getProducts, getProductById
}
