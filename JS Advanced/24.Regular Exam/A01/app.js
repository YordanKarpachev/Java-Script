window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.getElementById("form-btn");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const age = document.getElementById("age");
  const storyTitle = document.getElementById("story-title");
  const genre = document.getElementById("genre");
  const story = document.getElementById("story");
  const previewList = document.getElementById("preview-list");
  const main = document.getElementById("main");

  publishBtn.addEventListener("click", () => {
    const firstNameInput = firstName.value;
    const lastNameInput = lastName.value;
    const ageInput = age.value;
    const storyTitleValue = storyTitle.value;
    const genreValue = genre.value;
    const storyValue = story.value;

    if (!firstNameInput || !lastNameInput || !ageInput || !storyTitleValue || !storyValue || !genreValue) {
      return;
    }

    const li = createLi(firstNameInput, lastNameInput, ageInput, storyTitleValue, genreValue, storyValue);
    previewList.appendChild(li)

    publishBtn.disabled = true;
    function createLi(fName, lName, ageee, tit, genr, stor) {

      const li = document.createElement('li');
      li.classList.add("story-info");

      const article = document.createElement('article');

      const name = document.createElement('h4');
      name.textContent = `Name: ${fName} ${lName}`;
      article.appendChild(name);

      const agee = document.createElement('p');
      agee.textContent = "Age: " + ageee;
      article.appendChild(agee);

      const titlee = document.createElement('p');
      titlee.textContent = "Title: " + tit;
      article.appendChild(titlee);

      const genree = document.createElement('p');
      genree.textContent = "Genre: " + genr;
      article.appendChild(genree);

      const storye = document.createElement('p');
      storye.textContent = stor
      article.appendChild(storye);

      li.appendChild(article);

      const buttonSaveStory = document.createElement('button')
      buttonSaveStory.classList.add("save-btn");
      buttonSaveStory.textContent = "Save Story";
      buttonSaveStory.addEventListener("click", () => {
        const h1 = document.createElement('h1');
        h1.textContent = "Your scary story is saved!";
        const main = document.getElementById("main")
        main.innerHTML = "";
        main.appendChild(h1);

      });
      li.appendChild(buttonSaveStory);



      const buttonEdit = document.createElement('button')
      buttonEdit.classList.add("edit-btn");
      buttonEdit.textContent = "Edit Story";
      buttonEdit.addEventListener("click", (e) => {
        firstName.value = fName;
        lastName.value = lName;
        age.value = ageee;
        story.value = stor;
        storyTitle.value = tit;
        genre.value = genree.textContent.split(": ")[1];
        publishBtn.disabled = false;
        e.target.parentElement.remove()

      });
      li.appendChild(buttonEdit);


      const buttonDelete = document.createElement('button')
      buttonDelete.classList.add("delete-btn");
      buttonDelete.textContent = "Delete Story";
      buttonDelete.addEventListener("click", () => {
          previewList.removeChild(li);
          publishBtn.disabled = false;

      });
      li.appendChild(buttonDelete);


      return li;






    }

    firstName.value = "";
    lastName.value = "";
    age.value = "";
    storyTitle.value = "";
    story.value = "";

  })





}
