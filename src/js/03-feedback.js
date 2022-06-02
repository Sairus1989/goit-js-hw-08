import throttle from "lodash.throttle";


const refs = {
    form: document.querySelector('.feedback-form'),
}

const form = document.querySelector('form.feedback-form');
const emaiIinput = document.querySelector('input[name="email"]');
const textarea = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};


form.addEventListener('input', throttle(onFormText, 500));
form.addEventListener('submit', onFormSubmit);
onPlaceTextForm();

function onFormText(evt) {
    // console.log(formData);
    const formData = { email: emaiIinput.value, message: textarea.value, }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};


function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    form.reset();
    localStorage.removeItem(STORAGE_KEY);
    
};

// если локал хранилище имеет уже информацию, то необходимо заполнить инпуты 
function onPlaceTextForm() {
    const savedTextForm = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if (savedTextForm) {
        emaiIinput.value = savedTextForm.email || "";
        textarea.value = savedTextForm.message || "";
    }

};
