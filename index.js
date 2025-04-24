var express = require('express');
var cors = require('cors');
let multer = require('multer');
let upload = multer({ dest: 'uploads/' });  // 指定文件上传的目录
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// ##############my codes####################

// proj requirements as below:

// 1. You should provide your own project, not the example URL.

// 2. You can submit a form that includes a file upload. HINT: You can use the multer npm package to handle file uploading.

// 3. The form file input field has the name attribute set to upfile.

// 4. When you submit a file, you receive the file name, type, and size in bytes within the JSON response.

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  
  // the file name, type, and size in bytes within the JSON response
  res.json({
    name: req.file.originalname,  
    type: req.file.mimetype,
    size: req.file.size
  })
})




// ##############my codes####################


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
