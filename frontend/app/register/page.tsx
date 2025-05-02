'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const headingColor = 'purple.700';
const subtextColor = 'gray.700';
const cardBg = 'rgba(255,255,255,0.6)';
const overlayBg = 'transparent';

export default function RegisterPage() {
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
        <source src="/RegisterPageVideo.mp4" type="video/mp4" />
      </video>

      <Box
        position="relative"
        zIndex={1}
        px={{ base: 4, md: 10 }}
        py={{ base: 12, md: 24 }}
        bg={overlayBg}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minH="100vh"
        gap={10}
      >
        <Box bg={cardBg} borderRadius="lg" p={6} boxShadow="lg" textAlign="center">
          <Flex gap={6} wrap="wrap" justify="center">
            <img src="/ualr-logo.png" alt="UA Little Rock Logo" width={100} height={100} />
            <img src="/vitalpath-logo.png" alt="VitalPath Logo" width={100} height={100} />
          </Flex>
          <MotionHeading
            size="2xl"
            fontWeight="extrabold"
            color={headingColor}
            mt={4}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join the VitalPath Study
          </MotionHeading>
          <MotionText
            fontSize="lg"
            color={subtextColor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Begin your transformation journey. Register now to participate.
          </MotionText>
          <Button
            as="a"
            href="https://vitalpathb2c.b2clogin.com/vitalpathb2c.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_B2C_1A_signup_signin&client_id=02c10115-6abe-41b9-b856-13c6b2f272bb&nonce=defaultNonce&redirect_uri=https%3A%2F%2Fvitalpath-frontend-h2eybkh9c4g0fsd2.westus2-01.azurewebsites.net%2Fauth%2Fcallback&scope=openid&response_type=code&prompt=login&code_challenge_method=S256&code_challenge=wq2h8bl4wt5yC8oSiSJ-nvC1sgIIN_dXzKEDM2xM2zw"
            size="lg"
            colorScheme="purple"
            mt={8}
            px={10}
            py={6}
            borderRadius="full"
            fontWeight="bold"
          >
            Register with Azure B2C
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
