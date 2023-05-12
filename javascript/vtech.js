// window.addEventListener('load', function () {
//     const valueChange = document.querySelectorAll('.value-change');
//     for( let i = 0; i < valueChange.length; i ++){
//         const abc = valueChange[i];

//          const elementGet = valueChange[i].innerHTML;
//         if (elementGet.includes('-')){
//             document.querySelectorAll('.value-change')[i].style.color= 'rgb(255 55 55)';
//         }
//         else if(elementGet.includes('+')){
//             document.querySelectorAll('.value-change')[i].style.color = 'rgb(55 255 151)';
//         }
//     }
//     const getProductStatus = document.querySelectorAll('.product-status-label');
//     for(let j=0; j<getProductStatus.length; j ++){
//         var productStatus = getProductStatus[j].innerHTML;
//         if(productStatus.includes('Đang bán')){
//             getProductStatus[j].style.color = 'rgb(80 227 194)'
//         }
//         else if(productStatus.includes('Đã bán')){
//             getProductStatus[j].style.color = 'white';
//         }
//     }
// });

// function heartToggle(e) {
// const radioHeart = this.document.querySelectorAll('.heart-check');
//     for (let index = 0; index < radioHeart.length; index++) {
//         const elementHeart = radioHeart[index];

//         const heartCheck = elementHeart.getAttribute('src');
//         if(heartCheck == "heart.svg"){
//         document.querySelectorAll('.heart-check')[index].setAttribute('src','heart-fill.svg');
//         }
//         else if(heartCheck == "heart-fill.svg"){
//             document.querySelectorAll('.heart-check')[index].setAttribute('src','heart.svg');
//         }
//     }

//   }

// function filterToggle(event){
//      var getFilter = document.getElementById('filter-list1');
//     getFilter.classList.toggle('filter-hidden');
// }

// var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
//     keyboard: false
//   })

//   myModal.show()

//   myModal.hide()
