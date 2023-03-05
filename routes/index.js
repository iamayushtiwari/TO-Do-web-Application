const express = require('express')
const router = express.Router();
const homeControler = require('../controller/home_controler')
const addTaskController = require('../controller/addTask_controller')
const deleteTaskController = require('../controller/deleteTask_controller')

router.get('/',homeControler.home)
router.post('/addtask',addTaskController.addtask)
router.get('/deletetask',deleteTaskController.delete)
// console.log('router loaded')
module.exports = router;