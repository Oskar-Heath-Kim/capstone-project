//Constants======================================================
const defaultPlayerHitpoints = 3
const gravity = 1000 //May change later
const playerHorizontalSpeed = 100
const playerVerticalSpeed = 0 //They shouldn't be able to fly! This is nessicary to implement a jumping function.
const maxJumps = 2
const jumpVertical = 325
//Global=========================================================
let jumpReset = 0
let currentJumps = 0
let player: Sprite = null
//Classes========================================================

class Hero extends sprites.ExtendableSprite {
    hitpoints: number
    constructor(image: Image, kind: number, hitpoints: number) { //#12
        super(image, kind)
        this.hitpoints = hitpoints
    }
    hit(points: number): void { //#13
        this.hitpoints -= points
        if (this.hitpoints <= 0) {
            this.destroy()
        }
    }
}

//Functions======================================================
function createPlayer(): void {
    player = new Hero(assets.image`hero`, SpriteKind.Player, defaultPlayerHitpoints)
    controller.moveSprite(player)
    player.ay = gravity //All characters should be bound to the laws of gravity
    scene.cameraFollowSprite(player)
}

function setTilemap(): void {
    tiles.setCurrentTilemap(assets.tilemap`level`)
}
//Event-Handlers=================================================
game.onUpdate(function () {
    if (player.isHittingTile(CollisionDirection.Bottom)) {
        currentJumps = jumpReset
    }
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    currentJumps += 1
    if (currentJumps <= maxJumps) { player.vy = -jumpVertical }
})

//Main===========================================================

createPlayer()
setTilemap()
multilights.toggleLighting(true)