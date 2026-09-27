const express = require("express");
const router = express.Router();

const students = require("../data/students");

// Get all students
router.get("/", (req, res) => {
    res.json(students);
});

// Get student by ID
router.get("/:id", (req, res) => {
    const student = students.find(
        (student) => student.id === parseInt(req.params.id)
    );

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

// Add a new student
router.post("/", (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

// Update a student
router.put("/:id", (req, res) => {
    const student = students.find(
        (student) => student.id === parseInt(req.params.id)
    );

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;
    student.course = req.body.course || student.course;

    res.json(student);
});

// Delete a student
router.delete("/:id", (req, res) => {
    const index = students.findIndex(
        (student) => student.id === parseInt(req.params.id)
    );

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    const deletedStudent = students.splice(index, 1);

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent[0]
    });
});

module.exports = router;