
$('#dropzone input').on('change', function(e) {
  var file = this.files[0];
  var reader = new FileReader();

  reader.onload = function (e) {
      $img = $('.preview img').attr('src', e.target.result);
  }
  reader.readAsDataURL(file);
});
