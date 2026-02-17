export default function MakuvionLogo({ className = "w-10 h-10" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 120 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f0d78c" />
                    <stop offset="50%" stopColor="#c9a444" />
                    <stop offset="100%" stopColor="#b08d30" />
                </linearGradient>
                <linearGradient id="logoGoldLight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f5e6a3" />
                    <stop offset="100%" stopColor="#d4a843" />
                </linearGradient>
            </defs>

            {/* Outer rounded rectangle border */}
            <rect
                x="4"
                y="4"
                width="112"
                height="112"
                rx="20"
                ry="20"
                fill="none"
                stroke="url(#logoGold)"
                strokeWidth="3"
            />

            {/* Inner background */}
            <rect
                x="10"
                y="10"
                width="100"
                height="100"
                rx="16"
                ry="16"
                fill="#0a0a0f"
                fillOpacity="0.9"
            />

            {/* Stylized M */}
            <path
                d="M30 85V45L45 65L60 45L75 65L90 45V85"
                fill="none"
                stroke="url(#logoGold)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Tech accent - top bar */}
            <line
                x1="35"
                y1="32"
                x2="85"
                y2="32"
                stroke="url(#logoGoldLight)"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Circuit dots */}
            <circle cx="35" cy="32" r="3" fill="#c9a444" />
            <circle cx="60" cy="32" r="3" fill="#d4a843" />
            <circle cx="85" cy="32" r="3" fill="#c9a444" />

            {/* Small tech lines */}
            <line x1="35" y1="32" x2="35" y2="38" stroke="#c9a444" strokeWidth="1.5" />
            <line x1="85" y1="32" x2="85" y2="38" stroke="#c9a444" strokeWidth="1.5" />

            {/* Bottom accent */}
            <line
                x1="40"
                y1="92"
                x2="80"
                y2="92"
                stroke="url(#logoGoldLight)"
                strokeWidth="1.5"
                strokeLinecap="round"
            />
        </svg>
    );
}
