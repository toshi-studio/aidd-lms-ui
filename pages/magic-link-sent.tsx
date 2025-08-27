import React from 'react';
import { Theme, Box, Container, Card, Flex, Heading, Text, Badge, Button } from '@radix-ui/themes';
import { CheckCircledIcon, HomeIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const MagicLinkSentPage: React.FC = () => {
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
            <Flex direction="column" align="center" gap="4">
              {/* Success Icon */}
              <Box 
                style={{ 
                  width: '64px', 
                  height: '64px', 
                  borderRadius: '50%',
                  backgroundColor: 'rgba(101, 202, 152, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <CheckCircledIcon width="32" height="32" color="#65CA98" />
              </Box>

              {/* Success Badge */}
              <Badge color="green" size="2" variant="soft">
                Success
              </Badge>

              {/* Title */}
              <Heading size="5" style={{ textAlign: 'center' }}>
                Check your email!
              </Heading>

              {/* Message */}
              <Text size="3" color="gray" style={{ textAlign: 'center' }}>
                We've sent a magic link to your email address. Click the link in the email to sign in to your account.
              </Text>

              {/* Additional Info */}
              <Box 
                style={{ 
                  backgroundColor: 'var(--gray-2)', 
                  padding: '12px 16px',
                  borderRadius: '8px',
                  width: '100%'
                }}
              >
                <Text size="2" color="gray">
                  Didn't receive the email? Check your spam folder or try signing in again.
                </Text>
              </Box>

              {/* Back to Home Button */}
              <Button size="3" variant="soft" color="violet" style={{ width: '100%' }}>
                <HomeIcon />
                <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Back to Home
                </Link>
              </Button>
            </Flex>
          </Card>
        </Container>
      </Box>
    </Theme>
  );
};

export default MagicLinkSentPage;