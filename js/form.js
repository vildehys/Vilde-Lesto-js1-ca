const form = document.querySelector("#signUp")

form.onsubmit = function() {

    event.preventDefault();

    console.log(event);

    const name = document.querySelector("#name")
    console.log(name.value)

    const subject = document.querySelector("#subject")
    console.log(subject.value)

    const email = document.querySelector("#email")
    console.log(email.value)

    const adress = document.querySelector("#adress")
    console.log(adress.value)
}


