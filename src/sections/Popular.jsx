import { chakra, Flex, Grid } from '@chakra-ui/react';
import { Text, Heading, Card } from '../components';

export default function Popular() {
  const sectionGap = { base: 16, md: 24, lg: 28 };

  return (
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
        gap={6}
        overflow="scroll"
        templateColumns={{ base: 'repeat(3, 1fr)' }}>
        <Card />
        <Card />
        <Card />
      </Grid>
    </Flex>
  );
}
