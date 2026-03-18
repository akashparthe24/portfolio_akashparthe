import Card from "./Card";

function SkillCategoryCard({ category }) {
  return (
    <Card className="skill-category-card">
      <h3>{category.title}</h3>
      <ul>
        {category.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}

export default SkillCategoryCard;
