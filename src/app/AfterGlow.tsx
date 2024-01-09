'use client'

import { useEffect, useRef } from "react"

export default function AfterGlow() {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const coords: { x: number; y: number }[] = [];

        if (ref.current) {
            const canvas = ref.current;
            const ctx = canvas.getContext('2d')!;
            const width = canvas.width = window.innerWidth;
            const height = canvas.height = window.innerHeight;
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.fillRect(0, 0, width, height);

            draw();
        }
        function handleMouseMove(e: MouseEvent) {
            console.log(e.clientX, e.clientY)
            coords.push({ x: e.clientX, y: e.clientY })
            if (coords.length > 100) coords.shift()
            setTimeout(() => {
                coords.shift()
            }, 100)
        }

        function draw() {
            let alpha = 0.75;
            if (ref.current) {
                const canvas = ref.current;
                const ctx = canvas.getContext('2d')!;
                const width = canvas.width = window.innerWidth;
                const height = canvas.height = window.innerHeight;
                ctx.clearRect(0, 0, width, height);
                ctx.fillStyle = 'rgb(0, 0, 0)';
                ctx.fillRect(0, 0, width, height);

                ctx.strokeStyle = '#f4f40525';
                ctx.lineWidth = 3;
                ctx.beginPath();
                coords.forEach(({ x, y }, i) => {
                    alpha -= 0.05;
                    ctx.strokeStyle = `rgba(244, 244, 5, ${alpha})`
                    if (i === 0) {
                        ctx.moveTo(x, y)
                    } else {
                        ctx.lineTo(x, y)
                    }
                })
                ctx.stroke();
            }
            requestAnimationFrame(draw);
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <canvas ref={ref} id="afterglow" className="fixed inset-0 z-[-1]"></canvas>
    )
}
