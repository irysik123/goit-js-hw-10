import { select } from "./select-ref";
import { fetchDogByBreed } from "./dog-api";
import { createMarkup } from "./mark-up";
import refs from "./ref";
import { errorMessage } from "./error-message";

select.selectEl.addEventListener('change', onSelectChange);

let isFirstLoad = true;

function onSelectChange(event) {
    if(isFirstLoad) {
        isFirstLoad = false;
        return 
    }
    const selectedValue = event.target.value;
    refs.loader.classList.remove('is-hidden')
    refs.dogInfo.classList.add('is-hidden')
    fetchDogByBreed(selectedValue)
    .then((response) => {
        const markup = createMarkup(response)
        refs.dogInfo.innerHTML = markup;
        refs.loader.classList.add('is-hidden')
        refs.dogInfo.classList.remove('is-hidden')
    })
    .catch(errorMessage)
}