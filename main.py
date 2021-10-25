scene.set_background_color(10)
crewmate = sprites.create(assets.image("""
    CREWMATE
"""), SpriteKind.player)
imposter = sprites.create(assets.image("""
    IMPOSTOR
"""), SpriteKind.enemy)
crewmate.set_position(16, 24)
controller.player1.move_sprite(crewmate)
controller.player2.move_sprite(imposter)
crewmate.set_stay_in_screen(True)
imposter.set_stay_in_screen(True)