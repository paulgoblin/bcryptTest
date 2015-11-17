'use strict'

function init(){
  $('.bio').dblclick(editBio)
}

function editBio(e){
  let isEditable= $('.bio').is('.editable');
  $('.bio').prop('contenteditable',!isEditable).toggleClass('editable');
}

$(document).ready(init)