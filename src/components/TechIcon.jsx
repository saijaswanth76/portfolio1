import { FaJava } from 'react-icons/fa6';
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPython,
  SiScikitlearn,
  SiStreamlit,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiRazorpay,
} from 'react-icons/si';
import {
  Boxes,
  BrainCircuit,
  Cable,
  Code2,
  Cpu,
  Database,
  Layers,
  Server,
} from 'lucide-react';

const ICONS = {
  Java: { Icon: FaJava, color: '#e76f00' },
  HTML: { Icon: SiHtml5, color: '#e34f26' },
  CSS: { Icon: SiCss, color: '#1572b6' },
  JavaScript: { Icon: SiJavascript, color: '#c9a500' },
  SQL: { Icon: Database, color: '#4479a1' },
  'Spring Boot': { Icon: SiSpringboot, color: '#6db33f' },
  MySQL: { Icon: SiMysql, color: '#4479a1' },
  MongoDB: { Icon: SiMongodb, color: '#47a248' },
  Git: { Icon: SiGit, color: '#f05032' },
  GitHub: { Icon: SiGithub, color: '#181717' },
  'Object-Oriented Programming (OOP)': { Icon: Boxes, color: '#8b5cf6' },
  JDBC: { Icon: Cable, color: '#0ea5e9' },
  Collections: { Icon: Layers, color: '#6366f1' },
  Multithreading: { Icon: Cpu, color: '#0891b2' },
  'REST APIs': { Icon: Server, color: '#2563eb' },
  Python: { Icon: SiPython, color: '#3776ab' },
  'Machine Learning': { Icon: BrainCircuit, color: '#8b5cf6' },
  Streamlit: { Icon: SiStreamlit, color: '#ff4b4b' },
  'Scikit-learn': { Icon: SiScikitlearn, color: '#f7931e' },
  'React.js': { Icon: SiReact, color: '#087ea4' },
  'Node.js': { Icon: SiNodedotjs, color: '#5fa04e' },
  'Express.js': { Icon: SiExpress, color: '#334155' },
  JWT: { Icon: SiJsonwebtokens, color: '#d63aff' },
  Razorpay: { Icon: SiRazorpay, color: '#0c2451' },
};

export default function TechIcon({ name, size = 14, className }) {
  const { Icon, color } = ICONS[name] || { Icon: Code2, color: '#64748b' };

  return (
    <Icon
      size={size}
      color={color}
      className={className}
      aria-hidden="true"
      focusable="false"
    />
  );
}
