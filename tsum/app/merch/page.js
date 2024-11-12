'use client';

import MerchList from '../components/MerchList';

export default function MerchPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Merchandise</h1>
      <MerchList />
    </div>
  );
}
