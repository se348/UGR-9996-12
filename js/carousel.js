const imagesNumber=3;
let imageIndex=1;
let translateX=0;
let mediaQuery=window.matchMedia('(min-width:750px)');
function goBack(){
    if(imageIndex!==1){
        imageIndex--;
        translateX +=100;
    }
    else{
        imageIndex=imagesNumber;
        translateX -=200;
    }
document.querySelector('#carooo').style.transform=`translateX(${translateX}%)`;
}
function goForward(){
    if(imageIndex!==imagesNumber){
        imageIndex++;
        translateX -=100;
    }
    else{
        imageIndex=1
        translateX += 200;
    }

document.querySelector('#carooo').style.transform=`translateX(${translateX}%)`;

}