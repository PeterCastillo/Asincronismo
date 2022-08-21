const fnAsync = () => {
    return new Promise((resolve,reject) =>{
        (true)
            ?setTimeout(()=>resolve('Async!!'),2000)
            :reject(new Error('Error!'))
    })
}

const anotherFn = async() => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');//Com esta fn tiene el async y await, va a esperara que se cumpla primero el console de arriba para despues poder ejecutar este
}

console.log('Before');
anotherFn();
console.log('After');