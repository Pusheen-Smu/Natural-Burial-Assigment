/* The file load and play audios when needed.
Author(Group): 
        Abhishek Abhishek-(A00480219) (Group Leader)
        Madhur Sharma-(A00477319)
        Mariam Nasir-(A00460192)
        Preksha Joon-(A00469476)
        Ziyang Xia-(A00475502)
*/

// Initialize Audio files

let addressAudio = new Audio('audioPackage/address.mp3');
let burialLocationAudio = new Audio('audioPackage/burial location.mp3');
let burialMethodAudio = new Audio('audioPackage/burial method.mp3');
let dateBirthAudio = new Audio('audioPackage/date of birth.mp3');
let emailAudio = new Audio('audioPackage/email.mp3');
let fullNameAudio = new Audio('audioPackage/fullname.mp3');
let initialsAudio = new Audio('audioPackage/Initials.mp3');
let markerOptionsAudio = new Audio('audioPackage/marker options.mp3');
let naturalBurialCemeterieAudio = new Audio('audioPackage/natural burial cemeterie.mp3');
let personalMessageAudio = new Audio('audioPackage/personal message.mp3');
let phoneNumberAudio = new Audio('audioPackage/phone number.mp3');
let relationWithDeceasedAudio = new Audio('audioPackage/relation with deceased.mp3');

//play audios

function address() {
    addressAudio.play();
}

function burialLocation() {
    burialLocationAudio.play();
}

function burialMethod() {
    burialMethodAudio.play();
}

function dateBirth() {
    dateBirthAudio.play();
}

function email() {
    emailAudio.play();
}

function fullname() {
    fullNameAudio.play();
}

function initial() {
    initialsAudio.play();
}

function markerOptions() {
    markerOptionsAudio.play();
}

function naturalBurialCemeterie() {
    naturalBurialCemeterieAudio.play();
}

function personalMessage() {
    personalMessageAudio.play();
}

function phoneNumber() {
    phoneNumberAudio.play();
}

function relationWithDeceased() {
    relationWithDeceasedAudio.play();
}
