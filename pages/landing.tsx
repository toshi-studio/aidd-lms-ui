import React, { useState } from 'react';
import { Theme, Box, Container, Flex, Heading, Text, Button, Grid, Card, Avatar, Separator, Badge } from '@radix-ui/themes';
import { ArrowRightIcon, CodeIcon, BarChartIcon, PersonIcon, GlobeIcon, RocketIcon, GearIcon, CheckIcon, LightningBoltIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Banner from '../components/Banner';
import { getAssetPath } from '../utils/assets';

const HomePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Course categories
  const categories = [
    { id: 'all', name: 'All Courses', icon: <GlobeIcon /> },
    { id: 'development', name: 'Development', icon: <CodeIcon /> },
    { id: 'business', name: 'Business & Analytics', icon: <BarChartIcon /> },
    { id: 'design', name: 'Design', icon: <PersonIcon /> },
    { id: 'ai', name: 'AI & Machine Learning', icon: <RocketIcon /> },
    { id: 'it', name: 'IT & Software', icon: <GearIcon /> }
  ];

  // Sample course data with categories
  const allCourses = [
    { id: '1', title: 'Introduction to AI', category: 'ai', image: getAssetPath('/assets/placeholder1.jpg'), description: 'Learn the fundamentals of artificial intelligence', students: '12,450', rating: 4.8 },
    { id: '2', title: 'Web Development Basics', category: 'development', image: getAssetPath('/assets/placeholder2.jpg'), description: 'Master HTML, CSS, and JavaScript', students: '25,300', rating: 4.9 },
    { id: '3', title: 'Data Science Essentials', category: 'ai', image: getAssetPath('/assets/placeholder3.jpg'), description: 'Analyze data with Python and R', students: '18,200', rating: 4.7 },
    { id: '4', title: 'Mobile App Development', category: 'development', image: getAssetPath('/assets/placeholder4.jpg'), description: 'Build apps for iOS and Android', students: '9,800', rating: 4.6 },
    { id: '5', title: 'Cloud Computing', category: 'it', image: getAssetPath('/assets/placeholder5.jpg'), description: 'Deploy applications in the cloud', students: '15,600', rating: 4.8 },
    { id: '6', title: 'UI/UX Design Fundamentals', category: 'design', image: getAssetPath('/assets/placeholder1.jpg'), description: 'Create beautiful user interfaces', students: '11,200', rating: 4.7 },
    { id: '7', title: 'Business Analytics', category: 'business', image: getAssetPath('/assets/placeholder2.jpg'), description: 'Make data-driven business decisions', students: '8,900', rating: 4.5 },
    { id: '8', title: 'Machine Learning with Python', category: 'ai', image: getAssetPath('/assets/placeholder3.jpg'), description: 'Build intelligent applications', students: '22,100', rating: 4.9 }
  ];

  // Filter courses based on selected category
  const filteredCourses = selectedCategory === 'all' 
    ? allCourses 
    : allCourses.filter(course => course.category === selectedCategory);

  // Sample testimonials
  const testimonials = [
    { name: 'Sarah Johnson', avatar: getAssetPath('/assets/avatar.png'), quote: 'AIDD LMS transformed how I learn. The AI-driven approach makes complex topics easy to understand.' },
    { name: 'Michael Chen', avatar: getAssetPath('/assets/avatar.png'), quote: 'As a teacher, I love how easy it is to create and manage courses. My students are more engaged than ever!' },
    { name: 'Emma Williams', avatar: getAssetPath('/assets/avatar.png'), quote: 'The progress tracking and personalized learning paths helped me achieve my goals faster.' }
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

        {/* Skills Section */}
        <Container size="4" py="8">
          <Flex direction="column" gap="6" align="center">
            <Box style={{ textAlign: 'center', maxWidth: '800px' }}>
              <Heading size="7" mb="3">
                All the skills you need in one place
              </Heading>
              <Text size="4" color="gray">
                From critical skills to technical topics, AIDD LMS supports your professional development.
              </Text>
            </Box>

            {/* Category Tabs */}
            <Flex gap="3" wrap="wrap" justify="center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'solid' : 'soft'}
                  color={selectedCategory === category.id ? 'violet' : 'gray'}
                  size="3"
                  onClick={() => setSelectedCategory(category.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {category.icon}
                  <Text>{category.name}</Text>
                </Button>
              ))}
            </Flex>
          </Flex>
        </Container>

        {/* Course Grid */}
        <Container size="4" pb="8">
          <Flex direction="column" gap="4">
            
            {/* Course Grid */}
            <Grid columns={{ initial: '1', sm: '2', md: '3', lg: '4' }} gap="4">
              {filteredCourses.slice(0, 8).map((course) => (
                <Card key={course.id} size="2" style={{ cursor: 'pointer' }}>
                  <Flex direction="column" gap="3">
                    <Box style={{ position: 'relative', paddingBottom: '56.25%', overflow: 'hidden', borderRadius: '8px' }}>
                      <img 
                        src={course.image} 
                        alt={course.title}
                        style={{ 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </Box>
                    <Flex direction="column" gap="2">
                      <Heading size="3">{course.title}</Heading>
                      <Text size="2" color="gray">{course.description}</Text>
                      <Flex align="center" gap="2">
                        <Badge color="amber" variant="soft">★ {course.rating}</Badge>
                        <Text size="1" color="gray">{course.students} students</Text>
                      </Flex>
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </Grid>
            
            {/* Show More Button */}
            <Flex justify="center" mt="4">
              <Button size="3" variant="outline" color="violet">
                Show All Courses
                <ArrowRightIcon />
              </Button>
            </Flex>
          </Flex>
        </Container>

        {/* Platform Benefits */}
        <Box py="8" style={{ backgroundColor: 'var(--gray-2)' }}>
          <Container size="4">
            <Flex direction="column" gap="6" align="center">
              <Box style={{ textAlign: 'center', maxWidth: '800px' }}>
                <Heading size="7" mb="3">
                  Learning focused on your goals
                </Heading>
                <Text size="4" color="gray">
                  Achieve your learning objectives with our comprehensive platform features
                </Text>
              </Box>

              <Grid columns={{ initial: '1', md: '2', lg: '3' }} gap="4" width="100%">
                {/* Hands-on Training */}
                <Card size="3">
                  <Flex direction="column" gap="3">
                    <Flex align="center" gap="3">
                      <Box style={{ 
                        padding: '12px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--violet-3)'
                      }}>
                        <LightningBoltIcon width="24" height="24" style={{ color: 'var(--violet-9)' }} />
                      </Box>
                      <Heading size="4">Hands-on Training</Heading>
                    </Flex>
                    <Text size="3" color="gray">
                      Upskill effectively with AI-powered coding exercises, practice tests, and interactive quizzes.
                    </Text>
                  </Flex>
                </Card>

                {/* Certification Prep */}
                <Card size="3">
                  <Flex direction="column" gap="3">
                    <Flex align="center" gap="3">
                      <Box style={{ 
                        padding: '12px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--green-3)'
                      }}>
                        <CheckIcon width="24" height="24" style={{ color: 'var(--green-9)' }} />
                      </Box>
                      <Heading size="4">Certification Prep</Heading>
                    </Flex>
                    <Text size="3" color="gray">
                      Prep for industry-recognized certifications by solving real-world challenges and earn badges along the way.
                    </Text>
                  </Flex>
                </Card>

                {/* Insights & Analytics */}
                <Card size="3">
                  <Flex direction="column" gap="3">
                    <Flex align="center" gap="3">
                      <Box style={{ 
                        padding: '12px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--pink-3)'
                      }}>
                        <BarChartIcon width="24" height="24" style={{ color: 'var(--pink-9)' }} />
                      </Box>
                      <Heading size="4">Insights & Analytics</Heading>
                    </Flex>
                    <Text size="3" color="gray">
                      Track your progress with advanced insights and AI-driven recommendations for effective learning.
                    </Text>
                  </Flex>
                </Card>

                {/* Customizable Content */}
                <Card size="3">
                  <Flex direction="column" gap="3">
                    <Flex align="center" gap="3">
                      <Box style={{ 
                        padding: '12px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--blue-3)'
                      }}>
                        <GearIcon width="24" height="24" style={{ color: 'var(--blue-9)' }} />
                      </Box>
                      <Heading size="4">Customizable Content</Heading>
                    </Flex>
                    <Text size="3" color="gray">
                      Create tailored learning paths for your team and organization goals with your own content and resources.
                    </Text>
                  </Flex>
                </Card>

                {/* AI-Powered Learning */}
                <Card size="3">
                  <Flex direction="column" gap="3">
                    <Flex align="center" gap="3">
                      <Box style={{ 
                        padding: '12px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--amber-3)'
                      }}>
                        <RocketIcon width="24" height="24" style={{ color: 'var(--amber-9)' }} />
                      </Box>
                      <Heading size="4">AI-Powered Learning</Heading>
                    </Flex>
                    <Text size="3" color="gray">
                      Experience personalized learning paths and intelligent content recommendations based on your progress.
                    </Text>
                  </Flex>
                </Card>

                {/* Expert Instructors */}
                <Card size="3">
                  <Flex direction="column" gap="3">
                    <Flex align="center" gap="3">
                      <Box style={{ 
                        padding: '12px',
                        borderRadius: '8px',
                        backgroundColor: 'var(--orange-3)'
                      }}>
                        <PersonIcon width="24" height="24" style={{ color: 'var(--orange-9)' }} />
                      </Box>
                      <Heading size="4">Expert Instructors</Heading>
                    </Flex>
                    <Text size="3" color="gray">
                      Learn from industry professionals with real-world experience and proven teaching methodologies.
                    </Text>
                  </Flex>
                </Card>
              </Grid>
            </Flex>
          </Container>
        </Box>

        {/* Testimonials */}
        <Box py="8">
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
              `url(${getAssetPath('/assets/aidd-banner.webp')})`,
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