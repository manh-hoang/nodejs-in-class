var homeController = require('../controller/home.controller');
module.exports=function(app){
    app.get('/home' ,homeController.index);
}