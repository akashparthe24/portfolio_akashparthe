function SectionLayout({ children, twoColumn = false, className = "" }) {
  return <div className={`section-layout ${twoColumn ? "two-column" : ""} ${className}`}>{children}</div>;
}

export default SectionLayout;
