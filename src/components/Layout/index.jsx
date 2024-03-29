import { Box, Container, VStack } from '@chakra-ui/react';

/*========[---]========*
  A custom layout component
  For Responsive Design!
*========[---]========*/

export default function Layout({ children, pt, px }) {
  return (
    <>
      <Box
        pt={pt ? pt : { base: '140px', lg: '200px' }}
        position="static"
        overflow="hidden">
        <Container
          d="flex"
          px={px ? px : { base: 6, md: 12, lg: 10, xl: 16, '2xl': 0 }}
          maxW="1440px"
          h="100%"
          centerContent>
          <VStack alignItems="stretch" flex={1} w="full" spacing={16}>
            <VStack as="main" flex={1} w="full" spacing={{ base: 8 }}>
              {children}
            </VStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
}

/*========[---]========*

  CUSTOM TEMPLATE FOR @EAGLE1309
  INSTAGRAM: @eagledev_
  TWITTER: @eagledev_
  WEB: eagledev.ml
  
*========[---]========*/
