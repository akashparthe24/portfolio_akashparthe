function SectionShell({ id, children, className = "" }) {
  return (
    <section id={id} className={`section ${className}`}>
      {/* Shared wrapper keeps layout width/spacing consistent across sections. */}
      <div className="container reveal">
        {children}
      </div>
    </section>
  );
}

export default SectionShell;
