"use client";

import React, {useState, useEffect} from "react";

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

    const [ meals, setMeals ] = useState([]);
    const [ selectedMealImage, setSelectedMealImage ] = useState(null);
    const [selectedMealID, setSelectedMealID] = useState(null);

    async function loadMealIdeas() {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals);
    };

    useEffect(() => {
        loadMealIdeas();
      }, [ingredient]);

    const handleMealClick = (meal) => {
      if (meal.idMeal === selectedMealID) {
          setSelectedMealImage(meal.strMealThumb);
          setSelectedMealID(meal.idMeal);
      } else {
          setSelectedMealImage(null);
          setSelectedMealID(null);
      } 
    };
    
    if (meals && meals.length > 0) {
      return (
        <div>
          <p>Meal Ideas with {ingredient}:</p>
          <ul>
            {meals.map((meal) => (
              <li 
                  className='p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer' 
                  key={meal.idMeal}
                  onClick={() => handleMealClick(meal)}
              >
                {meal.strMeal}
                <div>
                  {selectedMealID === meal.idMeal && selectedMealImage && (
                    <img src={selectedMealImage} alt={meal.strMeal} />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>No meal ideas found</div>;
    }
}
