import React from 'react';
import { Card, Flex, Box, Text, Button, Heading } from '@radix-ui/themes';
import { ArrowRightIcon, ChatBubbleIcon } from '@radix-ui/react-icons';
import CompletionMeter from './CompletionMeter';

interface CourseCardProps {
  title: string;
  image: string;
  description?: string;
  completionPercentage?: number;
  currentChapter?: string;
  isStudent?: boolean;
  totalStudents?: number;
  completedStudents?: number;
  totalChapters?: number;
  onGoToChapter?: () => void;
  onContactTeacher?: () => void;
  isSkeleton?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  image,
  description,
  completionPercentage,
  currentChapter,
  isStudent = false,
  totalStudents,
  completedStudents,
  totalChapters,
  onGoToChapter,
  onContactTeacher,
  isSkeleton = false
}) => {
  // Skeleton state
  if (isSkeleton) {
    return (
      <Card size="3" style={{ width: '100%', maxWidth: '350px' }}>
        <Box style={{ height: '180px', backgroundColor: '#f0f0f0', borderRadius: '4px' }} />
        <Box mt="3">
          <Box style={{ height: '24px', backgroundColor: '#f0f0f0', borderRadius: '4px', width: '70%' }} />
          <Box mt="2" style={{ height: '16px', backgroundColor: '#f0f0f0', borderRadius: '4px', width: '100%' }} />
          <Box mt="1" style={{ height: '16px', backgroundColor: '#f0f0f0', borderRadius: '4px', width: '85%' }} />
        </Box>
      </Card>
    );
  }

  const [isHoveringCard, setIsHoveringCard] = React.useState(false);

  return (
    <Card
      size="3"
      onMouseEnter={() => setIsHoveringCard(true)}
      onMouseLeave={() => setIsHoveringCard(false)}
      style={{
        width: '100%',
        maxWidth: '350px',
        transition: 'transform 200ms ease, box-shadow 200ms ease',
        transform: isHoveringCard ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: isHoveringCard
          ? '0 10px 24px rgba(2, 2, 68, 0.18)'
          : 'none',
        willChange: 'transform, box-shadow'
      }}
    >
      {/* Course Image */}
      <Box style={{ position: 'relative', paddingBottom: '56.25%', overflow: 'hidden' }}>
        <img 
          src={image} 
          alt={title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '4px 4px 0 0'
          }}
        />
      </Box>

      {/* Course Content */}
      <Box p="3">
        <Heading size="4" mb="2">{title}</Heading>
        
        {description && (
          <Text
            size="2"
            color="gray"
            style={{
              marginBottom: '12px',
              minHeight: '40px',
              lineHeight: '20px',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical' as any
            }}
          >
            {description}
          </Text>
        )}

        {/* Student View */}
        {isStudent && completionPercentage !== undefined && (
          <>
            <Flex align="center" justify="between" mb="3">
              <CompletionMeter percentage={completionPercentage} size="small" />
              <Text size="2" weight="bold" color="violet">{completionPercentage}%</Text>
            </Flex>

            {currentChapter && (
              <Text size="2" color="gray" style={{ display: 'block', marginBottom: '12px' }}>
                Current: {currentChapter}
              </Text>
            )}

            <Flex gap="2" mt="3">
              <Button 
                size="2" 
                color="violet"
                style={{ flex: 1 }}
                onClick={onGoToChapter}
              >
                Go to chapter
                <ArrowRightIcon />
              </Button>
              <Button 
                size="2" 
                variant="soft"
                color="blue"
                onClick={onContactTeacher}
              >
                <ChatBubbleIcon />
              </Button>
            </Flex>
          </>
        )}

        {/* Teacher View */}
        {!isStudent && totalStudents !== undefined && (
          <>
            <Flex direction="column" gap="2">
              <Flex justify="between">
                <Text size="2" color="gray">Chapters:</Text>
                <Text size="2" weight="medium">{totalChapters || 0}</Text>
              </Flex>
              <Flex justify="between">
                <Text size="2" color="gray">Students:</Text>
                <Text size="2" weight="medium">
                  {completedStudents || 0} / {totalStudents}
                </Text>
              </Flex>
            </Flex>
          </>
        )}
      </Box>
    </Card>
  );
};

export default CourseCard;