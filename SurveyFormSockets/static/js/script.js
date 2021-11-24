var socket = io();

$('button').click(function() {
  
  socket.emit('posting_form', {name: $('#name').val(), location: $('#location').val(), language: $('#fav_lang').val(), comment: $('#comment').val()});
  socket.on('updated_message', function(data) {
    console.log(data);
    $('.alert').text(data.msg);
  });
  socket.on('random_number', function(data) {
    console.log(data);
    $('#random_number').text(data.msg);
  });
});