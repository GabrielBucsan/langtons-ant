class Cell{
    constructor(c, pos, size){
        this.c = c;
        this.pos = pos;
        this.size = size;

        this.state = false;
    }

    changeState(){
        this.state = !this.state;
    }

    render(){
        this.c.fillStyle = (this.state)? '#ffff00' : '#323232';
        this.c.fillRect(this.pos.x * this.size.x, this.pos.y * this.size.y, this.size.x, this.size.y);
    }
}