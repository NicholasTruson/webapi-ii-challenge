const express = require('express');

const postsRouter = require('./data/posts/posts-router');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda API</h>
    <p>Welcome to the Lambda API</p>
  `);
});

server.listen(4000, () => {
  console.log('Server Running on localhost:4000');
});