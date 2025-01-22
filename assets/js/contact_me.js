$(function() {
  $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
    submitSuccess: function($form, event) {
      // Optional success message
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success').html("<strong>Your message has been sent. </strong>");
      $('#success > .alert-success').append('</div>');

      // Do not prevent default; let Netlify handle the submission
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  // Clear success message on focus
  $('#name').focus(function() {
    $('#success').html('');
  });
});
