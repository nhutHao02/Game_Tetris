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
                // console.log('up')
                this.brick.rotareBrick();
                break;
            case 'ArrowDown':
                // console.log('down');
               this.brick.moveDown();
                break;
            case 'ArrowLeft':
                // console.log('left')
                this.brick.moveLeft();
                break;
                    
            case 'ArrowRight':
                // console.log('right')
                this.brick.moveRight();
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
       
        // this.block=new block(this, 5,3, 'black');
        // this.block.drawBlockInMainScreen();
        this.brick=new brick(this,3,0);
        this.brick.drawBrickMainScreen();

        this.nextBrick = new brick(this,3,0);
        this.nextBrick.drawBrickNextScreen();
    }
    // tạo brick mới
    createNextBrick(){
		this.nextBrick = new brick(this,3,0);
        this.nextBrick.drawBrickNextScreen();
	}
    // xuất hiện brick mới
	startNextBrick(){
		this.brick = this.nextBrick;
	}
    startGame(){
          // setInterval tự động lặp startGame để vẽ lại khối rơi xuống
        return setInterval(()=>{
           this.brick.brickFall();
        }, 500);
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
        this.brick.drawBrickMainScreen();
    }
    // hàm xóa màn hình chính
    clearScreen(){
        this.context.clearRect(0,0,_WIDTH,_HEIGHT);
        this.board.draw();// ve board
    }

}
var g =new gameTetris();