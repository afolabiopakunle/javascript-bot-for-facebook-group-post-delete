//select all delete buttons on screen
let deleteButtons = document.querySelectorAll('.sx_f437f9');

//click all the selected delete buttons
deleteButtons.forEach(btn => btn.click())

//this line selects all delete modals that appears on screen
let del = document.querySelectorAll('.layerConfirm');

//this line automatically clicks delete on all the modal pop-ups on screen
del.forEach(btn => btn.click())

//refresh the page and run the lines 

//the codes can be combined in two lines
let deleteButtons = document.querySelectorAll('.sx_f437f9'); deleteButtons.forEach(btn => btn.click())

let del = document.querySelectorAll('.layerConfirm'); del.forEach(btn => btn.click())