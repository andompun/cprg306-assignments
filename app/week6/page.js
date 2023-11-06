'use client';

import Link from "next/link";
import Header from "../week5/header";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([newItem, ...items]);
  };

  return (
    <main>
      <h1>
        <Header />
      </h1>
      <div>
        <NewItem onSubmit={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}