import fileUpload from '../middleware.js'
import {getMember, postMember, deleteMember} from '../controllers/apiController.js'
import express from "express";
import routes from '../routes.js';

const mainRouter = express.Router();


mainRouter.get(routes.customers, getMember);
mainRouter.post(routes.customers,fileUpload,postMember)
mainRouter.delete(routes.delete,deleteMember)



export default mainRouter;





