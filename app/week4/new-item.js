export default function NewItem(); 
import[useState] from 'react';

function NewItem() {
    const [name, setName] = useState("");
    
    return (
        <div>
            <h1>Add a new item</h1>
            <form>
                <label>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );

}
