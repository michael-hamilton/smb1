ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.entities.mario',
	'game.entities.goomba',
	'game.levels.level1_1'
/* 	'impact.debug.debug' */
)
.defines(function(){

SuperMario = ig.Game.extend({
	font: new ig.Font( 'media/04b03.font.png' ),
	location: 'overworld',
	init: function() {
		ig.input.bind( ig.KEY.C, 'up');
		ig.input.bind( ig.KEY.DOWN_ARROW, 'down');
		ig.input.bind( ig.KEY.LEFT_ARROW, 'left');
		ig.input.bind( ig.KEY.RIGHT_ARROW, 'right');
		ig.input.bind( ig.KEY.X, 'run');	
		
/* 		debug inputs */
		ig.input.bind( ig.KEY.D, 'debug');
		ig.input.bind( ig.KEY.L, 'lives');
		ig.input.bind( ig.KEY.M, 'spawn');
		ig.input.bind( ig.KEY.N, 'reset');
		ig.input.bind( ig.KEY.O, 'coins');
		ig.input.bind( ig.KEY.P, 'pos');
	
		
		this.loadLevel(LevelLevel1_1); 
		this.spawnEntity(EntityMario,40,208,{name:"player"});
		this.gravity=900;
		
	},
	
	update: function() {
		var player=this.getEntityByName("player");
		this.location=player.location;
		
		if((player.pos.x>120 && player.pos.x<3264)){
			this.screen.x=player.pos.x-120;
		}
		
		if(this.location=='underworld'){
			ig.music.add('media/mario/music/underworld.ogg', 'underworld');
			ig.music.play('underworld');
			this.screen.y=256;
		}
		if(this.location=='overworld'){
			if(player.pos.y>240){
				this.lives--;
				this.init();
			}
			else{
				ig.music.add('media/mario/music/overworld.ogg', 'overworld');
				ig.music.play('overworld');
				this.screen.y=0;
			}
		}
		
/* 		debugging commands */
		if(ig.input.state('debug')){
			if(ig.input.pressed('pos')){
				console.log("mario [pos{x:"+player.pos.x+", y:"+player.pos.y+"}]");
			}
			if(ig.input.pressed('spawn')){
				ig.game.spawnEntity(EntityMario,player.pos.x,0);
			}
			if(ig.input.pressed('reset')){
				ig.system.setGame(SuperMario);
			}
		}
		this.parent();

	},
	
	draw: function() {
		var player=this.getEntityByName("player");
		this.parent();
		this.font.draw("coins: "+player.coins,10,10);
		this.font.draw("lives: "+player.lives,80,10);
	},
});


ig.main( '#canvas', SuperMario, 60, 256, 245, 2 );

});
