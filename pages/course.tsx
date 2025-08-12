import React from 'react';
import { Theme, Box, Container, Flex, Heading, Text, Button, Separator } from '@radix-ui/themes';
import { CheckIcon } from '@radix-ui/react-icons';
import Banner from '../components/Banner';
import Sidebar from '../components/Sidebar';

const CoursePage: React.FC = () => {
  // Sample student data
  const studentName = 'Toshi';
  const studentAvatar = '/assets/avatar.png';

  // Sample course data
  const courseTitle = 'Introduction to AI';
  const currentChapterId = 'chapter-3';

  // Sample chapters with status
  const chapters = [
    { id: 'chapter-1', title: 'Chapter 1: What is AI?', status: 'completed' as const },
    { id: 'chapter-2', title: 'Chapter 2: Machine Learning Basics', status: 'completed' as const },
    { id: 'chapter-3', title: 'Chapter 3: Neural Networks', status: 'in-progress' as const },
    { id: 'chapter-4', title: 'Chapter 4: Deep Learning', status: 'not-started' as const },
    { id: 'chapter-5', title: 'Chapter 5: Natural Language Processing', status: 'not-started' as const },
    { id: 'chapter-6', title: 'Chapter 6: Computer Vision', status: 'not-started' as const }
  ];

  // Current chapter content
  const currentChapter = chapters.find(ch => ch.id === currentChapterId);

  return (
    <Theme appearance="inherit">
      <Box style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)' }}>
        <Banner isLoggedIn={true} userName={studentName} avatarUrl={studentAvatar} />
        
        <Flex style={{ height: 'calc(100vh - 64px)' }}>
          {/* Sidebar */}
          <Sidebar
            userName={studentName}
            avatarUrl={studentAvatar}
            variant="course-reader"
            chapters={chapters}
            courseTitle={courseTitle}
            onContactTeacher={() => {
              console.log('Contact teacher clicked');
            }}
          />

          {/* Main Content */}
          <Box style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
            <Container size="3">
              {/* Chapter Title */}
              <Heading size="7" mb="4">
                {currentChapter?.title || 'Chapter Not Found'}
              </Heading>

              <Separator size="4" mb="6" />

              {/* Chapter Content */}
              <Box>
                <Heading size="4" mb="3">Introduction</Heading>
                <Text size="3" style={{ display: 'block', marginBottom: '16px', lineHeight: '1.6' }}>
                  Neural networks are the foundation of modern artificial intelligence. In this chapter, 
                  we'll explore the basic concepts of neural networks, including neurons, layers, and 
                  activation functions. You'll learn how these components work together to create powerful 
                  models capable of learning complex patterns.
                </Text>

                <Heading size="4" mt="6" mb="3">Key Concepts</Heading>
                <Text size="3" style={{ display: 'block', marginBottom: '16px', lineHeight: '1.6' }}>
                  1. <strong>Neurons:</strong> The basic building blocks of neural networks, inspired by biological neurons.
                </Text>
                <Text size="3" style={{ display: 'block', marginBottom: '16px', lineHeight: '1.6' }}>
                  2. <strong>Layers:</strong> Collections of neurons that process information at different levels of abstraction.
                </Text>
                <Text size="3" style={{ display: 'block', marginBottom: '16px', lineHeight: '1.6' }}>
                  3. <strong>Weights and Biases:</strong> Parameters that the network learns during training.
                </Text>

                <Heading size="4" mt="6" mb="3">Understanding Forward Propagation</Heading>
                <Text size="3" style={{ display: 'block', marginBottom: '16px', lineHeight: '1.6' }}>
                  Forward propagation is the process by which input data flows through the network to produce 
                  an output. Each layer transforms the data using mathematical operations, gradually extracting 
                  more complex features. This process is deterministic once the network's parameters are set.
                </Text>

                {/* Placeholder for video content */}
                <Box 
                  my="6" 
                  style={{ 
                    backgroundColor: '#f0f0f0', 
                    height: '400px', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '8px'
                  }}
                >
                  <Text size="4" color="gray">Video: Neural Network Visualization</Text>
                </Box>

                <Heading size="4" mt="6" mb="3">Practice Exercise</Heading>
                <Text size="3" style={{ display: 'block', marginBottom: '16px', lineHeight: '1.6' }}>
                  Try implementing a simple neural network from scratch using Python and NumPy. Start with 
                  a two-layer network that can solve the XOR problem. This exercise will help you understand 
                  the mathematical operations happening inside neural networks.
                </Text>

                {/* Mark as Read Button */}
                <Flex justify="end" mt="8">
                  <Button size="3" color="green">
                    <CheckIcon />
                    Mark Chapter as Completed
                  </Button>
                </Flex>
              </Box>
            </Container>
          </Box>
        </Flex>
      </Box>
    </Theme>
  );
};

export default CoursePage;