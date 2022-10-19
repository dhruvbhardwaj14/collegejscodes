//CHallenge-find all links having the given string in them
let li=document.links;
Array.from(li).forEach(function(element){
    b=element.href;
    // console.log(b)
    check=b.includes("linkedin")
    // console.log(check)
    if (check) {
        console.log(b)
    }
    // bo=b.includes('linkedin');   
//     if(bo){
//     console.log(b); }
})
