import { Text } from '@chakra-ui/react';

export default function CustomText(props) {
  const fs = { base: '14px', md: 'lg', lg: 'xl', '2xl': '2xl' };
  return (
    <Text
      {...props}
      as="p"
      lineHeight={props.lineHeight || '1.55'}
      fontWeight={props.fontWeight || 'normal'}
      fontSize={props.fontSize || fs}
      color={props.color || 'black'}>
      {props.children}
    </Text>
  );
}
