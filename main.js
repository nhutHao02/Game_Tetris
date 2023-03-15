class gameTetris{
    constructor(){
        console.log('Khoi Tao');
        this.canvas = null;
        this.context = null;
        this.nScreenCanvas = null;
        this.nScreenContext = null;
        this.init();
        this.eventListener();
        this.repaint();
        this.startGame();
    }
    eventListener(){
        //them su kien keydown
        document.addEventListener('keydown', (event)=>{
        switch (event.key) {
            case 'ArrowUp':
                console.log('up')
                break;
            case 'ArrowDown':
                console.log('down')
                break;
            case 'ArrowLeft':
                console.log('left')
                this.block.moveLeft();
                break;
                    
            case 'ArrowRight':
                console.log('right')
                this.block.moveRight();
                break;
        }
        });
    }

    // hàm khởi tạo
    init(){
        // khởi tạo thẻ canvas cho màn hình chính
        this.canvas=document.createElement('canvas');
        this.canvas.width=_WIDTH;
        this.canvas.height=_HEIGHT;
        this.context = this.canvas.getContext('2d');
        // thêm thẻ canvas vào div mainScreen
        document.getElementById('mainScreen').appendChild(this.canvas);
    

        // khởi tạo thẻ canvas cho màn hình phụ
        this.nScreenCanvas=document.createElement('canvas');
        this.nScreenCanvas.width=_NEXTWIDTH;
        this.nScreenCanvas.height=_NEXTHEIGHT;
        this.nScreenContext = this.nScreenCanvas.getContext('2d');
        // thêm thẻ canvas vào div nextScreen
        document.getElementById('nextScreen').appendChild(this.nScreenCanvas);
        // khoi tao board
        this.board =new board(this);
        this.board.draw();// ve board
       
        this.block=new block(this, 5,3, 'black');
        this.block.drawBlockInMainScreen();
      
    }
    startGame(){
          // setInterval tự động lặp startGame để vẽ lại khối rơi xuống
        return setInterval(()=>{
            this.block.fallDown();
        }, 1000);
    //     this.block.fallDown();
    //     setTimeout(()=> {
    //         this.startGame()
    //     },1000);
     }
    // hàm vẽ lại main
    repaint(){
        setTimeout(()=>{this.repaint()} , 30);// gọi lại hàm repaint 30lan/s
        this.draw();
    }
    //hàm  vẽ lại màn hình chính
    draw(){
        this.clearScreen();
       this.block.drawBlockInMainScreen();
    }
    // hàm xóa màn hình chính
    clearScreen(){
        this.context.clearRect(0,0,_WIDTH,_HEIGHT);
        this.board.draw();// ve board
    }

}
var g =new gameTetris();