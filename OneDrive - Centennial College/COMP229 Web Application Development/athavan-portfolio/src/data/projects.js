export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio website showcasing my projects and skills. Built using HTML5, CSS3, and vanilla JavaScript with modern design principles.",
    image: "https://via.placeholder.com/400x250/74ebd5/ffffff?text=Portfolio+Website",
    role: "Frontend Developer",
    outcome:
      "Created a professional portfolio that effectively showcases my work and skills to potential employers and clients.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    longDescription:
      "This portfolio website was my first major project and represents my journey into web development. I built it from scratch using vanilla HTML, CSS, and JavaScript to demonstrate my understanding of fundamental web technologies. The site features a clean, modern design with smooth animations and responsive layouts that work seamlessly across all device sizes. I focused on creating an intuitive user experience while showcasing my technical skills and projects in an organized manner.",
    features: [
      "Responsive design that works on desktop, tablet, and mobile",
      "Smooth scrolling navigation",
      "Interactive hover effects and animations",
      "Clean and modern UI/UX design",
      "Optimized loading times",
      "Cross-browser compatibility",
    ],
    challenges:
      "One of the main challenges was ensuring the website worked consistently across different browsers and devices. I had to learn about CSS media queries and responsive design principles to create a seamless experience for all users.",
    lessons:
      "This project taught me the importance of user experience design and how small details can make a big difference in how users interact with a website. I also learned about the fundamentals of web performance optimization.",
  },
  {
    id: 2,
    title: "Interactive Calculator",
    description:
      "A fully functional calculator application with a clean, modern interface. Features basic arithmetic operations and a responsive design that works on all devices.",
    image: "https://via.placeholder.com/400x250/9face6/ffffff?text=Calculator+App",
    role: "Frontend Developer",
    outcome:
      "Developed a user-friendly calculator that demonstrates strong JavaScript programming skills and CSS styling abilities.",
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
    longDescription:
      "This calculator application was built to showcase my JavaScript programming skills and understanding of DOM manipulation. The calculator features a sleek, modern interface with a dark theme and smooth button interactions. It handles all basic arithmetic operations including addition, subtraction, multiplication, and division, with proper error handling for edge cases like division by zero.",
    features: [
      "Basic arithmetic operations (+, -, ×, ÷)",
      "Clear and delete functionality",
      "Error handling for invalid operations",
      "Responsive design for all screen sizes",
      "Smooth button animations and hover effects",
      "Keyboard support for number input",
    ],
    challenges:
      "Implementing proper error handling and edge cases was challenging. I had to ensure the calculator behaved correctly when users tried to divide by zero or perform invalid operations.",
    lessons:
      "This project reinforced my understanding of JavaScript fundamentals, event handling, and DOM manipulation. I learned how to create robust applications that handle user input gracefully.",
  },
  {
    id: 3,
    title: "To-Do List Application",
    description:
      "A simple yet effective to-do list application that allows users to add, edit, delete, and mark tasks as complete. Features local storage for data persistence.",
    image: "https://via.placeholder.com/400x250/2b2d42/ffffff?text=To-Do+List",
    role: "Frontend Developer",
    outcome:
      "Built a practical application that demonstrates understanding of JavaScript fundamentals, DOM manipulation, and local storage usage.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    longDescription:
      "This to-do list application demonstrates my ability to create practical, user-focused applications. The app allows users to manage their daily tasks with an intuitive interface. Users can add new tasks, mark them as complete, edit existing tasks, and delete unwanted items. The application uses browser local storage to persist data, so tasks remain saved even after closing the browser.",
    features: [
      "Add new tasks with a simple form",
      "Mark tasks as complete with visual feedback",
      "Edit existing tasks inline",
      "Delete individual tasks",
      "Local storage for data persistence",
      "Clean and intuitive user interface",
      "Task counter showing completed vs total tasks",
    ],
    challenges:
      "Implementing local storage functionality was the most challenging part. I had to ensure that data was properly saved and retrieved, and handle cases where local storage might not be available.",
    lessons:
      "This project taught me about data persistence in web applications and how to create user-friendly interfaces for data management. I also learned about the importance of providing clear feedback to users about their actions.",
  },
];

export const getProjectById = (projectId) =>
  projects.find((project) => project.id === Number(projectId));

