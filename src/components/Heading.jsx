import { Text } from '@chakra-ui/react';

export default function Heading(props) {
  const h1 = { base: '3xl', md: '5xl', '2xl': '6xl' };
  const h2 = { base: '2xl', md: '4xl', '2xl': '5xl' };
  const h3 = { base: 'xl', md: '3xl', '2xl': '4xl' };
  const h4 = { base: 'lg', md: '2xl' };

  return (
    <Text
      {...props}
      as={props.as}
      lineHeight="1.4"
      fontSize={
        props.fontSize
          ? props.fontSize
          : props.as === 'h1'
          ? h1
          : props.as === 'h2'
          ? h2
          : props.as === 'h3'
          ? h3
          : props.as === 'h4'
          ? h4
          : h1
      }
      color={props.color || 'gray.800'}
      fontWeight={props.fontWeight || '650'}
      fontFamily={props.fontFamily}>
      {props.children}
    </Text>
  );
}
