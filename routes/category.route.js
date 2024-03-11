import express from "express";
import { saveCategory,updateCategory,deleteProduct,insertProduct} from "../controller/category.controller.js";


const router = express.Router();


router.post("/saveCategory", saveCategory);
router.post("/updateCategory", updateCategory);
router.post("/DeleteProduct", deleteProduct);
router.post('/insertData',insertProduct);



export default router;