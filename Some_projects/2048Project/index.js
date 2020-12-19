class Board {
  constructor() {
  	this.fastOf = 1000;
    this.timer = true;
    this.width = 6;
    this.height = 4;
    this.mainBoard = [];
    this.positions = new Set();
    this.init();
  }

  switchTimer() {
    this.timer = !this.timer;
  }

  init() {
    let boardBlock = document.createElement('div');
    boardBlock.classList.add('board')
    document.querySelector('body').appendChild(boardBlock)
    for (let i = 0; i < this.height; i++) {
      let line = []
      for (let j = 0; j < this.width; j++) {
        line[j] = null;
      }
      this.mainBoard[i] = line;
    }
  }

  append(block) {
    this.mainBoard[block.y][block.x] = block;
    this.positions.add(block)
    this.draw(block);
  }

	clear() {
      this.mainBoard.forEach((line, indexY) => {
      line.forEach((block, indexX) => {
        if (block && block.destroy) {
          this.mainBoard[indexY][indexX] = null
       }
      })
    })
  }

  update() {
    for (let coordinate of this.positions) {
    let elem = document.querySelector(`.${coordinate.id}`)
    //console.log(coordinate)
    if(coordinate.destroy) {
      //console.log(coordinate)
    	elem
      	.style.cssText =
      	`top:${coordinate.y * 100}px;left:${coordinate.x * 100}px;opacity:0;`
        this.positions.delete(coordinate)
    }
    else {
      elem
        .style.cssText =
      	`top:${coordinate.y * 100}px;left:${coordinate.x * 100}px;`
      setTimeout(() => {
      	elem.innerHTML = `<p>${coordinate.value}</p>`
      },1000)
    }
    }
    this.clear()
  }

  draw(value) {
    let newBlock = document.createElement('div');
    newBlock.classList.add('block', value.id)
    newBlock.innerHTML = `<p>${value.value}</p>`
    document.querySelector('.board')
      .appendChild(newBlock)
      .style.cssText =
      `top:${value.y * 100}px;left:${value.x * 100}px;`
  }

  leftTurn() {
    let timerStop = true;
    for (let i = 0; i < this.height; i++) {
  		let curEmptySlot = 0, curValue = null;    
    	for (let j = 0; j < this.width; j++) {
      
        if(this.mainBoard[i][j] === null) {
          continue;
      	}
        
        if(curValue && curValue.value === this.mainBoard[i][j].value) {
        	timerStop = false;
          this.mainBoard[i][curValue.pos].value = this.mainBoard[i][curValue.pos].value * 2
          this.mainBoard[i][j].x = curEmptySlot-1;
          this.mainBoard[i][j].destroy = true;
          curValue = null;
          continue
        }


        curValue = {pos:curEmptySlot,value:this.mainBoard[i][j].value}
        if(curEmptySlot === this.mainBoard[i][j].x) {
        	curEmptySlot++;
        	continue
        }
        
        this.mainBoard[i][curEmptySlot] = this.mainBoard[i][j];
        this.mainBoard[i][j] = null;
        this.mainBoard[i][curEmptySlot].x = curEmptySlot;
        curEmptySlot++;
        timerStop = false;
      }
    }
    this.update()
    return timerStop
  }

  rightTurn() {
    let timerStop = true;
    for (let i = 0; i < this.height; i++) {
  		let curEmptySlot = this.width-1, curValue = null;      
    	for (let j = this.width-1; j >= 0 ; j--) {
      
        if(this.mainBoard[i][j] === null) {
          continue;
      	}
        
        if(curValue && curValue.value === this.mainBoard[i][j].value) {
        	timerStop = false;
          this.mainBoard[i][curValue.pos].value = this.mainBoard[i][curValue.pos].value * 2
          this.mainBoard[i][j].x = curEmptySlot+1;
          this.mainBoard[i][j].destroy = true;
          curValue = null;
          continue
        }

        curValue = {pos:curEmptySlot,value:this.mainBoard[i][j].value}
        if(curEmptySlot === this.mainBoard[i][j].x) {
        	curEmptySlot--;
        	continue;
        }        
        
        this.mainBoard[i][curEmptySlot] = this.mainBoard[i][j];
        this.mainBoard[i][j] = null;
        this.mainBoard[i][curEmptySlot].x = curEmptySlot;
        curEmptySlot--;
        timerStop = false;
      }
    }
    this.update()
    return timerStop
  }

  upTurn() {
  	let timerStop = true;
    for (let i = 0; i < this.width; i++) {
  	let curEmptySlot = 0, curValue = null;   
    	for (let j = 0; j < this.height; j++) {
        if(this.mainBoard[j][i] === null) {
          continue;
      	}
        
        if(curValue && curValue.value === this.mainBoard[j][i].value) {
        	timerStop = false;
          this.mainBoard[curValue.pos][i].value = this.mainBoard[curValue.pos][i].value * 2
          this.mainBoard[j][i].y = curEmptySlot-1;
          this.mainBoard[j][i].destroy = true;
          curValue = null;
          continue
        }
        
        curValue = {pos:curEmptySlot,value:this.mainBoard[j][i].value}
        if(curEmptySlot === this.mainBoard[j][i].y) {
          curEmptySlot++
        	continue
        }
        this.mainBoard[curEmptySlot][i] = this.mainBoard[j][i];
        this.mainBoard[j][i] = null;
        this.mainBoard[curEmptySlot][i].y = curEmptySlot;
        curEmptySlot++;
        timerStop = false;
      }
    }
    this.update()
    return timerStop
  }
  
  downTurn() {
  	let timerStop = true;
    for (let i =  0; i < this.width; i++) {
  	let curEmptySlot = this.height - 1, curValue = null;  
    	for (let j = this.height - 1; j >= 0; j--) {
        if(this.mainBoard[j][i] === null || this.mainBoard[j][i].destroy) {
          continue;
      	}
        
        if(curValue && curValue.value === this.mainBoard[j][i].value) {
        	timerStop = false;
          this.mainBoard[curValue.pos][i].value = this.mainBoard[curValue.pos][i].value * 2
          this.mainBoard[j][i].y = curEmptySlot+1;
          this.mainBoard[j][i].destroy = true;
          curValue = null;
          continue
        }
        
        curValue = {pos:curEmptySlot,value:this.mainBoard[j][i].value}
        if(curEmptySlot === this.mainBoard[j][i].y) {
        	curEmptySlot--;
        	continue
        }
        this.mainBoard[curEmptySlot][i] = this.mainBoard[j][i];
        this.mainBoard[j][i] = null;
        this.mainBoard[curEmptySlot][i].y = curEmptySlot;
        curEmptySlot--;
        timerStop = false;
      }
    }
    this.update()
    return timerStop
    }
}


