export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'center',
  id,
}) {
  const left = align === 'left';

  return (
    <div className={`section-head${left ? ' section-head--left' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-head__title" id={id}>
        {title}
      </h2>
      {text ? <p className="section-head__text">{text}</p> : null}
    </div>
  );
}
