const player = (name) => {
    const playerName = name;
    return {
        playerName
    }
}

const gameBoard = (() => {
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div')
        cell.classList.add('cell');
        cell.textContent = ' '
        document.querySelector('.board').appendChild(cell)
    }
    (function addMarks() {
        let currentMove = 0;
        const cellArr = document.querySelectorAll('.cell')
        const addXMark = (() => {
            const markChanger = ((cell) => {
                cell.addEventListener('click',
                    function () {
                        const cellContentAdder = (value) => {
                            console.log(this)
                            this.textContent = value
                            let signClass = ''
                            value == 1 ? signClass = 'cross' : signClass = 'circle'
                            this.classList.add(signClass)
                        }
                        if (this.textContent == ' ') {
                            currentMove % 2 === 0 ? cellContentAdder(1) : cellContentAdder(0)
                            currentMove++;
                        }
                        else {
                            alert('That move is invalid')
                        }
                        gameChecker()
                    })
            });
            for (let i = 0; i < cellArr.length; i++) {
                markChanger(cellArr[i])
            }
        })();

        const gameChecker = (() => {
            const winningCombos = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
            ]
            let winningCombosEachArr = (() => {
                for (let i = 0; i < winningCombos.length; i++) {
                }
            })()


            let markArr = []
            const markPositionGetter = (() => {
                for (let i = 0; i < cellArr.length; i++) {
                    markArr.push(cellArr[i].textContent)
                    let xArr = [];
                    let oArr = [];
                    const xoArrCreator = () => {
                        for (let i = 0; i < markArr.length; i++) {
                            if (markArr[i] == 1) {
                                xArr.push(i)
                            }
                            if (markArr[i] == 0) {
                                oArr.push(i)
                            }
                        }
                    }
                    xoArrCreator()
                    if (winningCombos.includes(xArr)) {
                        alert('bhbksnkasj')
                    }
                }
                // const positionOfMark = () => {
                // }
                console.log(markArr)

            })()


        })
        return {
            addXMark
        }
    })();
})();

const displayController = (() => {

    return {

    }
})();

// Build the logic that checks for when the game is over!
//  Should check for 3 -in -a - row and a tie.

