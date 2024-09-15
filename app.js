// main container select
var container = document.getElementById('maincontainer');
var cardContain = document.createElement('div');
cardContain.className = 'card_contain'
container.appendChild(cardContain)

// id card top text IDENTIFICATION CARD
var topText = document.createElement('div');
topText.className = 't-tex'
cardContain.appendChild(topText)
var idCardText = document.createElement('h1');
idCardText.className = 'iCard'
idCardText.innerText = 'IDENTIFICATION CARD'
topText.appendChild(idCardText)

// contain wrap main div manage all text and pictures
var containWrap = document.createElement('div');
containWrap.className = 'contain-wrap'
cardContain.appendChild(containWrap)
// add image in contain wrap
var pfImage = document.createElement('div');
pfImage.className = 'pf-image display';
containWrap.appendChild(pfImage)
var getPfImage = document.createElement('img');
getPfImage.src = './Unknown_person.jpg'
getPfImage.style.width = '200px';
pfImage.appendChild(getPfImage)

// Create a user Data. Name, fname, dob, address
var userData = document.createElement('div');
userData.className = 'user-data'
containWrap.appendChild(userData)

// h1 tag and span tag adding user Name
var heading3name = document.createElement('h3');
heading3name.className = 'heading-3'
heading3name.id = 'userName'
heading3name.innerText = 'Name:'
userData.appendChild(heading3name)
var span1 = document.createElement('span'); //user name
span1.className = 'sameSpan1 color-re'
span1.id = 'user-Name';
span1.innerText = 'This is a name'
heading3name.appendChild(span1);

// father Name
var heading3fname = document.createElement('h3');
heading3fname.className = 'heading-3'
heading3fname.id = 'fName'
heading3fname.innerText = 'Father Name:'
userData.appendChild(heading3fname)
var span2 = document.createElement('span');
span2.className = 'sameSpan2 color-re'
span2.id = 'user-fName';
span2.innerText = 'Random f/name'
heading3fname.appendChild(span2);

// Date of birth
var heading3Dob = document.createElement('h3');
heading3Dob.className = 'heading-3'
heading3Dob.id = 'DOB'
heading3Dob.innerText = 'Date of Birth:'
userData.appendChild(heading3Dob)
var span3 = document.createElement('span');
span3.className = 'sameSpan3 color-re'
span3.id = 'user-DOB';
span3.innerText = '23-02-2022'
heading3Dob.appendChild(span3);

// user Roll Number
var heading3RollN = document.createElement('h3');
heading3RollN.className = 'heading-3'
heading3RollN.id = 'Roll'
heading3RollN.innerText = 'Roll Number:'
userData.appendChild(heading3RollN)
var span4 = document.createElement('span');
span4.className = 'sameSpan4 color-re'
span4.id = 'user-rName';
span4.innerText = '9801'
heading3RollN.appendChild(span4);

// user Address
var heading3A = document.createElement('h3');
heading3A.className = 'heading-3'
heading3A.id = 'Address'
heading3A.innerText = 'Address:'
userData.appendChild(heading3A)
var span5 = document.createElement('span');
span5.className = 'sameSpan5 color-re'
span5.id = 'user-Address';
span5.innerText = 'Pakistan tharparkar city mithi'
heading3A.appendChild(span5);

// qr code imagge
var qrImage = document.createElement('div')
qrImage.className = 'qr-img'
qrImage.style = 'position: absolute; margin-left: 29.5pc;'
var qrImg = document.createElement('img');
qrImg.src = 'qr.png'
qrImg.alt = 'png'
qrImage.appendChild(qrImg)
containWrap.appendChild(qrImage)
// console.log(qrImage)