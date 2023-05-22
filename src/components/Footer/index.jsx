import { chakra, Flex, Icon } from '@chakra-ui/react';
import Logo from '../Logo';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <Flex
        borderTop="1.25px solid"
        borderColor="blackAlpha.300"
        w="100%"
        py={6}
        position="relative">
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

        <Flex align="center" w="100%">
          <Flex>
            <Flex
              color="gray.800"
              fontWeight="bold"
              transition=".3s"
              cursor="pointer"
              _hover={{
                color: 'gray.600'
              }}>
              <Logo height={24} />
            </Flex>
          </Flex>
          <Flex w="100%" justify="flex-end" gap={4}>
            <SocialsIcon icon={FaLinkedin} />
            <SocialsIcon icon={FaTwitter} />
            <SocialsIcon icon={FaFacebook} />
            <SocialsIcon icon={FaInstagram} />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

function SocialsIcon({ icon }) {
  return (
    <Icon
      transition=".2s"
      _hover={{
        transform: 'translateY(-10%)'
      }}
      cursor="pointer"
      as={icon}
      color="gray.800"
      fontSize="3xl"
      p={1.5}
      bg="blackAlpha.100"
      borderRadius="6px"
    />
  );
}
