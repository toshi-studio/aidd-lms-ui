import React from 'react';
import { Theme, Box, Container, Flex, Grid, Heading, Text, Card } from '@radix-ui/themes';
import { PlusIcon } from '@radix-ui/react-icons';
import Banner from '../components/Banner';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';

const DashboardTeacherPage: React.FC = () => {
  // Sample teacher data
  const teacherName = 'Alex';
  const teacherAvatar = '/assets/avatar.png';

  // Sample courses created by the teacher
  const teacherCourses = [
    {
      id: '1',
      title: 'Introduction to AI',
      isPublished: true
    },
    {
      id: '2',
      title: 'Advanced Machine Learning',
      isPublished: true
    },
    {
      id: '3',
      title: 'Deep Learning Fundamentals',
      isPublished: false
    },
    {
      id: '4',
      title: 'Computer Vision Masterclass',
      isPublished: true
    }
  ];

  // Sample published courses with statistics
  const publishedCoursesData = [
    {
      id: '1',
      title: 'Introduction to AI',
      image: '/assets/placeholder1.jpg',
      totalChapters: 6,
      completedStudents: 34,
      totalStudents: 120
    },
    {
      id: '2',
      title: 'Advanced Machine Learning',
      image: '/assets/placeholder2.jpg',
      totalChapters: 8,
      completedStudents: 15,
      totalStudents: 87
    },
    {
      id: '4',
      title: 'Computer Vision Masterclass',
      image: '/assets/placeholder4.jpg',
      totalChapters: 10,
      completedStudents: 5,
      totalStudents: 45
    }
  ];

  return (
    <Theme appearance="inherit">
      <Box style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)' }}>
        <Banner isLoggedIn={true} userName={teacherName} avatarUrl={teacherAvatar} />
        
        <Flex style={{ height: 'calc(100vh - 64px)' }}>
          {/* Sidebar */}
          <Sidebar
            userName={teacherName}
            avatarUrl={teacherAvatar}
            variant="teacher"
            courses={teacherCourses}
          />

          {/* Main Content */}
          <Box style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
            <Container size="4">
              <Heading size="7" mb="6">Published Courses</Heading>
              
              {publishedCoursesData.length > 0 ? (
                <Grid columns="3" gap="4">
                  {publishedCoursesData.map((course) => (
                    <CourseCard
                      key={course.id}
                      title={course.title}
                      image={course.image}
                      totalChapters={course.totalChapters}
                      completedStudents={course.completedStudents}
                      totalStudents={course.totalStudents}
                      isStudent={false}
                    />
                  ))}
                </Grid>
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
                    <Heading size="5">No Published Courses Yet</Heading>
                    <Text size="3" color="gray" style={{ maxWidth: '400px' }}>
                      You haven't published any courses yet. Create your first course and share your knowledge with students around the world.
                    </Text>
                  </Flex>
                </Card>
              )}

              {/* Stats Summary */}
              {publishedCoursesData.length > 0 && (
                <Box mt="8">
                  <Card size="3">
                    <Grid columns="3" gap="4">
                      <Flex direction="column" align="center">
                        <Text size="6" weight="bold">
                          {publishedCoursesData.length}
                        </Text>
                        <Text size="2" color="gray">Published Courses</Text>
                      </Flex>
                      <Flex direction="column" align="center">
                        <Text size="6" weight="bold">
                          {publishedCoursesData.reduce((acc, course) => acc + course.totalStudents, 0)}
                        </Text>
                        <Text size="2" color="gray">Total Students</Text>
                      </Flex>
                      <Flex direction="column" align="center">
                        <Text size="6" weight="bold">
                          {publishedCoursesData.reduce((acc, course) => acc + course.completedStudents, 0)}
                        </Text>
                        <Text size="2" color="gray">Course Completions</Text>
                      </Flex>
                    </Grid>
                  </Card>
                </Box>
              )}
            </Container>
          </Box>
        </Flex>
      </Box>
    </Theme>
  );
};

export default DashboardTeacherPage;