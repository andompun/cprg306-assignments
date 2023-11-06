'use client';

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import Header from "../week5/header";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [cleanName, setCleanName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([newItem, ...items]);
  };

  const handleItemSelect = (itemName) => {
    const cleanName = itemName.split(',')[0].replace(/,.*|🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🧼|🍽️/g, '').trim();
    setCleanName(cleanName);
  };

  return (
    <>
    <main>
      <h1>
        <Header />
      </h1>
        <div className='flex'>
          <div className='flex-1 max-w-sm m-2'>
              <NewItem onAddItem={handleAddItem} />
              <ItemList items={items} onSubmit={handleItemSelect} />
          </div>
          <div className='flex-1 max-w-sm m-2'>
            <h2 className="text-xl font-bold text-white">
              <MealIdeas ingredient={cleanName}/>
            </h2>
          </div>
        </div>
    </main>
    </>
  );
}
