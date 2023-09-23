import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
    return (
      <main style = {{backgroundColor: 'purple'}}>
        <h1 style = {{color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: '40px'}}>
          Shopping List
        </h1>
        <ItemList />
      </main>
    );
  }