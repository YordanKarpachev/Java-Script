function search() {
   let towns = Array.from(document.querySelectorAll('ul li'));

   let search = document.getElementById('searchText').value;

   let result = 0;

   for (let town of towns) {

      if (town.textContent.includes(search)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         result++;

      } else {
         town.style.textDecoration = 'none';
         town.style.fontWeight = 'normal'
      }

   }

   let resultText = document.getElementById("result");
   resultText.textContent = `${result} matches found`;
}
