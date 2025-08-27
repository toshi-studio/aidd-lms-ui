# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a UI design implementation for an AI-driven Learning Management System (LMS) using Next.js with Radix UI components and Radix Theme for styling.

## Architecture

The project follows a static wireframe approach with:
- **Pages**: Individual route files in `/pages` directory
- **Components**: Reusable UI components in `/components` directory
- **Styling**: Exclusively using Radix Theme props - no external CSS files
- **State**: Static navigation only, no real data or JS logic beyond basic navigation

## Key Technical Specifications

### UI Framework
- **Components**: Radix UI primitives (`@radix-ui/react-*`)
- **Theming**: Radix Theme (`@radix-ui/themes`)
- **Responsive Design**: Using Radix Theme's `Grid`, `Flex`, `Box` components
- **Icons**: Radix Icons or Box placeholders

### Color Palette
- Main: `#020244` (mapped to Radix `blue`)
- Pink: `#C54C74` (mapped to Radix `pink`)
- Green: `#65CA98` (mapped to Radix `green`)
- Lavender: `#4F4FEB` (mapped to Radix `violet`)

### Pages Structure
- `index.tsx` - Public landing page with hero, course carousel, testimonials
- `login.tsx` - Magic link authentication
- `magic-link-sent.tsx` - Confirmation page
- `dashboard-student.tsx` - Student view with course progress
- `course.tsx` - Chapter reading interface
- `dashboard-teacher.tsx` - Teacher's course management
- `course-editor.tsx` - Course and chapter creation/editing
- `404.tsx` / `500.tsx` - Error pages

### Core Components
- `Banner.tsx` - Site header with navigation
- `Sidebar.tsx` - Left navigation panel (90% height)
- `CourseCard.tsx` - Course display card with metadata
- `CompletionMeter.tsx` - Progress visualization
- `StatusPill.tsx` - Status badges (published/draft/in-progress)
- `AvatarBlock.tsx` - User avatar with name

## Development Guidelines

### Component Implementation
- All pages must be wrapped with `<Theme>` component
- Use `appearance="inherit"` for system-based light/dark mode
- Typography: `<Heading>` for titles, `<Text>` for content, `<Button>` for CTAs
- No external CSS - use only Radix Theme props for styling
- Include comments in JSX to explain dynamic behavior that would be implemented

### Sample Data
- Users: Alex (Trainer), Toshi (Student)
- 5 sample courses with placeholder images (`/placeholderX.jpg`)
- Each course has 6 chapters with 1-3 placeholder paragraphs
- Avatar placeholders: `/avatar-placeholder.jpg`

### File Output
- Generate Next.js-ready JSX/TSX files
- One page per file in the `/pages` directory
- Reusable components in `/components` directory
- Static navigation between pages using Next.js Link component