class Block {
  constructor(x, y) {
    this.id =  this.generateName();
    this.x = x;
    this.y = y;
    this.value = 2;
    this.destroy = false;
  }
  
  generateName() {
  	let hash = '';
    for(let i = 6; i > 0; i--){
    	//hash += String.fromCharCode(7 + date[i])
      hash += String.fromCharCode(70+Math.floor(Math.random() * 10))
    }
    //console.log(hash)
    return hash
  }
}

class Game {
	constructor() {
  	this.board = new Board();
    this.listeners = new Map([[37, 'leftTurn'],[39, 'rightTurn'],[38, 'upTurn'],[40, 'downTurn']]);
    this.addEventListeners()
    this.checkEmpty()
  }
  
  checkEmpty() {
  	const remainEmpty = this.board.width*this.board.height - (this.board.positions.size+1)
    const newElementPos = Math.floor(Math.random() * (remainEmpty-1));
    let counter = 0;
    for (let j = 0; j < this.board.height; j++){
      for(let i = 0; i < this.board.width; i++){
        if(counter === newElementPos && this.board.mainBoard[j][i] === null) {
        	this.board.append(new Block(i,j));	
          return;
        }
        if(this.board.mainBoard[j][i] === null) {
        	counter++;
        }
        }
    }
  }
  
  addEventListeners() {
    document.addEventListener('keydown', (event) => {
      if (!this.board.timer) return
      this.board.timer = this.board[this.listeners.get(event.keyCode)]()
      
      if(!this.board.timer) {
        setTimeout(() => {
          this.board.switchTimer()
          this.checkEmpty()
        }, this.board.fastOf);
      }
    })
  }
}

const myBoard = new Game()


