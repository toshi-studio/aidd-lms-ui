# AIDD - LMS
This is a proposition of design for our ai-driven developped Learning Management System

## Technical requirements
- UI Components : Radix
- Theming framework : Radix Theme
- Responsive design
- Light/Dark Mode (auto and manual switching)

## Code Colors
- Main: #020244
- Secondaries: 
    - Pink: #C54C74
    - Green: #65CA98
    - Lavender: #4F4FEB

## Screens

### Public landing page 
- Header: Banner with links to sign-in and to register, a search tool
- Hero section with CTA to register
- Horizontal carousel that presents the available courses (5 courses, auto-scrolling, navigation arrows, page indicators)
- Testimonies
- Footer: site map, legals (the footer will be displayed on every page)

### Student dashboard
- Banner
- Left aside (90% of remaining height) with
    - Header containing avatar + firstname.
    - List of followed courses + current chapter
    - Footer containing link to the settings + link to sign out
- Main section is a dashboard that for each followed course present
    - The name of the course
    - The image representing the course
    - A circle completion meter in percent
    - The current chapter with an icon to "go to the chapter"
    - an icon to contact the teacher

### Course / Chapter reading
- Banner
- Left aside (90% of the remaining height) with
    - Header containing avatar + firstname
    - The title of the course
    - A link to contact the teacher
    - The list of each chapter of the courses with an empty circle: 
        - Green edge: chapter completed
        - Orange edge: chapter in progress
        - Grey edge: chapter not completed
    - Each chapter is clickable and will display the chapter
- Main section containing the content of the chapter

### Teacher dashboard
- Banner
- Left aside (90% of remaining height) with
    - Header containing avatar + firstname
    - A link to the page to create a new course
    - List of redacted courses 
        - Each course is clickable to go to the edition of the course
        - Each published course has a green icon to differentiate them from the others
    - Footer containing link to the settings + link to sign out
- Main section is a dashboard that for each published course present
    - The name of the course
    - The image representing the course
    - The number of chapters
    - The number of students who have completed the course, a "slash", the total number of sudents who are following the course

### Course / Chapter editor
- Banner
- Left aside (90% of remaining height) with
    - Header containing avatar + firstname
    - Button to add a chapter
    - List of chapters (each chapter is clickable to display the chapter editor)
- Main
    - Course edition
        - Title
        - Image
        - Text of presentation (markdown)
        - List of chapters
            Each chapter is presented by its title in a draggrable div that will allow the teacher to order its chapters at will. UP and DOWN buttons are also available
    - Chapter edition
        - Title
        - Button to create a "Paragraph" that adds a new block
            - Text (markdown)
            - Video uploader
            - Image uploader

## Available resources
### AIDD SQUARE

<img src="./docs/resources/aidd-square.webp" alt="square background" width="50"> 


### AIDD BANNER

<img src="./docs/resources/aidd-banner.webp" alt="banner background" height="50"> 
