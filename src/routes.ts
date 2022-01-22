import { Router, Request, Response } from "express";
import { CreateMessageController } from "./controllers/Message/CreateMessageController";
import { DeleteMessageController } from "./controllers/Message/DeleteMessageController";
import { ListMessageController } from "./controllers/Message/ListMessageController";
import { ListProductController } from "./controllers/Product/ListproductController";
import { CreateProductController } from "./controllers/Product/CreateProductController";
import { DeleteProductController } from "./controllers/Product/DeleteproductController";
import { ListCategoryController } from "./controllers/Category/ListCategoryController";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/Category/DeleteCategoryController";
import {uploadFiles} from './middleware/uploadFiles'
import multer from 'multer';


const router = Router();

const createMessageController = new CreateMessageController();
const listMessageController = new ListMessageController();
const deleteMessageController = new DeleteMessageController();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const deleteProductController = new DeleteProductController();

const createCategoryController = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const deleteCategoryController = new DeleteCategoryController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Bem vindo a API Dio Shopping'})
})

router.get('/message', listMessageController.hanle)
router.post('/message', createMessageController.handle)
router.delete('/message', deleteMessageController.handle)

router.get('/api/product', listProductController.hanle)
router.post('/api/product', createProductController.handle)
router.delete('/api/product', deleteProductController.handle)

router.get('/api/category', listCategoryController.hanle)
router.post('/api/category', createCategoryController.handle)
router.delete('/api/category', deleteCategoryController.handle)

export { router }
