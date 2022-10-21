function solve() {

    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const birth = document.getElementById("birth");
    const position = document.getElementById("position");
    const email = document.getElementById("email");
    const salary = document.getElementById("salary");
    const tdBody = document.getElementById("tbody");
    const idSum = document.getElementById("sum");
    let totalBudget = 0;


    document.getElementById("add-worker").addEventListener("click", (e) => {
        e.preventDefault();
        const firstNameValue = firstName.value;
        const lastNameValue = lastName.value;
        const birthValue = birth.value;
        const positionValue = position.value;
        const emailValue = email.value
        const salaryValue = Number(salary.value);

        if (!firstNameValue || !lastNameValue || !birthValue || !positionValue || !emailValue || !salary.value) {
            return
        }

        const tr = createTr(firstNameValue, lastNameValue, emailValue, birthValue, positionValue, salaryValue);
        tdBody.appendChild(tr);

        function createTr(e) {

            const tr = document.createElement('tr');

            const fNameTd = document.createElement('td');
            fNameTd.textContent = firstNameValue;
            tr.appendChild(fNameTd);

            const lNameTd = document.createElement('td');
            lNameTd.textContent = lastNameValue;
            tr.appendChild(lNameTd);

            const emailTd = document.createElement('td');
            emailTd.textContent = emailValue;
            tr.appendChild(emailTd);

            const birthTd = document.createElement('td');
            birthTd.textContent = birthValue;
            tr.appendChild(birthTd);

            const posTd = document.createElement('td');
            posTd.textContent = positionValue;
            tr.appendChild(posTd);

            const salaryTd = document.createElement('td');
            salaryTd.textContent = salaryValue;

            tr.appendChild(salaryTd);

            const btnTd = document.createElement('td');

            const buttonFired = document.createElement('button');
            buttonFired.classList.add('fired');
            buttonFired.textContent = 'Fired';
            buttonFired.addEventListener("click", buttonFiredEvent);
            btnTd.appendChild(buttonFired);

            function buttonFiredEvent(e) {
                totalBudget -= Number(salaryValue);
                idSum.textContent = totalBudget.toFixed(2);
                e.target.parentElement.parentElement.remove()
            }


            const buttonEdit = document.createElement('button');
            buttonEdit.classList.add('edit');
            buttonEdit.textContent = 'Edit';
            buttonEdit.addEventListener("click", buttonEditEvent);
            btnTd.appendChild(buttonEdit);

            function buttonEditEvent(e) {
                firstName.value = firstNameValue;
                lastName.value = lastNameValue;
                email.value = emailValue;
                birth.value = birthValue;
                position.value = positionValue;
                salary.value = salaryValue;
                totalBudget -= Number(salaryValue);
                idSum.textContent = totalBudget.toFixed(2);
                e.target.parentElement.parentElement.remove()


            }

            tr.appendChild(btnTd);

            return tr;

        }

        firstName.value = "";
        lastName.value = "";
        birth.value = "";
        position.value = "";
        email.value = "";
        salary.value = "";
        tdBody.value = "";

        totalBudget += Number(salaryValue);
        idSum.textContent = totalBudget.toFixed(2);

    })

}
solve()