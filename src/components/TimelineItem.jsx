function TimelineItem({ item }) {
  return (
    <article className="timeline-item">
      <header>
        <div>
          <h3>{item.role}</h3>
          <p className="timeline-org">
            {item.company} | {item.location}
          </p>
        </div>
        <p className="timeline-date">{item.timeline}</p>
      </header>

      <ul>
        {item.bullets.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <ul className="chip-list">
        {item.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}

export default TimelineItem;
