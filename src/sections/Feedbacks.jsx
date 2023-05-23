import { chakra, Flex } from '@chakra-ui/react';
import { Text, Heading, Feedback } from '../components';
import { Carousel } from 'react-responsive-carousel';

const feedbacks = [
  {
    name: 'Jose Kurama',
    image: 'Business-man-1.png',
    occupation: 'Lead Designer at Infosys',
    comment: `I recently worked with Real Estate Company to secure a home that was perfect for my budget and needs. The team at Real Estate Company was professional, efficient, and highly knowledgeable about the area in which we were looking.`
  },
  {
    name: 'John Doe',
    image: 'business-man-2.png',
    occupation: 'Lead Developer at Google',
    comment: `Realtor has been a great partner for us in our real estate business. The team is very knowledgeable, and provides exceptional service and support. They have kept us up to date with the latest market trends and have helped us make well informed decisions when it comes to our investments.`
  },
  {
    name: 'Robert Moreno',
    image: 'business-man-3.png',
    occupation: 'Software Designer at Microsoft',
    comment: `I recently used the services of Realtor to help me find a new home and I couldn't be happier! They were extremely knowledgeable, professional and helpful. Their expertise in the local market helped me to quickly find a property that met all my needs.`
  },
  {
    name: 'James Summers',
    image: 'business-man-4.png',
    occupation: 'Lead Designer at Microsoft',
    comment: `I recently had the pleasure of working with Realtor and they were absolutely amazing. They took the time to understand my needs and provided me with a tailored service that went above and beyond my expectations.`
  },
  {
    name: 'Charles Clayton',
    image: 'business-man-5.png',
    occupation: 'Software Engineer at Google',
    comment: `I recently used Realtor to find a new home and it was an absolute pleasure. The team was incredibly knowledgeable and helpful, always available for questions and finding properties that suited my needs.`
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
        id="feedbacks"
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
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={30}
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            className="carousel">
            {feedbacks &&
              feedbacks.map((data) => (
                <Flex w="100%">
                  <Feedback
                    name={data.name}
                    image={data.image}
                    comment={data.comment}
                    occupation={data.occupation}
                  />
                </Flex>
              ))}
          </Carousel>
        </Flex>
      </Flex>
    </>
  );
}
