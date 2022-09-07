const canvasWidth = 600, canvasHeight = 600
const numRows = 10, numCols = 10
const cellSize = 50
const paddingLeft = 50
const paddingTop = 50
let maze
let theta = 0

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    frameRate(10)
    //translate(50,50)
    maze = new Maze(numRows, numCols, cellSize, paddingLeft, paddingTop)
    //maze.generatePath()
}

function draw(){
    background(20)
    maze.render()
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        maze.generatePath()
    }
}