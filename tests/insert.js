const mysql = require('mysql2')
const {config} = require('./config')

// set up connection with config
const connection = mysql.createConnection(config)

// connect to db
connection.connect((err) => {
    if (err) {
        return console.log('error: ' + err.message)
    }
    
    // =============================================================
    // SQL Query
    // forge SQL query to create
    const stmt = `INSERT INTO test_table (title, complete) 
                    VALUES?
                    `
    const row = [
                    ['first test insert', false],
                    ['second test insert', 0],
                    ['third test insert', 1],
                ]

    // send query
    connection.query(stmt, [row], (err, results, fields) => {
        if (err) {
            console.log(err.message)
        }
        if (results !== undefined) {
            console.log(results)
        }
    })
    

    // close connection (also forced by destory())
    connection.end((err) => {
        if (err) {
            return console.log('error:' + err.message);
        }
    });

})

