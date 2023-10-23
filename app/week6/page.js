import Link from "next/link";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page() {
    return (
      <main style = {{
        backgroundImage: 'url("https://storage.googleapis.com/gen-atmedia/3/2018/01/2d4ea32ed14a1f75cf1b454748dfa99cd4a1fa62.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundColor: 'transparent',
        height: '170vh',
      }}>
      
        <h1 className="text-4xl font-bold text-center text-blue-800">
          Shopping List
        </h1>
    
      const [items, setItems] = useState(itemsData);
      const handleAddItem = (NewItem) => {
        setItems((prevItems) => [...prevItems, NewItem]);
      };

      return (
       
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} />
      
      </main>
    );
    }