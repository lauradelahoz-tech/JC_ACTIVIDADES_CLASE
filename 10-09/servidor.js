
// npm y el package.josn
const http = require("http")

const servidor = http.createServer(function (req, res) {
    res.writeHead(200, {
        "content-type": "text-html"
    })

    // text-html - interpretalo como pagina web
    //  text/plain - como texto plano
    //apliation/json - son datos json
    res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="font-family: sans-serif; text-align: center;">
    <h1> hola desde mi servidor </h1>
    <p> esta pagina fue enviada por node.js</p>
    
</body>
</html>`)
})


servidor.listen(3000, function() {
    console.log("servidor funcionando en http://localhost:3000")
})