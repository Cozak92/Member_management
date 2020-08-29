import fileUpload from '../middleware.js'
import {getMember, postMember, deleteMember, updateMember} from '../controllers/apiController.js'
import express from "express";
import routes from '../routes.js';

const mainRouter = express.Router();


mainRouter.get(routes.customers, getMember);
mainRouter.post(routes.customers,fileUpload,postMember)
mainRouter.delete(routes.delete,deleteMember)
mainRouter.post(routes.edit,fileUpload,updateMember)



export default mainRouter;





