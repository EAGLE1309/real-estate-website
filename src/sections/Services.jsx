import { chakra, Flex, Grid, Image, Icon } from '@chakra-ui/react';
import { Text, Heading, Button } from '../components';

import { IoPlayCircleSharp } from 'react-icons/io5';

export default function Services() {
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
        pos="relative"
        gap={{ base: 8, md: 12 }}
        justify="space-between"
        direction={{ base: 'column', md: 'row-reverse' }}
        align="start">
        <Flex align="start" direction="column" w={{ base: "100%", lg: "90%" }}>
          <Flex
            alignSelf="start"
            pb={{ base: 2, md: 4, lg: 6 }}
            direction="row"
            align="center">
            <chakra.span
              mr={2}
              w={{ base: 8, md: 10, lg: 12 }}
              h={'1.25px'}
              bg="gray.800"
            />
            <Text>OUR SERVICES</Text>
          </Flex>
          <Heading alignSelf="start" mb={4} fontWeight="semibold" as="h3">
            Comfort is our <br />
            Top Priority for you
          </Heading>

          <Text mb={{ base: 4, lg: 6, xl: 8 }}>
            Insightful consumer resources tailored towards finding the perfect
            property
          </Text>

          <Grid
            rowGap={{ base: 2, md: 4 }}
            gap={{ md: 6 }}
            mb={{ base: 5, lg: 7, xl: 9 }}
            w="100%"
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
            <Bullet>Premium national marketing</Bullet>
            <Bullet>Managed viewings</Bullet>
            <Bullet>Free, no obligation valuations</Bullet>
            <Bullet>Local area knowledge</Bullet>
          </Grid>

          <Button>See more</Button>
        </Flex>

        <Flex pos="relative" align="start" gap={'0.75rem'} w="100%">
          <chakra.span
            pos="absolute"
            h="65px"
            w="65px"
            bg="whiteAlpha.800"
            borderRadius="50%"
            top="50%"
            right="calc(40% - 0.375rem)"
            cursor="pointer"
            transform="translate(50%,-50%)">
            <Icon
              color="blue.500"
              opacity="0.8"
              as={IoPlayCircleSharp}
              fontSize="5xl"
              pos="absolute"
              top="50%"
              right="50%"
              cursor="pointer"
              transform="translate(50%,-50%)"
            />
          </chakra.span>

          <Image
            w="60%"
            alt="services image"
            src="/house-2.png"
            minH={{ base: 'calc(100vw - 6rem)', md: '375px', lg: "425px", xl: "475px" }}
            maxH={{ base: 'calc(100vw - 8rem)', md: '375px', lg: "425px", xl: "475px" }}
            objectFit="cover"
          />
          <Image
            alt="services image"
            src="/house-1.png"
            mt={{ base: -6, md: -8 }}
            w="calc(40% - 0.75rem)"
            minH={{ base: 'calc(100vw - 6rem)', md: '375px', lg: "425px", xl: "475px" }}
            maxW={{ base: 'calc(100vw - 3rem)', md: '100%' }}
            maxH={{ base: 'calc(100vw - 8rem)', md: '375px', lg: "425px", xl: "475px" }}
            objectFit="cover"
          />
        </Flex>
      </Flex>
    </>
  );
}

const Bullet = ({ children }) => {
  return (
    <Flex align="baseline" gap={4} w="100%" whiteSpace="nowrap">
      <Text transform="scale(1.75)" color="blue.500">
        •
      </Text>
      <Text>{children}</Text>
    </Flex>
  );
};
