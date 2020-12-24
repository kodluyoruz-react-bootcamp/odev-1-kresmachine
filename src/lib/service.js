import axios from "axios"
var ENDPOINT = "https://jsonplaceholder.typicode.com"
export default async function getData(id) {
    const { data: user } = await axios.get(`${ENDPOINT}/users/${id}`)
    const { data: posts } = await axios.get(`${ENDPOINT}/posts?userId=${id}`)
    return { ...user, posts }
}
