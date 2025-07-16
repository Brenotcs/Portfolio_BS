import React from "react";

interface LoaderProps {
  fadeOut?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ fadeOut }) => (
  <div
    className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
  >
    <span className="relative font-mono text-base md:text-lg text-white">
      <span
        className="inline-block overflow-hidden whitespace-nowrap align-bottom"
        style={{
          borderRight: '2px solid #fff',
          animation: 'typing 1.5s steps(13, end) forwards',
          width: 0,
          animationFillMode: 'forwards',
        }}
      >
        {'<breno_dev/>'}
      </span>
      <span
        className="absolute right-0 top-0 h-full border-r-2 border-white animate-blink"
        style={{
          animation: 'blink 0.7s step-end infinite alternate',
          width: '2px',
        }}
      />
    </span>
    <style>{`
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      @keyframes blink {
        50% { border-color: transparent; }
      }
    `}</style>
  </div>
);

export default Loader; 