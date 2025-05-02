'use client';

import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function ConsentPage() {
  const [agree, setAgree] = useState(false);
  const toast = useToast();

  const handleConsentSubmit = async () => {
    if (!agree) {
      toast({
        title: 'Consent Required',
        description: 'You must agree to participate in the study to proceed.',
        status: 'warning',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const res = await fetch('/api/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ consent: true }),
      });

      if (res.ok) {
        window.location.href = '/discovery';
      } else {
        throw new Error('Consent submission failed');
      }
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to record consent. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg="gray.50" py={10} px={4} minH="100vh">
      <Box
        maxW="5xl"
        mx="auto"
        bg="white"
        p={10}
        borderRadius="md"
        boxShadow="lg"
      >
        <VStack align="start" spacing={6}>
          <Heading size="lg" color="purple.700">
            Informed Consent Form
          </Heading>

          <Text fontWeight="bold">
            Title of Study:
          </Text>
          <Text>
            AI-Driven Motivational Interviewing: A Scalable Digital Health Coaching Model for Personalized Behavioral Change and Health Improvement
          </Text>

          <Text fontWeight="bold">Introduction</Text>
          <Text>
            You are invited to participate in a research project evaluating an AI-driven health coaching platform...
          </Text>

          <Text fontWeight="bold">Key Information</Text>
          <ul>
            <li><Text>Purpose: To evaluate a coaching app using Motivational Interviewing (MI).</Text></li>
            <li><Text>Eligibility: 18+, device access, willing to use the app weekly for 12 weeks.</Text></li>
            <li><Text>Risks: Minimal; mostly related to confidentiality.</Text></li>
            <li><Text>Benefits: You may improve health behavior and help advance research.</Text></li>
          </ul>

          <Text fontWeight="bold">Procedures</Text>
          <Text>You will interact with the coach weekly and may complete optional surveys or interviews.</Text>

          <Text fontWeight="bold">Confidentiality</Text>
          <Text>
            Data will be stored securely. Personally identifiable data will be destroyed after 3 years. Only aggregate results will be published.
          </Text>

          <Text fontWeight="bold">Your Rights</Text>
          <Text>
            You may withdraw at any time without penalty. Contact details for questions or concerns are provided below.
          </Text>

          <Text fontWeight="bold">Contacts</Text>
          <Text>
            John-Eric Bonilla: jbonilla@ualr.edu<br />
            Prof. Xiaowei Xu: xwxu@ualr.edu<br />
            IRB: 501-916-6209 or irb@ualr.edu
          </Text>

          <Box pt={4}>
            <Text fontWeight="bold">
              If you are 18 or older and agree to participate, please confirm below.
            </Text>
          </Box>

          <Stack spacing={4} pt={2}>
            <Checkbox isChecked={agree} onChange={(e) => setAgree(e.target.checked)}>
              I consent to participate in this study and affirm I am at least 18 years old.
            </Checkbox>

            <Flex gap={4}>
              <Button
                colorScheme="purple"
                onClick={handleConsentSubmit}
                isDisabled={!agree}
              >
                I Agree – Continue
              </Button>

              <Button
                colorScheme="gray"
                variant="outline"
                onClick={() => (window.location.href = '/')}
              >
                I Do Not Agree
              </Button>
            </Flex>
          </Stack>
        </VStack>
      </Box>
    </Box>
  );
}

