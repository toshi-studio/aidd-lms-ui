import React from 'react';
import { Theme, Box, Container, Flex, Heading, Text, Button, Grid, Card, Avatar, Separator } from '@radix-ui/themes';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Banner from '../components/Banner';
import CourseCard from '../components/CourseCard';

const HomePage: React.FC = () => {
  // Sample course data
  const courses = [
    { id: '1', title: 'Introduction to AI', image: '/assets/placeholder1.jpg', description: 'Learn the fundamentals of artificial intelligence' },
    { id: '2', title: 'Web Development Basics', image: '/assets/placeholder2.jpg', description: 'Master HTML, CSS, and JavaScript' },
    { id: '3', title: 'Data Science Essentials', image: '/assets/placeholder3.jpg', description: 'Analyze data with Python and R' },
    { id: '4', title: 'Mobile App Development', image: '/assets/placeholder4.jpg', description: 'Build apps for iOS and Android' },
    { id: '5', title: 'Cloud Computing', image: '/assets/placeholder5.jpg', description: 'Deploy applications in the cloud' }
  ];

  // Sample testimonials
  const testimonials = [
    { name: 'Sarah Johnson', avatar: '/assets/avatar.png', quote: 'AIDD LMS transformed how I learn. The AI-driven approach makes complex topics easy to understand.' },
    { name: 'Michael Chen', avatar: '/assets/avatar.png', quote: 'As a teacher, I love how easy it is to create and manage courses. My students are more engaged than ever!' },
    { name: 'Emma Williams', avatar: '/assets/avatar.png', quote: 'The progress tracking and personalized learning paths helped me achieve my goals faster.' }
  ];

  return (
    <Theme appearance="inherit">
      <Box style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)' }}>
        <Banner />
        
        {/* Hero Section */}
        <Box py="8" style={{ background: 'linear-gradient(135deg, #020244 0%, #4F4FEB 100%)' }}>
          <Container size="3">
            <Flex direction="column" align="center" gap="4">
              <Heading size="8" style={{ color: 'white', textAlign: 'center' }}>
                Learn with AIDD LMS
              </Heading>
              <Text size="5" style={{ color: 'rgba(255,255,255,0.9)', textAlign: 'center', maxWidth: '600px' }}>
                Experience the future of learning with our AI-driven platform. Personalized courses, intelligent progress tracking, and seamless collaboration.
              </Text>
              <Link href="/login">
                <Button size="4" color="pink">
                  Start Learning Today
                  <ArrowRightIcon />
                </Button>
              </Link>
            </Flex>
          </Container>
        </Box>

        {/* Course Carousel */}
        <Container size="4" py="8">
          <Flex direction="column" gap="4">
            <Heading size="6" style={{ textAlign: 'center' }}>
              Popular Courses
            </Heading>
            
            {/* Carousel Container */}
            <Box style={{ position: 'relative' }}>
              <Flex gap="4" style={{ overflowX: 'auto', scrollBehavior: 'smooth', paddingBottom: '20px' }}>
                {courses.map((course) => (
                  <Box key={course.id} style={{ minWidth: '300px' }}>
                    <CourseCard
                      title={course.title}
                      image={course.image}
                      description={course.description}
                    />
                  </Box>
                ))}
              </Flex>
              
              {/* Navigation Arrows */}
              <Button 
                size="2" 
                variant="ghost" 
                style={{ 
                  position: 'absolute', 
                  left: '-20px', 
                  top: '50%', 
                  transform: 'translateY(-50%)'
                }}
              >
                <ChevronLeftIcon />
              </Button>
              <Button 
                size="2" 
                variant="ghost" 
                style={{ 
                  position: 'absolute', 
                  right: '-20px', 
                  top: '50%', 
                  transform: 'translateY(-50%)'
                }}
              >
                <ChevronRightIcon />
              </Button>
            </Box>
            
            {/* Page Indicators */}
            <Flex justify="center" gap="2">
              {[1, 2, 3, 4, 5].map((i) => (
                <Box
                  key={i}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: i === 1 ? '#020244' : '#e5e5e5'
                  }}
                />
              ))}
            </Flex>
          </Flex>
        </Container>

        {/* Testimonials */}
        <Box py="8" style={{ backgroundColor: 'var(--gray-2)' }}>
          <Container size="4">
            <Heading size="6" mb="6" style={{ textAlign: 'center' }}>
              What Our Users Say
            </Heading>
            <Grid columns="3" gap="4">
              {testimonials.map((testimonial, index) => (
                <Card key={index} size="3">
                  <Flex direction="column" gap="3">
                    <Text size="3" style={{ fontStyle: 'italic' }}>
                      "{testimonial.quote}"
                    </Text>
                    <Flex align="center" gap="2">
                      <Avatar 
                        src={testimonial.avatar} 
                        fallback={testimonial.name.charAt(0)} 
                        size="2"
                      />
                      <Text size="2" weight="medium">{testimonial.name}</Text>
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Footer */}
        <Box
          py="8"
          style={{
            color: 'white',
            backgroundImage:
              'url(/assets/aidd-banner.webp)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left center'
          }}
        >
          <Container size="4">
            <Grid columns="4" gap="6">
              <Flex direction="column" gap="3">
                <Heading size="4">Company</Heading>
                <Text style={{ color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>About Us</Text>
                <Text style={{ color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>Careers</Text>
                <Text style={{ color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>Contact</Text>
              </Flex>
              <Flex direction="column" gap="3">
                <Heading size="4">Courses</Heading>
                <Text style={{ color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>Browse All</Text>
                <Text style={{ color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>Categories</Text>
                <Text style={{ color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>Instructors</Text>
              </Flex>
              <Flex direction="column" gap="3">
                <Heading size="4">Support</Heading>
                <Text style={{ color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>Help Center</Text>
                <Text style={{ color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>Documentation</Text>
                <Text style={{ color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>Community</Text>
              </Flex>
              <Flex direction="column" gap="3">
                <Heading size="4">Legal</Heading>
                <Text style={{ color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>Privacy Policy</Text>
                <Text style={{ color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>Terms of Service</Text>
                <Text style={{ color: 'rgba(255,255,255,0.8)', cursor: 'pointer' }}>Cookie Policy</Text>
              </Flex>
            </Grid>
            
            <Separator size="4" my="6" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
            
            <Text size="2" style={{ color: 'rgba(255,255,255,0.6)', textAlign: 'center' }}>
              © 2024 AIDD LMS. All rights reserved.
            </Text>
          </Container>
        </Box>
      </Box>
    </Theme>
  );
};

export default HomePage;