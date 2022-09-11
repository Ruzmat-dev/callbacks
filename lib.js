let abc = setInterval ( () => {
    console.log('axr');
} , 100)

setInterval ( () => {
    clearInterval(abc)
}, 3000)