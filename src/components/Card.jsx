import { Flex, Image } from '@chakra-ui/react';
import Text from './Text.jsx';

export default function Card({ text, value }) {
  return (
    <Flex border="2px solid gray" bg="white" direction="column" mb={4}>
      <Image
        src="/house-7.png"
        minW={{ base: '400px', md: '275px' }}
        minH={{ base: 'auto', md: '275px' }}
        maxW={{ base: '400px', md: '275px' }}
        maxH={{ base: 'auto', md: '275px' }}
        objectFit="cover"
        alt="home image"
      />
      <Flex align="start" justify="start" p={{ base: 4, '2xl': 6 }}>
        <Text color="gray.600" fontWeight="500">
          Telco Colony, Rajgurunagar
        </Text>
        <Text color="gray.600" fontWeight="500">
          8 x 8 m
        </Text>
      </Flex>
    </Flex>
  );
}
