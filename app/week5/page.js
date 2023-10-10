"use client";
import Link from "next/link";
export default function Page() {
    let lipstickList = [
        {
        id: 1,
        name: "handheld",
        decription: "hand holding a lipstick",
        imageUrl: "https://www.pexels.com/photo/close-up-photo-of-person-holding-lipstick-3060257/",
        },
        {
        id: 2,
        name: "cactus",
        description: "spiky cactus",
        imageUrl: "https://www.pexels.com/photo/green-prickly-lipstick-with-cactus-plant-1369653/",
        },
        {
        id: 3,
        name: "lip gloss",
        description: "lip gloss",
        imageUrl: "https://www.pexels.com/photo/photo-of-pink-cosmetics-2587370/",
        },
    
    ];

    lipstickList.sort((a, b) => a.name.localeCompare(b.name));

    lipstickList = lipstickList.filter( (lipstick.id !== 2));


    return <main>
        <ul>
            {
            lipstickList.map((lipstick) => (
                <li key={lipstick.id}>
                    <h2>{lipstick.name}</h2>
                    <p>{lipstick.description}</p>
                    <img src={lipstick.imageUrl} alt={lipstick.description} />
                </li>
            ))
            }
        </ul>
    </main>
}
        


