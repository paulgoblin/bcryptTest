'use strict'

function init(){
  $('.bio').dblclick(editBio);
  $('.bio').dblclick(saveBio);
  // $(window).unload(saveBio);
}

function editBio(e){
  let isEditable= $('.bio').is('.editable');
  $('.bio').prop('contenteditable',!isEditable).toggleClass('editable');
}

function saveBio(){
  let bio = $('.bio p').text();
  console.log('bio')
  $.ajax({
    async: false,
    url: '/users/bio',
    method: 'POST',
    data: {bio: bio}
  })
  .done(function(data){
    console.log('retrieved data ', data);
  })
  .fail(function(error){
    console.error('error saving ', error);
  });



};

$(document).ready(init)