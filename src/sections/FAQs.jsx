import {
  chakra,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import { Text, Heading, Button } from '../components';

const FAQs = [
  {
    question: 'How long has Realtor been in business?',
    answer: `Realtor has been a trusted name in the real estate industry for over 100 years. The company was founded in 1908 and has since grown to become one of the largest and most respected real estate companies in the United States.`
  },
  {
    question:
      'Does Realtor provide buyers with assistance in finding the right property??',
    answer: `Fortunately, realtors provide buyers with assistance in finding the right property. They can help buyers assess their needs, examine the local market, and narrow down their search to find the perfect home. `
  },
  {
    question:
      'What are the payment and financing options available from Realtor?',
    answer: `Realtor offers a range of payment and financing options to help you purchase a home. Whether you are looking for an upfront cash payment, or a loan with flexible repayment terms, Realtor has options to suit your needs.`
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
        pt={10}
        w="100%"
        pos="relative"
        direction="column"
        align="start"
        id="FAQs">
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
              <Text>QUESTIONS</Text>
            </Flex>
            <Heading align="start" pb={4} fontWeight="semibold" as="h3">
              Frequently Asked <br />
              Questions
            </Heading>
          </Flex>
          <Text mb={{ base: 6 }}>
            Get all the information you need to make informed decisions{' '}
            <chakra.br display={{ base: 'none', md: 'block', lg: 'none' }} />{' '}
            about your real estate investments.
          </Text>
          <Button>See more</Button>
        </Flex>
        <Accordion w="100%" allowMultiple defaultIndex={[0]}>
          {FAQs &&
            FAQs.map((data) => (
              <AccordionItem px="0" border="none">
                <h3>
                  <AccordionButton _focus={{ bg: 'transparent' }} px="0">
                    <Text
                      as="span"
                      flex="1"
                      textAlign="left"
                      my={{ base: 1, md: 4 }}
                      fontWeight="semibold">
                      {data.question}
                    </Text>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel px="0" pb={4}>
                  <Text>{data.answer}</Text>
                </AccordionPanel>
              </AccordionItem>
            ))}
        </Accordion>
      </Flex>
    </>
  );
}
