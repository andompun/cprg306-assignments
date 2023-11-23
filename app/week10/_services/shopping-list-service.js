"use client";

import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async

export const getItems = async () => {
    const shoppingList = [];
    const q = query(collection(db, "shoppingList"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        shoppingList.push(doc.data());
    });
    return shoppingList;
    };

export const addItems = async (item) => {
    await addDoc(collection(db, "shoppingList"), item);
    };

// Compare this snippet from app/week10/shopping-list.js:

