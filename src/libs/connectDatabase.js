const config = require('../config');
const Client = require('pg').Client;

const client = new Client({
  host     : config.get('db:host'),
  port     : config.get('db:port'),
  user     : config.get('db:user'),
  password : config.get('db:password'),
  database : config.get('db:database'),
  charset  : 'utf8'
});

client.connect();

module.exports = client;