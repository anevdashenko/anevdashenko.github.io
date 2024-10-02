const container = document.getElementById('background-container');
    
var BLOCKS_GENERATOR = {
    
    top_pattern: [
        [0.35,0.74,0.44,0.71,0.21,0.57],
        [0.00,0.42,0.00,0.18,0.74,0.00],
        [0.00,0.00,0.00,0.58,0.00,0.00]
    ],

    bottom_pattern: [
        [0.00,0.74,0.00,0.00,0.00,0.00,0.00,0.00,0.00],
        [0.00,0.42,0.21,0.18,0.00,0.00,0.00,0.00,0.55],
        [0.24,0.55,0.13,0.58,0.32,0.00,0.00,0.00,0.31]
    ],

    block_count: 10,
    block_size: 32,
    bias: 8,

    window_resize: function() {

        this.block_count = Math.floor(window.innerWidth / (this.block_size + this.bias));
        console.log(this.block_count);
        this.build_pattern();
    },

    build_pattern: function(){
        container.innerHTML = '';

        for(let row = 0; row < 3; row++){
            for(let col = 0; col < this.block_count; col++){
                let top_column = col % this.top_pattern[row].length;
                let bottom_column = col % this.bottom_pattern[row].length;
                if(this.top_pattern[row][top_column] != 0.0){
                    this.build_block(row, col, "top", this.top_pattern[row][top_column]);
                }
                if(this.bottom_pattern[row][bottom_column] != 0.0){
                    this.build_block(2 - row, col, "bottom", this.bottom_pattern[row][bottom_column]);
                }
            }
        }
    },

    build_block: function(row, column, anchorY, alpha){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${this.block_size}px`;
        square.style.height = `${this.block_size}px`;
        square.style[anchorY] = `${row* (this.block_size + this.bias) }px`;
        square.style.left = `${column * (this.block_size + this.bias) }px`;
        square.style.opacity = alpha
        container.appendChild(square);

    }
}