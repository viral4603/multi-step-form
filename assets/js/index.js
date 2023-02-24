const getInputFields = document.querySelectorAll('input');
const getErrroElements = document.getElementsByClassName('error')

//if user focus out of field
getInputFields.forEach(element => {
    element.addEventListener('focusout', () => {
        validateField(element)
    })
    element.addEventListener('keyup', () => {
        let timer;
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            validateField(element)
        }, 200);
    })
})
let url = window.location.href
console.log(new URL(url).host)
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
                let url = window.location.href
                window.location.replace(`step-2.html`)
            }
            getErrroElements[i].classList.add('d-none')
        }
    }
}


function validateField(element) {
    if (!element.value) {
        element.previousElementSibling.getElementsByClassName('error')[0].classList.remove('d-none')
        element.style.border = '1px solid red'
    }
    else {
        element.previousElementSibling.getElementsByClassName('error')[0].classList.add('d-none')
        element.style.border = '1px solid #d6d9e6'
    }
}
