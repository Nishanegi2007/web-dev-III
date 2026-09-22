// use("collageDB");

// db.createCollection("students2");

// db.students2.insertMany([
//     {name:"Nisha",age:19,city:"Faridabad",semester:3,course:"Btech",fees:100000},
//     {name:"Ravi",age:19,city:"Delhi",semester:3,course:"BCA",fees:200000},
//     {name:"Prachi",age:19,city:"Faridabad",semester:5,course:"Btech",fees:100000},
//     {name:"Prem",age:19,city:"Surat",semester:1,course:"BCA",fees:200000},
// ]);

// db.students.find();

// db.students.find({marks:{$gte:80}});

// db.students2.find({city:"surat",semester:{$gte:3}});
db.students2.find({
    $or:[
        {city:"Surat"},{semester:{$gte:3}}
    ]
});