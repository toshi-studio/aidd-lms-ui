# Objective

Generate a **static Radix UI + Radix Theme wireframe** (no real data, no JS logic beyond basic navigation stubs) for an AI‑driven **Learning Management System (LMS)**. Include **all details of layout, component states, and placeholders** so an LLM can reproduce the final expected UI.

# Output format

* Produce **Next.js‑ready JSX/TSX** files using Radix UI primitives (`@radix-ui/react-*`) and Radix Theme (`@radix-ui/themes`).
* One page per file in `/pages`.
* All styling via **Radix Theme props** (color, variant, size) and **Theme tokens**.
* Use **hardcoded sample text** and images.
* Include **static navigation** between pages.
* Responsive layouts via Radix Theme `Grid`, `Flex`, `Box`.
* Comments in JSX to explain dynamic behavior.

# Radix Theme Setup

* Wrap pages with `<Theme>`.
* Light mode default, `appearance="inherit"` for system toggle.
* Palette:

  * `--color-main: #020244`
  * `--color-pink: #C54C74`
  * `--color-green: #65CA98`
  * `--color-lavender: #4F4FEB`
* Map to Radix Theme colors (`blue`, `pink`, `green`, `violet`).
* Typography: `<Heading>` for titles, `<Text>` for paragraphs, `<Button>` for CTAs.
* Icons: Radix Icons or `<Box>` placeholders.

# Folder structure

```
/pages
  index.tsx
  login.tsx
  magic-link-sent.tsx
  dashboard-student.tsx
  course.tsx
  dashboard-teacher.tsx
  course-editor.tsx
  404.tsx
  500.tsx
/components
  Banner.tsx
  Sidebar.tsx
  CourseCard.tsx
  CompletionMeter.tsx
  StatusPill.tsx
  AvatarBlock.tsx
```

# Component guidelines

* **Banner**: `<Flex>` with logo, nav links, avatar.
* **Sidebar**: `<Box>` with `<AvatarBlock>`, nav links, footer links.
* **CourseCard**: `<Card>` with image, title, blurb, `<CompletionMeter>`, button.
* **CompletionMeter**: `<Progress>` or radial mock.
* **StatusPill**: `<Badge>`; published=green, draft=gray, in-progress=orange, done=green.
* **AvatarBlock**: `<Flex>` with `<Avatar>` and name.

# Page details

## `index.tsx`

* `<Banner>` with Sign in/Register.
* Hero: `<Heading size="8">Learn with AIDD LMS</Heading>`, subtitle `<Text>`, CTA `<Button>`.
* Carousel: `<Flex gap="4">` with 5 `<CourseCard>`.
* Testimonials: `<Grid columns="3">` with `<Card>` quotes + `<Avatar>`.
* Footer: `<Flex>` with site map.

## `login.tsx`

* `<Card>` centered with `<TextField.Root>` email, `<Button>` send, `<Text>` hint.

## `magic-link-sent.tsx`

* `<Card>` with `<Badge color="green">Success</Badge>`, message, link home.

## `dashboard-student.tsx`

* `<Banner>` + `<Sidebar>`.
* `<Grid>` of `<CourseCard>` with `<CompletionMeter>` (20%, 45%, 80%, etc.), “Go to chapter” button.
* 2 skeleton `<CourseCard>` placeholders.

## `course.tsx`

* `<Sidebar>`: course title, contact link, chapters as `<Button>` + `<StatusPill>`.
* Main: `<Heading>` chapter title, `<Text>` content, `<Button>` mark as read.

## `dashboard-teacher.tsx`

* `<Sidebar>` with link to editor.
* `<Grid>` of `<CourseCard>` with stats `34 / 120`.
* Empty state `<Card>` if none.

## `course-editor.tsx`

* `<Grid columns="2">`:

  * Course form: title, image upload, presentation text area, chapter list.
  * Chapter form: title, add paragraph, paragraph blocks (text, video, image).

## `404.tsx` / `500.tsx`

* `<Card>` with `<Heading>` error text, back button.
* `500.tsx` has `<Code>` trace placeholder.

# Hardcoded sample content

* Users: Alex (Trainer), Toshi (Student).
* Courses: 5 with `/placeholderX.jpg`.
* Each: 6 chapters, 1–3 placeholder paragraphs.
* Avatars: `/avatar-placeholder.jpg`.

# Deliverable expectations

* Ready for Next.js Radix Theme.
* All UI and flows explicit.
* No external CSS; Radix Theme props only.
* Comments explaining dynamic behavior.
