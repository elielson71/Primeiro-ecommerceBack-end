import multer from 'multer';
const uploadFiles =(multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            console.log('multer')
            cb(null, './src/upload/files')
        },
        filename: (req, file, cb) => {

            cb(null, Date.now().toString() + "_" + file.originalname)  
        }
    }),
    
}));

export {uploadFiles }