import { Sparkles } from 'lucide-react';

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-gray-50">
      <button
        className="w-[60px] h-[60px] rounded-full flex items-center justify-center"
        style={{
          backgroundColor: '#0066FF',
          boxShadow: '0px 4px 12px rgba(0, 102, 255, 0.3)'
        }}
        aria-label="AI Assistant"
      >
        <Sparkles className="w-6 h-6 text-white" strokeWidth={2} />
      </button>
    </div>
  );
}