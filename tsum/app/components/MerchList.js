'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import MerchItem from './MerchItem';
import AddMerchModal from './AddMerchModal';

export default function MerchList() {
  const { data: session, status } = useSession();
  const [merchItems, setMerchItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchMerchItems();
  }, []);

  const fetchMerchItems = async () => {
    const response = await fetch('/api/merch');
    const data = await response.json();
    setMerchItems(data);
  };

  const handleAddMerch = async (newMerch) => {
    const response = await fetch('/api/merch', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newMerch),
    });
    if (response.ok) {
      fetchMerchItems();
      setIsModalOpen(false);
    }
  };

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {merchItems.map((item) => (
          <MerchItem key={item.id} item={item} />
        ))}
      </div>
      {session?.user?.role === 'admin' && (
        <>
          <button
            className="mt-8 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setIsModalOpen(true)}
          >
            Add New Merchandise
          </button>
          <AddMerchModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAddMerch={handleAddMerch}
          />
        </>
      )}
    </>
  );
}
