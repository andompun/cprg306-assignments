import Link from "next/link";
import ItemList from "./item-list";

export default function Page() {
    return (
      <main style = {{
        backgroundImage: 'url("https://storage.googleapis.com/gen-atmedia/3/2018/01/2d4ea32ed14a1f75cf1b454748dfa99cd4a1fa62.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundColor: 'transparent',
        height: '170vh',
      }}>
      
        <h1 style = {{color: 'brown', fontWeight: 'bold', textAlign: 'center', fontSize: '40px'}}>
          Shopping List
        </h1>
        <ItemList />
      </main>
    );
  }