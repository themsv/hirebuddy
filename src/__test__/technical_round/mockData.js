export const MOCKED_QUESTIONS = {
  loading: false,
  data: {
    subject: "Core XT",
    areas: [
      {
        title: "HTML / CSS",
        topics: [
          {
            title: "HTML | Templating",
            questions: [
              "Request lifecycle, DOM and CSSOM",
              "Sementic HTML and accessibility guidelines",
              "Forms and Validations",
              "Media - Responsive Images, Audio and Video",
              "Browser Side Storage, Workers, and Caching- Local, Session, Cookies, IndexDb, WebSQL Service Workers, Web Workers",
              "SEO basics",
            ],
          },
          {
            title: "CSS / processors & Responsive",
            questions: [
              "Rules, Selectors and Property values, Cascading, Inheritance, Specificity",
              "Responsive Design (Mobile and Desktop first), Media Queries",
              "Layout - [float, flex, grid], display, postitioning",
              "Animations and transalations- Basics, SVG",
              "Processors / Preprocessors, Frameworks, CSS-in-JS",
            ],
          },
        ],
      },
      {
        title: "OOJS / Functional JS",
        topics: [
          {
            title: "OOJS / Functional JS",
            questions: [
              "Variables, Scope, Data Types, operators, loops, if statements, error handling  and functions. Execution Context (this). [Call, Apply, Bind] Differentiating factors in ES5 and ES6",
              "Events and Event Handling, DOM manupilation",
              "Object Prototype, Prototypal Inheritance, Closure",
              "Async Programming - Event Loop and how it works, Macro and Micro tasks, Callbacks and setTimeOut, Promises, chaining promises, [Promise.all, Promise.race ], error handling, async / await",
              "Testing: POV on different type of tests, Different libraries (TL, Jest, Enzyme, Karma, Jasmine)",
              "Patterns, Module Systems & Principles - Singleton, Factory functions, Module, Prototype, PubSub, Observable Common JS, UMD, AMD 12-factor app, SOLID, DRY principles",
              "FUNCTIONAL PROGRAMMING: Pure Functions / Side Effects / Purifying closures, Point-free style, Composition / Compound functions, Immutability, Map / Reduce / Filter, Higher-order functions, Currying / Composing",
              "PWA - App Manifest, Caching & Service Workers, Background Sync, Push Notifications, Workbox",
              "Tooling:Webpack / Parcel / Rollup - config from-ground setup, Code Splitting, Tree Shaking, Fedration, Loaders and plugins Transpilation using tools like Babel Understands GIT hooks and can use them. Code bundling/minification/production ready assets using Webpack ESLint, Husky and other static code analysis tools",
            ],
          },
        ],
      },
      {
        title: "NFR's",
        topics: [
          {
            title: " Performance",
            questions: [
              "Compression,Caching / CDN / Expirations, HTTP Headers, JS Profiling (CPU/MEM),HTTP2,Universal View State,Perf Analysis / Log monitoring tools. Basic perf testing: lighthouse, webpagetests. Awareness of metrices like TTFB, TTI and their possible high no. causes",
            ],
          },
          {
            title: " Security ",
            questions: [
              " SSL/TLS, CORS, XSS, CSRF, Access / Refresh Tokens / Encryptions, Validations / Encoding, HTTP Cookies / Sec. Headers, Sessions / Authentication / Authorization / protect user data, RBAC, ABAC",
            ],
          },
          {
            title: " Accessibility ",
            questions: [
              "Understands A/ AA / AAA accessibility guidelines and write code adhering to meet the accessibility benchmarks, Has a fair understanding to make dynamic content accessible with ARIA, Uses enhanced techniques to meet accessibility standards viz: skip navigation, no js etc. Creating accesible forms, content and best practices",
            ],
          },
          {
            title: " DevOps ",
            questions: [
              "Gulp/Grunt - create tasks / custom scripts,Webpack / Parcel / Rollup - config from-ground setup, Code Splitting, Loaders and plugins,Understands GIT hooks and can use them,Code bundling/minification/production ready assets using Webpack etc, Test Case runners,Docker, Vagrant and the differences,Integrate plugins like sitespeed.io to ensure performance related checks on the pages,Logging Standards: Can customize logging framework to extend to create own formats with additional data like session id, hostname for log statements",
            ],
          },
        ],
      },
      {
        title: "Additonal Info",
        topics: [
          {
            title: "Estimation / Planning",
            questions: [
              "Check understanding of top-down / bottom-up approaches and how estimations are refined over time, WBS / Poker. Planning for tracks, traging etc",
            ],
          },
          {
            title: "Communication",
            questions: [
              "General communication skills to be assessed while probling other scenarios. Focus on clarity in terms of communicating thoughts. Able to articulate approach and document the architecture and requirements if needed",
            ],
          },
          {
            title: "Learning Agility",
            questions: [
              "keenness to learn - with examples on the latest tech. Role models and tech follower off???",
            ],
          },
        ],
      },
    ],
  },
};

