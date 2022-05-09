function square(num){
    return num ** 2;
}

function cube(num){
    return num ** 3;
}


// Default export
// export default square;

export {
    square,
    cube,
}

export * as messages from './module2.mjs'