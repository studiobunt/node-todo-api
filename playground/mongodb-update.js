const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
/* 
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5bf01e12a31c8d3001041064')
    }, {
      $set: {
          completed: true
      }  
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    }) */

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5befd54e78d90b2a4059577d')
    }, {
        $set: {
            name: 'Dzenan'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result)=>{
        console.log(result);
    });

   // db.close();
});