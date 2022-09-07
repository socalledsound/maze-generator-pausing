class Maze {
    constructor(numRows, numCols, cellSize, paddingLeft, paddingTop){
        this.cells = []
        this.current = 0
        this.cellCount = 0
        this.stack = []
        this.numCols = numCols
        this.numRows = numRows
        this.cellSize = cellSize
        this.paddingLeft = paddingLeft
        this.paddingTop = paddingTop
        this.initCells()
        this.last = this.cells[0]
    }

    initCells(){
        for(let y = 0; y < this.numCols; y++){
            for(let x = 0; x < this.numRows; x++){
                this.cells.push(new Cell(this.cellCount, x , y, this.cellSize, this.paddingLeft, this.paddingTop))
                this.cellCount ++
            }
        }
        this.current = this.cells[0]
    }

    generatePath(){
        console.log(this.current)
        if(this.current != -1){
        
            const next = this.current.checkNeighbors()
            console.log(next)
            if(next !== -1){
                this.stack.push(this.current)
                next.visited = true
                console.log(next)
                // next.highlightCell()
                
                removeWalls(this.current, next)
                //console.log(current.walls)
    
                // move on
                this.current = next

                this.generatePath()

               
            } else if(this.stack.length > 1) {
                console.log(this.stack.length)
                this.stack.pop()
                this.current = this.stack[this.stack.length - 1]
                // this.current.highlightCell()
                this.last = this.current
                // this.generate()
                //stack.slice(-1, 0)
            }else{
                // this.current.highlightCell()
                this.last = this.current
                console.log('finished')
                
                
            }
        }
    }

    render(){ 
        this.cells.forEach(cell => {
            cell.render()  
            this.last.highlightCell()
        })
        // noLoop()
    }
    resetCells(){
        this.cells.forEach(cell => {
            cell.last = false
        })
    }
}