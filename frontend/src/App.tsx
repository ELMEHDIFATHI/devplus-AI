import { Activity } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4">
      <div className="flex items-center gap-3 mb-4">
        <Activity className="w-10 h-10 text-blue-500 animate-pulse" />
        <h1 className="text-4xl font-bold tracking-tight">DevPulse AI</h1>
      </div>
      <p className="text-slate-400 text-lg max-w-md text-center">
        Frontend React + TypeScript + Vite + Tailwind CSS initialisé avec succès.
      </p>
    </div>
  );
}