//npm - node package manager

const express = require("express")
const server = express() //server agora é objeto

//pegar o banco de dados
const db = require("./database/db.js") //toda vez que usa o "require" está utilizano o "module.exports" em outro local

//configurar pasta publica
server.use(express.static("public"))

//habilitar o uso do req.body na aplicação
server.use(express.urlencoded({ extended: true}))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true  //usar enquanto desenvolve, para sempre ver a versão atualizada
})

//configurar caminhos da minha aplicação
//página inicial
    //req: Requisição
    //res: Resposta
server.get("/", (req, res) => {
//get é um verbo http
    return res.render("index.html", { title: "Um título"}) //nome do diretório que estou
})

server.get("/create-point", (req, res) => {

    //req.query: Query Strings da url
    //console.log("req.query")

    return res.render("create-point.html") //nome do diretório que estou
})

server.post("/savepoint", (req, res) => {

    //req.body: O corpo do formulário
    // console.log(req.body)

    //inserir dados no banco de dados
    const query = `
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.name,
        req.body.image,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) { //chama de volta depois que os anteriores executarem. Evita que a aplicação fique esperando
        if(err) {
            console.log(err) //para ver qual erro que aconteceu
            return res.send("Erro no cadastro!")
        }

        console.log("Cadastrado com sucesso!")
        console.log(this) //referencia a resposta que o afterInsertData esta trazendo 
        // >>>>>> NÃO utilizar arrow function quando usar o this <<<<<<

        return res.render("create-point.html", {saved: true})
    }

    db.run(query, values, afterInsertData) //afterInsertData sem os () pois ela não vai ser executada imediatamente

})

server.get("/search", (req, res) => {

    const search = req.query.search

    if(search == "") {
        //pesquisa vazia
        return res.render("search-results.html", { total: 0 })
    }


    //pegar os dados do banco de dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) { //rows são os registros da tabela
        if(err) {
            return console.log(err) //para ver qual erro que aconteceu
        }

        console.log("Aqui estão seus registros: ")
        console.log(rows)
        
        const total = rows.length

        //mostrar a página html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total: total }) //quando o nome da propriedade é = ao nome do valor dela não precisa do ": total"
    })
    
})

//ligar o servidor
server.listen(3000)