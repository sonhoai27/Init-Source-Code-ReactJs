import axios from 'axios'

function * apiFilms() {
  const { data } = yield axios.get('https://ghibliapi.herokuapp.com/films')
  console.log(data)
}

export {
  apiFilms,
}
