import React, { useRef, useEffect } from 'react';

function SpotlightBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    
    const spotlights = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, radius: 200, dx: 0.3, dy: -0.2, color: 'rgba(217, 35, 35, 0.05)' },
      { x: canvas.width * 0.8, y: canvas.height * 0.7, radius: 300, dx: -0.2, dy: 0.3, color: 'rgba(217, 35, 35, 0.04)' },
      { x: canvas.width * 0.5, y: canvas.height * 0.9, radius: 150, dx: 0.1, dy: -0.1, color: 'rgba(217, 35, 35, 0.06)' }
    ];

    const dustParticles = [];
    const dustCount = 100;
    for (let i = 0; i < dustCount; i++) {
      dustParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        dx: (Math.random() - 0.5) * 0.2,
        dy: (Math.random() - 0.5) * 0.2,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dustParticles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fill();
      });
      
      spotlights.forEach(light => {
        light.x += light.dx;
        light.y += light.dy;

        if (light.x - light.radius > canvas.width || light.x + light.radius < 0) light.dx = -light.dx;
        if (light.y - light.radius > canvas.height || light.y + light.radius < 0) light.dy = -light.dy;

        const gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, light.radius);
        gradient.addColorStop(0, light.color);
        gradient.addColorStop(1, 'rgba(217, 35, 35, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(light.x, light.y, light.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    }
    
    resizeCanvas();
    animate();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="spotlight-background-canvas" />;
}

export default SpotlightBackground;