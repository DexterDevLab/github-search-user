'use client';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const ModalSearch = ({ isOpen, onClose }) => {
  const [userSearchHistory, setUserSearchHistory] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('github-users')) || [];
    setUserSearchHistory(users);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg='gray.600'>
        <ModalHeader>Search History</ModalHeader>
        <ModalCloseButton />
        <ModalBody overflowY='auto' maxHeight='400px'>
          <Text>Users you searched for:</Text>
          {userSearchHistory.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='orange' mr={3} size='sm' onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default ModalSearch;
