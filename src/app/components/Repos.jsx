'use client';
import {
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { BsFillCircleFill } from 'react-icons/bs';
import { RiGitRepositoryFill } from 'react-icons/ri';

const Repos = ({ reposUrl }) => {
  const [userRepos, setUserRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [setshowMore, setSetshowMore] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(reposUrl);
        const data = await res.json();
        if (data.message) throw new Error(data.message);
        setUserRepos(data);
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

    fetchRepos();
  }, [reposUrl, toast]);

  const renderRepos = () => {
    if (loading) {
      return (
        <Spinner
          mt={6}
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='orange.500'
          size='xl'
        />
      );
    }

    return (
      <Grid templateColumns='repeat(2, 1fr)' gap={6} mt={8}>
        {userRepos.map(repo => {
          const {
            id,
            name,
            description,
            html_url,
            stargazers_count,
            language,
            forks_count,
          } = repo;
          return (
            <GridItem
              key={id}
              border='1px solid'
              borderColor='orange.500'
              padding={4}
              borderRadius={4}
            >
              <Heading
                as='h3'
                fontSize='lg'
                color='blue.400'
                display='flex'
                alignItems='center'
              >
                <Icon
                  as={RiGitRepositoryFill}
                  boxSize={5}
                  color='whiteAlpha.800'
                  mr={1}
                />
                <Text as='span'>{name}</Text>
              </Heading>
              <Text mt={4}>{description}</Text>
              <Flex mt={4} gap={4}>
                <Center>
                  <Icon as={BsFillCircleFill} color='yellow.300' mr={1} />
                  <Text>{language ?? 'not specified'}</Text>
                </Center>
                <Center>
                  <Icon as={AiOutlineStar} mr={1} />
                  <Text>{stargazers_count}</Text>
                </Center>
                <Center>
                  <Icon as={AiOutlineFork} mr={1} />
                  <Text>{forks_count}</Text>
                </Center>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>
    );
  };

  return (
    <>
      <Heading as='h2'>Repositories</Heading>
      {renderRepos()}
    </>
  );
};
export default Repos;
