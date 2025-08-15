'use client';

import { useState } from 'react';
import { firebaseDb } from '@/lib/firebaseClient';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// import your local remedies file
import remedies from '@/data/remedies';

export default function ImportRemedies() {
  const [status, setStatus] = useState('');

  const handleImport = async () => {
    setStatus('Importing remedies...');
    try {
      for (const item of remedies) {
        await addDoc(collection(firebaseDb, 'prescriptions'), {
          prescription: item.prescription,
          prescription_lc: item.prescription.toLowerCase(),
          alternatives: item.alternatives,
          createdAt: serverTimestamp(),
        });
      }
      setStatus(`✅ Imported ${remedies.length} remedies successfully!`);
    } catch (err) {
      console.error(err);
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <main className="min-h-screen bg-[#0c0c2e] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-purple-300">
          Import Local Remedies
        </h1>
        <button
          onClick={handleImport}
          className="px-6 py-3 bg-green-600 rounded hover:bg-green-700 transition"
        >
          📥 Import All Remedies
        </button>
        {status && <p className="mt-4 text-gray-400">{status}</p>}
      </div>
    </main>
  );
}
