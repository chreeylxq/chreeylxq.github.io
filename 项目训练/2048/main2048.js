var board = new Array()//数组储存游戏的数据
var score = 0 //游戏的初始分数

var hasConflicated = new Array();

var startx = 0;
var starty = 0;
var endx = 0;
var endy = 0;




$(document).ready(function () {

    newgame();
});
function newgame() {
    prepareForMobile();
    // 初始化棋盘格
    init();

    // 随机生成两个数字
    generateOneNumber();
    generateOneNumber();
}

function prepareForMobile() {

    if (screen.availWidth > 500) {
        gridContainerWidth = 500;
        cellSideLength = 100;
        cellSpace = 20;
    }

    $("#grid-container").css("width", gridContainerWidth - 2 * cellSpace);
    $("#grid-container").css("height", gridContainerWidth - 2 * cellSpace);
    $("#grid-container").css("padding", cellSpace);
    $("#grid-container").css("border-radius", 0.02 * gridContainerWidth);

    $(".grid-cell").css("width", cellSideLength);
    $(".grid-cell").css("height", cellSideLength);
    $(".grid-cell").css("border-radius", 0.02 * cellSideLength);

}

function init() {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            var gridCell = $("#grid-cell-" + i + "-" + j);
            gridCell.css('top', getPosTop(i));
            gridCell.css('left', getPosLeft(j))
        }
    }

    // 将定义的一维数组变为二维数组
    for (var i = 0; i < 4; i++) {
        board[i] = new Array();
        hasConflicated[i] = new Array();
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
            hasConflicated[i][j] = false;
        }
    }

    updateBoardView();
    score = 0;
    updateScore(0);
}
function updateBoardView() {
    $('.number-cell').remove();
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $("#grid-container").append('<div class="number-cell" id="number-cell-' + i + '-' + j + '"></div>');
            var theNumberCell = $("#number-cell-" + i + "-" + j);

            if (board[i][j] == 0) {
                theNumberCell.css('width', '0px');
                theNumberCell.css('height', '0px');
                theNumberCell.css('top', getPosTop(i) + cellSideLength / 2);
                theNumberCell.css('left', getPosLeft(j) + cellSideLength / 2);
            } else {
                theNumberCell.css('width', cellSideLength);
                theNumberCell.css('height', cellSideLength);
                theNumberCell.css('top', getPosTop(i));
                theNumberCell.css('left', getPosLeft(j));
                theNumberCell.css('background', getNumberBackgroundColor(board[i][j]));
                theNumberCell.css('color', getNumberColor(board[i][j]));
                theNumberCell.text(board[i][j]);
            }
            hasConflicated[i][j] = false;
        }

        $(".number-cell").css("line-height", cellSideLength + 'px');
        $(".number-cell").css("font-size", 0.6 * cellSideLength + 'px');
    }
}

function generateOneNumber() {
    if (nospace(board))
        return false;

    // 随机一个位置
    var randx = parseInt(Math.floor(Math.random() * 4));
    var randy = parseInt(Math.floor(Math.random() * 4));
    var times = 0;
    while (times < 50) {
        if (board[randx][randy] == 0)
            break;

        var randx = parseInt(Math.floor(Math.random() * 4));
        var randy = parseInt(Math.floor(Math.random() * 4));
        times++;
    }
    if (times == 50) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[i][j] == 0) {
                    var randx = i;
                    var randy = j;
                }

            }
        }
    }


    // 随机一个数字 2 或 4 (2或4各50%的概率 )
    var randNumber = Math.random() < 0.5 ? 2 : 4;

    // 在随机位置显示随机数字
    board[randx][randy] = randNumber;
    showNumberWithAnimation(randx, randy, randNumber);
    return true;
}


$(document).keydown(function () {
    var needUpdateBoard = false;


    switch (event.keyCode) {
        case 37://left
            // 阻止所有该按键的默认效果
            event.preventDefault();
            if (moveLeft()) {
                setTimeout("generateOneNumber()", 300);
                needUpdateBoard = true;
            }
            break;
        case 38://up
            event.preventDefault();
            if (moveUp()) {
                setTimeout("generateOneNumber()", 300);
                needUpdateBoard = true;
            }
            break;
        case 39://right
            event.preventDefault();
            if (moveRight()) {
                setTimeout("generateOneNumber()", 300);
                needUpdateBoard = true;
            }
            break;
        case 40://down
            event.preventDefault();
            if (moveDown()) {
                setTimeout("generateOneNumber()", 300);
                needUpdateBoard = true;
            }
            break;
        default://default
            break;
    }

    if (needUpdateBoard) {
        setTimeout("updateBoardView()", 200);
        setTimeout("isgameover()", 200);
    }
});

