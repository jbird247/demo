let limitNum = 0
const container = document.querySelector(".container")
console.log(container)

const btn = document.querySelector(".color")

btn.addEventListener('click', () => {
    for(let i = 0; i < limitNum; i++) {
    // create div
    const colorBlock = document.createElement("div")
    // create ID set attribute
    colorBlock.setAttribute("id", i)
    // set width and height
    colorBlock.textContent = 'test' + i
    colorBlock.style.height = '30px'
    colorBlock.style.width = '50px'
    // set color
    colorBlock.style.backgroundColor = colors[i]
    colorBlock.style.color = colors[colors.length-i]

    // append
    //console.log(colorBlock)
    container.append(colorBlock)
    }
    
console.log(container)
})

// create text box
const inputbox = document.querySelector('#inputbox')
// add event listener 'change' or 'input'
inputbox.addEventListener('input', (e) => {
   console.log(e.target.value) 


})

// validate user input for number /if conditional / alert
//
// create variable capture input value global variable
//
//





const colors = [
"#a2bdee", 
"#ffc1cc", 
"#c1f9ff", 
"#90995b", 
"#97a179", 
"#129900", 
"#6ca088", 
"#9dc319", 
"#4c2416", 
"#61a27a", 
"#e6e7e3", 
"#b0c8ed", 
"#831e1a", 
"#c1f9ff", 
"#39563c", 
"#073706", 
"#68423b", 
"#50514f", 
"#333333", 
"#133337", 
"#98c99c", 
"#9e5252", 
"#a75e5e", 
"#8c443b", 
"#512013", 
"#065535", 
"#004b26", 
"#6899c7", 
"#000000", 
"#ffc1cc", 
"#a58fbe", 
"#df4ae0", 
"#882924", 
"#1d0ed1", 
"#186a8e", 
"#ecdbdf", 
"#e0c1ec", 
"#ead1dc", 
"#c3e096", 
"#f9c6db", 
"#f6afcd", 
"#ee6aa3",
];