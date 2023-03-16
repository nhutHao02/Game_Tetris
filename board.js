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
    }
    //ve boarf
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
    // hàm kiểm tra board có hàng nào đầy không
    checkFullBlock(){
		for(let row = 0; row < _ROW; row++){// duyệt qua tất cả các hàng
			if(this.checkFullRow(row)){
				this.data.splice(row,1); // xóa hàng hiện hành, splice(vị trí bắt đầu, sl xóa)
				this.data.unshift([_,_,_,_,_,_,_,_,_,_]); // thêm vào đầu data 1 mảng mới
				
			}
		}
	}
}