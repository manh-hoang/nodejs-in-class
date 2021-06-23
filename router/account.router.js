var accountController = require('../controller/account.controller');
module.exports=function(app){
    app.get('/account' ,accountController.index);
    app.get('/account/:id' ,accountController.indexID);
    app.post('/account' , accountController.add_data);
    app.put('/account/:id',accountController.update);
    app.delete('/account/:id',accountController.delete);
    app.get('/account/page/:offset' ,accountController.getLimit);

}
