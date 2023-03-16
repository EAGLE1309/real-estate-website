import { chakra, Flex, Grid, Icon } from '@chakra-ui/react';
import { Text, Heading, Card } from '../components';
import { FaQuoteLeft } from 'react-icons/fa';

const estates = [
  {
    image: 'house-2.png',
    address: '3865 Southern Avenue, Weldon',
    bhk: 4,
    dimensions: '10x10 m',
    area: '1800 m²',
    price: '$250,000'
  },
  {
    image: 'house-3.png',
    address: '1823 Polk Street, Tucson',
    bhk: 5,
    dimensions: '14x14 m',
    area: '1600 m²',
    price: '$300,000'
  },
  {
    image: 'house-4.png',
    address: '2977 Henry Ford Avenue, Tulsa',
    bhk: 3,
    dimensions: '12x12 m',
    area: '2000 m²',
    price: '$180,000'
  }
];

export default function Popular() {
  const sectionGap = { base: 16, md: 24, lg: 28 };

  return (
    <Flex
      _after={{
        content: "''",
        position: 'absolute',
        top: '50%',
        width: '150%',
        height: '5000px',
        bg: 'gray.800',
        zIndex: '-1'
      }}
      position="relative"
      w="100%"
      direction="column"
      align="center">
      <Flex pb={sectionGap} w="100%" direction="column" align="start">
        <Flex pb={{ base: 2, md: 4, lg: 6 }} direction="row" align="center">
          <chakra.span
            mr={2}
            w={{ base: 8, md: 10, lg: 12 }}
            h={'1.25px'}
            bg="gray.800"
          />
          <Text>POPULAR</Text>
        </Flex>
        <Heading pb={6} fontWeight="semibold" as="h3">
          Our Popular Residence
        </Heading>

        <Grid
          w="100%"
          pb={sectionGap}
          templateColumns={'repeat(3, 1fr)'}
          className="no__overflow-scroll"
          gap={{ base: 6, md: 12, lg: 10 }}
          overflow="scroll"
          position="relative">
          {estates &&
            estates.map((data) => (
              <Card
                image={data.image}
                address={data.address}
                bhk={data.bhk}
                dimensions={data.dimensions}
                area={data.area}
                price={data.price}
              />
            ))}
        </Grid>
        <Flex
          w="100%"
          gap={12}
          direction={{ base: 'column', md: 'row' }}
          align="start"
          justify="space-between">
          <Flex whiteSpace="nowrap" mb={8} direction="column">
            <Text fontSize={{ base: 'md', md: '2xl', xl: '3xl' }} color="white">
              John Doe
            </Text>
            <Text
              color="whiteAlpha.500"
              fontWeight="400"
              fontSize={{ base: 'xs', md: 'lg', xl: 'xl' }}>
              Founder
            </Text>
          </Flex>

          <Flex direction="row">
            <Icon
              fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}
              mr={{ base: 3 }}
              color="whiteAlpha.400"
              as={FaQuoteLeft}
            />
            <Text
              mt={2}
              fontSize={{ base: 'md', md: '2xl', xl: '3xl' }}
              color="white">
              Our business is one of close relationships and we are very
              fortunate to be able to share so many positive real estate
              experiences with our clients.
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
