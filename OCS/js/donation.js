//selectors
let monthlySelection = document.getElementById('monthly-selection');
let oneTimeSelection = document.getElementById('one-time-selection');
let donationForm = document.getElementById('donation-form');
let monthlyForm = document.getElementsByClassName('monthly-form')[0];
let oneTimeForm = document.getElementsByClassName('one-time-form')[0];
let monthlyFormId = document.getElementById('monthly-form');
let oneTimeFormId = document.getElementById('one-time-form');
let monSelectionName = document.getElementsByName('monthly-selection');
let donationTypeMonthly = document.getElementById('donation-type-monthly');
let donationTypeOneTime = document.getElementById('donation-type-one-time');

//event-listeners
monthlySelection.addEventListener('click',handleMonthlySelection);
oneTimeSelection.addEventListener('click',handleOneTimeSelection);
monthlyFormId.addEventListener('change',handleMonthlySelectionClicks);
oneTimeFormId.addEventListener('change',handleOneTimeSelectionClicks);
monthlySubmitForm.addEventListener('submit',handleMonthlyDonationSubmission);

//functions
function handleMonthlySelection(e){
    oneTimeForm.style.display = 'none';
    monthlyForm.style.display = 'flex';
    monthlySelection.style.backgroundColor = 'var(--base-black)'; 
    monthlySelection.style.color = 'var(--bg-yellow)';   
    oneTimeSelection.style.backgroundColor = 'transparent';
    oneTimeSelection.style.color = 'var(--base-black)';
}
function handleOneTimeSelection(e){
    monthlyForm.style.display = 'none';
    oneTimeForm.style.display = 'block';
    oneTimeSelection.style.backgroundColor = 'var(--base-black)';
    oneTimeSelection.style.color = 'var(--bg-yellow)';
    monthlySelection.style.backgroundColor = 'transparent';
    monthlySelection.style.color = 'var(--base-black)';
}
function handleMonthlySelectionClicks(e){
    const ms = document.querySelectorAll('input[name="monthly-selection"]');
    for (const s of ms) {
        if (s.checked) {
            const sValue = e.target.value;
            let parent = e.target.parentNode;
            parent.style.backgroundColor = 'var(--base-black)';
            parent.style.color = 'var(--text-white)';
            let siblings = getSiblings(parent);
            styleSiblings(siblings);
            handledonationTypeMonthly(sValue);
            break;
        }
    }
}
function handleOneTimeSelectionClicks(e){
    const ms = document.querySelectorAll('input[name="one-time-selection"]');
    for (const s of ms) {
        if (s.checked) {
            const sValue = e.target.value;
            let parent = e.target.parentNode;
            parent.style.backgroundColor = 'var(--base-black)';
            parent.style.color = 'var(--text-white)';
            let siblings = getSiblings(parent);
            styleSiblings(siblings);
            handledonationTypeOneTime(sValue);
            break;
        }
    }
}
const getSiblings = function (parent) {
    // for collecting siblings
    let siblings = []; 
    // if no parent, return no sibling
    if(!parent.parentNode) {
        return siblings;
    }
    // first child of the parent node
    let sibling  = parent.parentNode.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== parent) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};
const styleSiblings = (siblings) => {
    for (const sibling of siblings){
        sibling.style.backgroundColor = 'transparent';
        sibling.style.color = 'var(--text-black)';
    }
}
const handledonationTypeMonthly = (sValue) => {
    switch (sValue) {
        case 'other':
            donationTypeMonthly.style.display = 'flex';
            donationTypeMonthly.style.flexFlow = 'row wrap';
            donationTypeMonthly.alignSelf = 'center';
            donationTypeMonthly.style.alignItems = 'center';
            donationTypeMonthly.style.justifyContent = 'center';
            // if (donationTypeMonthly.childNodes.length == 0) {
            //     let input = document.createElement("input");
            //     input.type = 'number';
            //     input.id = 'custom-monthly-selection';
            //     input.min = 1;
            //     donationTypeMonthly.appendChild(input);
            //     input.focus();
            //     input.placeholder = 'Enter your donation here';
            // }
            break;
    
        default:
            donationTypeMonthly.style.display = 'none';
            break;
    }
}
const handledonationTypeOneTime = (sValue) => {
    switch (sValue) {
        case 'other':
            donationTypeOneTime.style.display = 'flex';
            donationTypeOneTime.style.flexFlow = 'row wrap';
            donationTypeOneTime.style.alignItems = 'center';
            donationTypeOneTime.style.justifyContent = 'center';
            if (donationTypeOneTime.childNodes.length == 0) {
                let input = document.createElement("input");
                input.type = 'number';
                input.name = 'one-time-selection';
                input.min = 41;
                donationTypeOneTime.appendChild(input);
                input.focus();
                input.placeholder = 'Enter your donation here';
            }
            break;
    
        default:
            donationTypeOneTime.style.display = 'none';
            break;
    }
}

function handleMonthlyDonationSubmission(e){
    e.preventDefault();
    for (const choice of donationChoices) {        
        if (choice.checked) {
            if (choice.value == 'other') {
                console.log(choice.value);
                console.log(choice.value+'choice checked');
                console.log(customMonthlySelection.value);
            }
        }
        // if (!choice.checked && customMonthlySelection.length > 0) {
        //     console.log('custom selection'+customMonthlySelection.value);
        // }
    }
}