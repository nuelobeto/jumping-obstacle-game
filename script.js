const xter = document.querySelector('#xter');
const obstacle = document.querySelector('#obstacle');
const refreshBtn = document.querySelector('#refresh');

function jump() {
  if (xter.classList !== 'animate') {
    xter.classList.add('animate');
  }
  setTimeout(()=>{
    xter.classList.remove('animate');
  }, 500)
}

const checkDead = setInterval(()=>{
  let xterTop = parseInt(window.getComputedStyle(xter).getPropertyValue('top'))
  
  let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'))
  
  if (obstacleLeft < 20 && obstacleLeft > 0 && xterTop >= 200) {
    obstacle.style.animatiom = 'none';
    obstacle.style.display = 'none';
    alert('you failed!')
  }
}, 10)

refreshBtn.addEventListener('click', ()=>{
  location.reload()
})