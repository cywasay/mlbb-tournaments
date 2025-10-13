# Mobile Legends Bang Bang Tournament Website

## Project Overview
This is a Next.js-based web application designed to manage and showcase Mobile Legends Bang Bang tournaments. The website provides features for tournament organization, team management, and player registration.

## Project Structure

### Core Technologies
- Next.js
- React
- Tailwind CSS (based on postcss.config.mjs)
- JavaScript (based on jsconfig.json)

### Key Directories

#### `/src/app`
- Main application routes and pages
- Global styling
- Core layout components
- Key pages:
  - Homepage
  - Registration
  - Teams
  - Tournaments

#### `/src/components`
Organized component structure:
- `Features.jsx` - Feature showcase component
- `Navbar.jsx` - Navigation component
- `UpcomingTournaments.jsx` - Tournament preview component

##### Team-related Components
- `AboutTeamsSection.jsx`
- `CreateTeamCTA.jsx`
- `HeroSection.jsx`
- `LeaderboardSection.jsx`
- `TeamCard.jsx`
- `TeamGrid.jsx`
- `TeamModal.jsx`

##### Tournament-related Components
- `CTASection.jsx`
- `FeaturedTournaments.jsx`
- `HeroSection.jsx`
- `TournamentFilters.jsx`
- `TournamentGrid.jsx`

#### `/public`
Static assets including:
- Hero images
- Tournament images
- Character images (Moskov, Saber, Zilong)
- Logo and icons

## Features
1. Tournament Management
   - Tournament listing and details
   - Featured tournaments showcase
   - Tournament filtering system

2. Team Management
   - Team creation and management
   - Team leaderboard
   - Team profiles and cards

3. Player Registration
   - Registration system for tournaments
   - Player profile management

4. User Interface
   - Responsive design
   - Modern and gaming-focused aesthetic
   - Interactive components and modals

## Development Notes
- Built with modern Next.js features
- Utilizes file-based routing
- Component-based architecture
- Optimized for gaming community