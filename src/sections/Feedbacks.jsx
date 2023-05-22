import { chakra, Flex } from '@chakra-ui/react';
import { Text, Heading, Feedback } from '../components';
import { Carousel } from 'react-responsive-carousel';

const feedbacks = [
  {
    image: 'Business-man-1.png',
    comment: `I recently worked with Real Estate Company to secure a home that was perfect for my budget and needs. The team at Real Estate Company was professional, efficient, and highly knowledgeable about the area in which we were looking.`
  },
  {
    image: 'Business-man-1.png',
    comment: `I recently worked with Real Estate Company to secure a home that was perfect for my budget and needs. The team at Real Estate Company was professional, efficient, and highly knowledgeable about the area in which we were looking.`
  },
  {
    image: 'Business-man-1.png',
    comment: `I recently worked with Real Estate Company to secure a home that was perfect for my budget and needs. The team at Real Estate Company was professional, efficient, and highly knowledgeable about the area in which we were looking.`
  },
  {
    image: 'Business-man-1.png',
    comment: `I recently worked with Real Estate Company to secure a home that was perfect for my budget and needs. The team at Real Estate Company was professional, efficient, and highly knowledgeable about the area in which we were looking.`
  },
  {
    image: 'Business-man-1.png',
    comment: `I recently worked with Real Estate Company to secure a home that was perfect for my budget and needs. The team at Real Estate Company was professional, efficient, and highly knowledgeable about the area in which we were looking.`
  }
];

export default function Feedbacks() {
  const sectionGap = {
    base: '16 !important',
    md: '24 !important',
    lg: '28 !important'
  };

  return (
    <>
      <Flex
        mb={sectionGap}
        w="100%"
        _after={{
          content: "''",
          position: 'absolute',
          top: { base: '-10%' },
          width: '200%',
          height: { base: 'calc(100% + 20%)' },
          bg: 'gray.800',
          zIndex: '-1'
        }}
        position="relative"
        direction="column"
        align="center">
        <Flex
          py={{ md: 2, lg: 6, xl: 8 }}
          w="100%"
          align="start"
          direction="column">
          <Flex mb={{ base: 8, md: 10 }} direction="column">
            <Flex
              alignSelf="start"
              pb={{ base: 2, md: 4, lg: 6 }}
              direction="row"
              align="center">
              <chakra.span
                mr={2}
                w={{ base: 8, md: 10, lg: 12 }}
                h={'1.12px'}
                bg="gray.50"
              />
              <Text color="gray.50">FEEDBACKS</Text>
            </Flex>
            <Heading
              color="gray.50"
              align="start"
              pb={4}
              fontWeight="600"
              as="h3">
              What Our Customers <br />
              Say About Us
            </Heading>
          </Flex>
          <Carousel
            infiniteLoop
            autoPlay
            interval={5000}
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            className="carousel">
            {feedbacks &&
              feedbacks.map((data) => (
                <Flex w="100%">
                  <Feedback
                    name="Jose Kurama"
                    image={data.image}
                    comment={data.comment}
                  />
                </Flex>
              ))}
          </Carousel>
        </Flex>
      </Flex>
    </>
  );
}
