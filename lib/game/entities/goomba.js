ig.module( 
	'game.entities.goomba' 
)
.requires(
	'game.entities.enemy'
)
.defines(function(){

EntityGoomba = EntityEnemy.extend({
	animSheet: new ig.AnimationSheet( 'media/mario/goombas_overworld_sprites.png', 16, 16),
	bounciness:0,
	size: {x:16, y:16},
	check: function(other){
		if(this.pos.y-other.pos.y>15 && !other.standing && other.name=="player"){
			this.kill();
			other.vel.y=-300;
			other.accel.y = -1000;
		}
	},
	init: function(x,y,settings) {
		this.parent( x, y, settings );
		this.addAnim('move',.2,[0,1]);
		this.currentAnim=this.anims.move;
		this.gravityFactor=1;
		if(this.pos.y>240){
			this.kill();
		}
	},
	update: function(){
		this.parent();	
	},
	minBounceVelocity:0,
	vel: {x:20,y:0}
});

});