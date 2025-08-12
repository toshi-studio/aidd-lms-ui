import React from 'react';
import { Theme, Box, Container, Flex, Grid, Heading, Text, Button, Card, IconButton, Separator } from '@radix-ui/themes';
import { PlusIcon, ImageIcon, VideoIcon, TextIcon, TrashIcon, DotsVerticalIcon, ArrowUpIcon, ArrowDownIcon } from '@radix-ui/react-icons';
import Banner from '../components/Banner';
import Sidebar from '../components/Sidebar';
import { getAssetPath } from '../utils/assets';

const CourseEditorPage: React.FC = () => {
  // Sample teacher data
  const teacherName = 'Alex';
  const teacherAvatar = getAssetPath('/assets/avatar.png');

  // Sample chapters for sidebar
  const chapters = [
    { id: 'chapter-1', title: 'Chapter 1: Introduction', status: 'completed' as const },
    { id: 'chapter-2', title: 'Chapter 2: Getting Started', status: 'completed' as const },
    { id: 'chapter-3', title: 'Chapter 3: Advanced Topics', status: 'in-progress' as const }
  ];

  // Sample chapter list for course editor
  const courseChapters = [
    { id: 'chapter-1', title: 'Chapter 1: Introduction' },
    { id: 'chapter-2', title: 'Chapter 2: Getting Started' },
    { id: 'chapter-3', title: 'Chapter 3: Advanced Topics' }
  ];

  // Sample content blocks for chapter editor
  const contentBlocks = [
    { id: 'block-1', type: 'text', content: 'This is a text paragraph...' },
    { id: 'block-2', type: 'video', content: 'video-url.mp4' },
    { id: 'block-3', type: 'image', content: 'image-url.jpg' }
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
            variant="course-editor"
            chapters={chapters}
            onAddChapter={() => {
              console.log('Add chapter clicked');
            }}
          />

          {/* Main Content */}
          <Box style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
            <Container size="4">
              <Grid columns="2" gap="6">
                {/* Course Edition Column */}
                <Card size="3">
                  <Heading size="5" mb="4">Course Details</Heading>
                  
                  {/* Course Title */}
                  <Box mb="4">
                    <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                      Course Title
                    </Text>
                    <input
                      type="text"
                      placeholder="Enter course title"
                      defaultValue="Introduction to AI"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1px solid var(--gray-6)',
                        backgroundColor: 'var(--color-panel-solid)',
                        color: 'var(--gray-12)',
                        fontSize: '16px'
                      }}
                    />
                  </Box>

                  {/* Course Image */}
                  <Box mb="4">
                    <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                      Course Image
                    </Text>
                    <Box 
                      style={{ 
                        border: '2px dashed #e5e5e5',
                        borderRadius: '8px',
                        padding: '40px',
                        textAlign: 'center',
                        backgroundColor: '#f9f9f9',
                        cursor: 'pointer'
                      }}
                    >
                      <ImageIcon width="32" height="32" color="#999" />
                      <Text size="2" color="gray" style={{ display: 'block', marginTop: '8px' }}>
                        Click to upload image
                      </Text>
                    </Box>
                  </Box>

                  {/* Course Description */}
                  <Box mb="4">
                    <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                      Course Description (Markdown)
                    </Text>
                    <textarea
                      placeholder="Enter course description..."
                      style={{ 
                        minHeight: '120px', 
                        width: '100%', 
                        padding: '8px 12px', 
                        borderRadius: 'var(--radius-2)', 
                        border: '1px solid var(--gray-6)', 
                        backgroundColor: 'var(--color-panel-solid)', 
                        color: 'var(--gray-12)', 
                        fontFamily: 'inherit',
                        fontSize: 'var(--font-size-2)',
                        resize: 'vertical'
                      }}
                      defaultValue="Learn the fundamentals of artificial intelligence in this comprehensive course."
                    />
                  </Box>

                  <Separator size="4" my="4" />

                  {/* Chapter List */}
                  <Heading size="4" mb="3">Chapters</Heading>
                  <Flex direction="column" gap="2">
                    {courseChapters.map((chapter, index) => (
                      <Card key={chapter.id} size="2">
                        <Flex align="center" gap="2">
                          <IconButton size="1" variant="ghost">
                            <DotsVerticalIcon />
                          </IconButton>
                          <Text size="2" style={{ flex: 1 }}>{chapter.title}</Text>
                          <Flex gap="1">
                            <IconButton size="1" variant="ghost">
                              <ArrowUpIcon />
                            </IconButton>
                            <IconButton size="1" variant="ghost">
                              <ArrowDownIcon />
                            </IconButton>
                          </Flex>
                        </Flex>
                      </Card>
                    ))}
                  </Flex>
                </Card>

                {/* Chapter Edition Column */}
                <Card size="3">
                  <Heading size="5" mb="4">Chapter Editor</Heading>
                  
                  {/* Chapter Title */}
                  <Box mb="4">
                    <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                      Chapter Title
                    </Text>
                    <input
                      type="text"
                      placeholder="Enter chapter title"
                      defaultValue="Chapter 3: Advanced Topics"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1px solid var(--gray-6)',
                        backgroundColor: 'var(--color-panel-solid)',
                        color: 'var(--gray-12)',
                        fontSize: '16px'
                      }}
                    />
                  </Box>

                  {/* Add Content Button */}
                  <Button size="2" variant="soft" color="violet" mb="4">
                    <PlusIcon />
                    Add Paragraph
                  </Button>

                  <Separator size="4" mb="4" />

                  {/* Content Blocks */}
                  <Flex direction="column" gap="3">
                    {contentBlocks.map((block) => (
                      <Card key={block.id} size="2">
                        <Flex justify="between" align="start" mb="2">
                          <Flex align="center" gap="2">
                            {block.type === 'text' && <TextIcon />}
                            {block.type === 'video' && <VideoIcon />}
                            {block.type === 'image' && <ImageIcon />}
                            <Text size="2" weight="medium">
                              {block.type === 'text' ? 'Text Block' : 
                               block.type === 'video' ? 'Video Block' : 
                               'Image Block'}
                            </Text>
                          </Flex>
                          <IconButton size="1" variant="ghost" color="red">
                            <TrashIcon />
                          </IconButton>
                        </Flex>

                        {/* Content based on type */}
                        {block.type === 'text' && (
                          <textarea
                            placeholder="Enter text content (Markdown supported)..."
                            style={{ 
                              minHeight: '100px', 
                              width: '100%', 
                              padding: '8px 12px', 
                              borderRadius: 'var(--radius-2)', 
                              border: '1px solid var(--gray-6)', 
                              backgroundColor: 'var(--color-panel-solid)', 
                              color: 'var(--gray-12)', 
                              fontFamily: 'inherit',
                              fontSize: 'var(--font-size-2)',
                              resize: 'vertical'
                            }}
                            defaultValue={block.content}
                          />
                        )}
                        {block.type === 'video' && (
                          <Box 
                            style={{ 
                              border: '1px solid #e5e5e5',
                              borderRadius: '4px',
                              padding: '20px',
                              textAlign: 'center',
                              backgroundColor: '#f9f9f9'
                            }}
                          >
                            <VideoIcon width="24" height="24" color="#999" />
                            <Text size="1" color="gray" style={{ display: 'block', marginTop: '4px' }}>
                              Upload Video
                            </Text>
                          </Box>
                        )}
                        {block.type === 'image' && (
                          <Box 
                            style={{ 
                              border: '1px solid #e5e5e5',
                              borderRadius: '4px',
                              padding: '20px',
                              textAlign: 'center',
                              backgroundColor: '#f9f9f9'
                            }}
                          >
                            <ImageIcon width="24" height="24" color="#999" />
                            <Text size="1" color="gray" style={{ display: 'block', marginTop: '4px' }}>
                              Upload Image
                            </Text>
                          </Box>
                        )}
                      </Card>
                    ))}
                  </Flex>

                  {/* Save Actions */}
                  <Flex gap="3" mt="6" justify="end">
                    <Button variant="soft" color="gray">
                      Save Draft
                    </Button>
                    <Button color="violet">
                      Publish Chapter
                    </Button>
                  </Flex>
                </Card>
              </Grid>
            </Container>
          </Box>
        </Flex>
      </Box>
    </Theme>
  );
};

export default CourseEditorPage;