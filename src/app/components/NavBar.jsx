import { Box, Button, Flex, Image } from '@chakra-ui/react';

const NavBar = () => {
  return (
    <Flex justifyContent='space-between' alignItems='center' py={6}>
      <Box w='200px'>
        <Image src='/logo.png' alt='github logo' sx={{ filter: 'invert(1)' }} />
      </Box>
      <Box>
        <Button size='md' colorScheme='orange'>
          Search History
        </Button>
      </Box>
    </Flex>
  );
};
export default NavBar;
