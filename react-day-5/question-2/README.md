##Instructions
### Level
Level 1

### Time to solve the problem
40 Minutes

### Overview
This assignment explores the useEffect hook in React and its cleanup function. You will learn how to handle cleanup operations such as unsubscribing from subscriptions, clearing timers, or removing event listeners when a component unmounts or dependencies change. By mastering the cleanup function in useEffect, you will gain a deeper understanding of managing side effects and resource management in React applications.

### Detailed Explanation
#### Topics
1. Understanding cleanup function in useEffect
2. Handling cleanup operations in React components
3. Use cases for cleanup function: unsubscribing from subscriptions, clearing timers, removing event listeners, etc.

### Setup Guidelines and Instructions
1. Environment Setup: Ensure you have a modern web browser installed (such as Google Chrome, Firefox, or Safari) to view the output of your React component. No specific IDE is required; you can use any text editor of your choice (VS Code, Sublime Text, Atom, etc.) for writing your code.
2. Setting up a New React Project: You can either create a new React project using Create React App (CRA) or use an existing React project for this assignment.
3. Understanding the useEffect Hook: Familiarise yourself with the useEffect hook in React and its syntax. Refer to the official React documentation or online tutorials for guidance.

### Problem Statement
1. Subscribing to a Timer: Create a React component that subscribes to a timer using the useEffect hook. Start a timer when the component mounts and clear the timer when the component unmounts using the cleanup function.
2. Subscribing to a Document Event: Implement a React component that subscribes to a browser event (e.g., scroll event) using the useEffect hook. Add an event listener when the component mounts and remove the event listener when the component unmounts using the cleanup function.

### Submission Guidelines
1. Push your code to GitHub and share the GitHub repository link.
2. Ensure that your React components demonstrate the proper use of the useEffect hook and cleanup function to handle side effects and cleanup operations.
3. Include any additional observations or learnings in the README.md file of your project.