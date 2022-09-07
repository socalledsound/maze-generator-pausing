function getGridIndex(x, y){
    if( x < 0 || x > maze.numCols - 1 || y < 0 || y > maze.numCols -1 ){
        return - 1
    }
    return x + y * maze.numCols
}

function  getNeighbors(x, y, arr){
    const neighbors = []
    const top = arr[getGridIndex(x, y - 1)]
    const right = arr[getGridIndex(x + 1, y)]
    const bottom = arr[getGridIndex(x, y + 1)]
    const left = arr[getGridIndex(x - 1, y)] 
    const candidates = [top, right, bottom, left]
    candidates.forEach( item => {
        if(item != undefined){
            if(!item.visited){
                neighbors.push(item)
            }
        }
    })
    return neighbors
}

function removeWalls(a, b){
         // top, right, bottom, left
   let dif = a.idx - b.idx
    //console.log(dif)
    if(dif === 1){
        //console.log('remove 1')
        a.walls[3] = false
        b.walls[1] = false
    } else if(dif === -1){
        //console.log('remove -1')
        a.walls[1] = false
        b.walls[3] = false
    } else if(dif === maze.numCols){
        a.walls[0] = false
        b.walls[2] = false
    } else if(dif === maze.numCols * -1){
        a.walls[2] = false
        b.walls[0] = false
    }
    
}

// function removeWalls(a, b){
//     // top, right, bottom, left
//     let dif = a.idx - b.idx
//     console.log(dif)
//     if(dif === 1){
//         a.walls[3] = false
//         b.walls[1] = false
//     } else if( dif === -1){
//         a.walls[1] = false
//         b.walls[3] = false
//     } else if(dif === numCols){
//         a.walls[2] = false
//         b.walls[0] = false
//     }else if(dif === numCols * -1){
//         a.walls[0] = false
//         b.walls[2 = false]
//     }else{
//         console.log('hi')
//     }
// }