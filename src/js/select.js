import { fetchBreeds } from "./dog-api";
import { select } from "./select-ref";
import refs from "./ref";
import { errorMessage } from "./error-message";

fetchBreeds()
.then((response) => {
    const options = response.map((option) => ( {text:option.name, value:option.reference_image_id}))
    select.setData(options)
    select.selectEl.classList.remove('is-hidden')
    refs.loader.classList.add('is-hidden')
})
.catch(errorMessage)

