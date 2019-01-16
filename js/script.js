
const listNum = document.getElementsByTagName('li');
const page = 1;

const showPage = (list, page) => {
    const listUp = (page * 10);
    const listDown = listUp - 10;
    list = list.length;

    for (let i = 0; i < list; i++)
    {
      document.getElementsByTagName("li")[i].style.display = 'none';
        for (let i = listDown; i < listUp; i++)
        {
          document.getElementsByTagName("li")[i].style.display = "";
        }
    }

}


const appendPageLinks = (list) => {
  const pageNum =  Math.ceil(listNum.length/10);
  const paginationDiv = document.createElement('div'); //assigns and creates the div element
  const page = document.querySelector('.page'); // assigns the page to a variable
  paginationDiv.className = 'pagination'; // assigns the pagination class
  const ul = document.createElement('ul'); // assigns and creates the ul tah
  page.appendChild(paginationDiv); // page appends with the paginationDiv
  paginationDiv.appendChild(ul); // paginationDiv appends the ul

  //for loop to create the buttons
  for(let i = 1; i < list+1; i++) // added a 1 to make the link numbers correct;
  {
    const li = document.createElement('li');
    const a = document.createElement('a');
     a.href = '#';
     a.textContent = i;
     li.appendChild(a);
     ul.appendChild(li);
  }
  a.addEventListner('click', (e) => {
    selectedLink = e.target.textContent;
    let links = document.querySelector('active').className = '';
    page = selectedLink;
    showPage(passlist, page);
    console.log(passlist, page);

    e.target.className = 'active';

  })
}

showPage(listNum,page);
appendPageLinks(pageNum);
