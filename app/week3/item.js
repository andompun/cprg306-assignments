export default function Item({ name, quantity, category }) {
    return (
      <div className="w-full max-w-xs m-3 p--2">
        <div className="className= grid mt-1 p-1 w-full rounded-md text black bg-slate-900">
          <h3 className="text-xl font-bold">{name}</h3>
          <p>Buy {quantity} in {category}</p>
        </div>
      </div>            
    );
  }
  

  "my-5 rounded px-2 py-2 bg-slate-900"