import React, { useState, useEffect } from "react";

export default function Item({name, quantity, category, onSelect}) {

    return (
        <div className="border border-grey-500 bg-grey-800 w-full max-w-xs m-4 p-2">
            <ul className="my-5 rounded px-2 py-2 bg-slate-900">
                <li className="text-xl font-bold" onClick={() => onSelect(name)}>
                    {name}
                </li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}