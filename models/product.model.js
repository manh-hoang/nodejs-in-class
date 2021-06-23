var conn = require('../BD/connect');
var product = {
    getAll:(callback)=>{
        conn.query("SELECT * FROM product order by name asc",callback);
    },
    getAllID:(id,callback)=>{
        conn.query(`SELECT * FROM product where id =${id} `,callback);
    },
    getCategoryID:(categoryid,callback)=>{
        conn.query(`SELECT * FROM product where category_id =${categoryid} `,callback);
    },
    addData:(data,callback)=>{
        conn.query(`INSERT INTO product(name,price,sale_price,image,category_id,description) VALUES ('${data.name}','${data.price}','${data.sale_price}','${data.image}','${data.category_id}','${data.description}')`,callback);
    },
    delete:(id,callback)=>{
        conn.query(`DELETE FROM product WHERE id = ${id}`,callback)
    },
     updateData:(id,data,callback)=>{
         conn.query(`update product set name ="${data.name}", price = "${data.price}" ,  sale_price = "${data.sale_price}" ,image = "${data.image}" , category_id = "${data.category_id}",description = "${data.description}"  where id = '${id}'` , callback )
     },
     getLimit:(offset,callback)=>{
        conn.query(`SELECT * FROM product LIMIT 8 OFFSET ${offset} `,callback);
     }
}
module.exports =product;