# REST API (Autorización y Autenticación)

Este es una REST API (Autorización y Autenticación) creada con Nodejs, JWT, y mongoDB (mongoose)

## Installation

Requerido tener instalado Nodejs y MongoDB en el SO

```bash
$ npm i
```

## Routes
Port :4000 => [http://localhost:4000](http://localhost:4000 "http://localhost:4000")
      
+ Auth
    + {{URL}}/api/auth/signup (POST)
    + {{URL}}/api/auth/signin (POST)
+ Products
    + {{URL}}/api/products (GET)
    + {{URL}}/api/products/<ID> (GET)
    + {{URL}}/api/products (POST)
    + {{URL}}/api/products/<ID> (PUT)
    + {{URL}}/api/products/<ID> (DELETE)
+ Users
    + {{URL}}/api/users (POST)

## Contributing
Pull requests are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)