const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'  
}

const mysql = require('mysql')

app.get('/', (req,res) => {
    const connection = mysql.createConnection(config)
    const sql = `INSERT INTO people(name) values('diogo'),('João'),('Lucas'),('Alexandra')`;
    connection.query(sql);
    const query = "SELECT * FROM people";
    connection.query(query,function(error,data){
        if (error) {
            return res.status(500).send('Erro ao buscar dados no banco de dados.');
        }
        let html = '<h1>Full Cycle Rocks!</h1>';
        html += '<ul>';
        for (const row of data) {
            html += `<li>ID: ${row.id}, Nome: ${row.name}</li>`;
        }
        html += '</ul>';
        res.send(html);
    });
    connection.end()
    
})


app.listen(port, ()=>{
        console.log('rodando na porta '+ port)
    }
)