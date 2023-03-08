import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react';

export default function InfoModal({
  isOpen,
  onClose,
  size,
  noHeader,
  noFooter,
  noCloseButton,
  children,
  title,
  colorScheme,
  btnClick,
  buttonText
}) {
  return (
    <>
      <Modal
        isLazy
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        zIndex={99}
        size={size}
        motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent
          m={4}
          _dark={{
            bg: 'gray.900',
            border: '1.5px solid',
            borderColor: 'gray.700'
          }}>
          {!noHeader && <ModalHeader fontWeight="bold">{title}</ModalHeader>}
          {!noCloseButton && <ModalCloseButton />}
          <ModalBody w="100%">{children}</ModalBody>

          {!noFooter && (
            <ModalFooter>
              <Button
                colorScheme={colorScheme}
                onClick={btnClick}
                _focus={{
                  border: 'none'
                }}>
                {buttonText ? buttonText : 'Send'}
              </Button>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
