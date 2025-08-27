import React from 'react';
import { Theme, Box, Container, Card, Flex, Heading, Text, Button, Code } from '@radix-ui/themes';
import { HomeIcon, CrossCircledIcon, ReloadIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const ServerErrorPage: React.FC = () => {
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
        <Container size="1" style={{ width: '100%', maxWidth: '600px' }}>
          <Card size="4" style={{ backgroundColor: 'white' }}>
            <Flex direction="column" align="center" gap="4">
              {/* Error Icon */}
              <Box 
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <CrossCircledIcon width="40" height="40" color="#EF4444" />
              </Box>

              {/* Error Code */}
              <Heading size="8" style={{ color: '#020244' }}>
                500
              </Heading>

              {/* Error Title */}
              <Heading size="5" style={{ textAlign: 'center', color: '#020244' }}>
                Internal Server Error
              </Heading>

              {/* Error Message */}
              <Text size="3" color="gray" style={{ textAlign: 'center', maxWidth: '400px' }}>
                Something went wrong on our end. Our team has been notified and is working to fix the issue.
              </Text>

              {/* Error Trace (Placeholder) */}
              <Box 
                style={{ 
                  width: '100%',
                  backgroundColor: 'var(--gray-2)',
                  borderRadius: '8px',
                  padding: '16px',
                  marginTop: '8px'
                }}
              >
                <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                  Error Details
                </Text>
                <Code size="1" style={{ display: 'block', whiteSpace: 'pre-wrap' }}>
{`Error: Unable to fetch course data
  at getCourseData (/api/courses/route.ts:45:12)
  at async handler (/api/courses/route.ts:23:8)
  at async NextServer.handleRequest (server.js:112:20)`}
                </Code>
              </Box>

              {/* Actions */}
              <Flex gap="3" mt="2">
                <Button size="3" color="violet">
                  <ReloadIcon />
                  Try Again
                </Button>
                <Button asChild size="3" variant="soft" color="gray">
                  <Link href="/">
                    <HomeIcon />
                    Back to Home
                  </Link>
                </Button>
              </Flex>

              {/* Help Text */}
              <Text size="2" color="gray" style={{ textAlign: 'center', marginTop: '16px' }}>
                If the problem persists, please <Link href="/contact" color="violet">contact support</Link>
              </Text>
            </Flex>
          </Card>
        </Container>
      </Box>
    </Theme>
  );
};

export default ServerErrorPage;