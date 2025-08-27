import React, { useState } from 'react';
import { Theme, Box, Flex, Grid, Heading, Text, Button, Card, IconButton, Separator, Badge, Select, TextField, TextArea } from '@radix-ui/themes';
import { PlusIcon, ImageIcon, VideoIcon, TrashIcon, DotsVerticalIcon, ArrowUpIcon, ArrowDownIcon, Pencil1Icon, ChevronDownIcon, ChevronRightIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';
import Banner from '../components/Banner';
import { getAssetPath } from '../utils/assets';

const CourseEditorPage: React.FC = () => {
  const teacherName = 'Alex';
  const teacherAvatar = getAssetPath('/assets/avatar.png');
  
  const [selectedChapter, setSelectedChapter] = useState('chapter-1');
  const [selectedLesson, setSelectedLesson] = useState('lesson-1');
  const [expandedChapters, setExpandedChapters] = useState<string[]>(['chapter-1', 'chapter-2', 'chapter-3']);
  const [selectedView, setSelectedView] = useState<'course' | 'chapter' | 'lesson'>('course');

  // Sample data structure for course > chapters > lessons
  const courseData = {
    title: 'Introduction to AI',
    description: 'Learn the fundamentals of artificial intelligence in this comprehensive course.',
    image: null,
    chapters: [
      {
        id: 'chapter-1',
        title: 'Introduction to AI Fundamentals',
        order: 1,
        lessons: [
          { id: 'lesson-1', title: 'What is Artificial Intelligence?', order: 1 },
          { id: 'lesson-2', title: 'History of AI', order: 2 },
          { id: 'lesson-3', title: 'AI Applications Today', order: 3 }
        ]
      },
      {
        id: 'chapter-2',
        title: 'Machine Learning Basics',
        order: 2,
        lessons: [
          { id: 'lesson-4', title: 'Introduction to Machine Learning', order: 1 },
          { id: 'lesson-5', title: 'Supervised vs Unsupervised Learning', order: 2 }
        ]
      },
      {
        id: 'chapter-3',
        title: 'Deep Learning and Neural Networks',
        order: 3,
        lessons: [
          { id: 'lesson-6', title: 'Neural Network Architecture', order: 1 },
          { id: 'lesson-7', title: 'Training Neural Networks', order: 2 }
        ]
      }
    ]
  };


  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const toggleAllChapters = () => {
    const allChapterIds = courseData.chapters.map(ch => ch.id);
    if (expandedChapters.length === allChapterIds.length) {
      setExpandedChapters([]);
    } else {
      setExpandedChapters(allChapterIds);
    }
  };

  const currentChapter = courseData.chapters.find(ch => ch.id === selectedChapter);
  const currentLesson = currentChapter?.lessons.find(l => l.id === selectedLesson);

  return (
    <Theme appearance="inherit">
      <Box style={{ minHeight: '100vh', backgroundColor: 'var(--gray-1)' }}>
        <Banner isLoggedIn={true} userName={teacherName} avatarUrl={teacherAvatar} />
        
        <Flex style={{ height: 'calc(100vh - 64px)' }}>
          {/* Custom Sidebar for Course Editor */}
          <Box
            style={{
              width: '320px',
              height: 'calc(100vh - 64px)',
              backgroundColor: 'var(--gray-2)',
              borderRight: '1px solid var(--gray-5)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto'
            }}
          >
            {/* Course Title Header */}
            <Box p="3" style={{ backgroundColor: 'white', borderBottom: '1px solid var(--gray-5)' }}>
              <Flex align="center" justify="between">
                <Box>
                  <Text 
                    size="3" 
                    weight="bold" 
                    style={{ 
                      display: 'block', 
                      cursor: 'pointer',
                      color: selectedView === 'course' ? 'var(--violet-9)' : 'inherit'
                    }}
                    onClick={() => setSelectedView('course')}
                  >
                    {courseData.title}
                  </Text>
                  <Text size="1" color="gray">Course Structure</Text>
                </Box>
                <IconButton 
                  size="1" 
                  variant="ghost"
                  onClick={() => setSelectedView('course')}
                  style={{ color: selectedView === 'course' ? 'var(--violet-9)' : 'var(--gray-9)' }}
                >
                  <Pencil1Icon />
                </IconButton>
              </Flex>
            </Box>

            {/* Expand/Collapse Controls */}
            <Box p="2" style={{ backgroundColor: 'var(--gray-1)', borderBottom: '1px solid var(--gray-4)' }}>
              <Button 
                size="1" 
                variant="ghost" 
                onClick={toggleAllChapters}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {expandedChapters.length === courseData.chapters.length ? (
                  <>
                    <ChevronDownIcon />
                    <Text size="1" ml="1">Collapse All Chapters</Text>
                  </>
                ) : (
                  <>
                    <ChevronRightIcon />
                    <Text size="1" ml="1">Expand All Chapters</Text>
                  </>
                )}
              </Button>
            </Box>

            {/* Chapters and Lessons Tree */}
            <Box style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
              {courseData.chapters.map((chapter) => (
                <Box key={chapter.id} mb="2">
                  {/* Chapter Item */}
                  <Card
                    size="2"
                    style={{
                      backgroundColor: selectedChapter === chapter.id ? 'var(--violet-3)' : 'white',
                      border: `2px solid ${selectedChapter === chapter.id ? 'var(--violet-6)' : 'var(--gray-5)'}`,
                      marginBottom: '4px',
                      cursor: 'move'
                    }}
                  >
                    <Flex align="center" gap="2">
                      <IconButton
                        size="1"
                        variant="ghost"
                        onClick={() => toggleChapter(chapter.id)}
                        style={{ cursor: 'pointer' }}
                      >
                        {expandedChapters.includes(chapter.id) ? 
                          <ChevronDownIcon /> : <ChevronRightIcon />}
                      </IconButton>
                      <DotsVerticalIcon style={{ cursor: 'move', color: 'var(--gray-9)' }} />
                      <Text 
                        size="2" 
                        weight="bold"
                        style={{ 
                          flex: 1, 
                          cursor: 'pointer',
                          color: selectedView === 'chapter' && selectedChapter === chapter.id ? 'var(--violet-9)' : 'inherit'
                        }}
                        onClick={() => {
                          setSelectedChapter(chapter.id);
                          setSelectedView('chapter');
                        }}
                      >
                        {chapter.title}
                      </Text>
                      <IconButton size="1" variant="ghost">
                        <DotsHorizontalIcon />
                      </IconButton>
                    </Flex>
                  </Card>

                  {/* Lessons under Chapter */}
                  {expandedChapters.includes(chapter.id) && (
                    <Box ml="4" mt="1">
                      {chapter.lessons.map((lesson) => (
                        <Card
                          key={lesson.id}
                          size="1"
                          style={{
                            backgroundColor: selectedLesson === lesson.id ? 'var(--violet-2)' : 'var(--gray-1)',
                            border: `1px ${selectedLesson === lesson.id ? 'dashed' : 'solid'} ${
                              selectedLesson === lesson.id ? 'var(--violet-6)' : 'var(--gray-4)'
                            }`,
                            marginBottom: '4px',
                            marginLeft: '20px',
                            cursor: 'pointer'
                          }}
                          onClick={() => {
                            setSelectedChapter(chapter.id);
                            setSelectedLesson(lesson.id);
                            setSelectedView('lesson');
                          }}
                        >
                          <Flex align="center" gap="2">
                            <DotsVerticalIcon 
                              style={{ 
                                cursor: 'move', 
                                color: 'var(--gray-7)',
                                opacity: 0.6
                              }} 
                            />
                            <Text 
                              size="2" 
                              style={{ 
                                color: selectedView === 'lesson' && selectedLesson === lesson.id ? 'var(--violet-9)' : 'inherit'
                              }}
                            >
                              {lesson.title}
                            </Text>
                            <IconButton size="1" variant="ghost" ml="auto">
                              <DotsHorizontalIcon />
                            </IconButton>
                          </Flex>
                        </Card>
                      ))}
                      <Button 
                        size="1" 
                        variant="ghost" 
                        color="violet"
                        style={{ 
                          marginLeft: '20px',
                          marginTop: '4px',
                          width: 'calc(100% - 20px)' 
                        }}
                      >
                        <PlusIcon />
                        Add Lesson
                      </Button>
                    </Box>
                  )}
                </Box>
              ))}
              
              {/* Add Chapter Button */}
              <Button 
                size="2" 
                variant="soft" 
                color="violet"
                style={{ width: '100%', marginTop: '12px' }}
              >
                <PlusIcon />
                Add Chapter
              </Button>
            </Box>
          </Box>

          {/* Main Content with Tabs */}
          <Box style={{ flex: 1, overflowY: 'auto' }}>
            <Box style={{ padding: '0 16px', width: '100%' }}>
              <Heading size="6" mb="4" mt="4">Course Editor: {courseData.title}</Heading>
              
              {/* Dynamic Content Based on Sidebar Selection */}
              {selectedView === 'course' && (
                <Card size="3">
                  <Heading size="5" mb="4">Course Information</Heading>
                    
                    <Grid columns="2" gap="6">
                      <Box>
                        {/* Course Title */}
                        <Box mb="4">
                          <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                            Course Title
                          </Text>
                          <TextField.Root
                            size="3"
                            placeholder="Enter course title"
                            defaultValue={courseData.title}
                          />
                        </Box>

                        {/* Course Category */}
                        <Box mb="4">
                          <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                            Category
                          </Text>
                          <Select.Root defaultValue="ai" size="3">
                            <Select.Trigger placeholder="Select category" />
                            <Select.Content>
                              <Select.Item value="ai">AI & Machine Learning</Select.Item>
                              <Select.Item value="development">Development</Select.Item>
                              <Select.Item value="business">Business & Analytics</Select.Item>
                              <Select.Item value="design">Design</Select.Item>
                            </Select.Content>
                          </Select.Root>
                        </Box>

                        {/* Course Level */}
                        <Box mb="4">
                          <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                            Difficulty Level
                          </Text>
                          <Select.Root defaultValue="beginner" size="3">
                            <Select.Trigger placeholder="Select level" />
                            <Select.Content>
                              <Select.Item value="beginner">Beginner</Select.Item>
                              <Select.Item value="intermediate">Intermediate</Select.Item>
                              <Select.Item value="advanced">Advanced</Select.Item>
                            </Select.Content>
                          </Select.Root>
                        </Box>

                        {/* Course Duration */}
                        <Box mb="4">
                          <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                            Estimated Duration (hours)
                          </Text>
                          <TextField.Root
                            size="3"
                            type="number"
                            placeholder="e.g., 40"
                            defaultValue="40"
                          />
                        </Box>
                      </Box>

                      <Box>
                        {/* Course Image */}
                        <Box mb="4">
                          <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                            Course Thumbnail
                          </Text>
                          <Box 
                            style={{ 
                              border: '2px dashed var(--gray-6)',
                              borderRadius: '8px',
                              padding: '60px 40px',
                              textAlign: 'center',
                              backgroundColor: 'var(--gray-2)',
                              cursor: 'pointer'
                            }}
                          >
                            <ImageIcon width="40" height="40" style={{ color: 'var(--gray-9)' }} />
                            <Text size="2" color="gray" style={{ display: 'block', marginTop: '12px' }}>
                              Click to upload course image
                            </Text>
                            <Text size="1" color="gray" style={{ display: 'block', marginTop: '4px' }}>
                              Recommended: 1200x600px
                            </Text>
                          </Box>
                        </Box>

                        {/* Course Status */}
                        <Box mb="4">
                          <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                            Publication Status
                          </Text>
                          <Select.Root defaultValue="draft" size="3">
                            <Select.Trigger />
                            <Select.Content>
                              <Select.Item value="draft">Draft</Select.Item>
                              <Select.Item value="published">Published</Select.Item>
                              <Select.Item value="archived">Archived</Select.Item>
                            </Select.Content>
                          </Select.Root>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Course Description */}
                    <Box mb="4">
                      <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                        Course Description (Markdown supported)
                      </Text>
                      <TextArea
                        size="3"
                        placeholder="Enter a comprehensive course description..."
                        defaultValue={courseData.description}
                        style={{ minHeight: '150px' }}
                      />
                    </Box>

                    {/* Learning Objectives */}
                    <Box mb="4">
                      <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                        Learning Objectives
                      </Text>
                      <TextArea
                        size="3"
                        placeholder="• Understand the fundamentals of AI&#10;• Learn machine learning concepts&#10;• Build your first AI model"
                        defaultValue="• Understand the fundamentals of AI&#10;• Learn machine learning concepts&#10;• Build your first AI model"
                        style={{ minHeight: '120px' }}
                      />
                    </Box>

                    {/* Save Actions */}
                    <Flex gap="3" justify="end">
                      <Button variant="soft" color="gray" size="3">
                        Save as Draft
                      </Button>
                      <Button color="violet" size="3">
                        Save & Publish
                      </Button>
                    </Flex>
                </Card>
              )}
              
              {selectedView === 'chapter' && (
                <Card size="3">
                  <Heading size="5" mb="4">Edit Chapter</Heading>
                  
                  {currentChapter ? (
                      <>
                        <Grid columns="2" gap="4" mb="4">
                          <Box>
                            <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                              Chapter Title
                            </Text>
                            <TextField.Root
                              size="3"
                              placeholder="Enter chapter title"
                              defaultValue={currentChapter.title}
                            />
                          </Box>
                          <Box>
                            <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                              Chapter Order
                            </Text>
                            <TextField.Root
                              size="3"
                              type="number"
                              placeholder="1"
                              defaultValue={currentChapter.order.toString()}
                            />
                          </Box>
                        </Grid>

                        <Box mb="4">
                          <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                            Chapter Description (Optional)
                          </Text>
                          <TextArea
                            size="3"
                            placeholder="Enter chapter description or learning objectives..."
                            style={{ minHeight: '120px' }}
                          />
                        </Box>

                        <Separator size="4" mb="4" />

                        <Box mb="4">
                          <Text size="3" weight="medium" mb="3">Lessons in this Chapter</Text>
                          <Flex direction="column" gap="2">
                            {currentChapter.lessons.map((lesson) => (
                              <Card key={lesson.id} size="2">
                                <Flex align="center" gap="3">
                                  <IconButton size="1" variant="ghost" style={{ cursor: 'move' }}>
                                    <DotsVerticalIcon />
                                  </IconButton>
                                  <Badge size="1" variant="soft">#{lesson.order}</Badge>
                                  <Text size="2" style={{ flex: 1 }}>{lesson.title}</Text>
                                  <Flex gap="1">
                                    <IconButton size="1" variant="ghost">
                                      <ArrowUpIcon />
                                    </IconButton>
                                    <IconButton size="1" variant="ghost">
                                      <ArrowDownIcon />
                                    </IconButton>
                                    <IconButton size="1" variant="ghost">
                                      <Pencil1Icon />
                                    </IconButton>
                                    <IconButton size="1" variant="ghost" color="red">
                                      <TrashIcon />
                                    </IconButton>
                                  </Flex>
                                </Flex>
                              </Card>
                            ))}
                          </Flex>
                          <Button size="2" variant="soft" color="violet" mt="3" style={{ width: '100%' }}>
                            <PlusIcon />
                            Add Lesson to Chapter
                          </Button>
                        </Box>

                        <Flex gap="3" justify="end">
                          <Button size="3" variant="soft" color="gray">
                            Cancel
                          </Button>
                          <Button size="3" color="violet">
                            Save Chapter
                          </Button>
                        </Flex>
                      </>
                    ) : (
                      <Flex 
                        align="center" 
                        justify="center" 
                        style={{ 
                          minHeight: '400px',
                          border: '1px dashed var(--gray-6)',
                          borderRadius: '8px',
                          backgroundColor: 'var(--gray-2)'
                        }}
                      >
                        <Text size="3" color="gray">Select a chapter to edit</Text>
                      </Flex>
                  )}
                </Card>
              )}
              
              {selectedView === 'lesson' && (

                  <Grid columns="2" gap="4" mt="4">
                    {/* Left Column: Lesson Editor */}
                    <Card size="3">
                        <Heading size="4" mb="3">Lesson Editor</Heading>
                        {currentLesson && (
                          <>
                            {/* Lesson Title */}
                            <Box mb="4">
                              <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                                Lesson Title
                              </Text>
                              <TextField.Root
                                size="3"
                                placeholder="Enter lesson title"
                                defaultValue={currentLesson.title}
                              />
                            </Box>

                            {/* Lesson Content - Markdown Editor */}
                            <Box mb="4">
                              <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                                Lesson Content (Markdown Editor)
                              </Text>
                              <TextArea
                                size="3"
                                placeholder="Write your lesson content here...&#10;&#10;## Formatting supported:&#10;- **Bold text**&#10;- *Italic text*&#10;- [Links](url)&#10;- ![Images](image-url)&#10;- Code blocks with ```&#10;- Lists and more..."
                                defaultValue="Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn like humans.&#10;&#10;## Key Concepts&#10;&#10;AI systems are designed to perform tasks that typically require human intelligence, such as:&#10;&#10;- Visual perception&#10;- Speech recognition&#10;- Decision-making&#10;- Language translation&#10;&#10;### Machine Learning&#10;&#10;Machine learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed."
                                style={{ minHeight: '400px', fontFamily: 'monospace' }}
                              />
                              <Text size="1" color="gray" style={{ display: 'block', marginTop: '4px' }}>
                                You can upload images directly through the markdown editor
                              </Text>
                            </Box>

                            {/* Video Upload */}
                            <Box mb="4">
                              <Text size="2" weight="medium" style={{ display: 'block', marginBottom: '8px' }}>
                                Lesson Video (Optional)
                              </Text>
                              <Box 
                                style={{ 
                                  border: '2px dashed var(--gray-6)',
                                  borderRadius: '8px',
                                  padding: '40px',
                                  textAlign: 'center',
                                  backgroundColor: 'var(--gray-2)',
                                  cursor: 'pointer'
                                }}
                              >
                                <VideoIcon width="32" height="32" style={{ color: 'var(--gray-9)' }} />
                                <Text size="2" color="gray" style={{ display: 'block', marginTop: '12px' }}>
                                  Click to upload video
                                </Text>
                                <Text size="1" color="gray" style={{ display: 'block', marginTop: '4px' }}>
                                  MP4, WebM, or Ogg (max 500MB)
                                </Text>
                              </Box>
                            </Box>

                            {/* Save Actions */}
                            <Flex gap="3" justify="end">
                              <Button variant="soft" color="gray" size="3">
                                Save Draft
                              </Button>
                              <Button color="violet" size="3">
                                Save Lesson
                              </Button>
                            </Flex>
                          </>
                        )}
                    </Card>

                    {/* Right Column: Preview */}
                    <Card size="3">
                      <Flex justify="between" align="center" mb="3">
                        <Heading size="4">Lesson Preview</Heading>
                        <Badge color="green" variant="soft">Live Preview</Badge>
                      </Flex>
                      
                      {currentLesson ? (
                        <Box 
                          style={{ 
                            border: '1px solid var(--gray-4)',
                            borderRadius: '8px',
                            padding: '24px',
                            backgroundColor: 'var(--gray-1)',
                            minHeight: '600px'
                          }}
                        >
                          {/* Preview Header */}
                          <Box mb="4">
                            <Text size="1" color="gray">Chapter {currentChapter?.order} • Lesson {currentLesson.order}</Text>
                            <Heading size="5" mt="2">{currentLesson.title}</Heading>
                          </Box>
                          
                          <Separator size="4" mb="4" />
                          
                          {/* Preview Content - Rendered Markdown */}
                          <Box mb="4">
                            <Text size="3" style={{ lineHeight: '1.8' }}>
                              Artificial Intelligence (AI) is the simulation of human intelligence in machines that are programmed to think and learn like humans.
                            </Text>
                            
                            <Heading size="4" mt="4" mb="2">Key Concepts</Heading>
                            <Text size="3" style={{ lineHeight: '1.8' }}>
                              AI systems are designed to perform tasks that typically require human intelligence, such as:
                            </Text>
                            
                            <Box ml="3" mt="2">
                              <Text size="3" style={{ lineHeight: '1.8' }}>
                                • Visual perception<br />
                                • Speech recognition<br />
                                • Decision-making<br />
                                • Language translation
                              </Text>
                            </Box>
                            
                            <Heading size="5" mt="4" mb="2">Machine Learning</Heading>
                            <Text size="3" style={{ lineHeight: '1.8' }}>
                              Machine learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.
                            </Text>
                          </Box>

                          {/* Video Player Placeholder */}
                          <Box 
                            style={{ 
                              width: '100%',
                              height: '400px',
                              borderRadius: '8px',
                              backgroundColor: 'var(--gray-12)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              position: 'relative',
                              marginTop: '24px'
                            }}
                          >
                            <Box 
                              style={{ 
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer'
                              }}
                            >
                              <Box
                                style={{
                                  width: '0',
                                  height: '0',
                                  borderLeft: '30px solid white',
                                  borderTop: '20px solid transparent',
                                  borderBottom: '20px solid transparent',
                                  marginLeft: '8px'
                                }}
                              />
                            </Box>
                            <Text 
                              size="1" 
                              style={{ 
                                position: 'absolute',
                                bottom: '16px',
                                left: '16px',
                                color: 'white',
                                backgroundColor: 'rgba(0,0,0,0.6)',
                                padding: '4px 8px',
                                borderRadius: '4px'
                              }}
                            >
                              Lesson Video
                            </Text>
                          </Box>

                          {/* Navigation Footer */}
                          <Flex justify="between" mt="8" pt="4" style={{ borderTop: '1px solid var(--gray-4)' }}>
                            <Button variant="soft" size="2">
                              ← Previous Lesson
                            </Button>
                            <Button variant="soft" size="2">
                              Next Lesson →
                            </Button>
                          </Flex>
                        </Box>
                      ) : (
                        <Flex 
                          align="center" 
                          justify="center" 
                          style={{ 
                            minHeight: '400px',
                            border: '1px solid var(--gray-4)',
                            borderRadius: '8px',
                            backgroundColor: 'var(--gray-1)'
                          }}
                        >
                          <Text size="3" color="gray">Select a lesson to preview</Text>
                        </Flex>
                      )}
                    </Card>
                  </Grid>
              )}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Theme>
  );
};

export default CourseEditorPage;