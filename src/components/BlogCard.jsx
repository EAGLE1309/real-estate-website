import { Flex, Image } from '@chakra-ui/react';
import Text from './Text.jsx';
import Button from './Button.jsx';

export default function BlogCard({ image, date, title }) {
  return (
    <Flex bg="white" direction="column">
      <Image
        src={image}
        minW={{ base: 'calc(100vw - 3rem)', md: '100%' }}
        minH={{ base: 'calc(100vw - 6rem)', md: '325px' }}
        maxW={{ base: 'calc(100vw - 3rem)', md: '100%' }}
        maxH={{ base: 'calc(100vw - 8rem)', md: '325px' }}
        objectFit="cover"
        alt="blog post image"
      />
      <Flex
        direction="column"
        align="start"
        justify="start"
        py={{ base: 4, md: 4, '2xl': 10 }}>
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
            color="gray.700"
            fontSize={{
              base: '12px',
              md: 'md',
              lg: 'lg',
              xl: 'xl',
              '2xl': '2xl'
            }}>
            {date}
          </Text>
        </Flex>
        <Text
          noOfLines={2}
          mt={{ base: 3, md: 4 }}
          mb={{ base: 4, md: 5 }}
          fontWeight="semibold">
          {title}
        </Text>
        <Button varient="secondary">Know More</Button>
      </Flex>
    </Flex>
  );
}
