window.addEventListener("load", solve);

function solve() {
  document.getElementById("publish-btn").addEventListener('click', clickPublishBtn);
  let reviewList = document.getElementById("review-list");
  let input1 = document.getElementById("post-title");
  let input2 = document.getElementById("post-category");
  let input3 = document.getElementById("post-content");
  let clearBtn = document.getElementById('clear-btn');
  let publishedList = document.getElementById("published-list");

  clearBtn.addEventListener('click', () => {
    Array.from(publishedList.children).forEach(a => a.remove());
  })


  function createLi(input1, input2, input3) {
    let li = document.createElement('li');
    li.classList.add('rpost');

    let article = document.createElement('article');

    let h4 = document.createElement("h4");
    h4.textContent = input1.value;


    let p = document.createElement('p');
    p.textContent = `Category: ${input2.value}`;

    let p2 = document.createElement('p');
    p2.textContent = `Content: ${input3.value}`;

    let buttonEdit = document.createElement('button');
    buttonEdit.addEventListener('click', clickEdit);
    buttonEdit.classList.add("action-btn");
    buttonEdit.classList.add("edit");
    buttonEdit.textContent = "Edit";

    let buttonApprove = document.createElement('button');
    buttonApprove.addEventListener('click', clickApprove);
    buttonApprove.classList.add("action-btn");
    buttonApprove.classList.add("approve");
    buttonApprove.textContent = "Approve"

    article.appendChild(h4);
    article.appendChild(p);
    article.appendChild(p2);
    li.appendChild(article);
    li.appendChild(buttonApprove);
    li.appendChild(buttonEdit);
    return li;



  }


  function clickPublishBtn(e) {

    if (!input1.value || !input2.value || !input3.value) {
      return;
    }
    let li = createLi(input1, input2, input3);
    reviewList.appendChild(li);
    input1.value = "";
    input2.value = "";
    input3.value = "";
  }


  function clickApprove(e) {
    let currentPos = e.target.parentElement;
    publishedList.appendChild(currentPos);
    Array.from(currentPos.querySelectorAll('button')).forEach(a => a.remove());


  }

  function clickEdit(e) {

    let currentPos = e.target.parentElement;
    let articleContent = currentPos.getElementsByTagName('article')[0].children;
    let titleValue = articleContent[0].textContent;
    let category = articleContent[1].textContent.split(": ")[1];
    let contentValue = articleContent[2].textContent.split(": ")[1];

    input1.value = titleValue;
    input2.value = category;
    input3.value = contentValue;
    currentPos.remove();

  }
}
