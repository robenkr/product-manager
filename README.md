# ProductManager app

<p align="center">
  <a href="https://opensource.org/licenses/Apache-2.0"><img alt="License" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"/></a>
</p>

It's a simple app the must:

1. Display products a list of products
2. Delete products.
3. Add and Edit products.
4. Log a user

## Setting up the app

### Install Dependencies

```bash
npm install
```

> _tip_: `npm i`is shorthand for `npm install``

## Required Tasks

### Running Your Frontend in Dev Mode

The frontend part was built in Angular. In order to run the app in development mode use `npm start`. You can
change the script in the `package.json` file.

Open [http://localhost:4200](http://localhost:4200) to view it in the browser. The page will reload if you make edits.

### Running Your Backend

The frontend part was built in Express. In order to run the server use `node server.js`.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### Key Packages

- [Angular dependencies(packages)](https://angular.io/guide/npm-packages).

- [express](https://www.sqlalchemy.org/) is the Python SQL toolkit and ORM we'll use to handle the lightweight SQL
  database. You'll primarily work in `app.py`and can reference `models.py`.

- [body-parser](http://expressjs.com/en/resources/middleware/body-parser.html) is a Node.js body parsing middleware.

- [express-validator](https://express-validator.github.io/docs/) is a set of express.js middlewares that wraps the
  extensive collection of validators and sanitizers offered by validator.js.

- [cors](http://expressjs.com/en/resources/middleware/body-parser.html) is a node.js package for providing a
  Connect/Express middleware that can be used to enable CORS with various options.

- [pg](https://node-postgres.com/) node-postgres is a collection of node.js modules
  for interfacing with your PostgreSQL database.

### Set up the Database

With Postgres running, create a `productmanager` database:

```bash
createbd productmanager
```

Tables schema files are in `db` folder

### Endpoints

#### GET /api/products

- General:
  - Returns a list of products.
- Sample: `curl http://127.0.0.1:3000/api/products`

``` 
[
  {
    "uid": "5fcba223f6",
    "name": "iPhone 13 Pro Max",
    "description": "it's a phone",
    "price": 1285,
    "quantity": 0,
    "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "available": true,
    "store": "Ampire Store",
    "created_at": "2023-04-23T10:51:04.986Z",
    "updated_at": "2023-04-24T13:16:12.869Z"
  },
  {
    "uid": "e46bace41c",
    "name": "iPhone 12 Pro Max",
    "description": "it's a phone",
    "price": 1100,
    "quantity": 10,
    "image": "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    "available": true,
    "store": "Ampire Store",
    "created_at": "2023-04-23T22:54:23.135Z",
    "updated_at": null
  }
]
```

#### POST /api/products

- General:
  - Creates a new Product using the submitted type. Returns the created product object.
- Sample:
  `curl http://127.0.0.1:3000/api/products -X POST -H "Content-Type: application/json" -d '{"uid": "9d338ac7bd", "name": "Product test", "description": 'Try later', "price": 1, "quantity": 10, "image": 'ttps://images.unsplash.com/...', "available": false, "store": 'Ampire Store', "created_at": '2023-04-23 12:51:04.986000'}'`

``` 
{
  "uid": "9d338ac7bd",
  "name": "Product test",
  "description": "Try later",
  "price": 1,
  "quantity": 10,
  "image": "https://images.unsplash.com/...",
  "available": false,
  "store": "Ampire Store",
  "created_at": "2023-04-23T22:54:23.135Z",
  "updated_at": null
}
```

#### PUT /api/products/{product_uid}

- General:
  - Update the product of the given UID if it exists
- `curl http://127.0.0.1:5000/api/products/9d338ac7bd -X PUT -H "Content-Type: application/json" -d '{"uid": "9d338ac7bd", "name": "Product test", "description": 'Try later', "price": 1, "quantity": 10, "image": 'ttps://images.unsplash.com/...', "available": false, "store": 'Ampire Store', "created_at": '2023-04-23 12:51:04.986000', "updated_at": '2023-04-24 12:51:04.986000'}`

#### DELETE /api/products/{product_uid}

- General:
  - Deletes the product of the given UID if it exists
- `curl -X DELETE http://127.0.0.1:5000/api/products/9d338ac7bd`

## Deployment N/A

## Authors

Roland Tubongye W.

# License

```
Designed and developed in 2023 by roben (Roland Tubongye W.)
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
