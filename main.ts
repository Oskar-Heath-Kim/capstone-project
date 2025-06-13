//Constants======================================================
namespace SpriteKind {
    export const brick = SpriteKind.create()
}

const defaultPlayerHitpoints = 3
const gravity = 1000 //May change later
const playerHorizontalSpeed = 100
const playerVerticalSpeed = 0 //They shouldn't be able to fly! This is nessicary to implement a jumping function.
const maxJumps = 2
const jumpVertical = 325
const animationSpeedRight = 100
const animationSpeedLeft = 100
const animationSpeedIdle = 100
const defaultSniperHitpoints = 3
const defaultProjectileHitpoints = 1
const sniperInterval = 2000
const projectileLight = 15
const projectileSpeed = 50
const destroyProjectileDamage = 1
const damageFromProjectile = 1
const healthBarWidth = 20
const healthBarHeight = 4
//Global=========================================================
let jumpReset = 0
let currentJumps = 0
let player: Sprite = null
let visabilty = 10
let torchlight = 15
let leverFlicked = false
let level = 1
let sniper: Sprite = null
let projectile: Sprite = null
//Classes========================================================

class Hero extends sprites.ExtendableSprite {
    hitpoints: number
    constructor(image: Image, kind: number, hitpoints: number) {
        super(image, kind)
        this.hitpoints = hitpoints
    }
    hit(points: number): void {
        this.hitpoints -= points
        if (this.hitpoints <= 0) {
            game.gameOver(false)
        }
    }
}

class Torch extends sprites.ExtendableSprite {
    hitpoints: number
    constructor(image: Image, kind: number, hitpoints: number) {
        super(image, kind)
        this.hitpoints = hitpoints
    }
    hit(points: number): void {
        this.hitpoints -= points
        if (this.hitpoints <= 0) {
            this.destroy()
        }
    }
}
class Enemy extends sprites.ExtendableSprite {
    hitpoints: number
    constructor(image: Image, kind: number, hitpoints: number) {
        super(image, kind)
        this.hitpoints = hitpoints
    }
    hit(points: number): void {
        this.hitpoints -= points
        if (this.hitpoints <= 0) {
            this.destroy()
        }
    }
}

class Projectile extends sprites.ExtendableSprite {
    hitpoints: number
    constructor(image: Image, kind: number, hitpoints: number) {
        super(image, kind)
        this.hitpoints = hitpoints
    }
    hit(points: number): void {
        this.hitpoints -= points
        if (this.hitpoints <= 0) {
            this.destroy()
        }
    }
}

//Functions======================================================
function createPlayer(): void {
    player = new Hero(assets.image`hero`, SpriteKind.Player, defaultPlayerHitpoints)
    controller.moveSprite(player,playerHorizontalSpeed,playerVerticalSpeed)
    player.ay = gravity //All characters should be bound to the laws of gravity
    scene.cameraFollowSprite(player)
    multilights.toggleLighting(true)
    multilights.addLightSource(player)
    multilights.bandWidthOf(player, visabilty)
    let healthBar = statusbars.create(healthBarWidth, healthBarHeight,SpriteKind.StatusBar)
    healthBar.attachToSprite(player)
    let heroSpawn = tiles.getTilesByType(assets.tile`heroSpawn`)
    for (let j = 0; j < heroSpawn.length; j++) {
        tiles.placeOnTile(player, heroSpawn[j])
        tiles.setTileAt(heroSpawn[j],assets.tile`tile`)
    }
}

function createTorch(): void{
    let placeHolder = tiles.getTilesByType(assets.tile`diamondTile`)
    for(let i = 0; i < placeHolder.length; i++){
        let torch = new Torch(assets.image`torch`,SpriteKind.brick,3) //May need to make a class, or namespace, it's a player to it doesn't have an overlap
        console.log("torch created")
        tiles.placeOnTile(torch,placeHolder[i])
        multilights.addLightSource(torch)
        multilights.bandWidthOf(torch, torchlight)
    }
}

function setTilemap(): void {
    if (level== 1){tiles.setCurrentTilemap(assets.tilemap`level`)}
    if (level == 2) {
        tiles.setCurrentTilemap(assets.tilemap`level2`)  
        createSniper()
        let heroSpawn = tiles.getTilesByType(assets.tile`heroSpawn`)
        for (let j = 0; j < heroSpawn.length; j++) {
            tiles.placeOnTile(player, heroSpawn[j])
            tiles.setTileAt(heroSpawn[j], assets.tile`tile`)
            createTorch()
         
        }}
       
}

function createSniper(): void{
    sniper = new Enemy(assets.image`sniper`,SpriteKind.Enemy,defaultSniperHitpoints)
    let sniperPlaceHolder = tiles.getTilesByType(assets.tile`sniper`)
    for(let j = 0; j < sniperPlaceHolder.length; j++){
        tiles.placeOnTile(sniper,sniperPlaceHolder[j])
        tiles.setTileAt(sniperPlaceHolder[j], assets.tile`tile`)
    }
}

function createProjectile(): void{
    projectile = new Projectile(assets.image`projectile`,SpriteKind.Projectile,defaultProjectileHitpoints)
    projectile.x = sniper.x
    projectile.y = sniper.y
    projectile.vx = -projectileSpeed
    multilights.addLightSource(projectile)
    multilights.bandWidthOf(projectile,projectileLight)
}

//Event-Handlers=================================================
game.onUpdate(function () {
    if (player.isHittingTile(CollisionDirection.Bottom)) {
        currentJumps = jumpReset
    }
})

game.onUpdateInterval(sniperInterval, function() {
    if (level == 2) {
        createProjectile()
        console.log("fire!")
    }
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    currentJumps += 1
    if (currentJumps <= maxJumps) { player.vy = -jumpVertical }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`lever`, function(sprite: Sprite, location: tiles.Location) {
    game.showLongText("You hear a faint rumbling", DialogLayout.Bottom)
    let doorCoords = tiles.getTileLocation(31, 11)
    tiles.setTileAt(location, assets.tile`leverFlicked`)
    leverFlicked = true
    tiles.setTileAt(doorCoords, assets.tile`doorOpen`)  
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`doorOpen`, function(sprite: Sprite, location: tiles.Location) {
    level += 1
    setTilemap()
})

scene.onHitWall(SpriteKind.Projectile, function(sprite: Projectile, location: tiles.Location) {
    sprite.hit(destroyProjectileDamage)
    console.log("projectile hit the wall!")
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function(sprite: Hero, otherSprite: Projectile) {
    sprite.hit(damageFromProjectile)
    otherSprite.hit(destroyProjectileDamage)
})

//Main===========================================================
setTilemap()
createPlayer()
createTorch()

characterAnimations.loopFrames(player, [
    assets.image`right0`,
    assets.image`right1`,
    assets.image`right2`,
    assets.image`right3`
], animationSpeedRight, Predicate.MovingRight)

characterAnimations.loopFrames(player, [
    assets.image`left0`,
    assets.image`left1`,
    assets.image`left2`,
    assets.image`left3`
], animationSpeedLeft, Predicate.MovingLeft)

characterAnimations.loopFrames(player,[
    assets.image`hero`
],animationSpeedIdle,Predicate.NotMoving)
