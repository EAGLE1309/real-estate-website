import { Box } from '@chakra-ui/react';

export default function CustomButton(props) {
  const fs = { base: 'sm', md: 'xl', '2xl': '2xl' };

  return (
    <Box
      {...props}
      className="noselect"
      as={props.as ? props.as : 'a'}
      type={props.as == 'button' ? props.type : undefined}
      target={props.href && props.openInNewTab ? '_blank' : undefined}
      rel={props.href && props.openInNewTab ? 'noopener noreferrer' : undefined}
      lineHeight="1.4"
      cursor="pointer"
      textAlign="center"
      px={props.px ? props.px : { base: 6, md: 7, lg: 10, xl: 12 }}
      py={props.py ? props.py : { base: 2.5, md: 3 }}
      fontWeight="500"
      _hover={{
        color: 'gray.50',
        bg: props.varient == 'secondary' ? 'blue.100' : 'gray.700'
      }}
      _active={{
        transform: 'scale(0.95)'
      }}
      transition=".225s"
      bg={props.varient == 'secondary' ? 'blue.50' : 'gray.800'}
      fontSize={props.fontSize ? props.fontSize : fs}
      color={
        props.color
          ? props.color
          : props.varient == 'secondary'
          ? 'blue.500'
          : 'gray.50'
      }>
      {props.children}
    </Box>
  );
}
