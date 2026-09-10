function DevHiveLogo() {
    return (
        <>
            <div className="devhive-logo">
                <svg
                    className="devhive-logo-mark"
                    viewBox="0 0 60 60"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="devhive-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#01b1e1" />
                            <stop offset="100%" stopColor="#00e5c7" />
                        </linearGradient>
                    </defs>

                    <circle cx="30" cy="30" r="30" fill="url(#devhive-gradient)" />

                    <text
                        x="30"
                        y="40"
                        textAnchor="middle"
                        fontFamily="Arial, sans-serif"
                        fontWeight="800"
                        fontSize="24"
                        fill="#050810"
                    >
                        DH
                    </text>
                </svg>

                <span className="devhive-logo-text">
                    DEV-HIVE
                </span>
            </div>

            <span className="devhive-live-badge">
                <span className="devhive-live-dot" />
                Sitio actual
            </span>
        </>
    );
}

export default DevHiveLogo;