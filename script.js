const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar_menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

if (menu && menuLinks) {
    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');

        const isOpen = menuLinks.classList.contains('active');

        menu.setAttribute('aria-expanded', isOpen);
        menu.setAttribute(
            'aria-label',
            isOpen ? 'Close navigation menu' : 'Open navigation menu'
        );
    });
}


// Question 8: JavaScript Variables
const motivationButton = document.querySelector('#motivation_btn');
const motivationMessage = document.querySelector('#motivation_message');

const membershipSelect = document.querySelector('#membership');
const membershipPreview = document.querySelector('#membership_preview');


// Question 8: Function 1 - Display a Motivational Message
function showMotivationMessage() {
    motivationMessage.textContent =
        'Stay committed. Stay disciplined. The Standard Is The Standard!';
}


// Question 8: Function 2 - Update Membership Preview
function updateMembershipPreview() {
    const selectedMembership = membershipSelect.value;

    if (selectedMembership === '') {
        membershipPreview.textContent =
            'Your membership selection will appear here.';
    } else {
        membershipPreview.textContent =
            'You selected the ' + selectedMembership + ' membership.';
    }
}


// Question 8: Event Listener 1 - Button Click
if (motivationButton && motivationMessage) {
    motivationButton.addEventListener('click', showMotivationMessage);
}


// Question 8: Event Listener 2 - Membership Selection
if (membershipSelect && membershipPreview) {
    membershipSelect.addEventListener('change', updateMembershipPreview);
}


// Question 9: Registration Form Feedback
const registrationForm = document.querySelector('#registration_form');
const firstNameInput = document.querySelector('#first_name');
const confirmationMessage =
    document.querySelector('#confirmation_message');

if (registrationForm && firstNameInput && confirmationMessage) {

    registrationForm.addEventListener('submit', function(event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Check that all required fields are valid
        if (!registrationForm.checkValidity()) {
            registrationForm.reportValidity();
            return;
        }

        // Get the user's first name and membership choice
        const firstName = firstNameInput.value.trim();
        const membership = membershipSelect.value;

        // Display a personalized confirmation
        confirmationMessage.textContent =
            'Thank you, ' + firstName +
            '! Your ' + membership +
            ' membership registration has been completed successfully.';

    });
}