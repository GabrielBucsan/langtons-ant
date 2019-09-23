$(document).ready(()=>{

    const canvas = new Canvas(520, 520);
    const c = canvas.context;
    const iterationSlider = $('#iterationRange');
    const cellSlider = $('#cellRange');
    
    let cells;
    let cellSize;
    let gridSize;
    let iterations;
    let ant;
    
    function setupGrid(){
        canvas.update();
        cells = [];
    
        cellSize = Number(cellSlider[0].value);
        gridSize = new Vector(canvas.size.x / cellSize, canvas.size.y / cellSize);
    
        iterations = 1;
    
        ant = new Ant(c, new Vector(gridSize.x / 2, gridSize.y / 2), new Vector(cellSize), gridSize);
    
        for (let j = 0; j < gridSize.y; j++) {
            for (let i = 0; i < gridSize.x; i++) {
                let index = i + j * gridSize.x;
                let pos = new Vector(i, j);
                let size = new Vector(cellSize);
                cells[index] = new Cell(c, pos, size);
                cells[index].render();
            }
        }
    
        ant.render();
    }

    $('#iterationRange').on('input', function () {
        iterations = Number(iterationSlider[0].value);
    });
    $('#cellRange').on('input', function () {
        setupGrid();
    });

    setupGrid();

    // MAIN FUNCTION
    (function animate(){
        requestAnimationFrame(animate);
        for (let i = 0; i < iterations; i++) {        
            let index = ant.pos.x + ant.pos.y * gridSize.x;
            ant.processCell(cells[index].state);
            ant.moveFoward();
            cells[index].changeState();
    
            ant.render();
            cells[index].render();
        }
    })();
});