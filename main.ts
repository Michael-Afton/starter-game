sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.splash("I AM VICTORIOUS")
    game.splash("Why do you kill us?")
    mySprite = sprites.create(assets.image`death`, SpriteKind.Player)
    game.reset()
})
let mySprite: Sprite = null
scene.setBackgroundColor(10)
let crewmate = sprites.create(assets.image`CREWMATE`, SpriteKind.Player)
let imposter = sprites.create(assets.image`IMPOSTOR`, SpriteKind.Enemy)
crewmate.setPosition(16, 24)
controller.player1.moveSprite(crewmate)
controller.player2.moveSprite(imposter)
crewmate.setStayInScreen(true)
imposter.setStayInScreen(true)
game.splash("DDDDIIIIEEEE")
