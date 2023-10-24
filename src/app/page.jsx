'use client';
import { Button, Container, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Repos from './components/Repos';
import Search from './components/Search';
import UserProfile from './components/UserProfile';

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <Container maxW='container.lg' mb={10}>
      <NavBar />
      <Heading as='h1' textAlign='center'>
        Search users on Github
      </Heading>
      <Search
        handleUserData={data => setUserData(data)}
        setLoading={setLoading}
      />
      {userData && <UserProfile user={userData} />}
      {userData && <Repos reposUrl={userData.repos_url} />}
    </Container>
  );
}
