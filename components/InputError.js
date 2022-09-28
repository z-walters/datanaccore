import { Box, Text } from "@chakra-ui/layout";

const InputError = ({ children, isError = false }) => {
  return (
    <Box marginTop={"5px"} display={"block"}>
      <Text fontSize="md" as="em" color={isError ? "black.900" : "red.500"}>
        {children}
      </Text>
    </Box>
  );
};

export default InputError;
