import React from 'react';
import { Theme, Box, Container, Card, Flex, Heading, Text, Button } from '@radix-ui/themes';
import { HomeIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const NotFoundPage: React.FC = () => {
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
        <Container size="1" style={{ width: '100%', maxWidth: '500px' }}>
          <Card size="4" style={{ backgroundColor: 'white' }}>
            <Flex direction="column" align="center" gap="4">
              {/* Error Icon */}
              <Box 
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 193, 7, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <ExclamationTriangleIcon width="40" height="40" color="#FFC107" />
              </Box>

              {/* Error Code */}
              <Heading size="8" style={{ color: '#020244' }}>
                404
              </Heading>

              {/* Error Title */}
              <Heading size="5" style={{ textAlign: 'center', color: '#020244' }}>
                Page Not Found
              </Heading>

              {/* Error Message */}
              <Text size="3" color="gray" style={{ textAlign: 'center', maxWidth: '350px' }}>
                Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
              </Text>

              {/* Actions */}
              <Flex gap="3" mt="2">
                <Button asChild size="3" variant="soft" color="violet">
                  <Link href="/">
                    <HomeIcon />
                    Back to Home
                  </Link>
                </Button>
                <Button asChild size="3" variant="ghost" color="gray">
                  <Link href="/dashboard-student">
                    Go to Dashboard
                  </Link>
                </Button>
              </Flex>

              {/* Help Text */}
              <Text size="2" color="gray" style={{ textAlign: 'center', marginTop: '16px' }}>
                Need help? <Link href="/contact" color="violet">Contact Support</Link>
              </Text>
            </Flex>
          </Card>
        </Container>
      </Box>
    </Theme>
  );
};

export default NotFoundPage;