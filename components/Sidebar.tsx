import React from 'react';
import { Box, Flex, Button, Text, Separator } from '@radix-ui/themes';
import { GearIcon, ExitIcon, PlusIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import AvatarBlock from './AvatarBlock';
import StatusPill from './StatusPill';

interface Course {
  id: string;
  title: string;
  currentChapter?: string;
  isPublished?: boolean;
}

interface Chapter {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'not-started';
}

interface SidebarProps {
  userName: string;
  avatarUrl?: string;
  variant: 'student' | 'teacher' | 'course-reader' | 'course-editor';
  courses?: Course[];
  chapters?: Chapter[];
  courseTitle?: string;
  onAddChapter?: () => void;
  onContactTeacher?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  userName,
  avatarUrl = '/assets/avatar.png',
  variant,
  courses = [],
  chapters = [],
  courseTitle,
  onAddChapter,
  onContactTeacher
}) => {
  return (
    <Box
      style={{
        width: '280px',
        height: 'calc(100vh - 64px)', // 90% of remaining height after banner
        backgroundColor: '#f9f9f9',
        borderRight: '1px solid #e5e5e5',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      {/* <Box p="4">
        <AvatarBlock name={userName} avatarUrl={avatarUrl} />
      </Box> */}

      <Separator size="4" />

      {/* Main Content */}
      <Box style={{ flex: 1, overflowY: 'auto' }} p="4">
        {/* Student Dashboard Sidebar */}
        {variant === 'student' && (
          <Flex direction="column" gap="3">
            <Text size="2" weight="bold" color="gray">My Courses</Text>
            {courses.map((course) => (
              <Link 
                key={course.id} 
                href={`/course?id=${course.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Box 
                  p="3" 
                  style={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid var(--violet-4)',
                    cursor: 'pointer'
                  }}
                >
                  <Text size="2" weight="medium" color="violet">{course.title}</Text>
                  {course.currentChapter && (
                    <><br /><Text size="1" color="gray">Current: {course.currentChapter}</Text></>
                  )}
                </Box>
              </Link>
            ))}
          </Flex>
        )}

        {/* Teacher Dashboard Sidebar */}
        {variant === 'teacher' && (
          <Flex direction="column" gap="3">
            <Button 
              size="3" 
              color="violet"
              style={{ width: '100%' }}
              onClick={() => window.location.href = '/course-editor'}
            >
              <PlusIcon />
              Create New Course
            </Button>
            
            <Text size="2" weight="bold" color="gray" mt="3">My Courses</Text>
            {courses.map((course) => (
              <Link 
                key={course.id} 
                href={`/course-editor?id=${course.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Flex 
                  align="center" 
                  justify="between"
                  p="3" 
                  style={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid var(--violet-4)',
                    cursor: 'pointer'
                  }}
                >
                  <Text size="2" weight="medium" color="violet">{course.title}</Text>
                  {course.isPublished && (
                    <StatusPill status="published" />
                  )}
                </Flex>
              </Link>
            ))}
          </Flex>
        )}

        {/* Course Reader Sidebar */}
        {variant === 'course-reader' && (
          <Flex direction="column" gap="3">
            <Text size="3" weight="bold">{courseTitle}</Text>
            
            <Button 
              variant="soft" 
              color="blue"
              onClick={onContactTeacher}
              style={{ width: '100%' }}
            >
              Contact Teacher
            </Button>

            <Separator size="4" my="3" />

            <Text size="2" weight="bold" color="gray">Chapters</Text>
            {chapters.map((chapter) => (
              <Link
                key={chapter.id}
                href={`/course?chapter=${chapter.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Flex align="center" gap="2" p="2">
                  <Box 
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      border: `2px solid ${
                        chapter.status === 'completed' ? '#65CA98' :
                        chapter.status === 'in-progress' ? '#FFA500' :
                        '#cccccc'
                      }`,
                      backgroundColor: chapter.status === 'completed' ? '#65CA98' : 'transparent'
                    }}
                  />
                  <Text size="2" color="violet">{chapter.title}</Text>
                </Flex>
              </Link>
            ))}
          </Flex>
        )}

        {/* Course Editor Sidebar */}
        {variant === 'course-editor' && (
          <Flex direction="column" gap="3">
            <Button 
              size="3" 
              variant="soft"
              color="violet"
              onClick={onAddChapter}
              style={{ width: '100%' }}
            >
              <PlusIcon />
              Add Chapter
            </Button>

            <Text size="2" weight="bold" color="gray" mt="3">Chapters</Text>
            {chapters.map((chapter) => (
              <Link
                key={chapter.id}
                href={`/course-editor?chapter=${chapter.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Box 
                  p="3" 
                  style={{ 
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    border: '1px solid var(--violet-4)',
                    cursor: 'pointer'
                  }}
                >
                  <Text size="2" color="violet">{chapter.title}</Text>
                </Box>
              </Link>
            ))}
          </Flex>
        )}
      </Box>

      {/* Footer */}
      {(variant === 'student' || variant === 'teacher') && (
        <>
          <Separator size="4" />
          <Box p="4">
            <Flex direction="column" gap="2">
              <Button variant="ghost" color="gray" style={{ justifyContent: 'flex-start' }}>
                <GearIcon />
                <Text ml="2">Settings</Text>
              </Button>
              <Button variant="ghost" color="gray" style={{ justifyContent: 'flex-start' }}>
                <ExitIcon />
                <Text ml="2">Sign out</Text>
              </Button>
            </Flex>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Sidebar;