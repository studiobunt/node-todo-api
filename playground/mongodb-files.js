const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');


   db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
   }, (err)=>{
       console.log('Unable to fetch todos', err)
   });

   db.collection('Users').find({name: "Dzenan"}).toArray().then((docs) =>{
       console.log(JSON.stringify(docs, undefined, 2));
   });

   // db.close();
});