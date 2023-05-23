import {
  chakra,
  Flex,
  Icon,
  UnorderedList,
  ListItem,
  useDisclosure
} from '@chakra-ui/react';
import Logo from '../Logo';
import Text from '../Text';
import Link from '../Link';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import Modal from '../Modal';

export default function Footer() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal
        closeBtnClick={onClose}
        isOpen={isOpen}
        onClose={onClose}
        noFooter
        title="Credits and Attributions">
        <UnorderedList
          fontSize={{ base: '14px', md: 'lg', lg: 'xl', '2xl': '2xl' }}
          pb={6}>
          <ListItem>
            Images credit: <Link href="https://unsplash.com">Unsplash</Link>
          </ListItem>
          <ListItem>
            Fake addresses (used in popular residence section) credit:{' '}
            <Link href="https://www.fakepersongenerator.com/random-address">
              Fake Person Generator - Random Address
            </Link>
          </ListItem>
          <ListItem>
            Fake Names (used in feedbacks section) credit:{' '}
            <Link href="https://www.fakenamegenerator.com/gen-male-us-us.php">
              Fake Name Generator
            </Link>
          </ListItem>
          <ListItem>
            Ui Inspiration:{' '}
            <Link href="https://dribbble.com/shots/16972523-Serumah-Real-Estate-Market-Landing-Page">
              Real Estate Website UI - Dribbble
            </Link>
          </ListItem>
          <ListItem>
            Logo: <Link href="https://logoipsum.com/">Logoipsum</Link>
          </ListItem>
          <ListItem>
            Content (Reviews, Descriptions, Quotes, etc):{' '}
            <Link href="https://writerly.ai">Writerly</Link> and{' '}
            <Link href="https://rytr.me">Rytr</Link>
          </ListItem>
        </UnorderedList>
        <Text pb={3}>
          I tried my best to give credits and attributions to nearly every tool
          or website I have uses in this project! I hope I covered everything.
          Thank you! ❣️ - Eagle
        </Text>
      </Modal>
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

        <Flex direction="column" align="center" w="100%">
          <Flex pb={6} align="center" w="100%">
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
          <Flex
            borderTop="1.25px solid"
            borderColor="blackAlpha.300"
            w="100%"
            align="center"
            justify="center"
            pt={6}>
            <Text pr={6} textAlign="center">
              Made with ❣️ by Eagle
            </Text>
            <Text
              cursor="pointer"
              fontWeight="semibold"
              textDecoration="underline"
              _active={{
                color: 'gray.500'
              }}
              onClick={onOpen}
              textAlign="center">
              Credits
            </Text>
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
