import { Flex, Image } from '@chakra-ui/react';
import Text from './Text.jsx';
import Heading from './Heading.jsx';

export default function Feedback({ image, comment, name }) {
  return (
    <Flex
      w="100%"
      pb={5}
      direction={{ base: 'column', md: 'row' }}
      gap={{ base: 10, md: 14 }}>
      <Image
        src={image}
        minW={{ base: 'calc(100vw - 3rem)', md: '325px' }}
        minH={{ base: 'calc(100vw - 6rem)', md: '325px' }}
        maxW={{ base: 'calc(100vw - 3rem)', md: '325px' }}
        maxH={{ base: 'calc(100vw - 8rem)', md: '325px' }}
        objectFit="cover"
        alt="blog post image"
      />
      <Flex
        direction="column"
        w="100%"
        pr={{ base: 8, md: 0 }}
        mr={{ md: 32, lg: 40, xl: 48 }}
        textAlign="start"
        justify="center">
        <Heading pb={6} as="h3" fontWeight="medium" color="whiteAlpha.900">
          {name}
        </Heading>
        <Text pb={6} color="whiteAlpha.700">
          {comment}
        </Text>

        <Flex
          align="baseline"
          gap={{ base: 2, md: 4 }}
          w="100%"
          whiteSpace="nowrap">
          <Text
            fontSize={{ base: '12px', md: '14px', lg: 'xl', '2xl': '2xl' }}
            transform="scale(1.75)"
            color="blue.500">
            •
          </Text>
          <Text
            fontWeight="medium"
            color="whiteAlpha.900"
            fontSize={{
              base: '12px',
              md: 'md',
              lg: 'lg',
              xl: 'xl',
              '2xl': '2xl'
            }}>
            Lead Designer at Infosys
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
