const fectchData = (url) =>
  fetch(url)
      .then(response => response)
      .then(data => data)
      .catch(err => err)

const filterSelected = (id, collection) =>
    collection.filter(x => x.id === id)

export default {
  filterSelected: filterSelected,
  fectchData: fectchData
}
