//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose() //informações no terminal

//criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db") //atribuindo um objeto à constante

module.exports = db

//utilizar o objeto de banco de dados para nossas operações
//db.serialize(() => {
    //com comando sql eu vou

    //1 - criar uma tabela
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places (
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         image TEXT,
    //         address TEXT,
    //         address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         items TEXT
    //     );
    // `) //com crases dá pra fazer esta quebra de linha (template string)

    // //2 - inserir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         name,
    //         image,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "Papersider", 
    //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    //     "Guilherme Gemballa, Jardim América",
    //     "N° 260",
    //     "Santa Catarina",
    //     "Rio do Sul",
    //     "Papéis e Papelão"
    // ]

    // function afterInsertData(err) { //chama de volta depois que os anteriores executarem. Evita que a aplicação fique esperando
    //     if(err) {
    //         return console.log(err) //para ver qual erro que aconteceu
    //     }

    //     console.log("Cadastrado com sucesso!")
    //     console.log(this) //referencia a resposta que o afterInsertData esta trazendo 
    //     // >>>>>> NÃO utilizar arrow function quando usar o this <<<<<<
    // }

    // db.run(query, values, afterInsertData) //afterInsertData sem os () pois ela não vai ser executada imediatamente

    // //3 - consultar dados da tabela
    // db.all(`SELECT * FROM places`, function(err, rows) { //rows são os registros da tabela
    //     if(err) {
    //         return console.log(err) //para ver qual erro que aconteceu
    //     }

    //     console.log("Aqui estão seus registros: ")
    //     console.log(rows)
    // })


    //4 - deletar um dado da tabela
    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err) {
    //     if(err) {
    //         return console.log(err) //para ver qual erro que aconteceu
    //     }

    //     console.log("Registro deletado com sucesso!")
    // })
//})