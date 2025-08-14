// lib/firebaseAdmin.js
import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { join } from 'path';

const keyPath = join(process.cwd(), 'firebase', 'serviceAccountKey.json');
// Make sure firebase/serviceAccountKey.json exists (download from Firebase Console)
if (!admin.apps.length) {
  const serviceAccount = JSON.parse(readFileSync(keyPath, 'utf8'));
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
}

export async function verifyIdToken(token) {
  try {
    return await admin.auth().verifyIdToken(token);
  } catch (err) {
    console.error('verifyIdToken error:', err?.message || err);
    return null;
  }
}
