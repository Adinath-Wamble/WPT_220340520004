const mysql = require('mysql2');
let dbparams={
host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'wpt',
	port:3306
};
const mysql = require('mysql2');
const conn = mysql.createConnection(dbparams);

const express = require('express');
const { join } = require('path');
const app = express();
app.use(express.static('HTML'))
app.get("/getbookdetails",(req,resp)=>{
    let input = req.query.bookid;
    console.log(input);
    let output ={book:false, bookdetails:{bookid:1 , bookname :'a', bookprice:200}};
    con.query('selec *from book where bookid = ?', [input],(error,rows)=>{
        if(row.length > 0){
            output.book = true;
            output.bookdetails = rows[0];
        }
        resp.send(output);
    }
    );

})
    
app.get("/update"),(req,resp)=>{
    let output = false;
    let input ={bookid:req.query.bookid,
        bookname:req.query.bookname,
        bookprice:req.query.bookprice,
    }
    con.query('updat book set bookname = ? , price = ? where bookid = ?', [input.bookid, input.bookname, input.bookprice],(error,wh)=>{
    if(error){}
    else if(wh.affectedRows> 0){
        output = true;
    }
    resp.send(output);
}
    );
};

app.get("/getalldetails",(req,resp)=>{
    con.query('select *from book',[] , (error,rows)=>{
        resp.send(rows);
    });
});

app.listen(1000,function() {
    console.log('checking server');
    });