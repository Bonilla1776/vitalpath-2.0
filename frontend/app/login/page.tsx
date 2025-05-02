'use client';

import {
  Box,
  Button,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

export default function LoginPage() {
  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: 0,
          transform: 'scale(1.05)',
          objectPosition: 'top center',
        }}
      >
        <source src="/LoginPageVideo.mp4" type="video/mp4" />
      </video>

      <Box
        position="relative"
        zIndex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        minH="100vh"
        px={4}
      >
        <VStack
          spacing={6}
          bg="rgba(255,255,255,0.6)"
          p={10}
          borderRadius="lg"
          boxShadow="xl"
          textAlign="center"
        >
          <Heading size="xl" color="purple.700">
            Returning User Login
          </Heading>
          <Text fontSize="lg" color="gray.700">
            Sign in with your Azure account to access your dashboard and continue your transformation journey.
          </Text>
          <Button
            as="a"
            href="https://vitalpathb2c.b2clogin.com/vitalpathb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_B2C_1A_signup_signin&client_id=02c10115-6abe-41b9-b856-13c6b2f272bb&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fvitalpath-frontend-h2eybkh9c4g0fsd2.westus2-01.azurewebsites.net%2Fauth%2Fcallback&scope=openid&response_type=code&prompt=login"
            size="lg"
            colorScheme="purple"
            px={10}
            py={6}
            borderRadius="full"
            fontWeight="bold"
          >
            Login with Azure B2C
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
