const configs = {
    development: {
      SERVER_URI: 'localhost:3001',
    },
    production: {
      SERVER_URI: 'HEROKU_URI',
    },
  };
  
  module.exports.config = configs[process.env.NODE_ENV];