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
- **@react-navigation/native** (^7.1.26) - Navigation framework
- **@react-navigation/native-stack** (^7.9.0) - Native stack navigator
- **react-native-reanimated** (~4.1.1) - Smooth animations
- **react-native-gesture-handler** (~2.28.0) - Touch gestures
- **i18next** + **react-i18next** - Internationalization
- **expo-localization** - Device language detection
- **expo-dev-client** (~6.0.20) - Enhanced development experience

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

🤖 Open this link on your Android devices (or scan the QR code) to install the app:
https://expo.dev/accounts/ivy41/projects/gum_interview/builds/11023fe8-87d5-4321-a556-583df1f12234

**Using Expo Dev Client** (Recommended):
```bash
npx expo start
```

This project uses **expo-dev-client** for development, which provides:
- Faster refresh and better debugging experience
- Native module support
- Custom development builds

### Running on Different Platforms

After starting the development server, you have several options:

#### Option : Development Build on Physical Device (Recommended)
1. Install the development build from the link above
2. Start the dev server with `npm start`
3. Scan the QR code with your device camera
4. The app will load in the development client

---

## 📁 Project Structure

```
gum_interview/
├── App.tsx                          # Main app entry with Navigation setup
├── index.ts                         # Expo entry file
├── app.json                         # Expo configuration
├── package.json                     # Dependencies and scripts
├── tsconfig.json                    # TypeScript configuration
├── assets/                          # Static assets (images, icons)
│   ├── bg.png                       # Background image
│   ├── back-button.png              # Back button icon
│   ├── disclaimer-icon.png          # Disclaimer warning icon
│   └── ...
└── src/
    ├── i18n.ts                      # i18next configuration
    ├── components/                  # Reusable UI components
    │   ├── PrimaryBottomSheet.tsx   # Bottom sheet with service info
    │   ├── SpecialistList.tsx       # Specialist list with data fetching
    │   └── ErrorView.tsx            # Error handling UI with retry
    ├── hooks/                       # Custom React hooks
    │   ├── useSpecialist.ts         # React Query hook for fetching specialists
    │   └── useSpecialistActions.ts  # Hook for handling member/non-member button actions
    ├── locales/                     # Translation files
    │   ├── en.json                  # English translations
    │   └── zh.json                  # Chinese translations
    ├── screens/                     # Screen components
    │   └── HomeScreen.tsx           # Main home screen with layout
    ├── services/                    # API and data services
    │   └── api.ts                   # Mock API service
    ├── theme/                       # Design tokens (future use)
    └── types/                       # TypeScript type definitions
        └── specialist.ts            # Specialist data types
```

---

## Architecture & Design Decisions

### 1. **Component Architecture**

- **App.tsx**: Root component
  - Sets up React Navigation with native stack navigator
  - Configures React Query client
  - Wraps app with GestureHandlerRootView for gesture support
  - Initializes i18n

- **HomeScreen**: Main screen component
  - Manages overall layout with ScrollView
  - Displays background image and back button
  - Coordinates SpecialistList and PrimaryBottomSheet
  - Handles responsive spacing for bottom sheet

- **SpecialistList**: Data-driven specialist display
  - Uses useSpecialist hook for data fetching
  - Displays specialist profiles with images
  - Shows contact information and disclaimer
  - Handles loading, error, and success states

- **PrimaryBottomSheet**: Service information panel
  - Displays service hours
  - Provides booking and WhatsApp action buttons
  - Fixed at 30% snap point
  - Uses BottomSheetScrollView for content
  
- **ErrorView**: Reusable error display component
  - Provides consistent error UX
  - Includes retry functionality

### 2. **State Management & Navigation**

- **React Query** (`@tanstack/react-query`):
  - Handles asynchronous data fetching via useSpecialist hook
  - Built-in loading and error states
  - Cache management with queryKey: ['specialists']
  - Automatic retries disabled for explicit error handling
  - Selected for its simplicity and powerful features

- **React Navigation** (`@react-navigation/native`):
  - Native stack navigator for screen management
  - Header hidden for custom UI control
  - Future-ready for multi-screen expansion

### 3. **Internationalization (i18n)**

- **i18next + react-i18next**:
  - Auto-detects device language using `expo-localization`
  - Falls back to English if device language is not supported
  - Supports interpolation for dynamic values (e.g., phone numbers, emails)
  - Uses `<Trans>` component for complex text formatting with multiple styles
  - Locale-aware routing for external links (e.g., `zh-HK` vs `en-HK`)
  - Easy to extend with additional languages

**Translation Structure Example**:
```json
// en.json
{
  "contact": {
    "hotline": "<0>Hotline: </0><1>{{phone}}</1>",
    "email": "<0>Email address: </0><1>{{email}}</1>"
  },
  "buttons": {
    "book_appointment": "Book appointment",
    "contact": "Contact us"
  }
}
```

**Usage with Trans Component**:
```tsx
<Trans
  i18nKey="contact.hotline"
  values={{ phone: '+852 2893 4402' }}
  components={[
    <Text style={styles.text} />,
    <Text style={styles.linkText} />
  ]}
/>
```

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

1. **Screen Layout (HomeScreen)**
   - ScrollView with absolute positioned background image
   - Dynamic bottom spacer based on screen height (10% + 50px)
   - Back button positioned absolutely at top-left
   - Coordinates between scrollable content and fixed bottom sheet

2. **Custom Hooks**
   - **useSpecialist**: Wraps React Query's useQuery
     - Returns specialists data, loading, error states, and refetch function
     - Configured with `retry: false` for explicit error handling
     - Query key: ['specialists']
   
   - **useSpecialistActions**: Handles button behavior based on membership status
     - Takes `isMember` boolean parameter
     - Returns `handlePrimaryAction` function and `primaryButtonLabelKey`
     - For members: Opens booking appointment URL
     - For non-members: Opens "Contact Us" page with locale-aware routing
     - Integrates with i18n for dynamic URL generation

3. **Bottom Sheet Integration**
   - **PrimaryBottomSheet**: Fixed at 30% height
   - Uses `BottomSheetScrollView` for scrollable content
   - Pan-down-to-close disabled to keep sheet always visible
   - Contains service hours and action buttons
   - Integrates `useSpecialistActions` hook for dynamic button behavior

4. **Image Handling**
   - Supports both local images (via `require()`) and remote URLs
   - Fallback to placeholder view when photo is empty string
   - Static assets imported directly in components

5. **Error Simulation**
   - First API call intentionally fails
   - Demonstrates error UI and retry mechanism via refetch
   - Toggle `shouldFail` flag in `api.ts` to change behavior
   - ErrorView component provides user-friendly retry option

6. **External Links**
   - **Booking appointment**: Opens SimplyBook URL for members
     - URL: https://gainmiles.simplybook.asia/v2/
   - **Contact Us**: Opens GUM website contact page for non-members
     - Dynamically routes to `zh-HK` or `en-HK` based on current language
     - URL format: `https://www.gumhk.com/${localePath}/contact-us`
   - **WhatsApp**: Opens WhatsApp with pre-filled message
     - Phone: +852 60300900
     - URL-encoded messages from i18n translations
   - All implemented using `Linking.openURL()` from React Native
   - Button behavior and labels controlled by `useSpecialistActions` hook

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