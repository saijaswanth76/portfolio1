import { Code2, Cpu, Database, Layers, Wrench } from 'lucide-react';
import { skillGroups } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import TechIcon from './TechIcon';

const GROUP_ICONS = {
  code: Code2,
  layers: Layers,
  database: Database,
  tools: Wrench,
  cpu: Cpu,
};

export default function Skills() {
  return (
    <section className="section section--muted" id="skills" aria-labelledby="skills-heading">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            eyebrow="Technical Skills"
            title="Skills & Technologies"
            text="The languages, frameworks, databases and computer science fundamentals I use to build complete applications."
          />
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = GROUP_ICONS[group.icon] || Code2;

            return (
              <Reveal
                key={group.id}
                delay={index * 55}
                className={`skill-card--${group.id}`}
              >
                <article className="card card--interactive skill-card h-full">
                  <div className="skill-card__head">
                    <span className="skill-card__icon">
                      <Icon size={18} aria-hidden="true" />
                    </span>
                    <h3 className="skill-card__title">{group.title}</h3>
                    <span className="skill-card__count">{group.skills.length}</span>
                  </div>

                  <div className="skill-chips">
                    {group.skills.map((skill) => (
                      <span className="skill-chip" key={skill}>
                        <TechIcon name={skill} size={14} />
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
