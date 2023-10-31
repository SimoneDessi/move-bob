const bob = document.querySelector('.bob')
const eyes = document.querySelector('.eye-container')


let left = 100


function moveRight() {
left += 100
bob.style.left = left + 'px';
eyes.style.transform = 'rotate(0deg)'
eyes.style.left = '65px'

// console.log(bob.style.left);
}

function moveLeft() {
  left -= 100
  bob.style.left = left + 'px'
  eyes.style.transform = 'rotate(180deg)'
  eyes.style.left = '-65px'
  // console.log(bob.style.left);
  }


function moveBob(e) {
if (e.key === 'ArrowLeft'){
  moveLeft()
}
if (e.key === 'ArrowRight'){
  moveRight()
}
}


document.addEventListener('keydown', moveBob)