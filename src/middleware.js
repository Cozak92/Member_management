import express from 'express';
import multer from "multer"


const upload = multer({dest : './upload'});
const fileUpload = upload.single("image");

export default fileUpload;