/* eslint prefer-arrow-callback: 0 */
  const socket = io();

  socket.on('connect', function() {
    console.log('Connected to server');

    socket.emit('createMessage', {
      from: 'joey',
      text: 'Hi Steve, I\'m back...'
    });
  });

  socket.on('disconnect', function() {
    console.log('Disconnected from server');
  });

  socket.on('newMessage', function(message) {
    console.log('New message ', message);
  });
