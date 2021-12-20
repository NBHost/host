(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
// *** Reemplazar destino a "confirmation.html" una vez este activo el Landing Page de promociones
          window.open("confirmation_default.html");
        }

        form.classList.add('was-validated')
      }, false)
    })
})();

    

