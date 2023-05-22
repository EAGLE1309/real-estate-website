import { chakra, Flex, Grid } from '@chakra-ui/react';
import { Text, Heading, Button, BlogCard } from '../components';

const blogposts = [
  {
    image: '/house-7.png',
    title: 'Understanding the Impact of Interest Rates on Home Prices & Trends',
    date: '27th November, 2022'
  },
  {
    image: '/house-8.png',
    title: 'Latest Housing Market Trends and Statistics, based on 2023 studies',
    date: '2nd February, 2023'
  },
  {
    image: '/house-10.png',
    title:
      'Exploring Different Types of Mortgages for Homebuyers in Urban America',
    date: '15th March, 2023'
  }
];

export default function BlogPosts() {
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
        <Flex
          direction={{ base: 'column' }}
          align={{ base: 'start' }}
          mb={{ base: 8, md: 8 }}>
          <Flex direction="column">
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
              <Text>OUR BLOGS</Text>
            </Flex>
            <Heading align="start" pb={4} fontWeight="semibold" as="h3">
              Latest Housing <br />
              Information
            </Heading>
          </Flex>
          <Text mb={{ base: 6 }}>
            Get all the information you need to make informed decisions{' '}
            <chakra.br display={{ base: 'none', md: 'block', lg: 'none' }} />{' '}
            about your real estate investments.
          </Text>
          <Button>See all articles</Button>
        </Flex>

        <Grid
          w="100%"
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
          className="no__overflow-scroll"
          gap={{ base: 10, md: 8, lg: 10 }}
          overflow={{ base: 'scroll', lg: 'hidden' }}
          position="relative">
          {blogposts &&
            blogposts.map((data) => (
              <BlogCard
                image={data.image}
                title={data.title}
                date={data.date}
              />
            ))}
        </Grid>
      </Flex>
    </>
  );
}
