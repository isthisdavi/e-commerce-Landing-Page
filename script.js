const allbtns = document.querySelectorAll('.btn');
const digit = document.getElementById('digit');
const value = document.getElementById('value');
const itemPrice = document.querySelector('.item-price')
const dollarSign = "$ "
const price = 700;

let counter = 1;

allbtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const currentbtn = e.currentTarget.classList;
    
        if(currentbtn.contains('btn-decrease') && counter > 1){
            counter--;
        }
        else if (currentbtn.contains('btn-increase')){
            counter++;
        }
        // else if(counter === 0 && currentbtn.contains('btn-cart')){
        //     window.alert('quantity not selected');
        // } 
        // the above is redundant when counter starts at 1
        else if (counter >= 1 && currentbtn.contains('btn-cart')){
            window.alert('item added to cart');
        }
        else{
            window.alert('no item to remove')
        }
        digit.textContent = counter;
        let amount =  price * counter;
        itemPrice.textContent = dollarSign + amount;
    })
})
//icons 
const images = [
{img: "12.png"},
{img: "10.png"}, 
{img: "11.png"}
];
// array with images
const iconRight =  document.querySelector('.fa-angle-right');
const iconLeft =  document.querySelector('.fa-angle-left');
const presentImg = document.getElementById('item-img');

let currentImg = 0; 
// counter 

window.addEventListener("DOMContentLoaded", function(){
    replaceImage(currentImg);
})

// to avoid repeating, make function 
function replaceImage (newImage){
    const changeImage = images[currentImg];
    presentImg.src = changeImage.img; 
    // calling the object in the array 
}

// icon to move to next image
iconRight.addEventListener('click', function(){
    currentImg++;
    if(currentImg > images.length - 1){
        currentImg = 0;
    };
    replaceImage(currentImg);
})

// icon to go back to prev image
iconLeft.addEventListener('click', function(){
    currentImg--;
    if(currentImg < 0){
        currentImg = images.length - 1 ;
    };
    replaceImage(currentImg);
})