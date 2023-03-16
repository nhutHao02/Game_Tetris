class brick{
    constructor(game,col,row){
		console.log('khoi tao brick');
		this.game = game;
		this.col = col;
		this.row = row;
		this.data = [];
		this.blocks = [];
		this.randomBrick();
	}
    // lấy ra khối brick ngẫu nhiên
	randomBrick(){
		this.data = [];		
		let index = Math.floor(Math.random() * 7);
		this.data = _BaseBrick[index];
	}
    //thiết lập các khối block cho brick
	builBrick(){
		this.blocks = [];
		for(let r = 0; r < this.data.length; r++){// duyệt qua các hàng của khối
			for(let c = 0; c < this.data[r].length; c++){ // duyệt qua các cột của hàng r
				if(this.data[r][c] === T){
					let bl = new block(this.game, this.col + c, this.row + r,'#888888');
					this.blocks.push(bl);
				}
			}
		}
	}
	// vẽ khối brick lên màn hình chính
	drawBrickMainScreen(){
		this.builBrick();
		// this.blocks.forEach((bl)=>bl.drawMainScreen());
        for (let index = 0; index < this.blocks.length; index++) {// duyêt qua các block trong brick
            this.blocks[index].drawBlockInMainScreen();// vẽ từng khối block ra màn hình chính
            
        }
	}


    moveDown(){
		while (this.checkBrickFall()) {// kiểm tra có thể rơi hay không
			this.brickFall();// cho khối rơi xuống, lặp đến khi kh rơi xuống dc
		}
	}

    checkRight(){
		let canMoveRight = true;
		for(let i = 0; i < this.blocks.length; i++){
			if(!this.blocks[i].checkMoveRight()){ // kiểm tra block trong brick có khối nào kh thể di chuyển sang phải không
				canMoveRight = false;
				break;
			}
		}
		return canMoveRight;
	}
	moveRight(){
		if(this.checkRight()){
			this.col++;
			this.builBrick();
		}
	}
	//kiểm tra khối có di chuyển sang trai được không
	checkLeft(){
		let canMoveLeft = true;
		for(let i = 0; i < this.blocks.length; i++){
			if(!this.blocks[i].checkMoveLeft()){ // kiểm tra block trong brick có khối nào kh thể di chuyển sang trái khogngo
				canMoveLeft = false;
				break;
			}
		}
		return canMoveLeft;
	}
    // di chuyển khói gạch sang trái
	moveLeft(){
		if(this.checkLeft()){
			this.col--;
            this.builBrick();
		}
	}

    // kiem tra khoi gach có the roi xuong nữa
    checkBrickFall(){
		let canfall = true;
		for(let i = 0; i < this.blocks.length; i++){
			if(!this.blocks[i].checkFallDown()){ // kiểm tra block trong brick có khối nào kh thể rơi không
				canfall = false;
				break;
			}
		}
		return canfall;
	}
    //hàm cho khối brick rơi xuống
	brickFall(){
		if(this.checkBrickFall()){
            this.row++;
            this.builBrick();
        }
    
	}
}