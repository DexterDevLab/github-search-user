import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

const UserProfile = ({ user }) => {
  const {
    avatar_url,
    name,
    bio,
    html_url,
    public_repos,
    public_gists,
    following,
    followers,
    company,
    location,
    blog,
    created_at,
  } = user;
  return (
    <>
      <Flex
        my={12}
        border='2px solid'
        borderColor='orange.400'
        borderRadius={4}
        padding={8}
        gap={6}
      >
        <VStack>
          <Avatar name={name} src={avatar_url} size='2xl' />
          <Button colorScheme='orange' mt={4}>
            <a href={html_url} target='_blank' rel='noreferrer'>
              View Profile
            </a>
          </Button>
        </VStack>

        <VStack flex={1} alignItems='flex-start'>
          <Flex gap={4}>
            <Badge
              fontSize='0.9em'
              colorScheme='cyan'
              color='blackAlpha.700'
              textTransform='none'
            >
              Public Repos: {public_repos}
            </Badge>
            <Badge
              fontSize='0.9em'
              colorScheme='cyan'
              color='blackAlpha.700'
              textTransform='none'
            >
              Public Gists: {public_gists}
            </Badge>
            <Badge
              fontSize='0.9em'
              colorScheme='cyan'
              color='blackAlpha.700'
              textTransform='none'
            >
              Following: {following}
            </Badge>
            <Badge
              fontSize='0.9em'
              colorScheme='cyan'
              color='blackAlpha.700'
              textTransform='none'
            >
              Followers: {followers}
            </Badge>
          </Flex>

          <Heading as='h1' mt={4}>
            {name}
          </Heading>
          <Text fontSize='lg'>{bio}</Text>

          <Box>
            <Text>
              <Text as='span' fontWeight='bold' color='green.200' mr={1}>
                Company:
              </Text>
              {company || 'Not specified'}
            </Text>
            <Text>
              <Text as='span' fontWeight='bold' color='green.200' mr={1}>
                Location:
              </Text>
              {location || 'Not specified'}
            </Text>
            <Text>
              <Text as='span' fontWeight='bold' color='green.200' mr={1}>
                Blog/Website:
              </Text>
              {blog || 'Not specified'}
            </Text>
            <Text>
              <Text as='span' fontWeight='bold' color='green.200' mr={1}>
                Member since:
              </Text>
              {new Date(created_at).toLocaleDateString()}
            </Text>
          </Box>
        </VStack>
      </Flex>
    </>
  );
};
export default UserProfile;
