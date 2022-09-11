function doSomething( fn ) {
    console.log('Something');
    fn()
}

doSomething(plus)

function hello() {
    console.log('Hello World');
}

function plus() {
    console.log(5 + 6);
}

function power() {
    console.log(5 ** 6);
}