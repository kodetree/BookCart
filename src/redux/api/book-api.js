import defaultAxios from 'axios'

const axios = defaultAxios.create({
  baseURL: 'http://localhost:3001/bookAPI/books',
  headers: {'Content-Type': 'application/json'}
});

// Get All Todos
export const getBooksApi = async () => {
  try {
    const books = await axios.get()
    return books.data
  } catch(err) {
    return console.error(err)
  }
}
