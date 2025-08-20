import React, { useState } from 'react';
import { Theme, Box, Container, Flex, Grid, Heading, Text, Card, Badge, Button } from '@radix-ui/themes';
import { PlusIcon, PersonIcon, BackpackIcon, ReaderIcon } from '@radix-ui/react-icons';
import Banner from '../components/Banner';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';
import { getAssetPath } from '../utils/assets';

const DashboardPage: React.FC = () => {
  // Sample unified user data - user can be both student and teacher
  const userName = 'Toshi';
  const userAvatar = getAssetPath('/assets/avatar.png');
  
  // Tab state for switching between student and teacher views
  const [activeTab, setActiveTab] = useState('student');

  // Courses the user is enrolled in as a student
  const enrolledCourses = [
    {
      id: '1',
      title: 'Introduction to AI',
      currentChapter: 'Chapter 3: Neural Networks'
    },
    {
      id: '2',
      title: 'Web Development Basics',
      currentChapter: 'Chapter 2: CSS Fundamentals'
    },
    {
      id: '3',
      title: 'Data Science Essentials',
      currentChapter: 'Chapter 5: Data Visualization'
    }
  ];

  // Courses the user has created as a teacher
  const createdCourses = [
    {
      id: '5',
      title: 'Python for Beginners',
      isPublished: true
    },
    {
      id: '6',
      title: 'JavaScript Advanced Patterns',
      isPublished: false
    }
  ];

  // Combined sidebar courses - both enrolled and created
  const allCourses = [
    ...enrolledCourses.map(course => ({ ...course, type: 'enrolled' })),
    ...createdCourses.map(course => ({ ...course, type: 'created' }))
  ];

  // Student course data with progress
  const studentCoursesData = [
    {
      id: '1',
      title: 'Introduction to AI',
      image: getAssetPath('/assets/placeholder1.jpg'),
      completionPercentage: 45,
      currentChapter: 'Chapter 3: Neural Networks',
      description: 'Learn the fundamentals of artificial intelligence',
      instructor: 'Dr. Sarah Chen'
    },
    {
      id: '2',
      title: 'Web Development Basics',
      image: getAssetPath('/assets/placeholder2.jpg'),
      completionPercentage: 20,
      currentChapter: 'Chapter 2: CSS Fundamentals',
      description: 'Master HTML, CSS, and JavaScript',
      instructor: 'Prof. Michael Rodriguez'
    },
    {
      id: '3',
      title: 'Data Science Essentials',
      image: getAssetPath('/assets/placeholder3.jpg'),
      completionPercentage: 80,
      currentChapter: 'Chapter 5: Data Visualization',
      description: 'Analyze data with Python and R',
      instructor: 'Dr. Emily Johnson'
    }
  ];

  // Teacher course data with statistics
  const teacherCoursesData = [
    {
      id: '5',
      title: 'Python for Beginners',
      image: getAssetPath('/assets/placeholder5.jpg'),
      totalChapters: 8,
      completedStudents: 42,
      totalStudents: 156,
      isPublished: true,
      lastUpdated: '2 days ago'
    },
    {
      id: '6',
      title: 'JavaScript Advanced Patterns',
      image: getAssetPath('/assets/placeholder4.jpg'),
      totalChapters: 12,
      completedStudents: 0,
      totalStudents: 0,
      isPublished: false,
      lastUpdated: '1 hour ago'
    }
  ];

  return (
    <Theme appearance="inherit">
      <Box style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)' }}>
        <Banner isLoggedIn={true} userName={userName} avatarUrl={userAvatar} />
        
        <Flex style={{ height: 'calc(100vh - 64px)' }}>
          {/* Unified Sidebar showing both enrolled and created courses */}
          <Sidebar
            userName={userName}
            avatarUrl={userAvatar}
            variant="unified"
            courses={allCourses}
          />

          {/* Main Content */}
          <Box style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
            <Container size="4">
              {/* Header with role switch */}
              <Flex justify="between" align="center" mb="6">
                <Heading size="7">Dashboard</Heading>
                <Flex gap="3" align="center">
                  <Text size="2" color="gray">
                    Active roles:
                  </Text>
                  <Badge color="blue" variant="soft">
                    Student
                  </Badge>
                  <Badge color="violet" variant="soft">
                    Teacher
                  </Badge>
                </Flex>
              </Flex>

              {/* Toggle buttons for switching between Student and Teacher views */}
              <Flex gap="3" mb="6">
                <Button 
                  size="3" 
                  variant={activeTab === 'student' ? 'solid' : 'soft'}
                  color="blue"
                  onClick={() => setActiveTab('student')}
                  style={{ flex: 1 }}
                >
                  <Flex gap="2" align="center">
                    <BackpackIcon />
                    My Learning ({studentCoursesData.length})
                  </Flex>
                </Button>
                <Button 
                  size="3" 
                  variant={activeTab === 'teacher' ? 'solid' : 'soft'}
                  color="violet"
                  onClick={() => setActiveTab('teacher')}
                  style={{ flex: 1 }}
                >
                  <Flex gap="2" align="center">
                    <PersonIcon />
                    My Teaching ({teacherCoursesData.length})
                  </Flex>
                </Button>
              </Flex>

              {/* Student Content */}
              {activeTab === 'student' && (
                  <Box pt="6">
                    <Flex justify="between" align="center" mb="4">
                      <Heading size="5">Courses I'm Taking</Heading>
                      <Button variant="soft" size="2">
                        Browse More Courses
                      </Button>
                    </Flex>
                    
                    <Grid columns="3" gap="4">
                      {studentCoursesData.map((course) => (
                        <CourseCard
                          key={course.id}
                          title={course.title}
                          image={course.image}
                          description={course.description}
                          completionPercentage={course.completionPercentage}
                          currentChapter={course.currentChapter}
                          isStudent={true}
                          onGoToChapter={() => {
                            window.location.href = `/course?id=${course.id}`;
                          }}
                          onContactTeacher={() => {
                            console.log(`Contact teacher for course ${course.id}`);
                          }}
                        />
                      ))}
                    </Grid>

                    {/* Learning Stats */}
                    <Box mt="6">
                      <Card size="2">
                        <Grid columns="4" gap="4">
                          <Flex direction="column">
                            <Text size="5" weight="bold" color="blue">
                              {studentCoursesData.length}
                            </Text>
                            <Text size="1" color="gray">Active Courses</Text>
                          </Flex>
                          <Flex direction="column">
                            <Text size="5" weight="bold" color="green">
                              {Math.round(studentCoursesData.reduce((acc, c) => acc + c.completionPercentage, 0) / studentCoursesData.length)}%
                            </Text>
                            <Text size="1" color="gray">Avg. Progress</Text>
                          </Flex>
                          <Flex direction="column">
                            <Text size="5" weight="bold" color="violet">
                              12
                            </Text>
                            <Text size="1" color="gray">Chapters Completed</Text>
                          </Flex>
                          <Flex direction="column">
                            <Text size="5" weight="bold" color="pink">
                              3.5h
                            </Text>
                            <Text size="1" color="gray">Study Time Today</Text>
                          </Flex>
                        </Grid>
                      </Card>
                    </Box>
                  </Box>
              )}

              {/* Teacher Content */}
              {activeTab === 'teacher' && (
                  <Box pt="6">
                    <Flex justify="between" align="center" mb="4">
                      <Heading size="5">Courses I'm Teaching</Heading>
                      <Button size="2" onClick={() => window.location.href = '/course-editor'}>
                        <PlusIcon />
                        Create New Course
                      </Button>
                    </Flex>

                    {teacherCoursesData.length > 0 ? (
                      <>
                        <Grid columns="3" gap="4">
                          {teacherCoursesData.map((course) => (
                            <CourseCard
                              key={course.id}
                              title={course.title}
                              image={course.image}
                              totalChapters={course.totalChapters}
                              completedStudents={course.completedStudents}
                              totalStudents={course.totalStudents}
                              isStudent={false}
                              isPublished={course.isPublished}
                              onClick={() => {
                                window.location.href = `/course-editor?id=${course.id}`;
                              }}
                            />
                          ))}
                        </Grid>

                        {/* Teaching Stats */}
                        <Box mt="6">
                          <Card size="2">
                            <Grid columns="4" gap="4">
                              <Flex direction="column">
                                <Text size="5" weight="bold" color="violet">
                                  {teacherCoursesData.filter(c => c.isPublished).length}
                                </Text>
                                <Text size="1" color="gray">Published</Text>
                              </Flex>
                              <Flex direction="column">
                                <Text size="5" weight="bold" color="blue">
                                  {teacherCoursesData.reduce((acc, c) => acc + c.totalStudents, 0)}
                                </Text>
                                <Text size="1" color="gray">Total Students</Text>
                              </Flex>
                              <Flex direction="column">
                                <Text size="5" weight="bold" color="green">
                                  {teacherCoursesData.reduce((acc, c) => acc + c.completedStudents, 0)}
                                </Text>
                                <Text size="1" color="gray">Completions</Text>
                              </Flex>
                              <Flex direction="column">
                                <Text size="5" weight="bold" color="pink">
                                  4.8
                                </Text>
                                <Text size="1" color="gray">Avg. Rating</Text>
                              </Flex>
                            </Grid>
                          </Card>
                        </Box>
                      </>
                    ) : (
                      /* Empty State */
                      <Card size="4" style={{ textAlign: 'center', padding: '60px 40px' }}>
                        <Flex direction="column" align="center" gap="4">
                          <Box 
                            style={{ 
                              width: '80px', 
                              height: '80px', 
                              borderRadius: '50%',
                              backgroundColor: 'var(--violet-3)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <PlusIcon width="32" height="32" color="var(--violet-9)" />
                          </Box>
                          <Heading size="5">Start Teaching Today</Heading>
                          <Text size="3" color="gray" style={{ maxWidth: '400px' }}>
                            Share your knowledge with students around the world. Create your first course and make an impact.
                          </Text>
                          <Button size="3" onClick={() => window.location.href = '/course-editor'}>
                            Create Your First Course
                          </Button>
                        </Flex>
                      </Card>
                    )}
                  </Box>
              )}

              {/* Quick Actions */}
              <Box mt="8">
                <Heading size="4" mb="3">Quick Actions</Heading>
                <Grid columns="4" gap="3">
                  <Card size="2" style={{ cursor: 'pointer' }}>
                    <Flex direction="column" gap="2">
                      <Text size="2" weight="bold">Continue Learning</Text>
                      <Text size="1" color="gray">Resume your last chapter</Text>
                    </Flex>
                  </Card>
                  <Card size="2" style={{ cursor: 'pointer' }}>
                    <Flex direction="column" gap="2">
                      <Text size="2" weight="bold">Browse Catalog</Text>
                      <Text size="1" color="gray">Discover new courses</Text>
                    </Flex>
                  </Card>
                  <Card size="2" style={{ cursor: 'pointer' }}>
                    <Flex direction="column" gap="2">
                      <Text size="2" weight="bold">View Analytics</Text>
                      <Text size="1" color="gray">Track your teaching impact</Text>
                    </Flex>
                  </Card>
                  <Card size="2" style={{ cursor: 'pointer' }}>
                    <Flex direction="column" gap="2">
                      <Text size="2" weight="bold">Community</Text>
                      <Text size="1" color="gray">Connect with peers</Text>
                    </Flex>
                  </Card>
                </Grid>
              </Box>
            </Container>
          </Box>
        </Flex>
      </Box>
    </Theme>
  );
};

export default DashboardPage;