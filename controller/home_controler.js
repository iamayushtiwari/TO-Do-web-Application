const Todo = require('../models/task')
module.exports.home = function (req, res) {
    Todo.find({}).then(tasks => {
        // console.log(tasks);
        res.render('home', {
            title: 'Todo Tasks',
            Data: tasks
        })
    })

    // Todo.find({},function(err,tasks){
    //     if(err){
    //         console.log(`Error: ${err}`)
    //         return;
    //     } 
    //     console.log(tasks);
    //     return res.render('home',{
    //         title:'Todo Tasks'
    //     })
    // })
}