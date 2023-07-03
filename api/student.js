const express = require('express');//Imports the Express module
const router = express.Router();//Creates a router object
const { Student, Campus } = require('../db/models');//Imports the Student and Campus models 

//Find Student by ID
router.get('/:id', async (req, res, next) => {
    try {
        const studentId = req.params.id;

        const student = await Student.findByPk(studentId, { include: Campus });
// Find a student by the provided ID and include the associated campus

        if (!student) {
//If the student is not found, send a response 
//with status code 404 and the error message (Student not found)
            return res.status(404).json({ error: 'Student not found' });
        }

// Send a response with the retrieved student
        res.json(student);
    } catch (error) {

//Handeling any Errors that Occur
        next(error);
    }
});

//Deletion of Student
router.delete('/:id', async (req, res, next) => {
    try {
        const studentId = req.params.id;

 // Delete the student with the provided ID from the database
        await Student.destroy({ where: { id: studentId } });

 //Send a response message (Student removed successfully) 
 //indicating task completion
        res.json({ message: 'Student removed successfully' });
    } catch (error) {

    //Handeling any Errors that occur
        next(error);
    }
});

//Create new Student
router.post('/', async (req, res, next) => {
    try {
        const { firstName, lastName, email, imageUrl, gpa, campusId } = req.body;
      
  // Create a new student using the provided data      
        const newStudent = await Student.create({ firstName, lastName, email, imageUrl, gpa, campusId });

// Send a response with status code 201 and the newly created student    
        res.status(201).json(newStudent);
    } catch (error) {
    //Handeling any Errors that occur
        next(error);
    }
});

//Code for Student router Update 

router.put('/:id', async (req, res, next) => {
  try {
    const studentId = req.params.id;
    const { firstName, lastName, imageUrl, gpa, campusId, name, address, description } = req.body;

    // Find the student by ID 
//[Modified MUST INCLUDE CAMPUS INFO-BUT Still trying to update campus info]
    const student = await Student.findByPk(studentId, { include: Campus });

    if (!student) {
// If the student is not found, send a response with status code 404 
//And the error message (student not found)
      return res.status(404).json({ error: 'Student not found' });
    }

    // Update the campus properties with the provided data
    student.firstName = firstName;
    student.lastName = lastName;
    student.imageUrl = imageUrl;
    student.gpa = gpa;
  
     // Check if campusId is provided
     if (campusId) {
        const campus = await Campus.findByPk(campusId);
        
        if (!campus) {
          // If the campus is not found, send a response with status code 404 and the error message
          return res.status(404).json({ error: 'Campus not found' });
        }
        //student.campusId = campusId; not necessary
        // Update the campus properties with the provided data
        campus.name = name;
        //campus.imageUrl = imageUrl; (conflicts with student imageUrl)
        campus.address = address;
        campus.description = description;
        // Save the updated campus to the database
        await campus.save();
      }

    // Save the updated campus to the database
    await student.save();

    // Send a response with the updated student
    res.json(student);
  } catch (error) {
    // Handling any errors that occur
    next(error);
  }
});  



// Export the router object 
module.exports = router;
