"use client";
import {useState} from 'react';

export default function NewItem({onAddItem}) {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (evt) => {
        evt.preventDefault();
    
        // Ensure that the item has a name, quantity, and category before adding it
        if (item.name && item.quantity && item.category) {
            // Call the onAddItem prop and pass the item object
            onAddItem(item);
            // Reset the form
            setItem({ name: '', quantity: '', category: '' });
          }

        console.log(item);

        

    
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
        <div className="flex justify-left w-full">
        <form onSubmit={handleSubmit} className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full">
            <label className="block mb-4">
                <span className="text-gray-700">
                </span>
                    <input type="text"
                    required className="mt-1 p-1 block w-full rounded-md text black bg-gray-100 focus:bg-white"
                    onChange={handleNameChange}
                    value={name}
                    placeholder="Item Name"
                    />
            </label>
            <div className="flex justify-between"> 
                <label className="block mb-4">
                    <span className="text-gray-700"></span>
                        <input type="number"
                        required className="mt-1 p-1 block w-20 rounded-md text black bg-gray-100 focus:bg-white"
                        onChange={handleQuantityChange}
                        placeholder="1"
                        value={quantity}
                        />
                </label>
                <label className="block mb-4">
                    <span className="text-gray-700"></span>
                        <select className="mt-1 border-2 p-1 w-60 block w-full rounded-md text black bg-gray-100 focus:bg-white"
                        value={category} onChange={handleCategoryChange}>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen">Frozen</option>
                        <option value="Pantry">Pantry</option>
                    </select>
                </label>
            </div>
            <button type="submit" 
            className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">+</button>
        </form>
        </div>
    );   
}