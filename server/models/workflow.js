const mongoose = require('mongoose');

const WorkflowSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nodes: [
    {
      id: { type: String, required: true },
      type: { type: String, required: true },
      content: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('Workflow', WorkflowSchema);
