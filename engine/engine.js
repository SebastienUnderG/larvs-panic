(function(LP) {

	console.log("init!");

	var canvas,
		c2d,
		canvasH,
		canvasW,
		actors = new Array();

	// This method is initially called by onLoad event on index
	LP.init = function(canvasId){

		initializeCanvas(canvasId);

		actors.push (new Player(10,10, canvasW, canvasH));

		LP.initInput();

		main();
	};

  	function initializeCanvas(canvasId) {
		canvas = document.getElementById('canvas');
		c2d = canvas.getContext('2d');
		c2d.lineWidth = 1;
		c2d.globalAlpha = 1;
		c2d.globalCompositeOperation = 'source-over';
		canvasW = canvas.width;
		canvasH = canvas.height;
		console.log('canvas initialized');
  	}	

	function main (tFrame) {
		window.requestAnimationFrame( main );
    	update( tFrame ); //Call your update method. In our case, we give it rAF's timestamp.
    	render();
	};

	function update(tFrame){

		for (var i = actors.length - 1; i >= 0; i--) {
			actors[i].update(tFrame, LP.getInput());
		}
		//console.log("update!!");
	}

	function render(){

		renderBackground();

		for (var i = actors.length - 1; i >= 0; i--) {
			actors[i].render(c2d);
		}
		//console.log("render!!");
	}

	function renderBackground() {
		// clear drawings from previous update (pen resets to [0, 0]),
		c2d.clearRect(0, 0, canvasW, canvasH);
        // draw fresh background of sky and ground
      	/*c2d.fillStyle = sky;
      	c2d.fillRect(0, 0, w, hh);
      	c2d.fillStyle = ground;
		c2d.fillRect(0, hh, w, h);*/
	}	

}(this.LP = this.LP || {}));