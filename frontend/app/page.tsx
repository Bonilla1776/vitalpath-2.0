'use client';

import { Box, Button, Center, Flex, Heading, Stack, Text, VStack, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function Home() {
  const loginUrl = "https://vitalpathb2c.b2clogin.com/vitalpathb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_login_flow&client_id=02c10115-6abe-41b9-b856-13c6b2f272bb&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fvitalpath-frontend-h2eybkh9c4g0fsd2.westus2-01.azurewebsites.net%2Fauth%2Fcallback&scope=openid&response_type=code&prompt=login";
  const registerUrl = "https://vitalpathb2c.b2clogin.com/vitalpathb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_B2C_1A_signup_signin&client_id=02c10115-6abe-41b9-b856-13c6b2f272bb&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fvitalpath-frontend-h2eybkh9c4g0fsd2.westus2-01.azurewebsites.net%2Fauth%2Fcallback&scope=openid&response_type=code&prompt=login";

  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      overflow="hidden"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 0,
        backgroundColor: 'blackAlpha.700',
      }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/videos/landingbg.mp4" type="video/mp4" />
      </video>

      <Flex
        zIndex={1}
        direction="column"
        align="center"
        justify="center"
        height="100%"
        textAlign="center"
        px={4}
      >
        <Stack spacing={6} maxW="2xl" bg="whiteAlpha.800" p={8} rounded="2xl" boxShadow="2xl">
          <Center>
            <Image src="/images/ualr-logo.png" alt="UALR Logo" height="60px" mr={4} />
            <Image src="/images/vitalpath-logo.png" alt="VitalPath Logo" height="60px" />
          </Center>
          <Heading fontSize="3xl" color="purple.700">
            Welcome to the VitalPath Study
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Begin your transformation journey. Register or log in to participate.
          </Text>
          <VStack spacing={4}>
            <Button
              as="a"
              href={registerUrl}
              colorScheme="purple"
              size="lg"
              width="100%"
            >
              Join the Study
            </Button>
            <Button
              as="a"
              href={loginUrl}
              variant="outline"
              colorScheme="purple"
              size="lg"
              width="100%"
            >
              Returning User Login
            </Button>
          </VStack>
        </Stack>
      </Flex>
    </Box>
  );
}






