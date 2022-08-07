const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
let direction = null,
    x = 100,
    y = 250
move(character).to(x, y)



// add background
{
const ROWS = Math.ceil(window.innerHeight / 100); // each tile is 100x100, round up
const COLS = Math.ceil(window.innerWidth / 100);  // for incomplete rows and cols
const horizonRow = Math.ceil(ROWS * .7) // make grass take up 70% of screen

for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
        console.log(row, col);
        if (row < horizonRow) {
            move(newImage('/assets/grass.png')).to(col * 100, row * 100);
        } else {
            move(newImage('/assets/sky.png')).to(col * 100, row * 100);        
        }
    }
}
}

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)