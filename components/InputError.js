import {Box, Text} from '@chakra-ui/layout';
import React from 'react';
import PropTypes from 'prop-types';


const InputError = ({children, isError = false}) => {
  return (
    <Box marginTop={'5px'} display={'block'}>
      <Text fontSize="md" as="em" color={isError ? 'black.900' : 'red.500'}>
        {children}
      </Text>
    </Box>
  );
};

InputError.propTypes = {
  children: PropTypes.object,
  isError: PropTypes.bool,
};

export default InputError;
