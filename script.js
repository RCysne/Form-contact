function enviar() {
  event.preventDefault()

  document.querySelectorAll('.input-place').forEach(inputPlace => {
    if (inputPlace.value === '') {
      inputPlace.classList.add('is-invalid')
      inputPlace.addEventListener('keypress', () => {
        inputPlace.classList.remove('is-invalid')
        inputPlace.classList.add('is-valid')
      })
    }
  })
}
