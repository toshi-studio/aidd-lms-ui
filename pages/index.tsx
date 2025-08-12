import React from 'react';
import { Theme, Box, Container, Card, Flex, Heading, Text, Button, Grid, Badge } from '@radix-ui/themes';
import { HomeIcon, PersonIcon, ReaderIcon, Pencil1Icon, GearIcon, ExclamationTriangleIcon, Cross1Icon, EnvelopeClosedIcon, CheckCircledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const IndexPage: React.FC = () => {
  const pages = [
    {
      title: 'Landing Page',
      description: 'Public homepage with course carousel and testimonials',
      href: '/landing',
      icon: <HomeIcon />,
      status: 'public'
    },
    {
      title: 'Login',
      description: 'Magic link authentication page',
      href: '/login',
      icon: <EnvelopeClosedIcon />,
      status: 'auth'
    },
    {
      title: 'Magic Link Sent',
      description: 'Confirmation page after login attempt',
      href: '/magic-link-sent',
      icon: <CheckCircledIcon />,
      status: 'auth'
    },
    {
      title: 'Student Dashboard',
      description: 'Student view with course progress tracking',
      href: '/dashboard-student',
      icon: <PersonIcon />,
      status: 'student'
    },
    {
      title: 'Course Reader',
      description: 'Chapter reading interface for students',
      href: '/course',
      icon: <ReaderIcon />,
      status: 'student'
    },
    {
      title: 'Teacher Dashboard',
      description: 'Teacher course management interface',
      href: '/dashboard-teacher',
      icon: <GearIcon />,
      status: 'teacher'
    },
    {
      title: 'Course Editor',
      description: 'Course and chapter creation/editing interface',
      href: '/course-editor',
      icon: <Pencil1Icon />,
      status: 'teacher'
    },
    {
      title: '404 Error',
      description: 'Page not found error page',
      href: '/404',
      icon: <ExclamationTriangleIcon />,
      status: 'error'
    },
    {
      title: '500 Error',
      description: 'Server error page',
      href: '/500',
      icon: <Cross1Icon />,
      status: 'error'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'public': return 'blue';
      case 'auth': return 'green';
      case 'student': return 'violet';
      case 'teacher': return 'pink';
      case 'error': return 'red';
      default: return 'gray';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'public': return 'Public';
      case 'auth': return 'Auth';
      case 'student': return 'Student';
      case 'teacher': return 'Teacher';
      case 'error': return 'Error';
      default: return 'Other';
    }
  };

  return (
    <Theme appearance="inherit">
      <Box style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)' }}>
        <Container size="4" py="6">
          <Flex direction="column" align="center" gap="6">
            {/* Header */}
            <Box style={{ textAlign: 'center' }}>
              <Heading size="8" mb="2" style={{ color: '#020244' }}>
                AIDD LMS - Table of Contents
              </Heading>
              <Text size="4" color="gray">
                Navigate to any page in the Learning Management System
              </Text>
            </Box>

            {/* Page Grid */}
            <Grid columns={{ initial: '1', sm: '2', lg: '3' }} gap="4" width="100%">
              {pages.map((page) => (
                <Link key={page.href} href={page.href}>
                  <Card 
                    size="3" 
                    style={{ 
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      height: '100%'
                    }}
                  >
                    <Flex direction="column" gap="3" height="100%">
                      {/* Header with icon and status */}
                      <Flex align="center" justify="between">
                        <Flex align="center" gap="2">
                          <Box style={{ color: '#020244' }}>
                            {page.icon}
                          </Box>
                          <Heading size="4">{page.title}</Heading>
                        </Flex>
                        <Badge 
                          color={getStatusColor(page.status)} 
                          variant="soft"
                          radius="full"
                          size="1"
                        >
                          {getStatusLabel(page.status)}
                        </Badge>
                      </Flex>

                      {/* Description */}
                      <Text size="2" color="gray" style={{ lineHeight: '1.5' }}>
                        {page.description}
                      </Text>

                      {/* Footer */}
                      <Box mt="auto">
                        <Button 
                          variant="soft" 
                          color="violet" 
                          size="2"
                          style={{ width: '100%' }}
                        >
                          Visit Page →
                        </Button>
                      </Box>
                    </Flex>
                  </Card>
                </Link>
              ))}
            </Grid>

            {/* Footer Info */}
            <Box style={{ textAlign: 'center', marginTop: '40px' }}>
              <Text size="2" color="gray">
                This is a static wireframe implementation for an AI-driven Learning Management System
              </Text>
            </Box>
          </Flex>
        </Container>

      </Box>
    </Theme>
  );
};

export default IndexPage;