type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <header className="section-title-wrap">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {subtitle ? <p className="subtitle">{subtitle}</p> : null}
    </header>
  );
}

export default SectionTitle;
