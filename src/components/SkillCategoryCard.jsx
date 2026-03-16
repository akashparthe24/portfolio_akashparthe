function SkillCategoryCard({ category }) {
  return (
    <article className="skill-category-card">
      <h3>{category.title}</h3>
      <ul>
        {category.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

export default SkillCategoryCard;
