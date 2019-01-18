
const listNum = document.getElementsByTagName('li');

let page = 1;

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
  const divpage = document.querySelector('.page'); // assigns the page to a variable
  paginationDiv.className = 'pagination'; // assigns the pagination class
  const ul = document.createElement('ul'); // assigns and creates the ul tah
  divpage.appendChild(paginationDiv); // page appends with the paginationDiv
  paginationDiv.appendChild(ul); // paginationDiv appends the ul
  let pages = 0;

  //for loop to create the buttons
  for (i=1;i<=pageNum;i +=1){
  pages += 1;
    const li = document.createElement('li');
     ul.appendChild(li);

    const a = document.createElement('a');
    a.textContent = pages;
    li.appendChild(a);

     a.href = '#';

     const startPage = document.querySelector('a').className = 'active';

  a.addEventListener('click', (e) => {
    selectedLink = e.target.textContent;
    let link = document.querySelector('.active').className = '';
    passList = document.querySelectorAll('.student-details');
    page = selectedLink;
    showPage(passList, page);
    console.log(passList, page);

    e.target.className = 'active';

  });
}
}

showPage(listNum,page);
appendPageLinks(listNum.length);
