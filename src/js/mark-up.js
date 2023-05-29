export function createMarkup(object) {
    const img = object.url
    const {name, bred_for, temperament} = object.breeds[0]
    return `
    <img src="${img}" alt="${name}" width="400" height="500">
    <div>
      <h2>${name}</h2>
      <p>${bred_for}</p>
      <p>
        <span class="temperament">
          Temperament:
        </span>
        ${temperament}
      </p>
    </div>`
}
