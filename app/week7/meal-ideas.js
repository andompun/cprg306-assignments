'use client';

import {useState, useEffect} from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
    
    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.meals;

    } catch (error) {
        console.error(error);
    }
};

export default function MealIdeas({ ingredient}) {

    const [ meals, setMeals ] = useState(null);

    async function loadMealIdeas() {
        try {
            const data = await fetchMealIdeas();
            setMeals(data.meals);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        loadMealIdeas();}, []);
    
  return (
    <div>
      <h2 className="text-4xl font-bold mb-4">Meal Ideas for: {ingredient}</h2>
      {meals ? (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              {meal.strMeal}
              <img src={meal.strMealThumb} alt={meal.strMeal} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No meal ideas found for {ingredient}</p>
      )}
    </div>
  );
}
