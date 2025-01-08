const express = require('express');
const router = express.Router();
const Workflow = require('../models/Workflow');

// Save a new workflow
router.post('/', async (req, res) => {
  try {
    const newWorkflow = new Workflow(req.body);
    const savedWorkflow = await newWorkflow.save();
    res.status(201).json(savedWorkflow);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all workflows
router.get('/', async (req, res) => {
  try {
    const workflows = await Workflow.find();
    res.status(200).json(workflows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
