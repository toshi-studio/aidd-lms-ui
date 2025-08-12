import React from 'react';
import { Theme, Box, Container, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import Banner from '../components/Banner';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';
import { getAssetPath } from '../utils/assets';

const DashboardStudentPage: React.FC = () => {
  // Sample student data
  const studentName = 'Toshi';
  const studentAvatar = '/assets/avatar.png';

  // Sample courses the student is enrolled in
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

  // Sample course cards data with progress
  const courseCardsData = [
    {
      id: '1',
      title: 'Introduction to AI',
      image: getAssetPath('/assets/placeholder1.jpg'),
      completionPercentage: 45,
      currentChapter: 'Chapter 3: Neural Networks',
      description: 'Learn the fundamentals of artificial intelligence'
    },
    {
      id: '2',
      title: 'Web Development Basics',
      image: getAssetPath('/assets/placeholder2.jpg'),
      completionPercentage: 20,
      currentChapter: 'Chapter 2: CSS Fundamentals',
      description: 'Master HTML, CSS, and JavaScript'
    },
    {
      id: '3',
      title: 'Data Science Essentials',
      image: getAssetPath('/assets/placeholder3.jpg'),
      completionPercentage: 80,
      currentChapter: 'Chapter 5: Data Visualization',
      description: 'Analyze data with Python and R'
    }
  ];

  return (
    <Theme appearance="inherit">
      <Box style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)' }}>
        <Banner isLoggedIn={true} userName={studentName} avatarUrl={studentAvatar} />
        
        <Flex style={{ height: 'calc(100vh - 64px)' }}>
          {/* Sidebar */}
          <Sidebar
            userName={studentName}
            avatarUrl={studentAvatar}
            variant="student"
            courses={enrolledCourses}
          />

          {/* Main Content */}
          <Box style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
            <Container size="4">
              <Heading size="7" mb="6">My Courses</Heading>
              
              <Grid columns="3" gap="4">
                {courseCardsData.map((course) => (
                  <CourseCard
                    key={course.id}
                    title={course.title}
                    image={course.image}
                    description={course.description}
                    completionPercentage={course.completionPercentage}
                    currentChapter={course.currentChapter}
                    isStudent={true}
                    onGoToChapter={() => {
                      // Navigate to course page
                      window.location.href = `/course?id=${course.id}`;
                    }}
                    onContactTeacher={() => {
                      // Open contact modal or navigate to messaging
                      console.log(`Contact teacher for course ${course.id}`);
                    }}
                  />
                ))}
                
                {/* Skeleton placeholders for empty slots */}
                {/* <CourseCard
                  title=""
                  image=""
                  isSkeleton={true}
                />
                <CourseCard
                  title=""
                  image=""
                  isSkeleton={true}
                /> */}
              </Grid>

              {/* Additional Info Section */}
              <Box mt="8">
                <Text size="2" color="gray">
                  Tip: Click "Go to chapter" to continue where you left off, or use the sidebar to browse all your courses.
                </Text>
              </Box>
            </Container>
          </Box>
        </Flex>
      </Box>
    </Theme>
  );
};

export default DashboardStudentPage;