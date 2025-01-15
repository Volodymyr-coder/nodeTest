const callback = ()=>{
    console.log('just callback')
}

setTimeout(callback, 1500);
console.log('after setTimeout')