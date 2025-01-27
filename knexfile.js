// Update with your config settings.
const dotenv = require('dotenv');

let b = dotenv.config();

if (b.error) {
  throw b.error
}

console.log('parsed: ', b.parsed);

let a = {

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_DEVELOPMENT_HOST || 'localhost',
      port: process.env.DB_DEVELOPMENT_PORT || '3000',
      database: process.env.DB_DEVELOPMENT_DATABASE || 'my_database',
      user: process.env.DB_DEVELOPMENT_USER || 'root',
      password: process.env.DB_DEVELOPMENT_PASSWORD || ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_PRODUCTION_HOST || 'localhost',
      port: process.env.DB_PRODUCTION_PORT || '3000',
      database: process.env.DB_PRODUCTION_DATABASE || 'my_database',
      user: process.env.DB_PRODUCTION_USER || 'root',
      password: process.env.DB_PRODUCTION_PASSWORD || ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};

console.log(a);


module.exports = a;
