'use client';

export const dynamic = 'force-dynamic';

import { useRouter } from 'next/navigation';
import NextLink from 'next/link';
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function Home() {
  const headingColor = useColorModeValue('purple.700', 'purple.300');
  const subtextColor = useColorModeValue('gray.700', 'gray.300');
  const cardBg = useColorModeValue('rgba(255,255,255,0.6)', 'rgba(26,32,44,0.6)');
  const overlayBg = useColorModeValue('transparent', 'transparent');

  return (
    <Box position="relative" minH="100vh" overflow="hidden">
      <Box
        as="video"
        autoPlay
        muted
        loop
        playsInline
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        objectFit="cover"
        zIndex={0}
        style={{ transform: 'scale(1.05)', objectPosition: 'top center' }}
      >
        <source src="/LandingPage10secvid.mp4" type="video/mp4" />
      </Box>

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
            size="3xl"
            fontWeight="extrabold"
            color={headingColor}
            mt={4}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to <Text as="span" color="green.400">VitalPath</Text> <Text as="span" color={headingColor}>Research</Text> 🌿
          </MotionHeading>
          <MotionText
            fontSize="xl"
            color={subtextColor}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Begin Your 100-Day Transformation Journey, and discover your potential with AI
          </MotionText>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} width="100%">
          <Box bg={cardBg} borderRadius="lg" p={6} boxShadow="lg">
            <Text color={headingColor}>
              Your personal AI Health Coach is ready to listen deeply, spark inspiration, and provide unwavering support as you create lasting well-being.
            </Text>
          </Box>
          <Box bg={cardBg} borderRadius="lg" p={6} boxShadow="lg">
            <Text color={headingColor}>
              VitalPath uses advanced AI to ask the right questions at the right time, reflecting your own wisdom back to you and gently guiding you past obstacles toward the changes that matter most to you.
            </Text>
          </Box>
          <Box bg={cardBg} borderRadius="lg" p={6} boxShadow="lg">
            <Text color={headingColor}>
              Discover what becomes possible when technology truly understands and supports your wellness journey.
            </Text>
          </Box>
        </SimpleGrid>

        <Box
          bg={cardBg}
          py={4}
          px={6}
          borderRadius="lg"
          boxShadow="lg"
          textAlign="center"
        >
          <Text color={headingColor} fontWeight="medium">
            Participation is free and limited to 100 individuals. Join now to secure your spot!
          </Text>
        </Box>

        <Flex gap={4} wrap="wrap" justify="center">
          <Button
            as={NextLink}
            href="/api/auth/signin"
            size="lg"
            colorScheme="purple"
            px={10}
            py={6}
            borderRadius="full"
            fontWeight="bold"
          >
            Join the Study
          </Button>
          <Button
            as={NextLink}
            href="/api/auth/signin"
            size="lg"
            variant="outline"
            colorScheme="purple"
            px={10}
            py={6}
            borderRadius="full"
            fontWeight="bold"
          >
            Return User Login
          </Button>
        </Flex>

        <Text fontSize="sm" pt={10} color="gray.500" textAlign="center">
          VitalPath Innovations, LLC • Research led by John-Eric Bonilla • UA Little Rock
        </Text>
      </Box>
    </Box>
  );
}
