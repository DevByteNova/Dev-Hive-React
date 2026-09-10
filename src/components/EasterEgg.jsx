import { useEffect, useState, useRef } from "react";
import "../css/EasterEgg.css";

const KONAMI_CODE = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
];

const SYMBOLS = ["</>", "{ }", "01", "#dev-hive", "npm run", "<A/>"];

function generateDrops() {
    return Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 2.5 + Math.random() * 2,
        delay: Math.random() * 1.5,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
    }));
}

function EasterEgg() {
    const [active, setActive] = useState(false);
    const [drops, setDrops] = useState([]);
    const progressRef = useRef(0);

    useEffect(() => {
        console.log(
            "%c🐝 Dev-Hive",
            "color: #01b1e1; font-size: 20px; font-weight: 800;"
        );
        console.log(
            "%c¿Curioseando el código? Nos gusta eso.\nPsst... probá el código Konami. ↑ ↑ ↓ ↓ ← → ← → B A",
            "color: rgba(255,255,255,0.6); font-size: 13px;"
        );
    }, []);

    useEffect(() => {
        function handleKeyDown(e) {
            const expected = KONAMI_CODE[progressRef.current];
            const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;

            if (key === expected) {
                progressRef.current += 1;

                if (progressRef.current === KONAMI_CODE.length) {
                    setActive(true);
                    setDrops(generateDrops());
                    progressRef.current = 0;
                }
                return;
            }

            const validKeys = [
                "ArrowUp",
                "ArrowDown",
                "ArrowLeft",
                "ArrowRight",
                "b",
                "a"
            ];

            if (validKeys.includes(key)) {
                progressRef.current = key === KONAMI_CODE[0] ? 1 : 0;
                return;
            }

            progressRef.current = 0;
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        if (!active) return;

        const timer = setTimeout(() => {
            setActive(false);
        }, 4200);

        return () => clearTimeout(timer);
    }, [active]);

    if (!active) {
        return null;
    }

    return (
        <div className="easter-egg-overlay" aria-live="polite">
            {drops.map((drop) => (
                <span
                    key={drop.id}
                    className="easter-egg-drop"
                    style={{
                        left: `${drop.left}%`,
                        animationDelay: `${drop.delay}s`,
                        animationDuration: `${drop.duration}s`
                    }}
                >
                    {drop.symbol}
                </span>
            ))}

            <div className="easter-egg-toast">
                <div className="easter-egg-toast-emoji">🐝</div>
                <h3 className="easter-egg-toast-title">Dev-Hive activado</h3>
                <p className="easter-egg-toast-subtitle">
                    Código limpio, ideas locas y mucho detalle.
                </p>
            </div>
        </div>
    );
}

export default EasterEgg;
