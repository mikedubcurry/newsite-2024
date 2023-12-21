'use client'

import { useEffect, useState } from "react"

type Entity = {
    x: number
    y: number
    width: number
    height: number
    speed: number
    velX: number
    velY: number
}

type Player = Entity & {
    jumping: boolean
    grounded: boolean
    points: number
}

type Platform = Entity & {
    yLimit: number
    xLimit: number
}

type Coin = Entity & {
    points: number
    visible: boolean
}


export default function Platformer() {
    const [playing, setPlaying] = useState(false)
    useEffect(() => {
        const canvas = document.getElementById('game')! as HTMLCanvasElement
        const ctx = canvas.getContext('2d')!
        const width = canvas.width
        const height = canvas.height
        let moving = false

        const player: Player = {
            x: width / 2 - 16,
            y: height - 32,
            width: 32,
            height: 32,
            speed: 5,
            velX: 0,
            velY: 0,
            jumping: false,
            grounded: false,
            points: 0,
        }

        const keys: {
            [key: string]: boolean
        } = {}
        const friction = 0.9
        const gravity = 0.3

        const platforms: Platform[] = [
            { x: 0, y: 550, width: 100, height: 10, speed: 2, velX: 0, velY: 0, yLimit: 250, xLimit: 500 },
            { x: 90, y: 250, width: 100, height: 10, speed: 2, velX: 0, velY: 0, yLimit: 250, xLimit: 500 },
            { x: 330, y: 350, width: 100, height: 10, speed: 2, velX: 0, velY: 0, yLimit: 250, xLimit: 500 },
            { x: 290, y: 450, width: 100, height: 10, speed: 2, velX: 0, velY: 0, yLimit: 250, xLimit: 100 },
            { x: 90, y: 250, width: 100, height: 10, speed: 2, velX: 0, velY: 0, yLimit: 250, xLimit: 500 },
            { x: 150, y: 200, width: 100, height: 10, speed: 2, velX: 0, velY: 0, yLimit: 250, xLimit: 400 },
            { x: 300, y: 150, width: 100, height: 10, speed: 2, velX: 0, velY: 0, yLimit: 250, xLimit: 600 },
            { x: 450, y: 100, width: 100, height: 10, speed: 2, velX: 0, velY: 0, yLimit: 250, xLimit: 500 },
            { x: 0, y: height - 10, width, height: 10, speed: 0, velX: 0, velY: 0, yLimit: 250, xLimit: 300 },
        ]

        const coins: Coin[] = [
            { x: 100, y: 180, width: 10, height: 10, speed: 0, velX: 0, velY: 0, points: 10, visible: true },
            { x: 200, y: 230, width: 10, height: 10, speed: 0, velX: 0, velY: 0, points: 10, visible: true },
            { x: 300, y: 110, width: 10, height: 10, speed: 0, velX: 0, velY: 0, points: 10, visible: true },
            { x: 400, y: 170, width: 10, height: 10, speed: 0, velX: 0, velY: 0, points: 10, visible: true },
            { x: 500, y: 320, width: 10, height: 10, speed: 0, velX: 0, velY: 0, points: 10, visible: true },
            { x: 600, y: 400, width: 10, height: 10, speed: 0, velX: 0, velY: 0, points: 10, visible: true },
        ]

        function update() {
            ctx.clearRect(0, 0, width, height)
            // update platforms
            for (let i = 0; i < platforms.length; i++) {
                if (platforms[i].speed === 0) continue
                if (platforms[i].x >= platforms[i].xLimit) {
                    platforms[i].speed = -2
                } else if (platforms[i].x <= 0) {
                    platforms[i].speed = 2
                }
                platforms[i].x += platforms[i].speed
            }
            player.velX *= friction
            player.velY += gravity
            ctx.fillStyle = '#0f0'
            ctx.beginPath()
            player.grounded = false
            let vel: number = 0
            for (let i = 0; i < platforms.length; i++) {
                ctx.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height)
                const dir = colCheck(player, platforms[i])
                if (dir === 'l' || dir === 'r') {
                    player.velX = 0
                    player.jumping = false
                } else if (dir === 'b') {
                    player.grounded = true
                    player.jumping = false
                    vel = platforms[i].speed
                } else if (dir === 't') {
                    player.velY *= -1
                }
            }
            if (player.grounded) {
                player.velY = 0
                if (!keys['ArrowLeft'] && !keys['ArrowRight']) {
                    player.velX = vel
                }
            }
            if (player.x >= width) {
                player.x = 0
            } else if (player.x <= 0) {
                player.x = width
            }
            if (player.y >= height) {
                player.y = 0
            }
            player.x += player.velX
            player.y += player.velY
            ctx.fillStyle = '#f00'
            ctx.fillRect(player.x, player.y, player.width, player.height)

            // update coins
            for (let i = 0; i < coins.length; i++) {
                ctx.fillStyle = '#ff0'
                if (!coins[i].visible) continue
                ctx.fillRect(coins[i].x, coins[i].y, coins[i].width, coins[i].height)
                const collided = colCheck(player, coins[i])
                if (collided) {
                    // remove coin
                    coins[i].visible = false
                    // update score
                    player.points += coins[i].points
                }
            }
            if (coins.every(coin => !coin.visible)) {
                setPlaying(false)
            }
            // check keys
            if (keys['ArrowUp'] || keys[' ']) {
                // up arrow or space
                if (!player.jumping && player.grounded) {
                    player.jumping = true
                    player.grounded = false
                    player.velY = -player.speed * 2
                }
            }
            if (keys['ArrowRight']) {
                // right arrow
                if (player.velX < player.speed) {
                    player.velX += 2
                }
            }
            if (keys['ArrowLeft']) {
                // left arrow
                if (player.velX > -player.speed) {
                    player.velX -= 2
                }
            }
            if (playing)
                requestAnimationFrame(update)
        }

        function colCheck(shapeA: any, shapeB: any) {
            // get the vectors to check against
            const vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2))
            const vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2))
            // add the half widths and half heights of the objects
            const hWidths = (shapeA.width / 2) + (shapeB.width / 2)
            const hHeights = (shapeA.height / 2) + (shapeB.height / 2)
            let colDir = ''
            // if the x and y vector are less than the half width or half height, they we must be inside the object, causing a collision
            if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
                // figures out on which side we are colliding (top, bottom, left, or right)
                const oX = hWidths - Math.abs(vX)
                const oY = hHeights - Math.abs(vY)
                if (oX >= oY) {
                    if (vY > 0) {
                        colDir = 't'
                        shapeA.y += oY
                    } else {
                        colDir = 'b'
                        shapeA.y -= oY
                    }
                } else {
                    if (vX > 0) {
                        colDir = 'l'
                        shapeA.x += oX
                    } else {
                        colDir = 'r'
                        shapeA.x -= oX
                    }
                }
            }
            return colDir
        }

        document.body.addEventListener('keydown', handleKeyDown)
        document.body.addEventListener('keyup', handleKeyUp)

        if (playing)
            update()
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, width, height);

        function handleKeyDown(e: KeyboardEvent) {
            keys[e.key] = true
        }
        function handleKeyUp(e: KeyboardEvent) {
            keys[e.key] = false
        }

        return () => {
            document.body.removeEventListener('keydown', handleKeyDown)
            document.body.removeEventListener('keyup', handleKeyUp)
        }
    }, [playing, setPlaying])

    return (
        <main className="w-8/12 mx-auto flex min-h-screen flex-col justify-between py-20 h-full gap-8">
            <h1 className="font-bold text-6xl">Platformer</h1>
            <div className="flex flex-col gap-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setPlaying(!playing)}>{playing ? 'Stop' : 'Start'}</button>
                <canvas id="game" width="800" height="600"></canvas>
            </div>
        </main>
    )
}
