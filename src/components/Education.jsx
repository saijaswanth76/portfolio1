import { BookOpen, CalendarDays, GraduationCap, School } from 'lucide-react';
import { education } from '../data/portfolio';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const EDU_ICONS = {
  university: GraduationCap,
  school: School,
  book: BookOpen,
};

export default function Education() {
  return (
    <section
      className="section section--muted"
      id="education"
      aria-labelledby="education-heading"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="education-heading"
            eyebrow="Education"
            title="Academic Background"
            text="A steady foundation in computer science, built from school through engineering."
          />
        </Reveal>

        <ol className="timeline list-none m-0 p-0">
          {education.map((item, index) => {
            const Icon = EDU_ICONS[item.icon] || GraduationCap;

            return (
              <li className="timeline-item" key={item.id}>
                <span className="timeline-dot" aria-hidden="true" />
                <Reveal delay={index * 80}>
                  <article className="card card--interactive edu-card">
                    <span className="edu-card__icon">
                      <Icon size={20} aria-hidden="true" />
                    </span>

                    <div className="edu-card__body">
                      <div className="edu-card__top">
                        <div>
                          <h3 className="edu-card__degree">{item.degree}</h3>
                          <p className="edu-card__field">{item.field}</p>
                          <p className="edu-card__school">{item.institution}</p>
                        </div>
                      </div>

                      <div className="edu-card__meta">
                        <span className="meta-pill">
                          <CalendarDays size={12} aria-hidden="true" />
                          {item.period}
                        </span>
                        <span className="meta-pill meta-pill--accent">
                          {item.score}
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
