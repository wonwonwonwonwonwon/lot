let total = "";
for(let i=0; i<document.getElementsByClassName("ll-loaded").length; i++){
    let a = document.getElementsByClassName("ll-loaded")[i].src;
    if(a.includes("https://cdni.pornpics.de/460")){
	// console.log(a)
    total = (total + a +"\n")
    }}
console.log(total)
console.log(typeof(total))

// let a = "lkdfja;ls djfoasj d gf h fgj"
// console.log(a.includes("djj"))