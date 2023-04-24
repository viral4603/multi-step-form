//all input field present on page
const getInputFields = document.querySelectorAll('input');
//if there is an error element
const getErrroElements = document.getElementsByClassName('error')
//select all plan card element
const cardElemnent = document.querySelectorAll('.plan-card');

//if user focus out of field
getInputFields.forEach(element => {
    element.addEventListener('focusout', () => {
        validateField(element, 'focusout')
    })
    element.addEventListener('keyup', () => {
        let timer;
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            validateField(element, 'keyup')
        }, 200);
    })
})

//validte form on validation
function onSubmitForm(e) {
    e.preventDefault()
    let count = 0;
    for (let i = 0; i < getInputFields.length; i++) {

        let elemet = document.getElementById(`${getInputFields[i].id}`)
        if (!elemet.value) {
            getErrroElements[i].classList.remove('d-none')
            elemet.style.border = '1px solid red';
        }
        else {
            count++
            if (count === 3) {
                window.location.replace(`./pages/plans.html`)
            }
            getErrroElements[i].classList.add('d-none')
        }
    }
}

//showing error on input field 
function validateField(element, event) {
    if (!element.value) {
        element.previousElementSibling.getElementsByClassName('error')[0].classList.remove('d-none')
        element.style.border = '1px solid red'
    }
    else {
        element.previousElementSibling.getElementsByClassName('error')[0].classList.add('d-none')
        if (event === 'keyup') {
            element.style.border= '1px solid #473dff'
        } else {
            element.style.border = '1px solid #d6d9e6'
        }
    }
}

//add active class on card element
for (let i = 0; i < cardElemnent.length; i++) {
    cardElemnent[i].addEventListener('click', addActiveClass)
}

//add active class on selected card
function addActiveClass(event) {
    //remove active class from another card
    const card = document.querySelector('.plan-card.active')
    if (card) {
        card.classList.remove('active')
    }
    if (this.classList.contains('active')) {
        console.log(this.classList)
    }
    this.classList.add('active')
}
