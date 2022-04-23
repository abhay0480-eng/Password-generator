
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")
let pass3 = document.getElementById("pass3")
let pass4 = document.getElementById("pass4")

function passGenrator() {
    let length = 15
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+{}[]?><;:₰₺¢₽₨₩৲₥૱৳'

    let random1 = " "
    let random2 = " "
    let random3 = " "
    let random4 = " "

    for (let i = length; i > 0; --i){
        random1 += chars[Math.floor(Math.random() * (chars.length - 1))];
        random2 += chars[Math.floor(Math.random() * (chars.length - 1))];
        random3 += chars[Math.floor(Math.random() * (chars.length - 1))];
        random4 += chars[Math.floor(Math.random() * (chars.length - 1))];
    } 

    
    pass1.textContent = random1
    pass2.textContent = random2
    pass3.textContent = random3
    pass4.textContent = random4
}
