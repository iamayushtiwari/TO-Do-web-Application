const db = require('../config/mongoose')
const Todo = require('../models/task')

module.exports.delete = function (req, res) {
    console.log("delete task called " + req.query.id)
    let id = req.query.id
    // Todo.findByIdAndDelete(id,function(err){
    //     if(err){
    //         console.log(`Error: ${err}`)
    //         return
    //     }    
    // })
    deleteCourse(id)
    setTimeout(function () {
        return res.redirect('back')
    }, 1000);

}
async function deleteCourse(id) {

    try {
        const result = await Todo.findByIdAndDelete(id);
        console.log("Deleted course: ", result);
    } catch (err) {
        console.log(err)
    }
}