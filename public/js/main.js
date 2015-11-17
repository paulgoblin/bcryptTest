'use strict';


function init() {
  $('#register').click(registerUser);
  $('#login').click(loginUser);
}

function hudReg(message){
  let $message = $('#reg p');
  $message.text(message)
  $message.fadeIn();
  setTimeout(function(){$message.fadeOut()},3000)
}

function hudLog(message){
  let $message = $('#log p');
  $message.text(message)
  $message.fadeIn();
  setTimeout(function(){$message.fadeOut()},3000)
}

function registerUser(){
  let uname = $('#username').val();
  let pword = $('#password').val();
  let conf = $('#confirm').val();

  if (pword != conf) {
    hudReg('Passwords do not match.')
    return;
  }
  
  $.ajax({
    url:'/users/register',
    method:'POST',
    data: {username: uname, password:pword}
  }).done( function( data ){
    console.log(data)
    hudReg( `Account for ${data.username} created` );
  }).fail( function( err ){
    hudReg('Error creating account')
  })

}

function loginUser(){
  let uname = $('#loginName').val();
  let pword = $('#loginPword').val();
  
  $.ajax({
    url:'/users/login',
    method:'POST',
    data: {username: uname, password:pword}
  }).done( function( data ){
    console.log(data)
    hudLog( `${data.username} is now logged in` );
  }).fail( function( err ){
    hudLog('Error logging in')
  })

}




$(document).ready(init);
