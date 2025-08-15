'use client'; // Because this import party is strictly client-side. No server allowed.

import { useState } from 'react'; // React’s mood tracker. Is it importing? Is it crying?

import { firebaseDb } from '@/lib/firebaseClient'; // Summoning the Firestore beast from your magical lib cave.
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Tools for tossing data into the cloud with timestamps like a boss.

// import your local remedies file
import remedies from '@/data/remedies'; // The sacred scroll of herbal wisdom. Locally sourced, organically coded.

export default function ImportRemedies() {
  const [status, setStatus] = useState(''); // Status updates: because silence is suspicious.

  const handleImport = async () => {
    setStatus('Importing remedies...'); // Cue the dramatic loading message.
    try {
      for (const item of remedies) { // Looping through the herbal treasure chest.
        await addDoc(collection(firebaseDb, 'prescriptions'), {
          prescription: item.prescription, // The main magic word.
          prescription_lc: item.prescription.toLowerCase(), // Just in case someone types it like they’re yelling.
          alternatives: item.alternatives, // The backup dancers to the main remedy.
          createdAt: serverTimestamp(), // Time-stamped for historical glory.
        });
      }
      setStatus(`✅ Imported ${remedies.length} remedies successfully!`); // Victory message with a humble brag.
    } catch (err) {
      console.error(err); // Log the chaos for future archaeologists.
      setStatus(`Error: ${err.message}`); // Let the user know the universe glitched.
    }
  };

  return (
    <main className="min-h-screen bg-[#0c0c2e] text-white px-6 py-10"> {/* Dark mode: because importing should feel mysterious. */}
      <div className="max-w-3xl mx-auto"> {/* Centered like your intentions. */}
        <h1 className="text-3xl font-bold mb-6 text-purple-300">
          Import Local Remedies {/* Fancy title for a fancy operation. */}
        </h1>
        <button
          onClick={handleImport} // Push this button to unleash herbal chaos.
          className="px-6 py-3 bg-green-600 rounded hover:bg-green-700 transition"
        >
          📥 Import All Remedies {/* Because “Click Me” is too basic. */}
        </button>
        {status && <p className="mt-4 text-gray-400">{status}</p>} {/* Status update: because mystery is overrated. */}
      </div>
    </main>
  );
}
