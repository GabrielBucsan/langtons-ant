class Ant{
    constructor(c, pos, size, mapSize){
        this.c = c;
        this.pos = pos;
        this.size = size;

        this.mapSize = mapSize;

        this.dir = 0;
    }

    processCell(state){
        if(state){
            this.dir++;
        }else{
            this.dir--;
        }
        if(this.dir > 3){
            this.dir = 0;
        }else if(this.dir < 0){
            this.dir = 3;
        }
    }

    moveFoward(){
        switch (this.dir) {
            case 0:
                this.pos.y--;
                break;
            case 1:
                this.pos.x--;
                break;
            case 2:
                this.pos.y++;
                break;
            case 3:
                this.pos.x++;
                break;
            default:
                break;
        }
        if(this.pos.x < 0){
            this.pos.x = this.mapSize.x - 1;
        }else if(this.pos.x >= this.mapSize.x){
            this.pos.x = 0;
        }
        if(this.pos.y < 0){
            this.pos.y = this.mapSize.y - 1;
        }else if(this.pos.y >= this.mapSize.y){
            this.pos.y = 0;
        }
    }

    render(){
        this.c.fillStyle = 'red';
        this.c.fillRect(this.pos.x * this.size.x, this.pos.y * this.size.y, this.size.x, this.size.y)
    }
}