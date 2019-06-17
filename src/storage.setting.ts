
const multer = require('multer');
var fs = require('fs');
var dir = './uploads';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const storage = multer.diskStorage({
  destination: function (req:any, file:any, cb:any) {
    cb(null, 'uploads/')
  },
  filename: function (req:any, file:any, cb:any) {
    cb(null, file.originalname);
  }
}) 

multer({
  limits: { fieldSize: 25 * 1024 * 1024 }
})

const upload = multer({ storage: storage,
    limits: { fieldSize: 25 * 1024 * 1024 }
});

export default upload;