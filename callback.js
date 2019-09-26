// let obj={
// 	a:2,b:3
// }

// function main(m,n){
// 	return this.a+m+n;
// }
// console.log(main.call(obj,1,3));

// function main(b,c,d,e,f){
// 	return this.a+b+c+e+f;

// }
// console.log(main.apply(obj,[1,3,4,5,6]))

// function main(m,n){
// 	return this.a+m+n;
// }
// let bo=main.bind(obj);
// console.log(bo(1,3))

// const main = (m,n) =>{
// 	return m+n;}
// console.log(main(1,2))


console.log((a,b) => {return a+b})(1,2)



