import React, { useRef, useEffect } from 'react';

function BlueprintGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let gridOffset = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    
    const drawGrid = () => {
      const gridSize = 40;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // COR ALTERADA AQUI (usando o RGB de #9D37F2, que é 157, 55, 242)
      ctx.strokeStyle = 'rgba(157, 55, 242, 0.1)';
      ctx.lineWidth = 1;

      gridOffset = (gridOffset + 0.2) % gridSize;

      for (let x = -gridOffset; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = -gridOffset; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    function animate() {
      drawGrid();
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

  return <canvas ref={canvasRef} className="blueprint-grid-canvas" />;
}

export default BlueprintGrid;