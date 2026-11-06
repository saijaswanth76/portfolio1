import { Check, Clock3, ExternalLink, Github } from 'lucide-react';
import ProjectVisual from './ProjectVisual';
import TechIcon from './TechIcon';

export default function ProjectCard({ project }) {
  const hasRepo = Boolean(project.repoUrl);
  const hasDemo = Boolean(project.demoUrl);

  return (
    <article className="card project-card">
      <ProjectVisual variant={project.visual} year={project.year} />

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <ul className="feature-list" aria-label={`${project.title} features`}>
          {project.features.map((feature) => (
            <li key={feature}>
              <Check size={12} strokeWidth={2.6} aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="tech-badges" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <span className="tech-badge" key={tech}>
              <TechIcon name={tech} size={12} />
              {tech}
            </span>
          ))}
        </div>

        <div className="project-actions">
          {hasRepo ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-secondary btn-sm"
            >
              <Github size={14} aria-hidden="true" />
              GitHub
            </a>
          ) : (
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              disabled
              title="Repository link coming soon"
            >
              <Clock3 size={14} aria-hidden="true" />
              GitHub
            </button>
          )}

          {hasDemo ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary btn-sm"
            >
              <ExternalLink size={14} aria-hidden="true" />
              Live Demo
            </a>
          ) : (
            <button
              type="button"
              className="btn btn-primary btn-sm"
              disabled
              title="Live demo link coming soon"
            >
              <Clock3 size={14} aria-hidden="true" />
              Live Demo
            </button>
          )}
        </div>

        {!hasRepo || !hasDemo ? (
          <p className="text-[10.5px] leading-relaxed text-slate-400 m-0">
            Repository and live demo links will be enabled as soon as they are
            published.
          </p>
        ) : null}
      </div>
    </article>
  );
}
