

function draw(){
    const canvas = document.getElementById("board")
    const ctx = canvas.getContext('2d')

    ctx.fillStyle = "red"
    ctx.fillRect(50, 50 , 200, 200)

    ctx.clearRect(100, 100, 100, 100)

    ctx.strokeStyle = "green"
    ctx.strokeRect(110, 110, 80, 80)
}


draw()