var productController = require('../controller/product.controller');
module.exports=function(app){
    app.get('/product' ,productController.index);
    app.get('/product/:id' ,productController.indexID);
    app.get('/productcategory/:categoryid' ,productController.indexCategoryID);
    app.post('/product' , productController.add_data);
    app.put('/product/:id',productController.update);
    app.delete('/product/:id',productController.delete);
    app.get('/product/page/:offset' ,productController.getLimit);

}
