这是一个由ChatGPT3.5写的nodejs程序，用于反向代理chatgpt-api
***
以下是一个简单的Node.js程序，用于反向代理chatgpt：

1. 首先，你需要安装Node.js和npm。如果你还没有安装它们，请按照官方文档进行安装。

2. 创建一个新的文件夹，并在其中创建一个名为“package.json”的文件。在该文件中添加以下内容：

{
  "name": "chatgpt-proxy",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1",
    "http-proxy-middleware": "^1.0.6"
  }
}


这将告诉npm安装所需的依赖项：Express和http-proxy-middleware。

3. 在终端中导航到该文件夹，并运行以下命令来安装依赖项：

npm install


4. 创建一个名为“server.js”的文件，并添加以下内容：

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/chatgpt', createProxyMiddleware({ target: 'https://api.openai.com/v1/', changeOrigin: true }));

app.listen(3000, () => {
  console.log('Proxy server listening on port 3080');
});


这将创建一个Express应用程序，并使用http-proxy-middleware创建一个反向代理，将所有以“/chatgpt”开头的请求转发到“https://api.openai.com/v1/”。

5. 运行以下命令启动服务器：

node server.js


现在，你可以通过访问“http://localhost:3000/chatgpt”来访问chatgpt的API。如果需要部署到服务器上，请使用PM2等工具将其作为后台进程运行。