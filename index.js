// add background
const ROWS = Math.ceil(window.innerHeight / 100); // each tile is 100x100, round up
const COLS = Math.ceil(window.innerWidth / 100);  // for incomplete rows and cols
const horizonRow = Math.ceil(ROWS * .7) // make grass take up 70% of screen

for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
        if (row < horizonRow) {
            move(newImage('/assets/grass.png')).to(col * 100, row * 100, true);
        } else {
            move(newImage('/assets/sky.png')).to(col * 100, row * 100, true);        
        }
    }
}

// add inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// add character
const character = newImage('assets/green-character/static.gif')

// walking animation for character
function handleDirectionChange(direction) {
    if(direction === null){
        character.src = 'assets/green-character/static.gif'
    }
    if(direction === 'west'){
        character.src = 'assets/green-character/west.gif'
    }
    if(direction === 'north'){
        character.src = 'assets/green-character/north.gif'
    }
    if(direction === 'east'){
        character.src = 'assets/green-character/east.gif'
    }
    if(direction === 'south'){
        character.src = 'assets/green-character/south.gif'
    }
}

// append images and items to screen
move(character).withArrowKeys(100, 250, handleDirectionChange)
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)