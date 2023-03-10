import { Flex, InputGroup, Input, InputRightAddon } from '@chakra-ui/react';
import Heading from './Heading.jsx';
import Button from './Button.jsx';
import { IoLocationSharp, IoHomeSharp, IoLogoEuro } from 'react-icons/io5';

export default function SearchEstate() {
  return (
    <Flex
      w="100%"
      position="relative"
      direction="column"
      bg="white"
      className="shadow"
      p={{ base: 6, '2xl': 8 }}>
      <Heading pb={6} fontWeight="semibold" as="h3">
        Explore available properties
      </Heading>
      <Flex align="baseline" direction={{ base: 'column', md: 'row' }} gap={6}>
        <InputComponent placeholder="Location" icon={<IoLocationSharp />} />
        <InputComponent placeholder="Type" icon={<IoHomeSharp />} />
        <InputComponent
          type="number"
          placeholder="Budget"
          icon={<IoLogoEuro />}
        />
        <Button
          fontSize={{ base: '14px', md: 'lg', lg: 'xl', '2xl': '2xl' }}
          w={{ base: '100%', md: 'auto' }}
          py={{ base: 2.5, md: 2 }}
          px={{ base: 4, lg: 6, '2xl': 8 }}>
          Search
        </Button>
      </Flex>
    </Flex>
  );
}

const InputComponent = ({ placeholder, icon, type }) => {
  return (
    <InputGroup>
      <Input
        w="100%"
        outline="none"
        type={type ? type : 'text'}
        border="1px solid"
        borderRight="0"
        borderColor="blackAlpha.50"
        placeholder={placeholder}
        bg="gray.50"
        borderRadius="0"
        _active={{ border: 'none' }}
        _hover={{ border: 'none' }}
        _focusVisible={{ border: 'none' }}
        py={{ base: 2, md: 4, '2xl': 6 }}
        px={{ base: 4, '2xl': 6 }}
        fontWeight="medium"
        fontSize={{ base: '14px', md: 'lg', lg: 'xl', '2xl': 'xl' }}
        _placeholder={{
          fontSize: { base: '14px', md: 'lg', lg: 'xl', '2xl': 'xl' }
        }}
      />
      <InputRightAddon
        bg="gray.50"
        borderRadius="0"
        border="1px solid"
        borderColor="blackAlpha.50"
        borderLeft="0"
        py={{ base: 2, md: 4, '2xl': 6 }}
        children={icon}
      />
    </InputGroup>
  );
};
