export const projectsData = [
    {
        id: 1,
        title: "Prudence Data",
        description: "A comprehensive data analytics platform designed to provide actionable insights through intuitive visualizations and robust reporting tools.",
        image: "/images/prudence-data.jpeg",
        previewUrl: "https://prudencedata-service.netlify.app/",
        githubUrl: "https://github.com/AgyeiMichaelJunior",
        category: "Data Analytics",
        features: [
            "Real-time data visualization using Chart.js",
            "Complex data filtering and sorting algorithms",
            "Automated reporting system with PDF export",
            "User authentication and role-based access control"
        ],
        challenges: "Managing large datasets and ensuring fast load times across different devices while maintaining high-fidelity visualizations.",
        solutions: "Implemented lazy loading for charts, optimized API calls with caching, and used high-performance data structures for client-side processing."
    },
    {
        id: 2,
        title: "Koola Hotel",
        description: "A premium hospitality management and booking website that offers a seamless user experience for room reservations and service exploration.",
        image: "/images/hotel-img.jpeg",
        previewUrl: "https://koolahotel.netlify.app/",
        githubUrl: "https://github.com/AgyeiMichaelJunior",
        category: "Hospitality",
        features: [
            "Interactive booking system with real-time availability",
            "Virtual room tours with high-resolution imagery",
            "Integrated payment gateway for secure transactions",
            "Responsive design specialized for mobile travelers"
        ],
        challenges: "Integrating multiple API services for bookings and payments while ensuring the visual design remained premium and uncluttered.",
        solutions: "Adopted a modular architecture for service integrations and used GSAP for smooth, elegant transitions that enhance the luxury feel."
    },
    {
        id: 3,
        title: "Koola Cocktail",
        description: "A vibrant and interactive web experience showcasing a curated selection of cocktails, focusing on high-quality visuals and engaging animations.",
        image: "/images/cocktail-web.jpeg",
        previewUrl: "https://koola-cocktail.netlify.app/",
        githubUrl: "https://github.com/AgyeiMichaelJunior",
        category: "Food & Beverage",
        features: [
            "Smooth scroll-triggered animations (GSAP)",
            "Dynamic menu filtering by ingredients",
            "Recipe sharing functionality",
            "Optimized image delivery for faster browsing"
        ],
        challenges: "Ensuring complex animations performed smoothly on lower-end mobile devices without sacrificing the 'vibe' of the site.",
        solutions: "Used GSAP ScrollTrigger for performance-efficient animations and implemented aggressive image optimization techniques."
    },
    {
        id: 4,
        title: "Koola City Education",
        description: "An educational platform designed for modern learning, offering course management, interactive modules, and progress tracking.",
        image: "/images/university-website.jpeg",
        previewUrl: "https://koolacityedu.netlify.app/",
        githubUrl: "https://github.com/AgyeiMichaelJunior",
        category: "Education",
        features: [
            "Course enrollment system",
            "Student dashboard with progress tracking",
            "Integrated library and resources section",
            "Responsive layout for multi-device learning"
        ],
        challenges: "Creating an intuitive UI that manages vast amounts of academic information without overwhelming the student.",
        solutions: "Implemented a hierarchical breadcrumb navigation system and used a cards-based layout to segment learning materials."
    },
    {
        id: 5,
        title: "Todo Lister",
        description: "A sleek and highly interactive productivity application that helps users stay organized with advanced task management features.",
        image: "/images/todo-list img.jpeg",
        previewUrl: "https://mytodo-lister.netlify.app/",
        githubUrl: "https://github.com/AgyeiMichaelJunior",
        category: "Productivity",
        features: [
            "Drag-and-drop task prioritization",
            "Local storage persistence",
            "Interactive dark/light mode toggle",
            "Customizable task categories and tags"
        ],
        challenges: "Implementing complex drag-and-drop logic while maintaining a clean, minimalist aesthetic.",
        solutions: "Utilized robust state management for task updates and refined CSS transitions for a snappy, responsive interface."
    }
];
