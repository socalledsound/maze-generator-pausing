class Cell {
    constructor(idx, x, y, size, paddingLeft, paddingTop){
        this.idx = idx
        this.x = x * size + paddingLeft
        this.y = y * size + paddingTop
        this.w = size
        this.h = size
        this.colIdx = x
        this.rowIdx = y
        this.visited = false
        this.visitedColor = [190,20,190,110]
        this.strokeColor = [255, 255, 255]
        // [top, right, bottom, left]
        this.walls = [true, true, true, true]
        this.highlight = false
    }

    checkNeighbors(){
        const neighbors = getNeighbors(this.colIdx, this.rowIdx, maze.cells)
        //console.log(neighbors)  
        if(neighbors.length > 0){
            const randomInt = int(random(0, neighbors.length))
            //console.log(randomInt)
            return neighbors[randomInt]
        }else{
           return -1
        }
    }

    highlightCell(){
        noStroke()
        fill(0,200,20,200)
        rect(this.x, this.y, this.w, this.h)

    }
    
    render(){
        if(this.visited){
            noStroke()
            fill(this.visitedColor)
            rect(this.x, this.y, this.w, this.h)
        }
        stroke(this.strokeColor)
        //top
        if(this.walls[0]){
            line(this.x, this.y, this.x + this.w, this.y)
        }
        //right
        if(this.walls[1]){
            line(this.x + this.w, this.y, this.x + this.w, this.y + this.h)
        }
        //bottom
        if(this.walls[2]){
            line(this.x + this.w, this.y + this.h, this.x, this.y + this.h)
        }
        //left
        if(this.walls[3]){
            line(this.x, this.y + this.h, this.x, this.y)
        }

    }
}