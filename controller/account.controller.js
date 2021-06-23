var accountModel = require('../models/account.model');
var accountController = {
    index:(req , res)=>{
        accountModel.getAll((err,data)=>{
            if(err){
                res.json(err)
            }else{
                // console.log(data);
                res.json(data);
            }
        });
        },
        indexID:(req , res)=>{
            accountModel.getAllID(req.params.id ,(err,data)=>{
                if(err){
                    res.json(err)
                }else{
                    // console.log(data);
                    res.json(data[0]);
                }
            });
            },


        add_data:(req,res)=>{
            accountModel.addData(req.body,(err,data)=>{
                if(err){
                    res.json(err)
                }else{
                   // console.log(data);
                    res.json(data);
                }
            });
        },


        update:(req,res)=>{
            accountModel.updateData(req.params.id,req.body,(err,data)=>{
                if(err){
                    res.json(err);
                }else{
                    //console.log(data);
                    res.json(data);
                }
            });
        },
        delete:(req,res)=>{
            accountModel.delete(req.params.id,(err,data)=>{
                if(err){
                    res.json(err);
                }else{
                    console.log(data);
                    res.json(data);
                }
            })
        },
        getLimit:(req,res)=>{
            let offset = 3*(req.params.offset -1);
            accountModel.getLimit(offset,(err,data)=>{
                if(err){
                    res.json(err);
                }else{
                    console.log(data);
                    res.json(data);
                }
            })
        }

}
module.exports = accountController;
