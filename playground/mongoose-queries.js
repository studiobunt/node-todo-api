const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/* var id = '5bf2dd459efe65243a4e5242';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
} */

/* Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
}); */
/* 
Todo.findById(id).then((todo) => {
    if(!todo){
        return console.log('Id not found');
    }
    console.log('Todo by id', todo);
}).catch((e)=>console.log(e)); */

var id = '5bf0a604216a10a025daef2d';

User.findById(id).then((user) => {
    if(!user){
    return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
})