

const canvas = document.getElementById("board")
const ctx = canvas.getContext("2d");



ctx.fillStyle = "red"
ctx.fillRect(20, 20, 100 , 100)

ctx.fillStyle = "blue"
ctx.fillRect(160, 20, 100 , 100)


ctx.lineWidth = 4;
ctx.strokeStyle = "Green"
ctx.strokeRect(100, 200 , 150 , 100)  

ctx.clearRect(25, 25, 90, 90)

ctx.font = "20px Gothic"
ctx.fillStyle = "blue"
ctx.fillText("Hello Krishna You're the best", 400, 50)