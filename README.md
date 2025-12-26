# GUM Interview - React Native Specialist App

> A React Native application built with Expo and TypeScript, showcasing GUM specialists with internationalization support and error handling.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Architecture & Design Decisions](#architecture--design-decisions)
- [Development Notes](#development-notes)

---

## Overview

This project is a mobile application that displays GUM specialists information with the following capabilities:
- Display specialist profiles in an interactive bottom sheet
- Support English and Chinese (繁體中文) internationalization
- Error handling with retry mechanism
- External links to booking and WhatsApp services
- Responsive design matching Figma specifications

**Framework Choice**: Expo (React Native)
- Chosen for rapid development and easier setup
- Better cross-platform support and developer experience
- Simplified build process and deployment

---

## Features

- **Specialist Profiles**: Interactive bottom sheet displaying specialist information
- **Internationalization (i18n)**: Auto-detect device language (English/Chinese)
- **Error Handling**: User-friendly error view with retry functionality
- **External Integration**: Links to booking system and WhatsApp
- **Mock API**: Simulated API with intentional first-request failure to demonstrate error handling
- **Type Safety**: Full TypeScript implementation

---

## Tech Stack

### Core Technologies
- **React Native**: 0.81.5
- **TypeScript**: ~5.9.2
- **Expo**: ~54.0.30
- **React**: 19.1.0

### Key Libraries
- **@gorhom/bottom-sheet** (^5.2.8) - Interactive bottom sheet component
- **@tanstack/react-query** (^5.90.12) - Data fetching and state management
- **react-native-reanimated** (~4.1.1) - Smooth animations
- **react-native-gesture-handler** (~2.28.0) - Touch gestures
- **i18next** + **react-i18next** - Internationalization
- **expo-localization** - Device language detection

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn**: Package manager
- **Expo Go App** (for mobile testing):
  - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
  - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

---

## Installation & Setup

### 1. Clone the Repository

**Option A: Clone task branch (for PR review)**
```bash
# Clone and checkout task branch directly
git clone -b task https://github.com/yeejun-0401/gum_interview.git
cd gum_interview
```

**Option B: Clone and switch to task branch**
```bash
# Clone repository first
git clone https://github.com/yeejun-0401/gum_interview.git
cd gum_interview

# Switch to task branch
git checkout task
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Verify Installation

Check that all dependencies are installed correctly:

```bash
npx expo doctor
```

---

## Running the App

### Start the Development Server

```bash
npm start
```

or

```bash
npx expo start
```

### Running on Different Platforms

After starting the development server, you have several options:

#### Option 1: Physical Device (Recommended for Best Experience)
1. Install **Expo Go** app on your phone
2. Scan the QR code displayed in the terminal
3. The app will load on your device

#### Option 2: iOS Simulator (macOS only)
```bash
npm run ios
```

#### Option 3: Android Emulator
```bash
npm run android
```


---

## 📁 Project Structure

```
gum_interview/
├── App.tsx                          # Main app entry point
├── index.ts                         # Expo entry file
├── app.json                         # Expo configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── assets/                          # Static assets (images, icons)
│   ├── bg.png                       # Background image
│   ├── back-bottom.png              # Back button icon
│   ├── disclaimer-icon.png          # Disclaimer warning icon
│   └── ...
└── src/
    ├── i18n.ts                      # i18next configuration
    ├── components/                  # Reusable UI components
    │   ├── SpecialistBottomSheet.tsx    # Main specialist list component
    │   └── ErrorView.tsx                # Error handling UI
    ├── hooks/                       # Custom React hooks (future use)
    ├── locales/                     # Translation files
    │   ├── en.json                  # English translations
    │   └── zh.json                  # Chinese translations
    ├── screens/                     # Full page screens (future use)
    ├── services/                    # API and data services
    │   └── api.ts                   # Mock API service
    ├── theme/                       # Design tokens (future use)
    └── types/                       # TypeScript type definitions
        └── specialist.ts            # Specialist data types
```

---

## Architecture & Design Decisions

### 1. **Component Architecture**

- **SpecialistBottomSheet**: Main feature component
  - Manages bottom sheet state and snap points
  - Integrates React Query for data fetching
  - Handles loading, error, and success states
  
- **ErrorView**: Reusable error display component
  - Provides consistent error UX
  - Includes retry functionality

### 2. **State Management**

- **React Query** (`@tanstack/react-query`):
  - Handles asynchronous data fetching
  - Built-in loading and error states
  - Cache management and retry logic
  - Selected for its simplicity and powerful features

### 3. **Internationalization (i18n)**

- **i18next + react-i18next**:
  - Auto-detects device language using `expo-localization`
  - Falls back to English if device language is not supported
  - Supports interpolation for dynamic values (e.g., phone numbers, emails)
  - Easy to extend with additional languages

### 4. **Mock API Strategy**

Located in `src/services/api.ts`:
```typescript
export const fetchSpecialists = async (): Promise<Specialist[]> => {
  // Simulates network delay (1 second)
  // First call fails to demonstrate error handling
  // Subsequent calls succeed
}
```

**Why this approach?**
- Demonstrates error handling capabilities
- Easy to replace with real CMS/API later
- Just update `fetchSpecialists` function to point to actual endpoint

### 5. **Type Safety**

All data structures are typed using TypeScript:
```typescript
// src/types/specialist.ts
export interface Specialist {
  id: string;
  firstName: string;
  lastName: string;
  photo: string;
  sort: number;
}
```

---

## Development Notes

### Key Implementation Details

1. **Bottom Sheet Integration**
   - Uses `@gorhom/bottom-sheet` with two snap points: 15% and 95%
   - Default opens at 95% (index: 1)
   - Pan-down-to-close is disabled to keep sheet always visible

2. **Image Handling**
   - Supports both local images (via `require()`) and remote URLs
   - Dynamic image source resolution in `getImageSource()` function

3. **Error Simulation**
   - First API call intentionally fails
   - Demonstrates error UI and retry mechanism
   - Toggle `shouldFail` flag in `api.ts` to change behavior

4. **External Links**
   - Booking appointment: Opens SimplyBook URL
   - WhatsApp: Opens WhatsApp with pre-filled message
   - Uses `Linking.openURL()` from React Native

### Common Commands

```bash
# Start development server
npm start

# Clear cache and restart
npx expo start -c

# Check for issues
npx expo doctor

# Install a new package
npx expo install <package-name>
```

---