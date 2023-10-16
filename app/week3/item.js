export default function Item({ name, quantity, category }) {
    return (
      <div className="w-full max-w-xs m-3 p--2">
        <div className="className= grid mt-1 p-1 w-full rounded-md text black bg-gray-200">
          <h3 className="text-xl font-bold">{name}</h3>
          <p>Buy {quantity} in {category}</p>
        </div>
      </div>            
    );
  }
  