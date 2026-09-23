use("collageDB");

// db.createCollection("students2");

// db.students2.insertMany([
//     {name:"Nisha",age:19,city:"Faridabad",semester:3,course:"Btech",fees:100000},
//     {name:"Ravi",age:19,city:"Delhi",semester:3,course:"BCA",fees:200000},
//     {name:"Prachi",age:19,city:"Faridabad",semester:5,course:"Btech",fees:100000},
//     {name:"Prem",age:19,city:"Surat",semester:1,course:"BCA",fees:200000},
// ]);

// db.students.find();

// db.students.find({marks:{$gte:80}});

//and case

// db.students2.find({city:"surat",semester:{$gte:3}});

//or case

// db.students2.find({
//     $or:[
//         {city:"Surat"},{semester:{$gte:3}}
//     ]
// });

//only to get specific attributes---projection

// db.students2.find({},{name:1,semseter:1,course:1,_id:0});

//ascending order

// db.students2.find().sort({age:1});

//desending order

// db.students2.find().sort({age:-1});

//limiting 

// db.students2.find().limit(2);

//skiping

// db.students.find().skip(0);

//skipping and limiting

// db.students2.find().skip(1).limit(1);

db.students2.find({
    $or:[
        {semester:3},{course:"Btech"}
    ]
}).sort({age:-1}).skip(0).limit(2);


