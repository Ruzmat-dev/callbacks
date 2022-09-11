function op(fn) {
    fn(1, 2)
}

op( (a, b) => {
    console.log(a+b);
})

op( (a, b) => {
    console.log(a*b);
})



console.log('start', new Date().getSeconds());

setTimeout( () => {
    console.log(10000);

    setTimeout( () => {
        console.log(15000);

        setTimeout( () => {
            console.log(20000);

            setTimeout( () => {
                console.log(25000);

                setTimeout( () => {
                    console.log("Ostanovkada uxlaymiz");

                    setTimeout( () => {
                        console.log('start', new Date().getSeconds());

                    })    

                })

            },7000)

        },5000)

    },3000)

},1000)