export const MOCKED_SCORE = [
  {
    title: "HTML / CSS",
    topics: [
      {
        title: "HTML | Templating",
        questions: [
          {
            title: "Request lifecycle, DOM and CSSOM",
            score: 1,
          },
          {
            title: "Sementic HTML and accessibility guidelines",
            score: 1,
          },
          {
            title: "Forms and Validations",
            score: "",
          },
          {
            title: "Media - Responsive Images, Audio and Video",
            score: "",
          },
          {
            title:
              "Browser Side Storage, Workers, and Caching- Local, Session, Cookies, IndexDb, WebSQL Service Workers, Web Workers",
            score: "",
          },
          {
            title: "SEO basics",
            score: "",
          },
        ],
        score: "1.00",
      },
      {
        title: "CSS / processors & Responsive",
        questions: [
          {
            title:
              "Rules, Selectors and Property values, Cascading, Inheritance, Specificity",
            score: "",
          },
          {
            title:
              "Responsive Design (Mobile and Desktop first), Media Queries",
            score: "",
          },
          {
            title: "Layout - [float, flex, grid], display, postitioning",
            score: "",
          },
          {
            title: "Animations and transalations- Basics, SVG",
            score: "",
          },
          {
            title: "Processors / Preprocessors, Frameworks, CSS-in-JS",
            score: "",
          },
        ],
        score: 0,
      },
    ],
    score: "0.50",
  },
  {
    title: "OOJS / Functional JS",
    topics: [
      {
        title: "OOJS / Functional JS",
        questions: [
          {
            title:
              "Variables, Scope, Data Types, operators, loops, if statements, error handling  and functions. Execution Context (this). [Call, Apply, Bind] Differentiating factors in ES5 and ES6",
            score: "",
          },
          {
            title: "Events and Event Handling, DOM manupilation",
            score: "",
          },
          {
            title: "Object Prototype, Prototypal Inheritance, Closure",
            score: "",
          },
          {
            title:
              "Async Programming - Event Loop and how it works, Macro and Micro tasks, Callbacks and setTimeOut, Promises, chaining promises, [Promise.all, Promise.race ], error handling, async / await",
            score: "",
          },
          {
            title:
              "Testing: POV on different type of tests, Different libraries (TL, Jest, Enzyme, Karma, Jasmine)",
            score: "",
          },
          {
            title:
              "Patterns, Module Systems & Principles - Singleton, Factory functions, Module, Prototype, PubSub, Observable Common JS, UMD, AMD 12-factor app, SOLID, DRY principles",
            score: "",
          },
          {
            title:
              "FUNCTIONAL PROGRAMMING: Pure Functions / Side Effects / Purifying closures, Point-free style, Composition / Compound functions, Immutability, Map / Reduce / Filter, Higher-order functions, Currying / Composing",
            score: "",
          },
          {
            title:
              "PWA - App Manifest, Caching & Service Workers, Background Sync, Push Notifications, Workbox",
            score: "",
          },
          {
            title:
              "Tooling:Webpack / Parcel / Rollup - config from-ground setup, Code Splitting, Tree Shaking, Fedration, Loaders and plugins Transpilation using tools like Babel Understands GIT hooks and can use them. Code bundling/minification/production ready assets using Webpack ESLint, Husky and other static code analysis tools",
            score: "",
          },
        ],
        score: 0,
      },
    ],
    score: 0,
  },
  {
    title: "NFR's",
    topics: [
      {
        title: " Performance",
        questions: [
          {
            title:
              "Compression,Caching / CDN / Expirations, HTTP Headers, JS Profiling (CPU/MEM),HTTP2,Universal View State,Perf Analysis / Log monitoring tools. Basic perf testing: lighthouse, webpagetests. Awareness of metrices like TTFB, TTI and their possible high no. causes",
            score: "",
          },
        ],
        score: 0,
      },
      {
        title: " Security ",
        questions: [
          {
            title:
              " SSL/TLS, CORS, XSS, CSRF, Access / Refresh Tokens / Encryptions, Validations / Encoding, HTTP Cookies / Sec. Headers, Sessions / Authentication / Authorization / protect user data, RBAC, ABAC",
            score: "",
          },
        ],
        score: 0,
      },
      {
        title: " Accessibility ",
        questions: [
          {
            title:
              "Understands A/ AA / AAA accessibility guidelines and write code adhering to meet the accessibility benchmarks, Has a fair understanding to make dynamic content accessible with ARIA, Uses enhanced techniques to meet accessibility standards viz: skip navigation, no js etc. Creating accesible forms, content and best practices",
            score: "",
          },
        ],
        score: 0,
      },
      {
        title: " DevOps ",
        questions: [
          {
            title:
              "Gulp/Grunt - create tasks / custom scripts,Webpack / Parcel / Rollup - config from-ground setup, Code Splitting, Loaders and plugins,Understands GIT hooks and can use them,Code bundling/minification/production ready assets using Webpack etc, Test Case runners,Docker, Vagrant and the differences,Integrate plugins like sitespeed.io to ensure performance related checks on the pages,Logging Standards: Can customize logging framework to extend to create own formats with additional data like session id, hostname for log statements",
            score: "",
          },
        ],
        score: 0,
      },
    ],
    score: 0,
  },
  {
    title: "Additonal Info",
    topics: [
      {
        title: "Estimation / Planning",
        questions: [
          {
            title:
              "Check understanding of top-down / bottom-up approaches and how estimations are refined over time, WBS / Poker. Planning for tracks, traging etc",
            score: "",
          },
        ],
        score: 0,
      },
      {
        title: "Communication",
        questions: [
          {
            title:
              "General communication skills to be assessed while probling other scenarios. Focus on clarity in terms of communicating thoughts. Able to articulate approach and document the architecture and requirements if needed",
            score: "",
          },
        ],
        score: 0,
      },
      {
        title: "Learning Agility",
        questions: [
          {
            title:
              "keenness to learn - with examples on the latest tech. Role models and tech follower off???",
            score: "",
          },
        ],
        score: 0,
      },
    ],
    score: 0,
  },
];

