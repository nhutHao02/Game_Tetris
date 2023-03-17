class board{
    constructor(game){
        this.game=game;
        this.data=[
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_,_,_,_]
            
        ];
        this.nextData=[
            [_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_],
            [_,_,_,_,_,_,_]
        ];
        this.countDeleteRow=0;
    }

    resetNextData(){
        for (let row = 0; row < this.nextData.length; row++) {
            for (let col = 0; col < this.nextData[row].length; col++) {
                this.nextData[row][col]=_;
                
            }
            
        }
    }
    //ve board
    draw(){
        
        this.drawBoard();
        this.drawNextBoard();
    }
    // vẽ board màn hinhd chính
    drawBoard(){
        // duyet qua cac row
        for(let row=0;row<this.data.length; row++){
            // duyet qua cac col
            for (let col = 0; col < this.data[row].length; col++) {
                let value=this.data[row][col];
                // xac dinh trong board, o nao cos gtri thi ve mau black
                let color = (value === T) ? '#888888' : '#DDDDDD';
                let bl=new block(this.game,col,row, color);
                // ve khoi vuong
                bl.drawBlockInMainScreen();
              
            }
        }
    }
  
     // vẽ board màn hình next
    drawNextBoard(){
        // duyet qua cac row
       
        for(let row=0;row<this.nextData.length; row++){
            // duyet qua cac col
            for (let col = 0; col < this.nextData[row].length; col++) {
                let value=this.nextData[row][col];
                // xac dinh trong board, o nao cos gtri thi ve mau black
                let color = (value === T) ? '#888888' : '#DDDDDD';
                let bl=new block(this.game,col,row, color);
                // ve khoi vuong
                bl.drawBlockInNextScreen();
              
            }
        }
    }
    checkCell(r, c){
        return this.data[r][c] ===_; // kiểm tra tại cột c dòng r , có gtri _ thì return true, T retuen false;
    }
    // hàm kiểm tra hàng có full block
    checkFullRow(row){
		let isFull = true;
		for(let col = 0; col < _COL; col++){ // duyet qua tất cả các cột
			if(this.data[row][col] === _){ // có block có gtri = _ thì row chưa đầy
				isFull = false;
				break;
			}
		}
		return isFull;
	}
    //check khi brick chạm đỉnh
    checkEndGame(){
		let endGame = false;
		for(let c =0; c < this.data[0].length; c++){ // duyệt qua ds cột hàng đầu tiên
			if(this.data[0][c] === T){
				endGame = true;
				break;
			}
		}
		return endGame;
	}
    // hàm kiểm tra board có hàng nào đầy không
    checkFullBlock(){
		for(let row = 0; row < _ROW; row++){// duyệt qua tất cả các hàng
			if(this.checkFullRow(row)){
				this.data.splice(row,1); // xóa hàng hiện hành, splice(vị trí bắt đầu, sl xóa)
				this.data.unshift([_,_,_,_,_,_,_,_,_,_]); // thêm vào đầu data 1 mảng mới
                this.countDeleteRow++;// đếm score
				
			}
		}
        if(this.checkEndGame()){
			clearInterval(this.game.status);// xóa hàm lặp
		}
        this.setLevel();
        //gán level mới cho màn hình info
        document.getElementById('txt_level').setAttribute('value',this.game.level);
        // gán điểm mới lên màn hình info
        document.getElementById('txt_score').setAttribute('value',this.countDeleteRow);
	}
    //set level
    setLevel(){
        //set level cho game, đặt số điểm x sẽ lên 1 level
        this.game.level=Math.floor(this.countDeleteRow/3);
        // console.log(this.game.level);
        switch (this.game.level) {
            //level 1 
            case 1:
                this.game.resetSpeed(); // set tốc độ mới
                clearInterval(this.game.status);// xóa hàm lặp với tốc độ củ
                this.game.status = this.game.startGame(); // chạy lại hàm lặp vs tốc độ mới
               // console.log(this.game.speed)
                break;
        
            case 2:

                break;
        }

    }
    
}