//selectors
let monthlySelection = document.getElementById('monthly-selection');
let oneTimeSelection = document.getElementById('one-time-selection');
let donationForm = document.getElementById('donation-form');
let monthlyForm = document.getElementsByClassName('monthly-form')[0];
let oneTimeForm = document.getElementsByClassName('one-time-form')[0];
let monForm = document.getElementById('monthly-form');
let monSelectionName = document.getElementsByName('monthly-selection');
let donationType = document.getElementById('donation-type');
// let monthlyFormChoice = document.


//event-listeners
monthlySelection.addEventListener('click',handleMonthlySelection);
oneTimeSelection.addEventListener('click',handleOneTimeSelection);
monForm.addEventListener('change',handlemonthlySelectionClicks);

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
function handlemonthlySelectionClicks(e){
    const ms = document.querySelectorAll('input[name="monthly-selection"]');
    for (const s of ms) {
        if (s.checked) {
            const sValue = e.target.value;
            let parent = e.target.parentNode;
            parent.style.backgroundColor = 'var(--base-black)';
            parent.style.color = 'var(--text-white)';
            let siblings = getSiblings(parent);
            styleSiblings(siblings);
            handledonationType(sValue);
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
const handledonationType = (sValue) => {
    switch (sValue) {
        case 'other':
            donationType.style.display = 'flex';
            donationType.style.flexFlow = 'row wrap';
            donationType.style.alignItems = 'center';
            donationType.style.justifyContent = 'center';
            if (donationType.childNodes.length == 0) {
                let input = document.createElement("input");
                donationType.appendChild(input);
                input.focus();
                input.placeholder = 'Enter your donation here';
            }
            break;
    
        default:
            donationType.style.display = 'none';
            break;
    }
}