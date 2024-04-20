import { Request, Response, Router } from 'express';
import multer from "multer";
export const newData = Router()
const upload = multer();

newData.post('/',
    upload.single('inputFile'),
    async (req: Request, res: Response) => {
        try {
            const { file } = req;
            console.log(file);
            res.json(file);
        } catch (error) {
            res.json(error);

        }

    })