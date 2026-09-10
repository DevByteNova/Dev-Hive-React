function AxiomaLogo() {
    return (
        <div className="axioma-logo">
            <svg
                className="axioma-logo-mark"
                viewBox="0 0 60 60"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="30" cy="30" r="30" fill="var(--color-naranja)" />
                <text
                    x="30"
                    y="41"
                    textAnchor="middle"
                    fontFamily="Georgia, 'Times New Roman', serif"
                    fontStyle="italic"
                    fontWeight="700"
                    fontSize="30"
                    fill="#0b1220"
                >
                    A
                </text>
            </svg>

            <span className="axioma-logo-text">
                AXIOMA
            </span>
        </div>
    );
}

export default AxiomaLogo;