// sync 
// function sync(){
//     return "success";
// }

// console.log('starting...')

// var result = sync();
// console.log(result);

// console.log('finishing...')


// async

// function async(callback){
//     setTimeout(()=>{
//         console.log('executions starts..')
//         callback("success")
//     }, 3000)
// }

function foo(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('executions starts..')
            resolve("success")
        }, 3000)
    })   
}

console.log('starting...')

// async((result)=> console.log(result));
// async()
// .then(res=>console.log(res))
// .catch(err=> console.log(err))

const test = async function(){
    const result = await foo();
    console.log(result);
}

test();

console.log('finishing...')