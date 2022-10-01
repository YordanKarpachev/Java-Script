function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);


   function onClick() {
      let text = document.getElementById("searchField");
      let data = Array.from(document.querySelectorAll('tbody tr'));


      for (let e of data) {
         e.classList.remove('select');

         if (e.innerHTML.includes(text.value) && text.value !== '') {
            e.className = 'select'
         }
      }

      text.value = '';
   }
}