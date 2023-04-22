const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/chatgpt', createProxyMiddleware({ target: 'https://api.openai.com/v1/', changeOrigin: true }));

app.listen(3000, () => {
  console.log('Proxy server listening on port 3090');
});