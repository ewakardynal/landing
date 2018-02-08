var slideIndex = 0;


function initSlider() {
   var sliderElements = document.getElementsByClassName("slider");
   if (slideIndex >= sliderElements.length) {
      console.warn("Attempt to set the slider out of range");        
      return;    
   }
   var circlesSvg = document.getElementById("circles");
   var content = "";

   var i;    
   for (i = 0; i < sliderElements.length; i++) {
      sliderElements[i].style.display = "none";


      var cx = 6 + 20*i;
      content = content + '<circle cx=' + cx + ' cy=6 r=6 fill="grey" />';
      circlesSvg.innerHTML = circlesSvg.innerHTML + '<circle cx=' + cx + ' cy=6 r=6 fill="#676767" />';

   }

   circlesSvg.innerHTML = content;
   for (i = 0; i < circlesSvg.children.length; i++) {
      circlesSvg.children[i].addEventListener("click", function(event) {            
         var targetIndex = getMyIndex(event.target);            
         console.log("click", targetIndex);
         slideIndex = slide("slider", "circles", slideIndex, targetIndex);
      });
   }

   sliderElements[slideIndex].style.display = "block";
   circlesSvg.children[slideIndex].setAttribute("fill", "black");
}

function getMyIndex(element) {
   var i;    
   for(i = 0; i < element.parentElement.children.length; i++) {
      if(element.parentElement.children[i] == element)
         return i;
   }
   return undefined;
}

function slidePrev() {  
   slideIndex = slide("slider", "circles", slideIndex, --slideIndex);
}

function slideNext() {   
   slideIndex = slide("slider", "circles", slideIndex, ++slideIndex);
}

function slide(sliderClassName, sliderCircles, currentIndex, targetIndex) {
   var sliderElements = document.getElementsByClassName(sliderClassName);
   if (targetIndex >= sliderElements.length) {
      targetIndex = 0;
   } else if (targetIndex < 0) {
      targetIndex = sliderElements.length - 1;
   }

   setElementsVisibility(sliderElements, currentIndex, targetIndex);

   var circles = document.getElementById(sliderCircles).children;
   setCirclesColor(circles, currentIndex, targetIndex);

   return targetIndex;
}

function setElementsVisibility(elements, currentIndex, targetIndex) {
   elements[currentIndex].style.display = "none";
   elements[targetIndex].style.display = "block";
}

function setCirclesColor(elements, currentIndex, targetIndex) {
   elements[targetIndex].setAttribute("fill", "black");
   elements[currentIndex].setAttribute("fill", "grey");
}

window.addEventListener("load", function() {
   initSlider();
   var prevButton = document.getElementById("prev");
   prevButton.addEventListener("click", slidePrev);

   var nextButton = document.getElementById("next");
   nextButton.addEventListener("click", slideNext);
}
                       );
