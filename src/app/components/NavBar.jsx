import { Box, Button, Flex, Image, useDisclosure } from '@chakra-ui/react';
import ModalSearch from './ModalSearch';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex justifyContent='space-between' alignItems='center' py={6}>
      <Box w='200px'>
        <Image src='/logo.png' alt='github logo' sx={{ filter: 'invert(1)' }} />
      </Box>
      <Box>
        <Button size='md' colorScheme='orange' onClick={onOpen}>
          Search History
        </Button>
      </Box>
      {isOpen && <ModalSearch isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};
export default NavBar;
