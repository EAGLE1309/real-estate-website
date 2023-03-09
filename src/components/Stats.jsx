import { Flex } from '@chakra-ui/react';
import Text from './Text.jsx';

export default function Stats({ text, value }) {
  return (
    <Flex direction="column" mb={4}>
      <Flex direction="row" mb={0.5}>
        <Text
          fontWeight="semibold"
          fontSize={{ base: 'xl', md: '2xl', '2xl': '3xl' }}>
          {value}
        </Text>
        <Text
          fontWeight="semibold"
          color="blue.500"
          fontSize={{ base: 'xl', lg: '2xl', '2xl': '3xl' }}>
          +
        </Text>
      </Flex>
      <Text
        fontSize={{ base: '14px', md: '12px' }}
        color="gray.600"
        fontWeight="500">
        {text}
      </Text>
    </Flex>
  );
}
