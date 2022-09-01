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
              "keenness to learn - with examples on the latest tech. Role models and tech follower off…",
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
              "keenness to learn - with examples on the latest tech. Role models and tech follower off…",
            score: "",
          },
        ],
        score: 0,
      },
    ],
    score: 0,
  },
];
