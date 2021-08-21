const forms = document.querySelectorAll('form')

forms.forEach(form => {
    form.addEventListener('submit', e => {
        const email = form.querySelector('input[type="email"]')
        const ptag = form.querySelector('p')
        const reg = /\S{3,20}@\S{2,15}\.\S{2,5}/
        if(!reg.test(email.value)) {
            e.preventDefault()
            ptag.style.display ='block'
        }
    })
})