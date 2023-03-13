class gameTetris{
    constructor(){
        console.log('Khoi Tao');
        this.canvas = null;
        this.context = null;
        this.nScreenCanvas = null;
        this.nScreenContext = null;

        this.init();
    }
    // hàm khởi tạo
    init(){
        // khởi tạo thẻ canvas cho màn hình chính
        this.canvas=document.createElement('canvas');
        this.canvas.width=600;
        this.canvas.height=700;
        this.context = this.canvas.getContext('2d');
        // thêm thẻ canvas vào div mainScreen
        document.getElementById('mainScreen').appendChild(this.canvas);
    

        // khởi tạo thẻ canvas cho màn hình phụ
        this.nScreenCanvas=document.createElement('canvas');
        this.nScreenCanvas.width=350;
        this.nScreenCanvas.height=200;
        this.nScreenContextxt = this.canvas.getContext('2d');
        // thêm thẻ canvas vào div nextScreen
        document.getElementById('nextScreen').appendChild(this.nScreenCanvas);
    }

}
var g =new gameTetris();