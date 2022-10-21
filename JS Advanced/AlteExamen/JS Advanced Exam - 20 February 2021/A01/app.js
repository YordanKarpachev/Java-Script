function solve() {

   const btnCreate = document.querySelectorAll('form .btn')[0];
   btnCreate.addEventListener("click", btnCreateClick);
   const author = document.getElementById('creator')
   const title = document.getElementById("title")
   const category = document.getElementById("category")
   const content = document.getElementById("content")
   const olArchive = document.querySelector(".archive-section ol");
   
   function btnCreateClick(e) {
      e.preventDefault();
      const authorValue = author.value;
      const titleValue = title.value;
      const categoryValue = category.value;
      const contentValue = content.value;
      const section = document.querySelector('main section');
      
      let article = createArticle(authorValue,titleValue, categoryValue,  contentValue)
 
      section.appendChild(article);

      author.value = "";
      title.value = "";
      category.value = "";
      content.value = "";
      olArchive.value = "";
      function createArticle(authorValue, titleValue, categoryValue, contentValue) {
         const article = document.createElement('article');

         const h1 = document.createElement('h1');
         h1.textContent = titleValue;
         article.appendChild(h1);

         const pCategory = document.createElement('p');
         pCategory.textContent = "Category: "
         const strong = document.createElement('strong');
         strong.textContent = categoryValue;
         pCategory.appendChild(strong);
         article.appendChild(pCategory);
      

         const pCreator = document.createElement('p');
         pCreator.textContent =  "Creator: "
         const strongCreator = document.createElement('strong');
         strongCreator.textContent = authorValue;
         pCreator.appendChild(strongCreator);
         article.appendChild(pCreator);

         const pText = document.createElement('p');
         pText.textContent = contentValue;
         article.appendChild(pText);
   

         const divBtn = document.createElement('div');
         divBtn.classList.add("buttons")
       
         const deleteBtn = document.createElement('button');
         deleteBtn.textContent = "Delete"
         deleteBtn.classList.add("btn")
         deleteBtn.classList.add("delete");
         deleteBtn.addEventListener("click", deleteBtnEvent);
         divBtn.appendChild(deleteBtn);

         const ArchiveBtn = document.createElement('button');
         ArchiveBtn.textContent = "Archive"
         ArchiveBtn.classList.add("btn")
         ArchiveBtn.classList.add("archive");
         ArchiveBtn.addEventListener("click", ArchiveBtnEvent);
         divBtn.appendChild(ArchiveBtn);

         article.appendChild(divBtn);
         return article;




      }

      function deleteBtnEvent(e) {

        e.target.parentElement.parentElement.remove();
      //  article.remove();


      }


      function ArchiveBtnEvent(e) {
        let li = document.createElement('li');
        li.textContent = titleValue;
        olArchive.appendChild(li);
        Array.from(olArchive.querySelectorAll('li'))
        .sort((a,b) => a.textContent.localeCompare(b.textContent))
        .forEach(li => olArchive.appendChild(li))
        e.target.parentElement.parentElement.remove()
      }
   }
}
