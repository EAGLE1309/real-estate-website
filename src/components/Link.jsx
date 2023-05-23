import { Text } from '@chakra-ui/react';

export default function CustomLink(props) {
  const fs = { base: '14px', md: 'lg', lg: 'xl', '2xl': '2xl' };
  return (
    <Text
      {...props}
      as="a"
      href={props.href}
      target={'_blank'}
      rel={'noopener noreferrer'}
      textDecoration="underline"
      lineHeight={props.lineHeight || '1.55'}
      fontWeight={props.fontWeight || 'semibold'}
      fontSize={props.fontSize || fs}
      color={props.color || 'blue.600'}>
      {props.children}
    </Text>
  );
}
