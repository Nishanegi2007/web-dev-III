const express=require('express');
const {
        getStudents,
        getStudentByID,
        createStudent,
        updateStudent,
        deleteStudent
    }=require('../controller/student.controller');
const router=express.Router();

router.get('/api/students',getStudents);

router.get('/api/students/:id',getStudentByID);

router.post('/api/students',createStudent);

router.put('/api/students/:id',updateStudent);

router.delete('/api/students/:id',deleteStudent);

module.exports=router;