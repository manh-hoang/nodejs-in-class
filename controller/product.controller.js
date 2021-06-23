const productModel = require("../models/product.model");
var productController = {
    index:(req , res)=>{
        productModel.getAll((err,data)=>{
            if(err){
                res.json(err)
            }else{
                // console.log(data);
                res.json(data);
            }
        });
        },
        indexID:(req , res)=>{
            productModel.getAllID(req.params.id ,(err,data)=>{
                if(err){
                    res.json(err)
                }else{
                    // console.log(data);
                    res.json(data[0]);
                }
            });
            },
            indexCategoryID:(req , res)=>{
                productModel.getCategoryID(req.params.categoryid,(err,data)=>{
                    if(err){
                        res.json(err)
                    }else{
                        // console.log(data);
                        res.json(data);
                    }
                });
                },


        add_data:(req,res)=>{
            productModel.addData(req.body,(err,data)=>{
                if(err){
                    res.json(err)
                }else{
                   // console.log(data);
                    res.json(data);
                }
            });
        },


        update:(req,res)=>{
            productModel.updateData(req.params.id,req.body,(err,data)=>{
                if(err){
                    res.json(err);
                }else{
                    //console.log(data);
                    res.json(data);
                }
            });
        },
        delete:(req,res)=>{
            productModel.delete(req.params.id,(err,data)=>{
                if(err){
                    res.json(err);
                }else{
                    console.log(data);
                    res.json(data);
                }
            })
        },
        getLimit:(req,res)=>{
            let offset = 8*(req.params.offset -1);
            productModel.getLimit(offset,(err,data)=>{
                if(err){
                    res.json(err);
                }else{
                    console.log(data);
                    res.json(data);
                }
            })
        }

}
module.exports = productController;
