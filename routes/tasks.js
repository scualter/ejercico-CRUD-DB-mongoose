const express = require("express");
const router = express.Router();
const Task = require("../models/task");


router.post("/create", async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.get("/id/:_id", async (req, res) => {
  try {
    const task = await Task.findById(req.params._id);
    res.json(task);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.put("/markAsCompleted/:_id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params._id,
      { completed: true },
      { new: true }
    );
    res.json(task);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.put("/id/:_id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params._id,
      { title: req.body.title },
      { new: true }
    );

    res.json(updatedTask);

  } catch (error) {
    res.status(500).json(error);
  }
});


router.delete("/id/:_id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params._id);
    res.json({ message: "Tarea eliminada" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
