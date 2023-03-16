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
	 // hàm xu lý xoay khối gạch Arow up
	 rotareBrick(){
		let checkRotare = true;
		let newBrick = [];
		// duyệt qua sl row brick (sl oldCol -> sl newRow)
		for(let c = 0 ; c < this.data[0].length; c++){
			let rowItemValue = [];
			// duyệt qua sl col brick (sl oldRow -> sl newCol)		
			for(let r = this.data.length - 1; r >=0; r--){
				rowItemValue.push(this.data[r][c]);// lấy từng cột của oldBrick từ dưới lên -> từng hàng của newBrick từ trái qua phải
			}
			newBrick.push(rowItemValue);// thêm từng hàng dã xoay vào newbrick
		}
		let oldCol = this.col;
		
		// kiểm tra xoay sát phải
		if((this.col + newBrick[0].length) > _COL - 1){// kt newBrick có kích thước vượt quá _COL
			this.col = _COL - newBrick[0].length;// gán col hiện hành thành _COL trừ kích thước brick
		}
		// kiểm tra xoay sát trái
		if(this.col < 0){// kt newBrick có kích thước nhỏ hơn _COL tối thiểu kh
			this.col =0;// gán col hiện hành thành vị trí col tối thiểu
		}
		// kiểm tra xoay khi brick sat dưới
		if((this.row + newBrick.length) < _ROW){ // tổng kích thước brick mới có vượt quá _ROW không, vượt thì checkRotare=false kh coay
			for(let rValue = 0; rValue < newBrick.length; rValue++){// duyệt qua các r của newBrick
				for(let cValue = 0; cValue < newBrick[0].length; cValue++){// duyệt qua các col của newBrick
					if(newBrick[rValue][cValue] === T){
						if(!this.game.board.checkCell(this.row + rValue, this.col + cValue)){
							checkRotare = false;
							break;
						}
					}
				}
			}

		}else{
			checkRotare = false;
		}
		// kiểm tra khối brick có xoay được hay không
		if(checkRotare){
			this.data = newBrick;	// gán data bằng brick mới
			
		}else{
			this.col = oldCol; // gán col đã xoay thành col ban đầu
		}
		this.builBrick();
    }
    
}