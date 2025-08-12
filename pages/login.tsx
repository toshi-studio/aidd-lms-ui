import React from 'react';
import { Theme, Box, Container, Card, Flex, Heading, Text, Button } from '@radix-ui/themes';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  return (
    <Theme appearance="inherit">
      <Box 
        style={{ 
          minHeight: '100vh', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #020244 0%, #4F4FEB 100%)'
        }}
      >
        <Container size="1" style={{ width: '100%', maxWidth: '400px' }}>
          <Card size="4">
            <Flex direction="column" gap="4">
              {/* Logo */}
              <Flex justify="center" mb="2" style={{ backgroundImage: 'url(/assets/aidd-banner.webp)', backgroundSize: 'cover', backgroundPosition: 'left center', backgroundRepeat: 'no-repeat', padding: '10px', borderRadius: '10px' }}>
                <img 
                  src="/assets/logo.png" 
                  alt="AIDD LMS Logo" 
                  style={{ width: 'auto', height: '80px' }}
                />
              </Flex>

              {/* Title */}
              <Heading size="6" style={{ textAlign: 'center' }}>
                Welcome to AIDD LMS
              </Heading>
              
              <Text size="3" color="gray" style={{ textAlign: 'center' }}>
                Enter your email to sign in or create an account
              </Text>

              {/* Email Input */}
              <Box>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    height: '44px',
                    padding: '0 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--gray-6)',
                    backgroundColor: 'var(--color-panel-solid)',
                    color: 'var(--gray-12)',
                    fontSize: '16px'
                  }}
                />
              </Box>

              {/* Submit Button */}
              <Button asChild size="3" color="violet" style={{ width: '100%' }}>
                <Link href="/magic-link-sent">Send Magic Link</Link>
              </Button>

              {/* Hint Text */}
              <Text size="2" color="gray" style={{ textAlign: 'center' }}>
                We'll send you a magic link to sign in without a password
              </Text>

              {/* Back to Home */}
              <Text size="2" style={{ textAlign: 'center' }}>
                <Link href="/">Back to Home</Link>
              </Text>
            </Flex>
          </Card>
        </Container>
      </Box>
    </Theme>
  );
};

export default LoginPage;