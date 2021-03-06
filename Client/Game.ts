﻿class Game {

	private ground: Ground;
	private player: Player;
	private camera: Camera;
	private animations: AnimationContainer;
	constructor() {
		this.camera = new Camera();
		this.ground = new Ground(this.camera);
		this.player = new Player(this.ground, config.Mobs.Dwarf.StartSprite);
		this.player.Teleport(59, 50);
		this.animations = new AnimationContainer();
		this.camera.SetCameraTarget(this.player);
		Ticker.Add(this.player);
		Ticker.Add(this.animations);
	}

	Render() {
		this.ground.Render();
		this.player.CheckKeyPress();
		this.player.Render();
		this.animations.Render();
		this.camera.UpdateCamera();
	}
}