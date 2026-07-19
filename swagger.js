const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Aether Apex LIDAR API',
    description: 'CRUD API for soldier LIDAR scan detection and operator status tracking.',
  },
  host: 'aether-lidar-api.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);