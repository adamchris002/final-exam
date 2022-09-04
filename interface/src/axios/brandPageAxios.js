import axios from 'axios'

const URL = "http://localhost:3000/brands"

const getBrands = async (cb) => {
    try {
        let brands = await axios({
            method: 'GET',
            url: URL
        })
        cb(brands.data)
    } catch (err) {
        cb(err)
    }
}

export {
    getBrands
}