import React from 'react';

import campwithusImg from '@/../public/images/camp-with-us.png';
import carcatalogImg from '@/../public/images/car-catalog.png';
import chatappImg from '@/../public/images/chat-app.png';
import projectmanagementImg from '@/../public/images/project-management.png';
import reactfoodImg from '@/../public/images/react-food.png';
import portfolioImg from '@/../public/images/portfolio.png';
import {
  BookIcon,
  BriefcaseBusinessIcon,
  LaptopMinimalIcon,
} from 'lucide-react';

export const links = [
  {
    name: 'Home',
    id: 'home',
  },
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
  {
    name: 'Contact',
    id: 'contact',
  },
] as const;

export const experiencesData = [
  {
    label: 'React Developer',
    title: 'Syncjourney',
    location: 'Karachi, Pakistan',
    description: `Built high-performance React apps with Redux/Context API. Created reusable components, optimized rendering, and integrated APIs. Collaborated cross-functionally to deliver scalable solutions while maintaining code quality and testing standards (Jest/RTL). Enhanced front-end architecture through code reviews and optimizations. `,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Mar 2025 - Present',
  },
  {
    label: 'Senior Web Developer',
    title: 'BA Unique Web Solutions',
    location: 'Karachi, Pakistan',
    description: `Experienced Senior Web Developer specializing in building scalable, responsive web applications, leveraging expertise in modern JavaScript frameworks, full-stack development, and project leadership to deliver innovative digital solutions. `,
    icon: React.createElement(BriefcaseBusinessIcon),
    date: 'Jul 2024 - Present',
  },
  {
    label: 'Frontend Developer',
    title: 'QF Network',
    location: 'Karachi, Pakistan',
    description: `Experienced Frontend Developer skilled in building responsive, user-friendly web applications using modern JavaScript frameworks and tools, ensuring seamless user experiences and optimized performance.`,
    icon: React.createElement(BookIcon),
    date: 'Mar 2024 - May 2024',
  },
  {
    label: 'ERP Operator',
    title: 'SONIC TEXTILE INDUSTRIES (PVT) LTD',
    location: 'Karachi, Pakistan',
    description: `Efficiently managed and maintained ERP systems to streamline business processes, ensuring optimal functionality and data accuracy for enhanced decision-making.`,
    icon: React.createElement(LaptopMinimalIcon),
    date: 'Jul 2023 - Sep 2023',
  },
] as const;

export const images = {
  campwithusImg,
  carcatalogImg,
  chatappImg,
  projectmanagementImg,
  reactfoodImg,
};

export const projectsData = [
  {
    title: 'Chat Application',
    description:
      'A real-time chat application enabling seamless communication between users with features like private messaging, group chats, and media sharing.',
    tags: [
      'React',
      'Express',
      'Node.js',
      'Shadcn',
      'Tailwind',
      'MongoDB',
    ],
    imageUrl: chatappImg,
    link: 'https://github.com/BabarDeveloper/react-chat-app',
  },
  {
    title: 'Portfolio',
    description: `Portfolio that you're currently viewing! This project showcases my work and provides information about me.`,
    tags: [
      'React',
      'TypeScript',
      'Next.js',
      'Framer Motion',
      'Cloudinary',
      'React Email',
      'Tailwind',
    ],
    imageUrl: portfolioImg,
    link: 'https://github.com/BabarDeveloper/Portfolio-Nextjs',
  },
] as const;

export const skillsData = [
  ['JavaScript', '/svgs/javascript-js.svg'],
  ['TypeScript', '/svgs/typescript-icon.svg'],
  ['React', '/svgs/react.svg'],
  ['Next.js', '/svgs/nextjs.svg'],
  ['Node.js', '/svgs/node-js.svg'],
  ['Express.js', '/svgs/express-original.svg'],
  ['Nest.js', '/svgs/NestJS.svg'],
  ['Tailwind', '/svgs/tailwind-css.svg'],
  ['Framer', '/svgs/framer.svg'],
  ['Shadcn', '/svgs/shadcnui.svg'],
  ['Redux', '/svgs/redux-original.svg'],
  ['MongoDB', '/svgs/mongodb-original.svg'],
  ['MySQL', '/svgs/MySQL.svg'],
  ['Cloudinary', '/svgs/cloudinary.svg'],
  ['Axios', '/svgs/axios.svg'],
  ['HTML', '/svgs/file-type-html.svg'],
  ['CSS', '/svgs/file-type-css.svg'],
  ['Sass', '/svgs/Sass.svg'],
  ['Git', '/svgs/git.svg'],
  ['GitHub', '/svgs/github.svg'],
  ['', '/svgs/etc.svg'],
] as const;
