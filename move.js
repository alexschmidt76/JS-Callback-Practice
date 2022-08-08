// array of occupied is that can't be walked on
let occupied_spaces = []

function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom, background=false) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'

        if(background) {
            element.style.zIndex = 0
        } else {
            element.style.zIndex = 2

            // set space occupied by object

            // does not return width or height of image
            /* let width = element.style.width
            let height = element.style.height */
            
            let space = {
                x1: left,
                y1: bottom,
                x2: (left + 100),
                y2: (bottom + 205) 
            }
            occupied_spaces.push(space)
            console.log(occupied_spaces)
        }
        
    }

    function moveWithArrowKeys(left, bottom, callback) {

        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        element.style.zIndex = 3

        setInterval(function() {
            // set boundary conditions
            const LEFT_WALL = 0,
                  RIGHT_WALL = window.innerWidth,
                  BOTTOM_WALL = 105, // can't walk on the inventory (5 extra px for shadow)
                  TOP_WALL = window.innerHeight * .725 // can't walk on the sky

            // move in direction
            if(direction === 'west'){
                x = x - 1
            }
            if(direction === 'north'){
                y = y + 1
            }
            if(direction === 'east'){
                x = x + 1
            }
            if(direction === 'south'){
                y = y - 1
            }
            
            // check for boundary conditions
            if(x < LEFT_WALL) {
                x += 1
            }
            if(x > RIGHT_WALL) {
                x -= 1
            }
            if(y < BOTTOM_WALL) {
                y += 1
            }
            if(y > TOP_WALL) {
                y -= 1
            }

            // check if space is occupied
            for(let i = 0; i < occupied_spaces.length; i++) {
                space = occupied_spaces[i]
                if((x < space.x2) && (x > space.x1) && (y < space.y2) && (y > space.y1)) {
                    element.style.zIndex = 1
                    console.log(element.style.zIndex)
                    break
                } else {
                    element.style.zIndex = 3
                    console.log(element.style.zIndex)
                }
            }

            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }, 1) 

        document.addEventListener('keydown', function(e){     
            if(e.repeat) return;
            
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            
            if(typeof callback === 'function') {callback(direction)}
        })

        document.addEventListener('keyup', function(e) {
            direction = null
            if(typeof callback === 'function') {callback(direction)}
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}