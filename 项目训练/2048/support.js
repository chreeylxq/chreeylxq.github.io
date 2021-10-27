// 获取现有设备屏幕的宽度
var documentWidth = screen.availWidth;
// 定义container的宽度尺寸
var gridContainerWidth = 0.92 * documentWidth;
// 定义格子尺寸
var cellSideLength = 0.18 * documentWidth;
// 定义格子间距
var cellSpace = 0.04 * documentWidth;

function getPosTop(i) {
    return cellSpace + i * (cellSpace + cellSideLength);
}
function getPosLeft(j) {
    return cellSpace + j * (cellSpace + cellSideLength);
}

function getNumberBackgroundColor(number) {
    switch (number) {
        case 2: return "#eee4da"; break;
        case 4: return "#ede0c8"; break;
        case 8: return "#f2b179"; break;
        case 16: return "#f59563"; break;
        case 32: return "#f67c5f"; break;
        case 64: return "#f65e3b"; break;
        case 128: return "#edcf72"; break;
        case 256: return "#edcc61"; break;
        case 512: return "#9c0"; break;
        case 1024: return "#33b5e5"; break;
        case 2048: return "#09c"; break;
        case 4096: return "#a6c"; break;
        case 8192: return "#93c"; break;

    }
    return 'black';
}

function getNumberColor(number) {
    if (number <= 4) {
        return "#776e65";
    }
    return '#fff';
}

function nospace(board) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (board[i][j] == 0)
                return false;
        }
    }
    return true;
}

function nomove(board) {
    if (canMoveDown(board) || canMoveUp(board) || canMoveLeft(board) || canMoveRight(board))
        return false;
    return true;
}

function canMoveLeft(board) {
    for (var row = 0; row < 4; row++) {
        for (var col = 1; col < 4; col++) {
            if (board[row][col] != 0)
                if (board[row][col - 1] == 0 || board[row][col - 1] == board[row][col])
                    return true;

        }
    }
    return false;
}
function canMoveRight(board) {
    for (var row = 0; row < 4; row++) {
        for (var col = 2; col >= 0; col--) {
            if (board[row][col] != 0) {
                if (board[row][col + 1] == 0 || board[row][col + 1] == board[row][col])
                    return true;
            }
        }
    }
}
function canMoveUp(board) {
    for (var col = 0; col < 4; col++) {
        for (var row = 3; row > 0; row--) {
            if (board[row][col] != 0) {
                if (board[row - 1][col] == 0 || board[row][col] == board[row - 1][col])
                    return true;
            }
        }
    }

}
function canMoveDown(board) {
    for (var col = 0; col < 4; col++) {
        for (var row = 0; row < 3; row++) {
            if (board[row][col] != 0) {
                if (board[row + 1][col] == 0 || board[row + 1][col] == board[row][col])
                    return true;

            }
        }
    }
}
function noBlockHorizontal(row, col1, col2, board) {
    for (var i = col1 + 1; i < col2; i++) {
        if (board[row][i] != 0)
            return false;
    }
    return true;
}
function noBlockVertical(col, row1, row2, board) {

    for (var i = row1 + 1; i < row2; i++) {
        if (board[i][col] != 0)
            return false;

    }
    return true;
}
