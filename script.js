(function () {
  'use strict';

  var forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();

function formvalid() {
  var vaildpass = document.getElementById('PasswordForm').value;

  if ((vaildpass && vaildpass.length <= 8) || vaildpass.length >= 20) {
    document.getElementById('vaild-pass').innerHTML = 'Minimum 8 characters';
    return false;
  } else {
    document.getElementById('vaild-pass').innerHTML = '';
  }
}
