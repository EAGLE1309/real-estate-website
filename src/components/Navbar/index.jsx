import { Flex, Text, Icon, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';
import Logo from '../Logo.jsx';
import HamburgerMenu from './HamburgerMenu.jsx';
import { IoChevronDownSharp, IoLanguageOutline } from 'react-icons/io5';

const navItems = [
  {
    title: 'Home',
    href: '#'
  },
  {
    title: 'Features',
    href: '#features'
  },
  {
    title: 'About',
    href: '#about'
  },
  {
    title: 'Agents',
    href: '#agents'
  }
];

export default function Navbar() {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <>
      <Flex
        className="navbar noselect"
        minW={'100%'}
        justify="center"
        bg="white">
        <Flex
          as="header"
          w={'100%'}
          position="sticky"
          color={'white'}
          minH={'50px'}
          shadow="initial"
          justify="center"
          py={{ base: 4 }}
          align={'center'}
          gap={{ base: 8, md: 10 }}
          px={{ base: 6, md: 12, lg: 10, xl: 16 }}
          maxW="1440px">
          <Flex flex={{ base: 1 }} justify={{ base: 'start', md: 'start' }}>
            <Flex
              justify="start"
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

          {useBreakpointValue({
            base: (
              <Flex direction="row" align="center">
                <Icon
                  fontSize="2xl"
                  mx={{ base: 6, md: 12, lg: 6 }}
                  as={IoLanguageOutline}
                  color="gray.800"
                />
                <HamburgerMenu
                  isOpen={isOpen}
                  onClick={() => toggleOpen(!isOpen)}
                />
              </Flex>
            ),
            md: <DekstopNav />
          })}
          <MobileNav onClick={() => toggleOpen(!isOpen)} isOpen={isOpen} />
        </Flex>
      </Flex>
    </>
  );
}

function DekstopNav() {
  return (
    <>
      <Flex
        align="center"
        w="100%"
        pl={2}
        justify={'flex-start'}
        display={{ base: 'none', md: 'flex' }}
        gap={12}>
        {navItems &&
          navItems.map((data, i) => (
            <a href={data.href} passHref key={i}>
              <Text
                fontWeight="500"
                cursor="pointer"
                color="gray.800"
                _hover={{
                  color: 'gray.600'
                }}
                transition=".225s"
                key={i}>
                {data.title}
              </Text>
            </a>
          ))}
        <Flex align="baseline" gap={12} w="100%" justify="flex-end">
          <Flex align="center">
            <Text
              fontWeight="500"
              cursor="pointer"
              color="gray.800"
              _hover={{
                color: 'gray.600'
              }}
              transition=".225s">
              Eng
            </Text>
            <Icon ml={1.5} mt={0.5} color="gray.800" as={IoChevronDownSharp} />
          </Flex>
          <Text
            fontWeight="500"
            cursor="pointer"
            color="white"
            bg="gray.800"
            className="noselect"
            fontSize={{ base: '16px', xl: '18px' }}
            py={3}
            px={8}
            _hover={{
              bg: 'gray.700'
            }}
            _active={{
              transform: 'scale(0.95)'
            }}
            transition=".2s">
            Contact
          </Text>
        </Flex>
      </Flex>
    </>
  );
}

function MobileNav({ isOpen, onClick }) {
  return (
    <>
      <Flex
        transition={`.3s ${!isOpen ? '0.75s' : '0.1s'}`}
        position="absolute"
        top="0"
        left="0"
        opacity={isOpen ? 1 : 0}
        w={isOpen ? '100%' : 0}
        mt={'52px'}
        h="100vh"
        zIndex="5"
        bg="white"
        justify="flex-start"
        display={{ base: 'flex', lg: 'none' }}
        px={{ base: 6, md: 12, lg: 6 }}>
        <Flex mt={16} gap={1} direction="column" w="100%">
          {navItems &&
            navItems.map((data, i) => (
              <Flex
                overflow="hidden"
                w="100%"
                as="a"
                key={i}
                p={2}
                borderRadius={10}
                transition="0.25s"
                onClick={onClick}
                href={data.href}>
                <Text
                  w="100%"
                  color="gray.800"
                  opacity={isOpen ? 1 : 0}
                  transform={isOpen ? '' : 'translateY(110%)'}
                  transition={`0.25s 0.${i + 1}s`}
                  _hover={{
                    color: 'gray.600'
                  }}
                  fontSize="lg"
                  fontWeight="semibold">
                  {data.title}
                </Text>
              </Flex>
            ))}
          <Flex
            p={2}
            align="baseline"
            direction="column"
            w="100%"
            justify="flex-end">
            <Flex
              opacity={isOpen ? 1 : 0}
              transform={isOpen ? '' : 'translateY(110%)'}
              transition={`0.25s 0.${4 + 1}s`}>
              <Text
                fontWeight="500"
                cursor="pointer"
                color="white"
                bg="gray.800"
                className="noselect"
                fontSize={{ base: '16px', xl: '18px' }}
                py={2}
                px={8}
                _hover={{
                  bg: 'gray.700'
                }}
                _active={{
                  transform: 'scale(0.95)'
                }}
                transition=".2s">
                Contact
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
