const db = require('../config/mongoose')
const Todo = require('../models/task')

module.exports.addtask = function (req, res) {

    console.log(req.body)
    const newtask = new Todo(req.body);

    newtask.save().then(()=>{
        
    }).catch((err)=>{
        console.log(err);
        
    })
    setTimeout(function() {
        return res.redirect('back')
    },1000);
    
    
    // Todo.create({
    //     newtask: req.body.newtask

    // }, function (err, newtoDo) {
    //     if (err) {
    //         console.log(`Error: ${err}`)
    //         return
    //     }
    //     console.log(`***** ${newtoDo}`)
    //     return res.redirect('back')
    // })

}