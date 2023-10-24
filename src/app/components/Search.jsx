'use client';
import { Button, Flex, Input, useToast } from '@chakra-ui/react';
import { useState } from 'react';

const Search = ({ handleUserData, setLoading }) => {
  const [query, setQuery] = useState('');
  const toast = useToast();

  const handleChange = e => {
    const searchQuery = e.target.value.trim().toLowerCase();
    setQuery(searchQuery);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${query}`);
      const data = await res.json();

      if (data.message) {
        return toast({
          title: 'Error',
          description:
            data.message === 'Not Found' ? 'User not found.' : data.message,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
      handleUserData(data);
      addUserSearchHistory(data, query);
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  const addUserSearchHistory = (userData, query) => {
    const users = JSON.parse(localStorage.getItem('github-users')) || [];

    const user = {
      id: userData.id,
      name: userData.name,
      avatar: userData.avatar_url,
    };

    const isUserExist = users.find(user => user.id === userData.id);

    if (isUserExist) {
      users.splice(users.indexOf(isUserExist), 1);
    }
    users.unshift(user);
    localStorage.setItem('github-users', JSON.stringify(users));
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex mt={5}>
        <Input
          variant='outline'
          placeholder='Type a username (i.e. dexterdevlab)'
          mr={2}
          value={query}
          onChange={handleChange}
        />
        <Button
          type='submit'
          size='md'
          colorScheme='orange'
          px={10}
          isDisabled={!query}
        >
          Search
        </Button>
      </Flex>
    </form>
  );
};
export default Search;
