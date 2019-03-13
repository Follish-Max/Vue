const path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            { test: /\.css$/,use: ['style-loader','css-loader'] },
            { test: /\.less$/,use: ['style-loader','css-loader','less-loader']},
            { test: /\.scss$/,use: ['style-loader','css-loader','sass-loader']}
        ]
    }
}

/*

1.npm init -y

2.npm i jquery -S

3.webpack .\src\main.js .\dist\bundle.js

4.webpack


-------------------


5.npm i webpack-dev-server -D

6.npm run dev（但此时本地项目中没有webpack，全局安装了也不行）

7.npm i webpack@3.6.0 -D

8.npm run dev(发现webpack-dev-server和webpack的版本冲突)

9.npm i webpack-cli(中间还得安装webpack-cli,按照提示一步一步来)

10.npm install webpack-dev-server@2.9.4 --save-dev(降低webpack-dev-server 的版本号)

11.npm run dev （成功执行）


//使用webpack打包css文件

12.npm i style-loader css-loader --save-dev(然后修改配置文件)

//使用webpack打包less文件

13.npm i less-loader less -D

//使用webpack打包sass文件

14.npm i sass-loader node-sass --save-dev

 */