const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

/*     db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
        console.log(result);
    }); */

/*     db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
        console.log(result);
    }); */

/*     db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
        console.log(result);
    }); */

/*     db.collection('Users').deleteMany({name: 'Dzenan'}).then((result) =>{
        console.log(result);
    }) */

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5beedce35417222648949c1a')}).then((result) =>{
        console.log(JSON.stringify(results, undefined, 2));
    });
   // db.close();
});