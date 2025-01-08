import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useWorkflowContext } from '../context/WorkflowContext';

const Canvas = () => {
  const { state } = useWorkflowContext();

  return (
    <Box p={4} bg="#f9f9f9">
      {state.nodes.map((node) => (
        <Box key={node.id} p={4} mb={2} border="1px solid #ccc" borderRadius="md">
          <Text>{node.type.toUpperCase()}: {node.content}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Canvas;
