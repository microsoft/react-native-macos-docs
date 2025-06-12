# Frequently Asked Questions (FAQ)

## What is an out of tree platform?

An "out of tree platform" refers to a React Native platform that is not part of the core React Native repository. Instead of being maintained within the main React Native codebase at facebook/react-native, these platforms are developed and maintained in separate repositories.

React Native macOS is an example of an out of tree platform. It extends React Native to support macOS applications while maintaining compatibility with the core React Native APIs. This approach allows platform-specific features and optimizations to be developed independently from the main React Native release cycle.

Key characteristics of out of tree platforms:
- **Separate repositories**: Maintained independently from the core React Native repo
- **Independent versioning**: Can have their own release schedules and version numbers
- **Platform-specific features**: Can implement platform-specific APIs and components
- **Community-driven**: Often maintained by community members or organizations with specific platform expertise

## What about Mac Catalyst?

Mac Catalyst is Apple's technology that allows iOS apps to run on macOS with minimal modifications. While Mac Catalyst provides a way to bring iOS apps to the Mac, React Native macOS offers a different approach with several advantages:

**Mac Catalyst approach:**
- Runs iOS apps on macOS with an adaptation layer
- Limited access to macOS-specific features
- UI elements retain iOS appearance and behavior
- Constrained by iOS design paradigms

**React Native macOS approach:**
- Native macOS applications with full platform integration
- Access to macOS-specific APIs and features (menu bars, windows, keyboard shortcuts, etc.)
- Native macOS UI components and styling
- Better performance and user experience on macOS
- More control over the app's behavior and appearance

If you're building a React Native app and want the best macOS experience, React Native macOS is the recommended approach as it provides true native macOS applications rather than adapted iOS apps.

## Does Expo support React Native macOS?

Currently, Expo does not officially support React Native macOS. Expo's managed workflow and development tools are primarily focused on iOS, Android, and web platforms.

**Current limitations:**
- Expo CLI and managed workflow don't support macOS targets
- Expo SDK modules are not available for macOS
- EAS Build doesn't support macOS builds

**Alternative approaches:**
1. **Bare React Native workflow**: You can use React Native macOS in a bare React Native project without Expo's managed workflow
2. **Expo for other platforms**: You can still use Expo for iOS, Android, and web parts of your app while using React Native macOS separately for the macOS version
3. **Community solutions**: Some community members have created unofficial solutions, but these are not officially supported

**Future possibilities:**
The React Native macOS team continues to work on improving compatibility and tooling. While there's no official timeline, support for React Native macOS in Expo tools may be considered in the future as the platform matures.

For now, if you need both Expo features and macOS support, you'll need to maintain separate codebases or use a monorepo approach where you can share code between your Expo-managed mobile app and your React Native macOS application.