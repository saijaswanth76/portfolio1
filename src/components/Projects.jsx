import { ArrowUpRight, Github } from 'lucide-react';
import { profile, projects } from '../data/portfolio';
import ProjectCard from './ProjectCard';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-heading">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Portfolio"
            title="Featured Projects"
            text="Selected work that combines machine learning, full-stack development and secure payment flows."
          />
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 90} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="projects-more" delay={120}>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-secondary"
          >
            <Github size={16} aria-hidden="true" />
            View More Projects
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <p className="projects-more__note">
            More repositories and experiments live on GitHub.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
