export default function LuxuryStar() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-yellow-400"
    >
      {/* Main Star */}
      <path
        d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z"
        stroke="url(#goldGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinejoin="round"
      />

      {/* Small Sparkles */}
      <circle cx="72" cy="18" r="3" fill="#FBBF24" />
      <circle cx="28" cy="82" r="2.5" fill="#F59E0B" />
      <circle cx="18" cy="28" r="2" fill="#FBBF24" />

      <defs>
        <linearGradient id="goldGradient" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#F97316" />
        </linearGradient>
      </defs>
    </svg>
  );
}
