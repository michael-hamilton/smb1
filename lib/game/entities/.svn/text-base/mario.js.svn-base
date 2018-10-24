ig.module( 
	'game.entities.mario' 
)
.requires(
	'game.entities.player'
)
.defines(function(){

EntityMario = EntityPlayer.extend({
	
animSheet: new ig.AnimationSheet( 'media/mario/mario_small_sprites.png', 16, 16),
init: function(x,y,settings) {
		this.parent( x, y, settings );
		this.addAnim('idle_right',.1,[15]);
		this.addAnim('run_right',.1,[14,15,16]);
		this.addAnim('run_right_fast',0.07,[14,15,16]);
		this.addAnim('jump_right',.1,[18]);
		this.addAnim('idle_left',.1,[1]);
		this.addAnim('run_left',.1,[0,1,2]);
		this.addAnim('run_left_fast',0.07,[0,1,2]);
		this.addAnim('jump_left',.1,[4]);
		this.currentAnim=this.anims.idle;
		this.gravityFactor=3;
	}
});

});