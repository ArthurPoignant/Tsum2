import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function MerchItem({ item }) {
  const [quantity, setQuantity] = useState(1);
  const { data: session } = useSession();

  const handleAddToCart = async () => {
    const response = await fetch('/api/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId: item.id, quantity }),
    });
    if (response.ok) {
      alert('Item added to cart!');
    }
  };

  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{item.name}</h2>
      <p className="text-gray-600">${item.price.toFixed(2)}</p>
      <div className="mt-4 flex items-center">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="w-16 border rounded px-2 py-1 mr-2"
        />
        <button
          onClick={handleAddToCart}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
