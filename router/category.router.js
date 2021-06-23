var categoryController = require('../controller/category.controller');
module.exports=function(app){
    app.get('/category' ,categoryController.index);
    app.get('/category/:id' ,categoryController.indexID);
    // app.get('/add_category' ,categoryController.add);
     app.post('/category' , categoryController.add_data)
    
    // app.get('/update_category/:id' ,categoryController.showUpdate);
   
 app.put('/category/:id',categoryController.update);


     app.delete('/category/:id',categoryController.delete);
}