# React Native YouTube Clone

A YouTube mobile app clone built with React Native and Expo, created while learning React Native development. This project is based on the tutorial from [FreeCodeCamp YouTube video](https://www.youtube.com/watch?v=sm5Y7Vtuihg).

![App Screenshot](./assets/simulator_screenshot_main.png)
![App Screenshot](./assets/simulator_screenshot_pop.png)

## Features

- Expo Router for navigation between screens
- Custom splash screen with font loading
- Dynamic theme support (light/dark mode)
- Interactive screens:
  - Landing page with Pingu background
  - Pop page with Wizard Pingu theme
- Styled components with:
  - Custom backgrounds using ImageBackground
  - Styled buttons and text overlays
  - Semi-transparent overlays using rgba
- Responsive layouts using React Native StyleSheet

## About This Project

This is a learning project where I'm building a YouTube clone to understand React Native fundamentals. The project uses:

- [Expo](https://expo.dev) 0.22.18
- React Native 0.78.0
- Expo Router for navigation
- React Native components
- Expo SplashScreen for launch experience

## Getting Started

1. Clone the repository

   ```bash
   git clone [your-repo-url]
   cd [your-project-name]
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npx expo start
   ```

## Running the App

After starting the development server, you can run the app in:

- iOS Simulator (press i)
- Android Emulator (press a)
- Your physical device by scanning the QR code with the Expo Go app

## Project Structure

```
rn-clone/
├── app/              # Main application code with Expo Router
│ ├── (pingu)/        # Pingu-themed route group
│ │ └── \_layout.tsx  # Layout for Pingu routes
│ ├── (tabs)/         # Tab navigation group
│ ├── \_layout.tsx    # Root layout with theme setup
│ ├── index.jsx       # Home screen with Pingu background
│ ├── pop.jsx         # Wizard Pingu screen
│ └── +not-found.tsx  # 404 error screen
├── assets/           # Static assets
│ ├── images/         # Image files
│ │ ├── pingu.jpeg    # Pingu background image
│ │ └── wizard-pingu.jpeg  # Wizard Pingu image
│ └── fonts/               # Custom fonts
│ └── SpaceMono-Regular.ttf
├── components/            # Reusable UI components
├── hooks/                 # Custom React hooks
│ └── useColorScheme.ts    # Theme hook
```

## Testing

Run the test suite with:

```bash
npm test
```

## Learning Resources

- Tutorial followed: [YouTube Clone Tutorial](https://www.youtube.com/watch?v=sm5Y7Vtuihg)
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)

## Acknowledgments

- Thanks to the tutorial creator for the guidance
- Built with Expo and React Native

## Note

This is a learning project and not intended for production use. I'm building this to improve my React Native development skills.
