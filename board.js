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
     // vẽ board màn hinhd next
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
}