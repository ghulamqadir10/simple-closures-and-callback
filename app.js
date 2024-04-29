// practice callback

// let num = [1, 4, 7, 8, -4, -8, -9,];
// let pos_num = removeNeg(num, (x) => x >= 0);
// document.getElementById("demo").innerHTML =pos_num;
// function removeNeg(number,callback){
//     my_array=[]
//     for(var x of number){
// if(callback(x)){
//     my_array.push(x)
// }
//     }return my_array
// }


// closure practice

// closure definitation = closure is a function inside the function which use (lexical enviroment) yani wo apna parent sa message dena ka liya var ya any thing le sakti hai or An insider function in function which have access into their auter function 


// function init() {
//     var name = "Mozilla"
//     function display_name() {
//         console.log(name);
//     } name = "umair"
//     return display_name;
// }
// let c = init();
// c()



// function returnfunc() {
//     const x = () => {
//         let a = 1;
//         console.log(a)

//         const y = () => {
//             let a = 2;
//             console.log(a)

//             const z = () => {
//                 let a = 3;      //ye jo let ka var bna hua hain x,y,z ka bracket ma inka scope {brackets } ka andar hi hain ya inka bahir nhi chalta  age inma sa kisi ek ka pass bhi ek bhi variable na ho to apna enviroment yani parent function ka var use karaga isa closure kehta hain 
//                 console.log(a)
//             }
//             z()
//         }
//         a=999
//         y()
//     }
//     return x
// }
// let x = returnfunc();
// x()

//Another example

// function returnfunc() {
//     const x = () => {
//         let a = 1;
//         console.log(a)

//         const y = () => {
//             // let a = 2;
//             console.log(a)

//             const z = () => {
//                 // let a = 3;
//                 console.log(a)
//             }
//             z()
//         }
//         a = 90
//         y()      // isna output ma a ki value change krli y and z function na q ka let ka var comment krdia and y ko a=90 dediya ab z bi parent value use karaga 
//     }
//     return x
// }
// let y = returnfunc();
// y()


// practice of closure  example

// function auterfunc(){
//     function display_name(){
//         console.log("Hello umair")
//     }
//     display_name()
// }
// auterfunc()

// function auterfunc() {
//     var value = 0
//     return function add(x) {
//         value += x
//         console.log(value)
//     }
// }
// var addvalue = auterfunc()    //yahan per function jo variable ma save hua wo isliye q ka humna function ma humna return agaya hai other wise var ma save nhi hota 
// // and normally chalta ek bar 
// addvalue(10)
// addvalue(20)


// switch case practice
// var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat",]
// var date=new Date();
// var week_day=days[date.getDay()]
// console.log(date)
// switch(week_day){
// case "Sat":
//     case "Sun":
//         alert("its weekend day")
//         break;
//         case "Fri":
//         alert("its a blessed day")
//         break;
//         default :
//         alert("its normal schedule day");
// }





