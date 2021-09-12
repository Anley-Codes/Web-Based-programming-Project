//Checking environment
var env = process.env.NODE_ENV || 'development';

//fetch env. configurations
var config = require('./config.json');
var envConfig = config[env];

//Add env.configuration values to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);