// 增加监听事件 touchstart
document.addEventListener('touchstart', function (event) {
    startx = event.touches[0].pageX;
    starty = event.touches[0].pageY;
});

document.addEventListener('touchend', function (event) {
    endx = event.changedTouches[0].pageX;
    endy = event.changedTouches[0].pageY;

    var deltax = endx - startx;
    var deltay = endy - starty;

    // 先做判断 用户若是仅仅点击屏幕并没有滑动时就不进行下面的滑动操作
    if (Math.abs(deltax) < 0.2 * documentWidth && Math.abs(deltay) < 0.2 * documentWidth)
        return;
    // x轴
    if (Math.abs(deltax) > Math.abs(deltay)) {
        if (deltax > 0) {
            // move right
            if (moveRight()) {
                setTimeout("generateOneNumber()", 300);
                needUpdateBoard = true;
            }

        } else {
            // move left
            if (moveLeft()) {
                setTimeout("generateOneNumber()", 300);
                needUpdateBoard = true;
            }
        }
    } else {
        // y轴
        if (deltay > 0) {
            // move down
            if (moveDown()) {
                setTimeout("generateOneNumber()", 300);
                needUpdateBoard = true;
            }

        } else {
            // move up
            if (moveUp()) {
                setTimeout("generateOneNumber()", 300);
                needUpdateBoard = true;
            }
        }
    }
    if (needUpdateBoard) {
        setTimeout("updateBoardView()", 200);
        setTimeout("isgameover()", 200);
    }
});


function isgameover() {
    if (nospace(board) && nomove(board)) {
        gameover();
    }
}

function gameover() {
    alert("游戏结束！！！");
}

function moveLeft() {
    if (!canMoveLeft(board))
        return false;

    // movelef


    for (var i = 0; i < 4; i++) {
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < j; k++) {
                    if (board[i][k] == 0 && noBlockHorizontal(i, k, j, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        break;
                    } else if (board[i][k] == board[i][j] && noBlockHorizontal(i, k, j, board) && !hasConflicated[i][k]) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;

                        // add score
                        score += board[i][k];
                        updateScore(score);

                        hasConflicated[i][k] = true;
                        break;
                    }
                }
            }
        }
    }
    return true;
}


function moveRight() {
    if (!canMoveRight(board))
        return false;

    //moveright
    for (var i = 0; i < 4; i++) {
        for (var j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                for (var k = 3; k > j; k--) {
                    if (board[i][k] == 0 && noBlockHorizontal(i, j, k, board)) {

                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        break;
                    } else if (board[i][j] == board[i][k] && noBlockHorizontal(i, j, k, board) && !hasConflicated[i][k]) {
                        // move
                        showMoveAnimation(i, j, i, k);
                        // add
                        board[i][k] = board[i][k] + board[i][j];
                        board[i][j] = 0;

                        // add score
                        score += board[i][k];
                        updateScore(score);
                        hasConflicated[i][k] = true;
                        break;
                    }
                }
            }
        }
    }


    return true;

}

function moveUp() {
    if (!canMoveUp(board))
        return false;

    // moveup
    for (var col = 0; col < 4; col++) {
        for (var row = 1; row < 4; row++) {
            if (board[row][col] != 0) {
                for (var k = 0; k < row; k++) {
                    if (board[k][col] == 0 && noBlockVertical(col, k, row, board)) {

                        showMoveAnimation(row, col, k, col);
                        board[k][col] = board[row][col];
                        board[row][col] = 0;
                        break;
                    } else if (board[k][col] == board[row][col] && noBlockVertical(col, k, row, board) && !hasConflicated[k][col]) {
                        showMoveAnimation(row, col, k, col);
                        board[k][col] = board[k][col] + board[row][col];
                        board[row][col] = 0;

                        // add score
                        score += board[k][col];
                        updateScore(score);
                        hasConflicated[k][col] = true;
                        break;
                    }
                }
            }
        }
    }
    return true;
}

function moveDown() {
    if (!canMoveDown(board))
        return false;
    for (var col = 0; col < 4; col++) {
        for (var row = 2; row >= 0; row--) {
            if (board[row][col] != 0) {
                for (var k = 3; k > row; k--) {
                    if (board[k][col] == 0 && noBlockVertical(col, row, k, board)) {
                        showMoveAnimation(row, col, k, col);
                        board[k][col] = board[row][col];
                        board[row][col] = 0;
                        break;
                    } else if (board[k][col] == board[row][col] && noBlockVertical(col, row, k, board) && !hasConflicated[k][col]) {
                        showMoveAnimation(row, col, k, col);
                        board[k][col] += board[row][col];
                        board[row][col] = 0;

                        // add score
                        score += board[k][col];
                        updateScore(score);

                        hasConflicated[k][col] = true;
                        break;
                    }
                }
            }
        }
    }
    return true;
}

