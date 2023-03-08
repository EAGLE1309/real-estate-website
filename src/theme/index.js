import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';

/*========[---]========*
  More in-depth settings 
  of custom theme here!
*========[---]========*/

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  cssVarPrefix: 'your-prefix'
};

export default extendTheme(globalStyles, {
  config,
  fonts: {
    header: '',
    body: 'Poppins, sans-serif'
  }
});

/*========[---]========*

  CUSTOM TEMPLATE FOR @EAGLE1309
  INSTAGRAM: @eagledev_
  TWITTER: @eagledev_
  WEB: eagledev.ml
  
*========[---]========*/
