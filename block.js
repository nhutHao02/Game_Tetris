class block{
    constructor(game,col, row, color){
        console.log('khoi block');
        this.game=game;
        this.col=col;
        this.row=row;
        this.color=color;
    }
    // vẽ khối ở màn hình chính
    drawBlockInMainScreen(){
        let _x=this.col * _SIZE; // lấy ra vị trí của tọa độ cần vẽ
        let _y=this.row * _SIZE;// lấy ra vị trí của tọa độ cần vẽ
        this.game.context.beginPath();
        this.game.context.strokeStyle=this.color;
        this.game.context.rect(_x,_y,_SIZE,_SIZE);// vẽ đường vuông với kích thước size tại vị trí x y
        this.game.context.stroke();
        this.game.context.fillStyle=this.color;
        this.game.context.fillRect(_x+2,_y+2,_SIZE-4,_SIZE-4);// vẽ hình vuông với kích thước size tại vị trí x y +2 cạnh = size-4
    }
    // vẽ khối ở màn hình next
    drawBlockInNextScreen(){
        let _x=this.col*_NEXTSIZE;// lấy ra vị trí của tọa độ cần vẽ
        let _y=this.row*_NEXTSIZE;// lấy ra vị trí của tọa độ cần vẽ
        this.game.nScreenContext.beginPath();
        this.game.nScreenContext.strokeStyle=this.color;
        this.game.nScreenContext.rect(_x,_y,_NEXTSIZE,_NEXTSIZE);// vẽ đường vuông với kích thước nextSize tại vị trí x y
        this.game.nScreenContext.stroke();
        this.game.nScreenContext.fillStyle=this.color;
        this.game.nScreenContext.fillRect(_x+2,_y+2,_NEXTSIZE-4,_NEXTSIZE-4)
    }
    // hàm di chuyển khối sang trái
    moveLeft(){
        this.col--;
    }
    // hàm dy chuyển khối sang phải
    moveRight(){
        this.col++;
    }
    // hàm khối sẽ rớt xuống
    fallDown(){
        this.row++;
    }
}