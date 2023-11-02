'use client';

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
const [cleanName, setCleanName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([newItem, ...items]);
  };

  const handleSelect = (itemName) => {
    const cleanName = itemName.split(',')[0].replace(/,.*|🥛|🍞|🥚|🍌|🥦|🍗|🍝|🧻|🧼|🍽️/g, '').trim();
    setCleanName(cleanName);
  };

  const pageStyle = {
    backgroundImage: 'url("https://storage.googleapis.com/gen-atmedia/3/2018/01/2d4ea32ed14a1f75cf1b454748dfa99cd4a1fa62.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: 'transparent',
    height: '170vh',
  };

  return (
    <>
    <main style={pageStyle}>
      <h1 className="text-4xl font-bold text-center text-blue-800">Shopping List</h1>
      <div className='flex'>
        <div className='flex-1 max-w-sm m-2'>
            <NewItem onSubmit={handleAddItem} />
            <ItemList items={items} />
        </div>
      </div>
      <div className='flex-1 max-w-sm m-2'>
        <MealIdeas ingredient={cleanName} />
      </div>
    </main>
    </>
  );
}
