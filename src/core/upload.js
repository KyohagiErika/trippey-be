const path = require('path');
const multer = require('multer');
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '../../uploads'));
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const [name, ...exts] = file.originalname.split('.');
            cb(null, `${name}-${uniqueSuffix}.${exts.join('.')}`);
        }
    })
});
module.exports = upload;