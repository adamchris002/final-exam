import axios from 'axios'


const URL = "http://localhost:3000/fruits"

const getFruits = async (cb) => {
    try {
        let fruits = await axios({
            method: 'GET',
            url: URL
        })
        cb(fruits.data)
    } catch (err) {
        console.log(err)
    }
}

const addFruits = () => {

}

const updateFruits = () => {

}

const deleteFruits = () => {

}


export {
    getFruits,
    addFruits,
    updateFruits,
    deleteFruits,
}