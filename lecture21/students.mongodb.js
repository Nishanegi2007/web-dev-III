use("collageDB");

// db.createCollection("students");

//create operations

// db.students.insertOne(
//     {rollNo:1,name:"Nisha",section:"FSD-A",marks:70}
// )

// db.students.insertMany([
//     {rollNo:2,name:"Priyanshi",section:"FSD-A",marks:99},
//     {rollNo:3,name:"Prachi",section:"FSD-A",marks:90},
//     {rollNo:4,name:"Rohit",section:"FSD-A",marks:50}
// ]);

// db.students.insert({
//     rollNo:5,name:"Bheem",section:"FSD-A",marks:70
// })

//read operation

//db.students.findOne();  //returns first one document from the collection

// db.students.find();

// db.students.find({section:"FDS-B"});

// db.students.find({name:"Nisha"});

//update operation

// db.students.updateOne({name:"Bheem"},{$set:{name:"Ravi"}});

// db.students.update({name:"Ravi"},{$set:{section:"FSD-c"}});

// db.students.updateMany({marks:70},{$set:{marks:80}});

//delete operation

// db.students.deleteOne({name:"Ravi"});

// db.students.deleteMany({marks:80});

db.students.updateMany({},{$set:{department:"SOET"}});