export const MOCKED_API_QUESTIONS = {
  "core-xt": {
    subject: "Core XT",
    areas: [
      {
        title: "HTML / CSS",
        topics: [
          {
            title: "HTML | Templating",
            questions: [
              "Request lifecycle, DOM and CSSOM",
              "Sementic HTML and accessibility guidelines",
              "Forms and Validations",
              "Media - Responsive Images, Audio and Video",
              "Browser Side Storage, Workers, and Caching- Local, Session, Cookies, IndexDb, WebSQL Service Workers, Web Workers",
              "SEO basics",
            ],
          },
          {
            title: "CSS / processors & Responsive",
            questions: [
              "Rules, Selectors and Property values, Cascading, Inheritance, Specificity",
              "Responsive Design (Mobile and Desktop first), Media Queries",
              "Layout - [float, flex, grid], display, postitioning",
              "Animations and transalations- Basics, SVG",
              "Processors / Preprocessors, Frameworks, CSS-in-JS",
            ],
          },
        ],
      },
      {
        title: "OOJS / Functional JS",
        topics: [
          {
            title: "OOJS / Functional JS",
            questions: [
              "Variables, Scope, Data Types, operators, loops, if statements, error handling  and functions. Execution Context (this). [Call, Apply, Bind] Differentiating factors in ES5 and ES6",
              "Events and Event Handling, DOM manupilation",
              "Object Prototype, Prototypal Inheritance, Closure",
              "Async Programming - Event Loop and how it works, Macro and Micro tasks, Callbacks and setTimeOut, Promises, chaining promises, [Promise.all, Promise.race ], error handling, async / await",
              "Testing: POV on different type of tests, Different libraries (TL, Jest, Enzyme, Karma, Jasmine)",
              "Patterns, Module Systems & Principles - Singleton, Factory functions, Module, Prototype, PubSub, Observable Common JS, UMD, AMD 12-factor app, SOLID, DRY principles",
              "FUNCTIONAL PROGRAMMING: Pure Functions / Side Effects / Purifying closures, Point-free style, Composition / Compound functions, Immutability, Map / Reduce / Filter, Higher-order functions, Currying / Composing",
              "PWA - App Manifest, Caching & Service Workers, Background Sync, Push Notifications, Workbox",
              "Tooling:Webpack / Parcel / Rollup - config from-ground setup, Code Splitting, Tree Shaking, Fedration, Loaders and plugins Transpilation using tools like Babel Understands GIT hooks and can use them. Code bundling/minification/production ready assets using Webpack ESLint, Husky and other static code analysis tools",
            ],
          },
        ],
      },
      {
        title: "NFR's",
        topics: [
          {
            title: " Performance",
            questions: [
              "Compression,Caching / CDN / Expirations, HTTP Headers, JS Profiling (CPU/MEM),HTTP2,Universal View State,Perf Analysis / Log monitoring tools. Basic perf testing: lighthouse, webpagetests. Awareness of metrices like TTFB, TTI and their possible high no. causes",
            ],
          },
          {
            title: " Security ",
            questions: [
              " SSL/TLS, CORS, XSS, CSRF, Access / Refresh Tokens / Encryptions, Validations / Encoding, HTTP Cookies / Sec. Headers, Sessions / Authentication / Authorization / protect user data, RBAC, ABAC",
            ],
          },
          {
            title: " Accessibility ",
            questions: [
              "Understands A/ AA / AAA accessibility guidelines and write code adhering to meet the accessibility benchmarks, Has a fair understanding to make dynamic content accessible with ARIA, Uses enhanced techniques to meet accessibility standards viz: skip navigation, no js etc. Creating accesible forms, content and best practices",
            ],
          },
          {
            title: " DevOps ",
            questions: [
              "Gulp/Grunt - create tasks / custom scripts,Webpack / Parcel / Rollup - config from-ground setup, Code Splitting, Loaders and plugins,Understands GIT hooks and can use them,Code bundling/minification/production ready assets using Webpack etc, Test Case runners,Docker, Vagrant and the differences,Integrate plugins like sitespeed.io to ensure performance related checks on the pages,Logging Standards: Can customize logging framework to extend to create own formats with additional data like session id, hostname for log statements",
            ],
          },
        ],
      },
      {
        title: "Additonal Info",
        topics: [
          {
            title: "Estimation / Planning",
            questions: [
              "Check understanding of top-down / bottom-up approaches and how estimations are refined over time, WBS / Poker. Planning for tracks, traging etc",
            ],
          },
          {
            title: "Communication",
            questions: [
              "General communication skills to be assessed while probling other scenarios. Focus on clarity in terms of communicating thoughts. Able to articulate approach and document the architecture and requirements if needed",
            ],
          },
          {
            title: "Learning Agility",
            questions: [
              "keenness to learn - with examples on the latest tech. Role models and tech follower off???",
            ],
          },
        ],
      },
    ],
  },
  reactjs: {
    subject: "React JS",
    areas: [
      {
        title: "React JS",
        topics: [
          {
            title: "Basics",
            questions: [
              "POV in how is react different from other similar libraries, JSX, JSX transpilation to ES5/6, Props, VDOM, React's Diffing Algorithim Reconciliation and how DOM is updated,Handling Events",
            ],
          },
          {
            title: "Lifecycle methods and Hooks",
            questions: [
              "Different lifecycle methods and POV on Hooks, How useEffect is different from lifecycle methods ?,Hooks like useEffect, useState, useReducer, useMemo, useRef etc.",
            ],
          },
          {
            title: "Composing and Organising Components ",
            questions: [
              "Different component organisation techniques, Higher Order Components, Render Prop Pattern, Compound Component Pattern, Custom Hooks, State Initialisers, POV on how custom hooks can help in better component, organisation composition and reusability, Isolation of component responsibilities",
            ],
          },
          {
            title: "State Management",
            questions: [
              "Flow of data in react, POV on use cases of local state, context and reducer patterns, Redux - Refer Redux and related sections below",
            ],
          },
          {
            title: "Working with Remote Data in React",
            questions: [
              "Different techniques to handle and manage remote data in react, GraphQL and React, Apollo Client graphql-hooks etc, Using react-query, useSwr etc",
            ],
          },
          {
            title: "Routing",
            questions: ["POV on SPA and MPA., React Router, Next Router"],
          },
          {
            title: "SSR and SSG",
            questions: [
              "POV on SSR and what is typical catches when working with react on the server. SSR without using any library, Next JS - Setup, Code Organisation,Routing, ??Dynamic Routes, Pre-rendering etc, Static Site Generation using Next JS, Gatsby etc",
            ],
          },
          {
            title: "Organising and managing component styles ",
            questions: [
              "How different style organisation techniques like CSS Modules, Inline CSS, Styled components etc work with React",
            ],
          },
          {
            title: "Testing ",
            questions: ["Unit and Integration testing"],
          },
          {
            title: "Tooling ",
            questions: [
              "Linting & ??code formatting (Prettier, eslint etc), Testing (Jest, react-testing-lib, enzyme etc), Build tools (Webpack, Rollup, Parcel etc)",
            ],
          },
          {
            title: "Error Handling ",
            questions: ["Unit and Integration testing"],
          },
          {
            title: "Code Splitting ",
            questions: ["React Suspense and Lazy"],
          },
          {
            title: "Type Checking and handling props",
            questions: ["Proptypes, Flow, TS", "Default Props"],
          },
          {
            title: "React Component Performance ",
            questions: [
              "Monitoring and avoiding re-renders, Perf debugging using react and chrome developer tools",
            ],
          },
          {
            title: "Production Code best practices ",
            questions: [
              "Using React's Prod Build, Splitting Vendor files, Babel and its role",
            ],
          },
          {
            title: "State management libraries and their ecosystem",
            questions: [
              "POV on different state management libraries and their decreasing need., How redux works ?, Actions, reducers and Store, Need of middlewares in redux, Handling Side effects - Saga, Thunk, Component / Container Patterns, Re-select library",
            ],
          },
        ],
      },
    ],
  },
};

export const MOCKED_USERS = [
  {
    oracleId: 176046,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@publissapient.com",
    carrerStage: "Sr. Manager",
    isAdmin: true,
    otp: 12345,
  },
  {
    oracleId: 176009,
    firstName: "Joe",
    lastName: "Nerk",
    email: "joenerk@publissapient.com",
    carrerStage: "Manager",
    isAdmin: true,
    otp: 12345,
  },
  {
    oracleId: 176014,
    firstName: "Joss",
    lastName: "Sticks",
    email: "josssticks@publissapient.com",
    carrerStage: "Sr. Assocaite L2",
    isAdmin: false,
    otp: 54321,
  },
  {
    oracleId: 176053,
    firstName: "Brain",
    lastName: "Cumin",
    email: "braincumin@publissapient.com",
    carrerStage: "Sr. Assocaite L1",
    isAdmin: false,
    otp: 54321,
  },
];
