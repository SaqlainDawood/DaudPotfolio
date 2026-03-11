import umsImage from "../assets/umsImage.png";
import ecommerceImage from "../assets/ecommerceImage.png";
import studentPortalImage from "../assets/studentPortalImage.png";
import teacherPortalImage from "../assets/teacherPortalImage.png";
import adminPortalImage from "../assets/adminPortalImage.png";

export const projectsData = [
  {
    id: 1,
    title: "University Management System (UMS)",
    category: ["mern", "fullstack", "university"],
    image: umsImage,
    description: "Complete university management solution with three integrated portals for students, teachers, and administrators.",
    fullDescription: "A comprehensive University Management System built with MERN stack. This platform streamlines all university operations including student enrollment, course management, attendance tracking, grade management, and administrative tasks. Features role-based access control with three distinct portals.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux", "JWT", "Socket.io", "Material-UI"],
    features: [
      "Student Portal: View courses, attendance, grades, submit assignments",
      "Teacher Portal: Manage classes, upload materials, grade students",
      "Admin Portal: User management, course allocation, reports generation",
      "Real-time notifications using Socket.io",
      "Secure authentication with JWT and role-based access",
      "Automated attendance tracking system",
      "Online fee payment integration",
      "Timetable management system"
    ],
    role: "Led full-stack development, designed database schema, implemented authentication system, and created all three portals with responsive design.",
    github: "https://github.com/saqlain/ums",
    live: "https://studentteacherportal.vercel.app"
  },
  {
    id: 2,
    title: "Online Shopping Platform",
    category: ["mern", "fullstack", "ecommerce"],
    image: ecommerceImage,
    description: "Feature-rich e-commerce platform with advanced product filtering, cart management, and secure payment integration.",
    fullDescription: "A fully functional e-commerce platform developed as my final year project. Includes product catalog with advanced filtering, user authentication, shopping cart, order management, payment gateway integration, and admin dashboard for inventory management.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Stripe API", "Cloudinary", "Tailwind CSS"],
    features: [
      "User authentication with email verification",
      "Product search with filters and sorting",
      "Shopping cart with persistent storage",
      "Secure payment processing with Stripe",
      "Order tracking and history",
      "Admin dashboard for inventory management",
      "Product reviews and ratings",
      "Wishlist functionality",
      "Email notifications for orders"
    ],
    role: "Full-stack development, implemented payment integration, built admin dashboard, and optimized database queries for performance.",
    github: "https://github.com/saqlain/ecommerce",
    live: "https://ecommerce-demo.vercel.app"
  },
  {
    id: 3,
    title: "Student Portal",
    category: ["mern", "fullstack"],
    image: studentPortalImage,
    description: "Dedicated student interface for accessing courses, submitting assignments, and tracking academic progress.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    fullDescription: "Student-focused portal within the UMS system providing seamless access to academic resources.",
    features: [
      "Dashboard with academic overview",
      "Course material access",
      "Assignment submission",
      "Grade viewing",
      "Attendance tracking",
      "Discussion forums"
    ],
    role: "Frontend development and API integration",
    github: "https://github.com/saqlain/student-portal",
    live: "https://studentteacherportal.vercel.app/student/login"
  },
  {
    id: 4,
    title: "Teacher Portal",
    category: ["mern", "fullstack"],
    image: teacherPortalImage,
    description: "Comprehensive teacher interface for managing classes, uploading materials, and evaluating students.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux"],
    fullDescription: "Teacher portal enabling educators to efficiently manage their courses and students.",
    features: [
      "Class management",
      "Student list viewing",
      "Material upload",
      "Assignment creation",
      "Grading system",
      "Attendance marking"
    ],
    role: "Backend API development and frontend implementation",
    github: "https://github.com/saqlain/teacher-portal",
    live: "https://studentteacherportal.vercel.app/faculty/login"
  },
  {
    id: 5,
    title: "Admin Portal",
    category: ["mern", "fullstack"],
    image: adminPortalImage,
    description: "Powerful admin dashboard for complete system management with analytics and reporting.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    fullDescription: "Administrative interface providing complete control over the university management system.",
    features: [
      "User management",
      "Course allocation",
      "Department management",
      "Analytics dashboard",
      "Report generation",
      "System configuration"
    ],
    role: "Full-stack development and data visualization",
    github: "https://github.com/saqlain/admin-portal",
    live: "https://admin-pannel-black.vercel.app/"
  }
];
