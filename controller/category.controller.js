import { read } from "fs";
import Category from "../model/category.model.js";
import { request } from "http";
import { response } from "express";

   export const saveCategory=(request,response,next)=>{
      let category_name = request.body.category_name;


      let category = new Category(null,category_name);

      category.save()
      .then((result) => {
        console.log(result);
        return response.status(200).json({ Message: "Sign Up Success"});
    })
    .catch((err) => {
        console.log(err);
        return response.status(500).json({ Error: "Internal Server Error" });
    });

}

export const updateCategory = (request,response,next)=>{
     let name = request.body.category_name;
     let id = request.body.id;
     let category = new Category(id,name);

     category.updatecategory().then((result)=>{
        // console.log(result);
        return response.status(200).json({Message:"Update Sucessfully"});
     }).catch((error)=>{
        console.log(error);
        return response.status(501).json({Error:"something went wrong"});
     });
}

export const deleteProduct = (request,response,next)=>{
     let name = request.body.productname;
     let id = request.body.id;

     let category = new Category(id,name);

     category.DeleteCategory().then((result)=>{
           return response.status(200).json({Message:"Delete Succesfully"});
     }).catch((error)=>{
        console.log(error);
        return response.status(501).json({Error:"something went wrong"});
     });
}

export const insertProduct =(request,response,next)=>{
    let name = request.body.productname;
    let id = request.body.id;

    let category = new Category(id,name);

    category.CategoryInsertData().then((result)=>{
        return response.status(200).json({Message:"insert Succcesfully"});
    }).catch((err)=>{
        return response.status(501).json({Message:"Error!"});
    });
}