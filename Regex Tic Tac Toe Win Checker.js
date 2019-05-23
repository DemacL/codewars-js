function regexTicTacToeWinChecker(board) {
    return /X{3}.{6}|.{3}X{3}.{3}|.{6}X{3}|(X..){3}|(.X.){3}|(..X){3}|(X...){2}X|..X.X.X..|O{3}.{6}|.{3}O{3}.{3}|.{6}O{3}|(O..){3}|(.O.){3}|(..O){3}|(O...){2}O|..O.O.O../.test(a)
}
