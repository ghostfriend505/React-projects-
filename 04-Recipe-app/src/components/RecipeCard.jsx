export default function RecipeCard({meal}) {
  return (
    <div className="card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
      <p>{meal.strArea} • {meal.strCategory}</p>
      <a href={meal.strSource || meal.strYoutube} target="_blank">
        View Recipe
      </a>
    </div>
  )
}