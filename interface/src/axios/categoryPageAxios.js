import axios from 'axios'

const URL = "http://localhost:3000/categories"

const getCategories = async (cb) => {
    try {
        let categories = await axios({
            method: 'GET',
            url: URL
        })
        cb(categories.data)
    } catch (err) {
        cb(err)
    }
}

export {
    getCategories
}

