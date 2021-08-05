import StudentData from '../models/student.js';
export const getStudent= async (req,res)=>{
     try {
        const allStudents=await StudentData.find();
        res.status(200).json(allStudents);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
    //res.send("HI");
}

export const createStudent=async (req,res)=>{
    const student=req.body;
    const newStudent=new StudentData(student);
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const deleteStudent=async (req,res)=>{
    const id=req.params.id;
    
    try {
        await StudentData.findByIdAndRemove(id).exec();
        res.send("successfully deleted!!")
    } catch (error) {
        console.log(error);
    }
}