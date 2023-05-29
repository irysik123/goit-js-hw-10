import { Report } from 'notiflix/build/notiflix-report-aio';
import refs from './ref';

export function errorMessage() {
    refs.loader.classList.add('is-hidden')
    return Report.failure('Error', 'Oops! Something went wrong! Try reloading the page!', 'Okey')
}