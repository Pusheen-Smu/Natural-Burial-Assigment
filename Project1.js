let isDarkMode = false;
let condictionOpen = false;
let conditionContent = `
**Natural Burial Policy**

**1. Objective:** To provide a sustainable and eco-friendly burial option that minimizes environmental impact, promotes the natural decomposition of the body, and allows for the conservation of natural habitats.

**2. Definitions:**
- **Natural Burial:** The interment of the body of a deceased person in the soil in a manner that does not inhibit decomposition but allows the body to be naturally recycled.
- **Biodegradable Materials:** Natural materials that decompose over time without releasing harmful substances into the environment.

**3. Eligibility and Conditions:**
- All individuals opting for natural burial must ensure that the body is not embalmed or treated with any chemicals that may hinder natural decomposition.
- Only biodegradable coffins, shrouds, or other containers made from materials such as untreated wood, bamboo, wool, or cardboard are to be used.
- The burial site must be selected in consultation with relevant environmental and local governing bodies to ensure that it does not adversely affect local ecosystems, water tables, or protected areas.

**4. Site Management:**
- Burial sites shall be managed to enhance local biodiversity, with native tree and plant species encouraged.
- Grave markers, if used, should be made from natural stone, untreated wood, or other biodegradable materials and should be designed to blend into the natural surroundings.
- Regular monitoring and maintenance of the burial site will be conducted to ensure compliance with environmental standards and to preserve the natural habitat.

**5. Legal and Ethical Considerations:**
- All natural burials must comply with local, state, and national laws and regulations regarding burials and land use.
- Respect for the deceased and their loved ones is paramount. Privacy, dignity, and cultural sensitivities must be honored at all times.
- Clear communication with the families about the process and maintenance of the burial site is essential.

**6. Environmental Impact Assessment:**
- Prior to the establishment of a new natural burial site, a comprehensive environmental impact assessment must be conducted. This assessment should evaluate potential effects on biodiversity, soil health, water resources, and the broader ecosystem.

**7. Future Access:**
- While natural burial sites aim to remain as undisturbed as possible, reasonable access for loved ones to visit the site must be provided. Paths and access routes should be designed to minimize environmental impact.

**8. Amendment of Policy:**
- This policy is subject to review and amendment to adapt to new environmental research, changes in legal requirements, and advancements in sustainable practices.

**9. Enforcement:**
- Compliance with this policy is mandatory for all natural burials conducted within the designated areas. Violations of this policy may result in legal action and the revocation of burial privileges.
`;

let darkModeAudio = new Audio('darkMode.mp3');
let darkModeSwitchAudio = new Audio('darkModeSwitch.mp3');
let nameAudio = new Audio('name.mp3');
let dateOfBirthAudio = new Audio('dateOfBirth.mp3');
let dateOfDeathAudio = new Audio('dateOfDeath.mp3');
let phoneAudio = new Audio('phone.mp3');
let addressAudio = new Audio('address.mp3');
let burialAddressAudio = new Audio('burialAddress.mp3');
let realtionAudio = new Audio('realtion.mp3');
let markerAudio = new Audio('marker.mp3');
let personalMsgAudio = new Audio('personalMsg.mp3');
let insuranceAudio = new Audio('insurance.mp3');
let coditionAudio = new Audio('codition.mp3');
let initialAudio = new Audio('initial.mp3');
let dateOfSignAudio = new Audio('dateOfSign.mp3');

function darkModeSwitch() {
    if (isDarkMode) {
        document.getElementById("main").classList.remove('dark');
        isDarkMode = false;
    } else {
        document.getElementById("main").classList.add('dark');
        isDarkMode = true;
    }
}

function coditionPage() {
    if (condictionOpen) {
        document.getElementById("condictionContent").innerHTML = "";
        condictionOpen = false;
    } else {
        document.getElementById("condictionContent").innerHTML = conditionContent;
        condictionOpen = true;
    }
}

function darkModeHelper() {
    darkModeAudio.play();
}

function darkModeSwitchHelper() {
    darkModeSwitchAudio.play();
}

function nameHelper() {
    nameAudio.play();
}

function dateOfBirthHelper() {
    dateOfBirthAudio.play();
}

function dateOfDeathHelper() {
    dateOfDeathAudio.play();
}

function phoneHelper() {
    phoneAudio.play();
}

function addressHelper() {
    addressAudio.play();
}

function burialAddressHelper() {
    burialAddressAudio.play();
}

function realtionHelper() {
    realtionAudio.play();
}

function markerHelper() {
    markerAudio.play();
}

function personalMsgHelper() {
    personalMsgAudio.play();
}

function insuranceHelper() {
    insuranceAudio.play();
}

function coditionHelper() {
    coditionAudio.play();
}

function initialHelper() {
    initialAudio.play();
}

function dateOfSignHelper() {
    dateOfSignAudio.play();
}





//no content yet
