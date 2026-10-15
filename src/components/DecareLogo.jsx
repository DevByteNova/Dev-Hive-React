function DecareLogo() {
    return (
        <div className="decare-logo">
            <svg
                className="decare-logo-mark"
                viewBox="0 0 60 60"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <circle cx="30" cy="30" r="30" fill="var(--color-coral)" />
                <g
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M30 46V24" />
                    <path d="M30 34c-7 0-12-5-12-12 7 0 12 5 12 12z" />
                    <path d="M30 30c7 0 12-5 12-12-7 0-12 5-12 12z" />
                    <path d="M30 24c-3-3-3-8 0-11 3 3 3 8 0 11z" />
                </g>
            </svg>

            <span className="decare-logo-text">
                DECARE
            </span>
        </div>
    );
}

export default DecareLogo;
