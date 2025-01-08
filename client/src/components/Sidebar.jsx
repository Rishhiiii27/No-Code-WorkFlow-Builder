import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useWorkflowContext } from '../context/WorkflowContext';

const Sidebar = () => {
  const { dispatch } = useWorkflowContext();

  const addNode = (type, content) => {
    const id = Date.now().toString();
    dispatch({ type: 'ADD_NODE', payload: { id, type, content } });
  };

  return (
    <Box p={4} borderRight="1px solid #ccc">
      <Button onClick={() => addNode('trigger', 'Slack Message')}>Add Trigger</Button>
      <Button onClick={() => addNode('action', 'Send Email')}>Add Action</Button>
    </Box>
  );
};

export default Sidebar;
