"use client";
import {useState} from 'react';

export default function NewItem() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (evt) => {
        evt.preventDefault();
    
        const item = {
            name: name,
            quantity: quantity,
            category: category
        }

        console.log(item);

        alert(`${quantity} ${name} from ${category} added successfully!`);
    
    };

    const handleNameChange = (evt) => {
        setName(evt.target.value);
    }

    const handleQuantityChange = (evt) => {
        setQuantity(evt.target.value);
    }

    const handleCategoryChange = (evt) => {
        setCategory(evt.target.value);
    }

    return (
        <div className="flex justify-center w-full mt-10">
        <form onSubmit={handleSubmit} className="border bg-white shadow-md, rounded px-8 pt-6 pb-6 mb-4 max-w-md">
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label>
                Quantity:
                <input type="number" value={quantity} onChange={handleQuantityChange} />
            </label>
            <label>
                Category:
                <select value={category} onChange={handleCategoryChange}>
                    <option value="Produce">Produce</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Meat">Meat</option>
                    <option value="Frozen">Frozen</option>
                    <option value="Pantry">Pantry</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
        </div>
    );   
}