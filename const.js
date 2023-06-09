// Kích thước ở màn hình chính
const _WIDTH=400; // chiều rộng màn hình
const _HEIGHT=720;// chiều dài  màn hình
const _COL=10;// số lượng cột
const _ROW=18;// số lượng dòng
const _SIZE=40;// kích thước 1 ô

// Kích thước ở màn hình next
const _NEXTWIDTH=210; // chiều rộng màn hình
const _NEXTHEIGHT=210;// chiều dài  màn hình
const _NEXTCOL=7;// số lượng cột
const _NEXTROW=7;// số lượng dòng
const _NEXTSIZE=30;// kích thước 1 ô

// board
const _=null; // biến để xác định ô gạch kh nằm vị trí này
const T="T"; // vị trí ô gạch trong board
const _BaseBrick = [ // mảng các khối gạch có trong game
    [
        [_,T],
        [_,T],
        [_,T],
        [_,T]
    ],
    [
        [_,T,T],// khối hình vuông
        [_,T,T]
    ],
    [
        // khối chữ L
        [_,T,_],
        [_,T,_],
        [_,T,T]
    ],
    [
       // khối chữ J
       [_,_,T],
       [_,_,T],
       [_,T,T]
    ],
    [
        // khoi chu S
        [_,T,T],
        [T,T,_]
    
        // [T,_],
        // [T,T],
        // [_,T]
    ],
    [
         // khoi chu Z
         [T,T,_],
         [_,T,T]
    ],
    [
        // khoi chu T
        [T,T,T],
        [_,T,_]
    ]
];