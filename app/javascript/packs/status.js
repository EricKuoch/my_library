document.addEventListener("turbolinks:load", function() {
  const selectStatus = document.querySelectorAll('[data-submit=true]')
  if (selectStatus) {
    selectStatus.forEach(select => {
      select.addEventListener('change', () => {
        select.form.submit()
      })
    })
  }
});