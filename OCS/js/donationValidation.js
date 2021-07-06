//selectors
let monthlySubmitForm = document.getElementById('monthlySubmitForm');
let donationChoices = document.querySelectorAll('input[name="monthly-selection"]');
let donationTMonthly = document.getElementById('donation-type-monthly');
let customSelection = document.getElementById('custom-monthly-selection');

//event listeners
monthlySubmitForm.addEventListener('submit',handleMonthlyDonationSubmission);

console.log(customSelection);
//function
function handleMonthlyDonationSubmission(e){
    e.preventDefault();
    for (const choice of donationChoices) {        
        if (choice.checked) {
            if (choice.value == 'other') {
                console.log(choice.value+'choice checked');
                console.log(customMonthlySelection.value);
            }
        }
        // if (!choice.checked && customMonthlySelection.length > 0) {
        //     console.log('custom selection'+customMonthlySelection.value);
        // }
    }
}
