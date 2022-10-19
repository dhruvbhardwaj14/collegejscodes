//Element selectors-single
//single and multi
//1.Single element selectors
let element=document.getElementById('myfirst')
console.log(element)
// element=element.classList
// console.log(element)
// element=element.className
// console.log(element)
// element=element.childNodes
// element=element.parentNode;
// element.style.color='magenta'
// console.log(element.innerHTML)
// console.log(element.innerText)
// element.innerText="hey hello"
element.innerHTML="<b>hey hello</b>"

//Query selector
// let Query=document.querySelector('#myfirst');//id  name
// let class1=document.querySelector('.child');//class name
// console.log(Query)
// // console.log(class1)
// // class1=document.querySelector('b');//tag name
// // class1=document.querySelector('h1');//tag name
// class1=document.querySelector('div');//tag name
// class1.style.color='green'
// console.log(class1)

//2. Multi Element selector 
// let elems=document.getElementsByClassName('container')
// console.log(elems[0].getElementsByClassName('child')[2])
let elems=document.getElementsByTagName("div")
console.log(elems)
// Array.from(elems).forEach(element=>{
//     console.log(element);
    // element.style.color='cyan'

// })
for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element)
    element.style.color='cyan'
    
}