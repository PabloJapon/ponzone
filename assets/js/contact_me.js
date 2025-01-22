$(function() {

  // Disable form submission with AJAX to Formspree
  $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent the default submit behavior (let Netlify handle it)
      
      // You can use this section for form validation or UI changes (e.g., show success or error messages).
      $('#success').html("<div class='alert alert-success'>");
      $('#success > .alert-success').html("<strong>Your message has been sent. </strong>");
      $('#success > .alert-success').append('</div>');
      
      // Reset the form fields
      $('#contactForm').trigger("reset");
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  // Clear success message when the user starts typing again
  $('#name').focus(function() {
    $('#success').html('');
  });
});
