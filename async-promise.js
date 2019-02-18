// const fetchData = () => {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Done!');
//         }, 1500);
//     });
//     return promise;
// };
//
// setTimeout(() => {
//     console.log('Timer is done!');
//     fetchData()
//         .then(text => {
//             console.log(text);
//             console.log("call fetchData");
//             return fetchData();
//         })
//         .then(text2 => {
//             console.log(text2);
//             console.log("call fetchData2");
//         });
// }, 2000);
//
// function setup() {
//     noCanvas();
// }
//
// let promise = gotData('aaaa');
// promise.then(gotData);
// promise.catch(gotErr);
//
// function gotData(data) {
//     console.log(data);
// }
//
// function gotErr(err) {
//     console.log('ERROR :' + err);
// }

// function successCallback(result) {
//     console.log("You was successively hired: " + result);
// }
//
// function failureCallback(error) {
//     console.log("Wou dont have this job: " + error);
// }
//
// const hired = true;
//
// const promise = goToWork(hired);
// promise.then(successCallback, failureCallback);

// new Promise((resolve, reject) => {
//     console.log('Initial');
//
//     resolve();
// })
//     .then(() => {
//         throw new Error('Something failed');
//
//         console.log('hired Do this');
//     })
//     .catch(() => {
//         console.log('Do that');
//     })
//     .then(() => {
//         console.log('Do this, no matter what happened before');
//     });

const succeded = true

function greet() {
    return new Promise((resolve, reject) => {
        console.log("Hey, how are you?");
        console.log("Promise: " + this.Promise.toString());
        if (succeded === true) {
            resolve()
        } else {
            console.log("Promise reject: " + this.Promise.toString());
            reject()
        }
    });
}

function reply() {
    console.log('I\'m doing great!');
}

greet().then(() => {
    console.log("Promise: " + this.Promise);
    reply()
});
