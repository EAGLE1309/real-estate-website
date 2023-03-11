import { Flex, Grid, Image, Icon } from '@chakra-ui/react';
import Text from './Text.jsx';
import Button from './Button.jsx';
import Heading from './Heading.jsx';
import {
  IoLocationSharp,
  IoBedSharp,
  IoExpandSharp,
  IoScanSharp
} from 'react-icons/io5';

export default function Card({ image, address, bhk, dimensions, area, price }) {
  return (
    <Flex bg="white" direction="column" mb={4}>
      <Image
        src={image}
        minW={{ base: 'calc(100vw - 3rem)', md: '100%' }}
        minH={{ base: 'calc(100vw - 6rem)', md: '325px' }}
        maxW={{ base: 'calc(100vw - 3rem)', md: '100%' }}
        maxH={{ base: 'calc(100vw - 8rem)', md: '325px' }}
        objectFit="cover"
        alt="home image"
      />
      <Flex
        direction="column"
        align="start"
        justify="start"
        p={{ base: 6, md: 8, '2xl': 10 }}>
        <Flex mb={{ base: 4, md: 7 }} wrap="wrap" align="start" justify="start">
          <InfoText
            mb={{ base: 3, lg: 5 }}
            flexBasis="100%"
            icon={IoLocationSharp}>
            {address}
          </InfoText>
          <InfoText mr={{ base: 4, lg: 6 }} icon={IoBedSharp}>
            {bhk + ' BHK'}
          </InfoText>
          <InfoText mr={{ base: 4, lg: 6 }} icon={IoScanSharp}>
            {dimensions}
          </InfoText>
          <InfoText icon={IoExpandSharp}>{area}</InfoText>
        </Flex>
        <Grid
          gap={{ md: 6 }}
          w="100%"
          placeItems="center"
          templateColumns="repeat(2, 1fr)">
          <Button whiteSpace="nowrap" w="100%">
            Book now
          </Button>
          <Heading as="h4" fontWeight="semibold">
            {price}
          </Heading>
        </Grid>
      </Flex>
    </Flex>
  );
}

const InfoText = (props) => {
  return (
    <Flex {...props} direction="row" align="center">
      <Icon as={props.icon} mb={'0.1rem'} mr={1.5} />
      <Text
        fontSize={{ base: '14px', md: 'lg', '2xl': 'xl' }}
        whiteSpace="nowrap"
        color="gray.600"
        fontWeight="500">
        {props.children}
      </Text>
    </Flex>
  );
};
