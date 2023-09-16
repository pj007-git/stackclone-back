const router = require('express').Router();
const controller  = require('./controller');
let multer = require('multer');

let upload = multer();


router.get('/',(req,res)=> { res.send("Welcome")})
router.post('/signup',upload.fields([]),controller.registerUser)
router.post('/login',upload.fields([]),controller.loginUser)



module.exports = router
