
const listNum = document.getElementsByTagName('li');
const pageNum =  Math.ceil(listNum.length/10);




//const appendPageLinks = (list) => {
  const paginationDiv = document.createElement('div'); //assigns and creates the div element
  let page = document.querySelector('.page'); // assigns the page to a variable
  paginationDiv.className = 'pagination'; // assigns the pagination class
  const ul = document.createElement('ul'); // assigns and creates the ul tah
  page.appendChild(paginationDiv); // page appends with the paginationDiv
  paginationDiv.appendChild(ul); // paginationDiv appends the ul

  //for loop to create the buttons
  for(let i = 1; i < pageNum+1; i++) // added a 1 to make the link numbers correct;
  {
    const li = document.createElement('li');
    const a = document.createElement('a');
     a.href = '#';
     a.textContent = i;
     li.appendChild(a);
     ul.appendChild(li);
  }

//}

//const showPage = (list, page) => {

//}
//student-list
