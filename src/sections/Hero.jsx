import { chakra, Flex, Image } from '@chakra-ui/react';
import { Text, Heading, Button, SearchEstate, Stats } from '../components';

export default function Hero() {
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
        direction="column"
        align="start">
        <chakra.span
          pos="absolute"
          w="100px"
          h="100px"
          bg="blue.500"
          borderRadius="50%"
          filter="auto"
          blur="120px"
        />
        <chakra.span
          pos="absolute"
          bottom={20}
          right="0"
          w="100px"
          h="100px"
          bg="blue.500"
          borderRadius="50%"
          filter="auto"
          blur="120px"
        />
        <chakra.span
          pos="absolute"
          display={{ base: 'none', md: 'block' }}
          bottom={20}
          right={'50%'}
          w="100px"
          h="100px"
          bg="blue.500"
          borderRadius="50%"
          filter="auto"
          blur="120px"
        />
        <Flex
          mt={{ lg: 6 }}
          mb={{ md: 16, lg: 20 }}
          align="start"
          direction={{ base: 'column', lg: 'row' }}
          w="100%">
          <Flex
            mb={{ base: 8, lg: 10, '2xl': 12 }}
            align="start"
            direction="column"
            w="100%">
            <Heading
              pb={4}
              as="h1"
              fontWeight="semibold"
              mb={{ base: 4, lg: 6, '2xl': 8 }}>
              Find Real Estate <br />
              That Suits You.
            </Heading>
            <Text
              maxW={{ md: '95%' }}
              mb={{ base: 10, md: 12, lg: 14, '2xl': 14 }}>
              Our goal is to make real estate simple, transparent, and{' '}
              <chakra.br display={{ base: 'none', md: 'block', lg: 'none' }} />
              accessible and let everyone live in a happy home.
            </Text>
            <Button mb={{ base: 10, lg: 12, '2xl': 14 }}>Get Started</Button>

            <Flex
              gap={{ md: 6, lg: 10 }}
              pt={4}
              direction={{ base: 'column', md: 'row' }}>
              <Stats text="Premium Products" value="1200" />
              <Stats text="Happy Customers" value="4500" />
              <Stats text="Awards Won" value="250" />
            </Flex>
          </Flex>

          <Image
            alt="home image"
            alignSelf="flex-end"
            p={{ md: 10 }}
            mb={{ lg: '160px' }}
            transform={{ base: 'scale(1.5)', md: 'scale(2.5)' }}
            width={{ base: '100%', md: '475px', lg: '505px' }}
            src="/hero-img.png"
            zIndex="-2"
          />
        </Flex>
        <SearchEstate />
      </Flex>
    </>
  );
}
