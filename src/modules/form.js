function form(){
    
    // Forms

    const forms = document.querySelectorAll('form')

    forms.forEach(form => {
        bindPostData(form)
    })

    const message = {
        success: "Thank's for submit your information",
        wrong: "Sorry, something went wrong",
    }
    
   async function postData(url, data){
        const res = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json',},
                body: data
            })

        return await res.json()
    }

    function bindPostData(form){
        form.addEventListener('submit', (evt) => {
            evt.preventDefault()
            
            const formData = new FormData(form);
            const json = JSON.stringify(Object.fromEntries(formData.entries()))

            postData('http://localhost:3000/request', json)
            .then((data) => {
                showThanksModal(message.success)
            }).catch(()=>{
                showThanksModal(message.wrong)
            }).finally(()=> {
                form.reset()
            })

        })
    }

    function showThanksModal(messages){
        const openModal = document.querySelector(".modal__dialog");
        openModal.classList.add("hide")
        
        resultModal()

        function resultModal(){
            const messageModal = document.createElement('div')
            messageModal.classList.add("modal__dialog")
            messageModal.innerHTML = `
            <div class="modal__content">
                <div data-close class="modal__close">&times;</div>
                <div class="modal__title">
                    ${messages}
                </div>
            </div>
            `
            document.querySelector('.modal').append(messageModal)
            setTimeout(()=> {
                messageModal.remove()
                openModal.classList.add("show")
                openModal.classList.remove("hide")
                closeModal()
            }, 3000)
        }
    }
}

module.exports = form