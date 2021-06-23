var conn = require('../BD/connect');
var account = {
    getAll:(callback)=>{
        conn.query("SELECT * FROM account order by name asc",callback);
    },
    getAllID:(id,callback)=>{
        conn.query(`SELECT * FROM account where id =${id} `,callback);
    },
    addData:(data,callback)=>{
        conn.query(`INSERT INTO account(id,name,email,password) VALUES ('${data.id}','${data.name}','${data.email}','${data.password}')`,callback);
    },
    delete:(id,callback)=>{
        conn.query(`DELETE FROM account WHERE id = ${id}`,callback)
    },
     updateData:(id,data,callback)=>{
         conn.query(`update account set id ="${data.id}", name = "${data.name}" , email = "${data.email}" , password = "${data.password}" where id = '${id}'` , callback )
     },
     getLimit:(offset,callback)=>{
        conn.query(`SELECT * FROM account LIMIT 3 OFFSET ${offset}  `,callback);
     }
}
module.exports =account;