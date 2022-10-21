window.addEventListener('load', solve);

function solve() {
    
    const genre = document.getElementById("genre");
    const name = document.getElementById("name");
    const author = document.getElementById("author");
    const date = document.getElementById("date");
    const allHits = document.getElementById("all-hits").querySelector('div');
    const totalLike = document.querySelector('#total-likes p');
    const savedContainer = document.getElementById("saved-hits").querySelector('div');
    
    
        document.getElementById("add-btn").addEventListener("click", (e) => {
            e.preventDefault();
            const genreInput = genre.value;
            const nameInput = name.value;
            const dateInput = date.value;
            const authorInput = author.value;
            console.log("aaaaaa");
            if (!genreInput || !nameInput || !dateInput || !authorInput) {
                return;
            }
            
            const div = createDiv(genreInput, nameInput,authorInput,dateInput);
            allHits.appendChild(div);
            function createDiv(genre, name, author, date){
                
                const div = document.createElement('div');
                div.classList.add("hits-info");
                
                const img = document.createElement('img');
                img.src = "./static/img/img.png"
                div.appendChild(img);

                const genreH2 = document.createElement('h2');
                genreH2.textContent = `Genre: ${genreInput}`
                div.appendChild(genreH2);

                const nameH2 = document.createElement('h2');
                nameH2.textContent = `Name: ${nameInput}`
                div.appendChild(nameH2);

                const h2Author = document.createElement(`h2`);
                h2Author.textContent = `Author: ${authorInput}`;
                div.appendChild(h2Author);

                const h3Date = document.createElement('h3');
                h3Date.textContent = `Date: ${dateInput}`;
                div.appendChild(h3Date);

                const saveSongBtn = document.createElement('button');
                saveSongBtn.classList.add("save-btn");
                saveSongBtn.textContent = "Save song"
                saveSongBtn.addEventListener("click", saveSongBtnClick)
                div.appendChild(saveSongBtn);

                function saveSongBtnClick(e){
    
                    div.removeChild(saveSongBtn);
                    div.removeChild(likeSongBtn);
                    savedContainer.appendChild(div);
                    
                }

                const likeSongBtn = document.createElement('button');
                likeSongBtn.classList.add("like-btn");
                likeSongBtn.textContent = "Like song"
                likeSongBtn.addEventListener("click", likeBtnClick);
                div.appendChild(likeSongBtn);

                function likeBtnClick(e){
                    let count = Number(totalLike.textContent.split(": ")[1])
                    count++;
                    totalLike.textContent = "Total Likes: "+count;
                    e.target.disabled = true;

                }

                const deleteBtn = document.createElement('button');
                deleteBtn.classList.add("delete-btn");
                deleteBtn.textContent = "Delete";
                deleteBtn.addEventListener("click", deleteBtnClick);
                div.appendChild(deleteBtn);

                function deleteBtnClick(e){
                    debugger
                    e.target.parentElement.remove();

                }

                return div;

            }
            genre.value = "";
            name.value = "";
            author.value = "";
            date.value = "";

            
    
        })



}