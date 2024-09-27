// services key word

export type ServiceKeys = 'django' |'meanStack' | 'mernStack' | 'asp-angular' | 'php-core' | 'nextJS' | 'desktop-app-development' | 'artificial-inteligence';

//service content
export const serviceContent: Record<ServiceKeys, { title: string;smallDescription:string; description: string; imageSrc:string }> = {
  'django': {
    title: 'Django',
    smallDescription:'Cynocylix outline the main features, including some of the advanced functionality that we would not have time to cover in detail in this module. We will also show you some of the main building blocks of a Django application ',
    imageSrc:'/services-content/django.png',
    description: 'Django is a high-level Python web framework that enables rapid development of secure and maintainable websites. Built by experienced developers, Django takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It is free and open source, has a thriving and active community, great documentation, and many options for free and paid-for support.'
  },
  'meanStack': {
    title: 'MEAN Stack',
    smallDescription:'A relatively new stack, MEAN stands for MongoDB, Express.js, AngularJS and Node.js. MEAN is an end-to-end JavaScript stack largely used for cloud-ready applications. It is gaining popularity in modern web app development.',
    imageSrc:'/services-content/meanstack.avif',
    description: 'MEAN is an open source web stack that is mainly used to create cloud-hosted applications. MEAN stack applications are flexible, scalable and extensible, making them the perfect candidate for cloud hosting. JavaScript has long been a popular language for front-end web development—it’s flexible, dynamic and easy to use. But it has been an option only for back end and database development for a few years, allowing developers to create applications that use end-to-end JavaScript. Because every part of MEAN uses the same language, you can streamline your development teams. MEAN removes the need to hire different specialists to develop each part of an application. Instead, you can use a single pool of JavaScript developers to work adaptively, where and when needed. Standardizing on JavaScript also provides an opportunity to reuse code across the entire application, reducing unnecessary reinvention.'
  },
  'mernStack': {
    title: 'MERN Stack',
    smallDescription:'A technology stack can be custom (developers can choose the technologies depending on their project requirements) or pre-built (where the technologies have been pre-decided). MERN is a pre-built technology stack based on JavaScript technologies. MERN stands for MongoDB, Express, React, and Node, after the four key technologies that make up the stack.',
    imageSrc:'/services-content/mern-stack.png',
    description: 'MERN Stack aims to simplify the entire tech stack, by pre-determining the technologies. Developers and designers need not go through the pain of deciding what technologies should be used for which business case. Further, they need not learn or hire multiple people who know the different technologies, or put the onus on a single person. With a MERN stack, anyone can build simple or complex applications by just knowing a handful of technologies. This makes production faster and saves overall cost, without compromising on scalability, performance and security.'
  },
  'nextJS': {
    title: 'NextJS',
    smallDescription:"Next.js is an open-source web development framework created by the private company Vercel providing React-based web applications with server-side rendering and static website generation..",
    imageSrc:'/services-content/nextJS.png',
    description: `React Server Components (RSC): Reduces the client-side bundle size by rendering components server-side, directly accessing the backend. It’s great for performance optimization, reducing initial load times and strengthening SEO capabilities.

    Middleware provides granular control over the request-response lifecycle, enabling refined server-side logic like A/B testing and request manipulation. It’s admired for customizing user experience and implementing complex server-side logic efficiently. 

    Edge Functions: By running server-side code at the network’s edge, Edge Functions minimize latency, offering a serverless experience. It’s needed in applications requiring high performance and low response times, particularly for global user bases.
    
    App Router: A real star among these improvements! It changes the routing system in Next.js framework, and supports advanced features like nested routes and layouts. It’s a more flexible and powerful way to structure applications, crucial for large-scale and complex web projects.`
  },
  'asp-angular': {
    title: 'Asp .net With Angular',
    smallDescription:'Simply put, a web development stack is an amalgamation of programming languages, frameworks, and tools, which will make your product lively and ensure its scalability and efficacy. So, Angular and .NET Core are the latest frameworks for web app development, which can be integrated for seamless scalability and performance. So, let’s combine them.',
    imageSrc:'/services-content/asp-angular.png',
    description: '.NET Core is a top-notch .NET framework built by Microsoft, which intends to be lightweight and modular. Moreover, it means .NET Core can power both enterprise and small web applications on any OS or device. On the other hand, Angular is a front-end framework for creating SPA, aka single-page applications. A web development survey has illustrated that Angular is the second-most notable web framework among professional developers. Although these results are somewhat confusing as jQuery is a JS library instead of a framework, meaning that Angular is the most famous framework. However, Angular is carefully designed from the start to work amazingly with .NET Core making .NET Core + Angular a remarkable combination for web app development.'
  },
  'php-core': {
    title: 'PHP Core',
    smallDescription:'PHP is by far the most popular server-side programming language for web application development, with nearly 75% of websites using PHP either in its core form or one of the PHP frameworks available. To make a choice between using "core PHP" or frameworks for web development, we need to understand the pros and cons of both.',
    imageSrc:'/services-content/phpCore.avif',
    description: 'To give a simple analogy, developing a web application purely with core PHP is like solving a mathematical problem manually by writing down each step on the paper. On the other hand, using a framework is similar to using tools such as a calculator to solve a problem. Just as a calculator, the frameworks are useful tools for rapid application development. A web framework, especially a PHP framework is a collection of one or more PHP libraries and classes. It provides a generic functionality that allows the developer to concentrate more on the application logic, rather than writing code scratch. It provides a reusable software environment that quickly builds a minimal working template application.'
  },





  'desktop-app-development': {
    title: 'Desktop App Development',
    smallDescription:'The desktop application is a program designed to run on a computer (precisely, desktop) and use the resources from a system to perform its functions. The programs of desktop applications run on the top of operating systems such as macOS, Linux, and Microsoft Windows. Desktop applications are commonly developed using programming languages such as C++, Java, Python, or C#.',
    imageSrc:'/services-content/desktop-developemnt.png',
    description: "Creating an application locally for computer devices (operating systems) is referred to as desktop application development. Desktop app developers build these applications that are used specifically on laptops and desktops. These applications are usually built for Linux, Microsoft Windows, and macOS. Additionally,  desktop applications must be downloaded and installed on users' PCs because they can function without an internet connection. The developers use different languages such as JavaScript, HTML, CSS, SQL, Python, TypeScript, Node.js, Java, C#, C++, Bash, PHP, Swift, Red, Go, and so on for desktop application development."
  },

  'artificial-inteligence': {
    title: 'Artificial Inteligence',
    smallDescription:'',
    imageSrc:'',
    description: 'We specialize in creating mobile applications for both Android and iOS, ensuring high-quality user experiences.'
  },
};
