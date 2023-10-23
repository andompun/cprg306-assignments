"use client";

import {useState} from "react";
import Item from "../week3/item";
import Items from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");  

    const sortedItems = [...Items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const renderSortButtons = () => {
        return (
            <div className="flex justify-left ml-7 space-x-5 w-full">
                <button className="block mb-4 bg-blue-500 hover:bg-blue-700 text-white mt-3 font-bold py-2 px-4 rounded" onClick={() => setSortBy("name")}>Name</button>
                <button className="block mb-4 bg-blue-500 hover:bg-blue-700 text-white mt-3 font-bold py-2 px-4 rounded" onClick={() => setSortBy("category")}>Category</button>
            </div>
        );
    };

    return (
        <div>
            {renderSortButtons()}
            {sortedItems.map((item) => (
                <Item 
                key={item.name} 
                name={item.name} 
                category={item.category} />
            ))}
        </div>
    )
        
  }
  