// const os=require('os');
// console.log(os.homedir());
// console.log(os.tmpdir());
// console.log(os.totalmem()/(1024*1024*1024));

// const path=require('path');

// //resolve method is used to get the absolute path of the file
// const filepath=path.resolve("coremodules.js");
// console.log(filepath);

// //join method is used to join the path segments
// const filepath2 =path.join("home","user","documents","file.txt");
// const filePath =path.join(__dirname,"coremodules.js");
// console.log(filepath2);

// const filepath3 = "home/user/documents/file.txt";
// console.log(path.basename(filepath3));
// console.log(path.dirname(filepath3));
// console.log(path.extname(filepath3));

////fs module

//synchronous method
// console.log("A");
const fs = require('fs');
// const data1= fs.readFileSync('sample.txt','utf-8');
// console.log(data1);
// console.log("B");

// //output will be A,data,B

// //asynchronous method
// console.log("A");
// fs.readFile('sample.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);  
//     }else{
//         console.log(data);
//     }
// })
// console.log("B");

//output will be A,B,data

// fs.writeFileSync('sample.txt','This is a sample text file.'); //synchronous method

// fs.writeFile('sample.txt','This is a sample text file.',(err)=>{ //asynchronous method
//     if(err){
//         console.log(err);}
//     else{
//         console.log('File written successfully');}});

// fs.appendFile("./sample.txt","\nHello world.",(err)=>{
//     if(err){
//         console.log(err);}
//     else{
//         console.log('File modified ');}});


// fs.unlink("./sample1.txt",(err)=>{
//     if(err){
//         console.log(err);}
//     else{
//         console.log('File deleted ');}});


////cyrpto module

const crypto = require('crypto');
// const password = "Nisha@2007";
// //same hash code everytime we run the code for the same password
// const hash = crypto.createHash('sha256').update(password).digest('hex');
// console.log(hash);

// //create random 16 bytes of salt and convert it to hex string
// const salt = crypto.randomBytes(16).toString('hex');
// console.log(salt);

// //create hash using salt and password on every run of the code we will get different 
// // hash code for the same password
// const saltedHash = crypto.createHmac('sha256', salt).update(password).digest('hex');
// console.log(saltedHash);

////DNS module
const dns = require('dns');
// dns.lookup('www.google.com', (err, address, family) => {
//     if (err) {
//         console.log(err);}
//         else{
//             console.log(`Address: ${address}, Family: IPv${family}`);}
//         });

// dns.reverse('8 .8.8.8', (err, hostnames) => {
//     if (err) {
//         console.log(err);}
//         else{
//             console.log(`Hostnames: ${hostnames}`);}
//         });

////process module
const process = require('process');
// const data =process.argv
// console.log(data[2]);

// console.log(process.pid);
// cosnole.log(process.platform);
// cosnole.log(process.version);
// console.log(process.cwd());
const data=process.argv
console.log(Number(data[2])+Number(data[3]));
