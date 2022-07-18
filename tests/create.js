const mysql = require('mysql2')
const {config} = require('./config')

// set up connection with config
const connection = mysql.createConnection(config)

// connect to db
connection.connect((err) => {
    if (err) {
        return console.log('error: ' + err.message)
    }
    console.log('Connected to the MySQL server.')
    
    // =============================================================
    // SQL Query
    // forge SQL query to create
    const createTestTable = `create table if not exists test_table(
                                id int primary key auto_increment,
                                title varchar(255) not null,
                                complete tinyint(1) not null default 0
                            )`
    // send query
    connection.query(createTestTable, (err, results, fields) => {
        if (err) {
            console.log(err.message)
        }
    })

    // close connection (also forced by destory())
    connection.end((err) => {
        if (err) {
            return console.log('error:' + err.message)
        }
        console.log('Connection closed.');
    })

})

