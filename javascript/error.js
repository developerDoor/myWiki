// const error1 = new Error("에러1");
// const error2 = Error("에러2");
//
// console.log(`나는야 에러1이야 ${error1}`);
// console.log(`나는야 에러2이야 ${error2}`);
// // console.log(error1 == error2);
// // console.log(error1 === error2);
//
// 1. 그냥 Error("에러"), new Error("에러") 차이점 => 같다.
// 2. new

// function getRectArea(width, height) {
//     if (isNaN(width) || isNaN(height)) {
//         throw Error('Parameter is not a number!');
//     }
// }
//
// try {
//     getRectArea(3, 'A');
// } catch (e) {
//     console.log(e);
//     // expected output: "Parameter is not a number!"
// }

// const x = Error('1');
// const y = Error('1');
// console.log(x == y);

try {
    new Error("에러 났지롱");
    console.log("이거 실행하니?");
}catch (err) {
    console.log(err)
}