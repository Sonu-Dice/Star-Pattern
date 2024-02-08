// Swastik Pattern

// let n=parseFloat(prompt("Enter only odd number"));
// let str="";
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==mid || j==mid ||(i==1&&j<=mid) || (j==1&&i>=mid) || (j==n&&i<=mid) || (i==n&&j>=mid)){
//             str+="* "
//         }
        
//         else{
//             str+="  "
//         }
//     }
//     str+="\n"
// }
// console.log(str);

// pyramid pattern
// let n=5
// let str="";
// for(let i=1;i<=n;i++){
//     for(let j=n;j>i;j--){
//         process.stdout.write(" ")
//     }
//     for(let k=1;k<=(2*i-1);k++){
//         process.stdout.write("*")

//     }
//     console.log();
// }

// down pyramid Pattern
// let n=5
// for(let i=n;i>=1;i--){
//     for(let j=n;j>i;j--){
//         process.stdout.write(" ")
//     }
//     for(let k=1;k<=(2*i-1);k++){
//         process.stdout.write("*")

//     }
//     console.log();
// }

// Diamond Pattern
// let n=5
// for(let i=1;i<=n;i++){
//     for(let j=n;j>i;j--){
//         process.stdout.write(" ")
//     }
//     for(let k=1;k<=(2*i-1);k++){
//         process.stdout.write("*")
//     }
//     console.log();
// }
// for(let i=n-1;i>=1;i--){
//     for(let j=n;j>i;j--){
//         process.stdout.write(" ")
//     }
//     for(let k=1;k<=(2*i-1);k++){
//         process.stdout.write("*")
//     }
//     console.log();
// }

// X pattern
// let n=7;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==j||i+j==n+1){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// A pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1||j==1 || i==mid || j==n){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// B pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1||j==1 ||i==mid || j==n||i==n){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// C pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1||j==1 || i==n){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// D pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1||j==2 || j==n || i==n){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// E Pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1||j==1 || i==mid || i==n){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// F pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1||j==1 || i==mid){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// G Pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1||j==1 ||i==n||j==n&&i>=mid){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// H pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(j==1 || i==mid || j==n){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// I Pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1||i==n || j==mid){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// J Pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1||j==mid||i==n&&j<=mid){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// K pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(j==1||i+j==6&&j>=mid||i==j&&j>=mid){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// L Pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(j==1||i==n){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// M Pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(j==1||i==j&&j<=mid||i+j==6&&j>=mid||j==n){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }

// N Pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(j==1||i==j || j==n){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }

// O Pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1||j==1 || i==n || j==n){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// P Pattern
// let n=5
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(j==1||i==1 || i==mid || j==n&&i<=mid){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// let n=6;
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1&&j<=n-1 || j==1&&i<=n-1 || j==n-1&&i<=n-1 || i==n-1&&j<=n-1 || i==j&&j>=mid){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }

// R Pattern
// let n=5;
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(j==1||i==1||j==n&&i<=mid ||i==mid ||i==j&&j>=mid){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }

// S pattern
// let n=5;
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1||j==1&&i<=mid||i==mid||j==n&&i>=mid ||i==n){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }

// T Pattern
// let n=5;
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==1||j==mid){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }

// U Pattern
// let n=5;
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(j==1||i==n||j==n){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }

// V Pattern
// let n=5;
// let c=9
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=c;j++){
//         if(i==j||i+j==c+1){
//             process.stdout.write("*")
//         }
//         else{
//             process.stdout.write(" ")
//         }
//     }
//     console.log();
// }

// W pattern
// let n=5;
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(j==1||j==n||i+j==n+1&&j<=mid||i==j&&j>=mid){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }


// X Pattern
// let n=5;
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==j||i+j==n+1){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }

// Y pattern
// let n=5;
// let mid=Math.ceil(n/2)
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=n;j++){
//         if(i==j&&j<=mid||i+j==n+1&&j>=mid||j==mid&&i>=mid){
//             process.stdout.write("* ")
//         }
//         else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();
// }

// Z Pattern
let n=5;
let mid=Math.ceil(n/2)
for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        if(i==1||i+j==n+1||i==n){
            process.stdout.write("* ")
        }
        else{
            process.stdout.write("  ")
        }
    }
    console.log();
}