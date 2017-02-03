  function animate() {  
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d'); 
	var score = document.getElementById('score');
	var stop = document.getElementById('stop');
	var start = document.getElementById('start');
	
  requestAnimationFrame(drow);
 canvas.onmousedown = canvasClick;

   function Square(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
	this.width = width;
    this.fillStyle = 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) +')';
	this.dy = Math.floor(Math.random()*(3-1) + 1);
};
var elementes = [];
var timer = false;

  start.addEventListener("click", function() {
    if(timer){
		clearInterval(timer);
		console.log(timer);
	}else {
		removedArray = [];
		timer = setInterval(function createElement(){
			var x = Math.floor(Math.random()*canvas.clientWidth);
			var y = Math.floor(Math.random()*250);
			var elem = new Square(x, y, 20, 20);
			elementes.push(elem);
			var scoreN = removedArray.length;
			score.innerHTML = scoreN;
			// console.log(scoreN);
		}, 800);
		// console.log(timer);
	};
  });
  
  stop.addEventListener("click", function() {
    elementes = [];
	clearInterval(timer);
	timer = false;
	console.log(timer);
  });
    
    function drow() {
	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
	ctx.beginPath();
	for(var i=0; i<elementes.length; i++) {
		var sq = elementes[i];
		sq.y += sq.dy;
		ctx.fillStyle = sq.fillStyle;
		ctx.fillRect(sq.x, sq.y, sq.height, sq.width);
	};
	requestAnimationFrame(drow);
  };
  var removedArray = [];
  
  function canvasClick(e) {
	var clickX = e.pageX - canvas.offsetLeft;
	var clickY = e.pageY - canvas.offsetTop; 
	for (var i in elementes) {
		var squ = elementes[i];
		 if ((clickX > (squ.x-squ.width)) && (clickX < (squ.x+squ.width))){
			  if ((clickY > (squ.y-squ.height)) && (clickY < (squ.y+squ.height))){
				var index = i;
				var removed = elementes.splice(index, 1);
				removedArray.push(removed);
				return;
			  };
		};	
	};
  };
};
 
document.body.onload = animate;
