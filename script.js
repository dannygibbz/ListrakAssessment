const openModalButtons = document.querySelectorAll("[data-modal-target]")
const closeModalButtons = document.querySelectorAll("[data-close-button]")
const signupContainer = document.getElementById("signupContainer")
const overlay = document.getElementById("overlay")
const email = document.getElementById("email")
const inputContainer = document.getElementById("inputContainer")
const signup = document.getElementById("signupButton")
const input = document.getElementById("input")
const message = document.getElementById("message")
const body = document.getElementsByClassName("body")
const modal = document.getElementById("modal")
const secondModal = document.getElementsByClassName("secondModal-header")
const shopButton = document.getElementById("shopButton")

shopButton.addEventListener("click", function(evt) {
  evt.preventDefault()
  console.log("we made it!")
})

openModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active")
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal")
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal === null) return
  modal.classList.add("active")
  overlay.classList.add("active")
}

function closeModal(modal) {
  if (modal === null) return
  modal.classList.remove("active")
  overlay.classList.remove("active")
}

email.addEventListener("click", () => {
  inputContainer.style.display = "block"
  email.style.display = "none"
})

signupButton.addEventListener("click", () => {
  if (input.value === "") {
    message.innerText = "Email field cannot be blank!"
    message.style.display = "block"
  }
  if (input.value !== "" && input.value.length < 10) {
    message.innerText = `Emails must contain 10 characters minimum.`
    message.style.display = "block"
  }
  if (input.value !== "" && input.value.length >= 10) {
    modal.innerHTML = `
    <div class="secondModal-header">
      <button data-close-button class="close-button">&times;</button>
    </div>

    <div>
      <div id="contentContainer">
        <div id="friendsMessage">Just Like Old Friends</div>
        <div id="dots">
          <div class="dot"></div>
          <div class="line">
            Hey there, Listrak Dev Team! This "line" design provides a nice
            opportunity to cloak a small, personal message. Firstly, thanks so
            much for reviewing my assessment. Your time and effort are much
            appreciated! Secondly, if you'd like to discuss the design choices
            I made and/or schedule another interview or pair coding exercise,
            please send me an email at dgibbonswebdev@gmail.com. Have a great
            day!
          </div>
          <div class="dot"></div>
          <div class="bigDot"></div>
          <div class="dot"></div>
        </div>
        <div id="secondaryMessage">
          We'll keep you updated on any new deals, news, or gossip that comes
          our way!
        </div>
        <div id="shopButton" >
          Go Shop!
        </div>
      </div>
    </div>
  </div>
  
`
  }
})
