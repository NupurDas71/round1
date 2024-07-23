document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-all');
    const toggleDiv = document.getElementById('allitems');

    toggleButton.addEventListener('click', function() {
        if (toggleDiv.classList.contains('hidden')) {
            toggleDiv.classList.remove('hidden');
        } else {
            toggleDiv.classList.add('hidden');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const allitems = document.getElementById('allitems');
    const cutButton = document.querySelector('.cutButton');

    cutButton.addEventListener('click', () => {
        if (allitems.classList.contains('hidden')) {
            allitems.classList.remove('hidden');
        } else {
            allitems.classList.add('hidden');
        }
    });
});
function updateText() {
    const selectElement = document.getElementById('select1');
    const selectedValue = selectElement.value;
    const textDiv = document.getElementById('text1');

    switch (selectedValue) {
        case 'intro':
            textDiv.innerHTML = 'Introduction: This is an overview of the topic.';
            break;
        case 'method':
            textDiv.innerHTML = '4SA Method: Detailed explanation of the 4SA Method.';
            break;
        case 'progress':
            textDiv.innerHTML = 'Idea to Progress: Steps to bring an idea into progress.';
            break;
        default:
            textDiv.innerHTML = 'Please select an option.';
    }
}
function updateText() {
    const selectElement = document.getElementById('select1');
    const selectedValue = selectElement.value;
    const textDiv = document.getElementById('text2');

    switch (selectedValue) {
        case 'threadA':
            textDiv.innerHTML = 'Thread A: Details about Thread A.';
            break;
        // Add more cases as needed for other options
        default:
            textDiv.innerHTML = 'Please select an option.';
    }
}
