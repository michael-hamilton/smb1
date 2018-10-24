ig.module(
	'game.entities.1up'
)
.requires(
	'impact.entity'
)
.defines(function(){
	
Entity1up = ig.Entity.extend({
	size: {x:16,y:16},
	animSheet: new ig.AnimationSheet('media/mario/items.png',16,16),
	collides: ig.Entity.COLLIDES.FIXED,
	type: ig.Entity.TYPE.B,
	checkAgainst: ig.Entity.TYPE.A,
	maxVel:{x:500,y:500},
	check: function(other){
		other.lives++;
		this.kill();
		var oneUpSound = new ig.Sound('media/mario/sounds/1up.ogg');
			oneUpSound.play();
	},
	init: function(x,y,settings){
		this.parent(x,y,settings);
		this.addAnim('idle',.1,[1]);
		this.currentAnim=this.anims.idle;
		this.gravityFactor=1;
	},
	update: function(){
		this.parent();
	}
	
});
});