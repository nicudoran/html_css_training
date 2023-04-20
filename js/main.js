// window.addEventListener('resize',function() {
//   if (window.matchMedia("(min-width: 768px)").matches) {
//     console.log("Screen width is at least 500px")
//     const resize=document.querySelectorAll(".footer__resize");
//     resize.forEach((item) =>{
//             console.log("textdsfjkldjvb")
//         item.classList.remove("collapsible")
//         item.classList.remove("collapsible--expanded")
   
//       })
//     }
//   })

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
item.addEventListener("click", function () {
  this.classList.toggle("collapsible--expanded");
})
);

