'use client';

import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import React, { useState } from "react";
import MealIdeas from "./meal-ideas";
import Header from "../week5/header";
import { useUserAuth } from "./_utils/auth-context";
import { Redirect } from "react-router-dom";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [cleanName, setCleanName] = useState('');
  const user = useUserAuth();
    if (!user) {
        return
            <p>You need to be signed in to view this page.</p>;
        } else {
            return <Redirect to="./shopping-list" />;        
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
            <h2 className="text-m text-white">
              <MealIdeas ingredient={cleanName}/>
            </h2>
          </div>
        </div>
    </main>
    </>
  );
}
