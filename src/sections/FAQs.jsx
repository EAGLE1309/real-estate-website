import { Flex } from '@chakra-ui/react';
import { Text, Heading } from '../components';

export default function FAQs() {
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
        <Heading pb={2} fontWeight="semibold" as="h3">
          FAQs
        </Heading>

        <Text>FAQs</Text>
      </Flex>
    </>
  );
}
