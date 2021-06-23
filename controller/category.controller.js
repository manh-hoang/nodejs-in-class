var categoryModel = require('../models/category.model')
var categoryController = {
    index:(req , res)=>{
        categoryModel.getAll((err,data)=>{
            if(err){
                res.json(err)
            }else{
                // console.log(data);
                res.json(data);
            }
        });
        },
        indexID:(req , res)=>{
            categoryModel.getAllID(req.params.id ,(err,data)=>{
                if(err){
                    res.json(err)
                }else{
                    // console.log(data);
                    res.json(data[0]);
                }
            });
            },


        // add:(req , res)=>{
        //     res.render('add_category');
        // },
        add_data:(req,res)=>{
            categoryModel.addData(req.body,(err,data)=>{
                if(err){
                    res.json(err)
                }else{
                   // console.log(data);
                    res.json(data);
                }
            });
        },
        // showUpdate:(req , res)=>{
        //    categoryModel.findbyID(req.params.id , (err , data)=>{
        //     if(err){
        //         res.sed(err)
        //     }else{
        //        // console.log(data);
        //        res.render('update_category',{cate:data[0]});
        //     }
        //    });
        // },
        update:(req,res)=>{
            categoryModel.updateData(req.params.id,req.body,(err,data)=>{
                if(err){
                    res.json(err);
                }else{
                    //console.log(data);
                    res.json(data);
                }
            });
        },
        delete:(req,res)=>{
            categoryModel.delete(req.params.id,(err,data)=>{
                if(err){
                    res.json(err);
                }else{
                    console.log(data);
                    res.json(data);
                }
            })
        }

    
        
    }
 module.exports=categoryController;