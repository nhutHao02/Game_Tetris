class gameTetris{
    constructor(){
        console.log('Khoi Tao');
        this.canvas = null;
        this.context = null;
        this.nScreenCanvas = null;
        this.nScreenContext = null;
        this.btnStart=null;
        this.btnStop=null;
        this.status=null;
        this.speed=1000;
        this.init();
        this.eventListener();
        this.repaint();
        this.level=0;
        this.checklevels=[];
    }
    eventListener(){
        //them su kien keydown
        document.addEventListener('keydown', (event)=>{
            if(this.status!=null){
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
                        if(this.level==2){
                            this.brick.moveRight();
                        }else{
                            this.brick.moveLeft();
                        }
                       
                        break;
                            
                    case 'ArrowRight':
                        // console.log('right')
                        if(this.level==2){
                            this.brick.moveLeft();
                        }else{
                            this.brick.moveRight();
                        }
                        
                        break;
                }
            }
        });
        this.btnStart.addEventListener('click', ()=>{
           // console.log(this.btnStart.getAttribute('status'));
			let status =this.btnStart.getAttribute('status');
			switch (status) {
				case 'start':
					this.status = this.startGame();
					this.btnStart.setAttribute('status','pause'); // set attribute status trong thẻ input value thành pause
					this.btnStart.setAttribute('value','PAUSE');// set attribute value trong thẻ input value thành PAUSE
					break;
				case 'pause':
					clearInterval(this.status);
					this.status = null;
					this.btnStart.setAttribute('status','start'); // set attribute status trong thẻ input value thành start
					this.btnStart.setAttribute('value','RESUME');// set attribute value trong thẻ input value thành RESUME
                    this.repaint();
					// statements_def
					break;
			}
		});
        this.btnStop.addEventListener('click', ()=>{
              location.reload();
            
           
         });
    }

    // hàm khởi tạo
    init(){
        // lấy input gán vào btnStart
        this.btnStart = document.getElementById('btn_start');
        this.btnStop = document.getElementById('btn_stop');
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

        // vẽ brick màn hình chính
        this.brick=new brick(this,3,0);
        // this.brick.drawBrickMainScreen();

        // vẽ brick màn hình next
        this.nextBrick = new brick(this,3,0);
        this.nextBrick.drawBrickNextScreen();
       
    }
    // tạo brick
    createBrick(){
        this.brick=new brick(this,3,0);
        this.brick.drawBrickMainScreen();
    }
    // tạo nextBrick
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
        }, this.speed);
        // this.brick.brickFall();
        // setTimeout(()=> {
        //     this.startGame()
        // },500);
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
    // hàm tăng tg lặp lên
    resetSpeed(){
        this.speed-=(150*this.level);
        clearInterval(this.status);// xóa hàm lặp với tốc độ củ
        this.status = this.startGame(); // chạy lại hàm lặp vs tốc độ mới
    }
    // hàm kiểm tra việc setLevel đã đươc set chưa
    checkSetLevel(lv){
        let check=true;
        if(this.checklevels.includes(lv)){
            check=false;
        }else{
            this.checklevels.push(lv);
        }
        return check;
    }
    // hàm cập nhật level trong game
    setupLevel(){
        //set level cho game, đặt số điểm x sẽ lên 1 level
        this.level=Math.floor(this.board.countDeleteRow/3);
        console.log(this.board.countDeleteRow/3);
        // console.log(this.game.level);
        if(this.checkSetLevel(this.level)){
            switch (this.level) {
                //level 1 
                case 1:
                    this.resetSpeed(); // set tốc độ mới
                    break;
            
                case 2:
                    this.resetSpeed(); // set tốc độ mới
                    break;
                case 3:
                    
                    break;
            }
        }
    }

}
var g =new gameTetris();


