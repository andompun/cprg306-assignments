export default function Item({name, quantity, category}) {
    return (
        <div>
            <ul className="my-5 rounded px-2 py-2 bg-slate-900">
                <li className="text-xl font-bold">{name}</li>
                <li>Buy {quantity} in {category}</li>
            </ul>
        </div>
    );
}