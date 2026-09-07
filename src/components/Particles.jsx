import "../css/Particles.css";

const particles = [
    { x: 8, y: 18, size: 2, delay: 0, duration: 12 },
    { x: 16, y: 72, size: 3, delay: 2, duration: 15 },
    { x: 24, y: 38, size: 2, delay: 5, duration: 11 },
    { x: 31, y: 84, size: 2, delay: 1, duration: 14 },
    { x: 39, y: 24, size: 3, delay: 4, duration: 13 },
    { x: 46, y: 65, size: 2, delay: 7, duration: 16 },
    { x: 53, y: 12, size: 2, delay: 3, duration: 12 },
    { x: 61, y: 47, size: 3, delay: 6, duration: 15 },
    { x: 68, y: 78, size: 2, delay: 1, duration: 13 },
    { x: 75, y: 28, size: 2, delay: 5, duration: 17 },
    { x: 82, y: 59, size: 3, delay: 2, duration: 14 },
    { x: 91, y: 16, size: 2, delay: 8, duration: 12 },

    { x: 12, y: 52, size: 2, delay: 4, duration: 16 },
    { x: 21, y: 91, size: 3, delay: 7, duration: 13 },
    { x: 35, y: 56, size: 2, delay: 2, duration: 15 },
    { x: 43, y: 91, size: 2, delay: 6, duration: 12 },
    { x: 57, y: 34, size: 3, delay: 0, duration: 14 },
    { x: 64, y: 88, size: 2, delay: 5, duration: 16 },
    { x: 73, y: 67, size: 2, delay: 3, duration: 13 },
    { x: 87, y: 42, size: 3, delay: 8, duration: 15 }
];

function Particles() {
    return (
        <div className="particles" aria-hidden="true">
            {particles.map((particle, index) => (
                <span
                    className="particle"
                    key={index}
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`
                    }}
                />
            ))}
        </div>
    );
}

export default Particles;