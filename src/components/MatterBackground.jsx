import { useEffect, useRef } from 'react';

const MatterBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = container.clientWidth;
    let height = container.clientHeight;
    const dpr = window.devicePixelRatio || 1;

    const setSize = () => {
      width = container.clientWidth;
      height = container.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setSize();

    const balls = Array.from({ length: 35 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2.5,
      vy: (Math.random() - 0.5) * 2.5,
      r: Math.random() * 8 + 4,
      alpha: Math.random() * 0.3 + 0.15,
    }));

    const mouse = { x: width / 2, y: height / 2, active: false };
    const navbarHeight = 70; // navbar boundary height
    const repulsionForce = 0.8; // strength of repulsion from navbar

    const handlePointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    const drawBall = (ball) => {
      const gradient = ctx.createRadialGradient(ball.x, ball.y, 0, ball.x, ball.y, ball.r * 3);
      gradient.addColorStop(0, 'rgba(140, 136, 96, ' + (ball.alpha * 1.0) + ')');
      gradient.addColorStop(0.4, 'rgba(140, 136, 96, ' + (ball.alpha * 0.4) + ')');
      gradient.addColorStop(1, 'rgba(17, 24, 39, 0)');

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(ball.x, ball.y, ball.r * 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = 'rgba(140, 136, 96, ' + (ball.alpha * 0.9) + ')';
      ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      balls.forEach((ball) => {
        if (mouse.active) {
          const dx = mouse.x - ball.x;
          const dy = mouse.y - ball.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 300) {
            const force = (300 - dist) / 300;
            ball.vx += (dx / dist) * 0.15 * force;
            ball.vy += (dy / dist) * 0.15 * force;
          }
        }

        // Navbar collision detection and repulsion
        if (ball.y - ball.r < navbarHeight) {
          ball.y = navbarHeight + ball.r;
          ball.vy = Math.abs(ball.vy) * repulsionForce; // Bounce down with repulsion
        }

        ball.x += ball.vx;
        ball.y += ball.vy;
        ball.vx *= 0.996;
        ball.vy *= 0.996;

        // Maintain minimum velocity to keep balls moving continuously
        const speed = Math.sqrt(ball.vx * ball.vx + ball.vy * ball.vy);
        if (speed < 0.5) {
          const angle = Math.atan2(ball.vy, ball.vx);
          ball.vx = Math.cos(angle) * 0.8;
          ball.vy = Math.sin(angle) * 0.8;
        }

        if (ball.x < -ball.r) ball.x = width + ball.r;
        if (ball.x > width + ball.r) ball.x = -ball.r;
        if (ball.y < -ball.r) ball.y = height + ball.r;
        if (ball.y > height + ball.r) ball.y = -ball.r;

        drawBall(ball);
      });

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', setSize);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('resize', setSize);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none z-0">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
};

export default MatterBackground;
