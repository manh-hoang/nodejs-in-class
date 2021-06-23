var conn = require('../BD/connect');
var category = {
    getAll:(callback)=>{
        conn.query("SELECT * FROM category order by name asc",callback);
    },
    getAllID:(id,callback)=>{
        conn.query(`SELECT * FROM category where id =${id} `,callback);
    },
    addData:(data,callback)=>{
        conn.query(`INSERT INTO category(name,status) VALUES ('${data.name}','${data.status}')`,callback);
    },
    delete:(id,callback)=>{
        conn.query(`DELETE FROM category WHERE id = ${id}`,callback)
    },
     updateData:(id,data,callback)=>{
         conn.query(`update category set name ="${data.name}", status = "${data.status}" where id = '${id}'` , callback )

     },
    // findbyID:(id,callback)=>{
    //     conn.query(`SELECT * FROM caregory where id =${id}`,callback);

    // }



}
module.exports = category;