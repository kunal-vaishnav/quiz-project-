export const Questions = [
  {
    id: 1,
    text: "What is React, and why is it used?",
    answers: [
      "React is an open-source JavaScript library developed by Facebook, used for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, manage the application state efficiently, and enhance performance through a virtual DOM mechanism. React's declarative approach makes code predictable and easier to debug, improving the overall development experience.",
      "React is just a JavaScript library for handling server-side rendering. It’s not typically used for building UIs but rather for optimizing backend performance.",
      "React is a full-stack framework that handles both front-end and back-end processes. It’s used for building applications with integrated database and server-side logic.",
      "React is a CSS library that focuses on making web pages responsive and interactive.",
    ],
  },
  {
    id: 2,
    text: "What is the purpose of the useState hook in React?",
    answers: [
      "The `useState` hook is a built-in function in React that allows you to add state management to functional components. State refers to data that can change over time and directly impacts what the user sees on the screen. For example, it can be used to store input field values, toggle elements, or track a counter. By using `useState`, developers can create reactive UIs that dynamically update based on user interactions.",
      "The `useState` hook is used to manage props in React. It fetches data from parent components and renders it directly without any updates.",
      "The `useState` hook is a replacement for CSS styling in React. It dynamically changes styles based on user actions.",
      "The `useState` hook is primarily used to fetch API data. It ensures the data is displayed in real-time without additional functions.",
    ],
  },
  {
    id: 3,
    text: "What does JSX stand for, and why is it used in React?",
    answers: [
      "JSX stands for JavaScript XML. It’s a syntax extension for JavaScript, allowing developers to write HTML-like code directly within JavaScript files. JSX simplifies the process of creating UI elements by combining HTML and JavaScript logic, making code easier to read and debug. React components return JSX to describe what the UI should look like, enabling dynamic rendering based on the application’s state and props.",
      "JSX stands for JavaScript Extra Syntax. It’s used to write CSS styles directly inside JavaScript components without external stylesheets.",
      "JSX stands for JavaScript Extension. It provides advanced JavaScript functions for managing the DOM manually.",
      "JSX stands for Java Server XML. It’s used to connect the React application to backend services and databases.",
    ],
  },
  {
    id: 4,
    text: "How does React’s virtual DOM improve performance?",
    answers: [
      "React’s virtual DOM is an in-memory representation of the real DOM. When a component’s state changes, React updates the virtual DOM first instead of directly interacting with the real DOM. It then calculates the minimal number of updates required to sync the virtual DOM with the real DOM using a process called reconciliation. This reduces the performance overhead of manipulating the real DOM, making updates faster and more efficient.",
      "React’s virtual DOM allows developers to bypass the browser entirely, rendering updates only in memory. This eliminates any interaction with the real DOM, leading to faster updates.",
      "The virtual DOM is a backend service that fetches data from APIs and caches it for faster retrieval.",
      "React’s virtual DOM replaces the browser’s rendering engine, ensuring high performance by eliminating the need for native DOM manipulation.",
    ],
  },
  {
    id: 5,
    text: "What are props in React, and how are they different from state?",
    answers: [
      "Props (short for properties) are used to pass data from a parent component to a child component in React. They are read-only, meaning a child component cannot modify them. State, on the other hand, is managed within a component and can be updated over time to trigger re-renders. Props enable reusability by allowing dynamic customization of components, while state manages internal component data.",
      "Props are used to store component-specific data that can change during the lifecycle of the application, while state is fixed and unchangeable.",
      "Props are an advanced React feature used for managing API calls and dynamically rendering data on the server.",
      "Props and state are identical in React. Both are used for passing data between components but have slightly different syntax.",
    ],
  },
  {
    id: 6,
    text: "What is the difference between a controlled and uncontrolled component in React?",
    answers: [
      "A controlled component is one where form data is handled by React state, making the UI fully synchronized with the state. For example, input fields in a controlled component use the `value` and `onChange` attributes to control their values programmatically. An uncontrolled component, on the other hand, allows the DOM itself to manage its data using refs. Controlled components offer better control and validation, whereas uncontrolled components are easier to implement for simple use cases.",
      "A controlled component is a React feature used for managing CSS styles, while an uncontrolled component refers to components rendered on the server side.",
      "Controlled components automatically fetch data from APIs, while uncontrolled components handle routing and navigation within a React application.",
      "Controlled and uncontrolled components are the same in React. Both are used for managing state and props dynamically.",
    ],
  },
  {
    id: 7,
    text: "Why do we use keys in React lists?",
    answers: [
      "Keys in React lists are unique identifiers used to help React efficiently update and re-render lists of components. When the list changes (e.g., an item is added, removed, or reordered), React uses the keys to determine which elements need to be updated. This improves performance by minimizing the number of DOM operations required.",
      "Keys are used to style React components dynamically based on their order in a list.",
      "Keys in React lists are metadata used to store information about user interactions with the list.",
      "Keys are only required for server-side rendering in React. They are optional for client-side applications.",
    ],
  },
  {
    id: 8,
    text: "What is the virtual DOM in React?",
    answers: [
      "An in-memory representation of the real DOM",
      "A lightweight browser",
      "A JavaScript framework",
      "A design pattern",
    ],
  },
  {
    id: 9,
    text: "What is the purpose of the React key prop?",
    answers: [
      "To uniquely identify elements in a list",
      "To optimize CSS performance",
      "To manage state updates",
      "To bind events",
    ],
  },
  {
    id: 10,
    text: "Which method is used to create components in React?",
    answers: [
      "React.createElement",
      "document.createElement",
      "React.createComponent",
      "React.render",
    ],
  },
];
