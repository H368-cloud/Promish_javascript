

// let firstPromish = new Promise( (resolve,reject) => {
//     console.log("Hritik");
//     // resolve(1001)
//     reject(new Error("Internal server Error"));
// });



// function myName() {
//      console.log("my name is Hritik")
// }

// setTimeout(myName,10000)


// let secondPromish = new Promise( (resolve,reject) => {
//     setTimeout( function sayMyName() {
//         console.log("my name is Hritik Dubey")
//     },10000)
//     resolve(1);
// })


// let promish1 = new Promise((resolve,reject) => {
//     let success = true;
//     if(success){
//         resolve('Promish fullfilled');
//     }
//     else{
//         reject('Promish Reject');
//     }
// })

// promish1.then((message) => {
//     console.log("the message is " + message)
// }).catch((error) => { 
//     console.log("the error is " + error);
// })


// let promish2 = new Promise((resolve,reject) => {
//     let success = false;

//     if(success){
//         resolve("Promish Resolved")
//     }
//     else{
//         reject("Promish Reject")
//     }
// })

// promish2.then((message) => {
//     console.log("then ka message hai" + message)
// }).catch((error) => {
//     console.log("Erro ka msg hai" + error)
// })

let promish3 = new Promise((resolve,reject) =>  {
    let success = true;

    if(success){
        resolve("Promish Fullfilled")
    }
    else{
        reject("Promish Reject")
    }
})

promish3.then((message) => {
    console.log("then ka msg hai" + message)
    return "Promish fullfilled second msg"
}).then ((message) => {
    console.log("Second msg" + message);
    return "Promish fullfilled third msg"
}).then((message) => {
    console.log("Third msg" + message)
})