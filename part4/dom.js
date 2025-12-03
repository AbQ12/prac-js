//document object model
//example 1
document.getElementById('changeTextButton').
addEventListener('click',function () {
      let paragraph = document.getElementById('myParagraph');
        paragraph.textContent = 'the para has benn changed';

})

//example 2

document.getElementById('highlightFirstCity').
addEventListener('click',function () {
    let citieslist = document.getElementById('citiesList');
    citieslist.firstElementChild.classList.add('highlight');
    
})

//example 3

document.getElementById('changeOrder').
addEventListener('click',function () {

   let ct = document.getElementById('coffeeType');
   ct.textContent = 'espresso';
   ct.style.backgroundColor = 'lightblue';
})

// example 4

document.getElementById('addNewItem').
addEventListener('click',function () {
     let newElement = document.createElement('li');
     newElement.textContent = 'eegs';
    document.getElementById('shoppingList').appendChild(newElement);


})

// example 5

document.getElementById('removeLastTask').
addEventListener('click',function () {
  
    let tasklst = document.getElementById('taskList');
    tasklst.lastElementChild.remove();

})

// example 6

document.getElementById('clickMeButton').
addEventListener('click',function(){
    alert('button clicked!');

})

// example 7
document.getElementById('teaList').
addEventListener('click',function(event){
     if(event.target && event.target.matches('.teaItem')){
        alert('you selected '+ event.target.textContent);
    }
})

// exapmle 8
document.getElementById('feedbackForm').
addEventListener('submit',function(event){
   alert("submitted")
})