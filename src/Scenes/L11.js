// Name: Trinity Wu
class DMovement extends Phaser.Scene {
    constructor() {
        super("DMovementScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        // Create variables to hold constant values for sprite locations
        this.avatarX = 400;
        this.avatarY = 550;
        
        // Polling input: move 
        this.aKey = null;
        this.dKey = null;
        this.spaceKey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack 
        this.load.setPath("./assets/");
        // avatar
        this.load.image("avatar", "character_roundYellow.png");
        // bullet
        this.load.image("bullet", "character_handPurple.png");

        // update instruction text
        document.getElementById('description').innerHTML = '<h2>L11.js</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the bullet sprite
        my.sprite.bullet = this.add.sprite(this.avatarX, this.avatarY, "bullet");

        // Create the main avatar sprite
        my.sprite.avatar = this.add.sprite(this.avatarX, this.avatarY, "avatar");

        // // Polling input: move
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        // Polling input: move
        if(my.sprite.avatar.x != 0){
            if(this.aKey.isDown){
                my.sprite.avatar.x -= 5;
                if(!this.spaceKey.isDown){
                    my.sprite.bullet.x -= 5;
                }
            }
        }
        if(my.sprite.avatar.x != 800){
            if(this.dKey.isDown){
                my.sprite.avatar.x += 5;
                if(!this.spaceKey.isDown){
                   my.sprite.bullet.x += 5; 
                }
            }
        }
        if(this.spaceKey.isDown){
            my.sprite.bullet.y -= 5;
        }
    }

}