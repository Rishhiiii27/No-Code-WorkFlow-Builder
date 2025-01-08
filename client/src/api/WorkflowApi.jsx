import axios from 'axios';

export const saveWorkflow = async (workflow) => {
  try {
    await axios.post('http://localhost:5000/api/workflows', workflow);
    console.log('Workflow saved successfully');
  } catch (error) {
    console.error('Error saving workflow:', error);
  }
};
