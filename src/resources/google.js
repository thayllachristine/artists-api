
// https://www.googleapis.com/customsearch/v1?key=AIzaSyBDiIVHPh5ecYlKSjfJzUNU9hgrwVIwjtg&cx=001098463630806628632:gdghnjjktqg&searchType=image&=imgSize=huge&q=demi lovato

import axios from "axios";
import credentials from "../js/credentials";

// AIzaSyBDiIVHPh5ecYlKSjfJzUNU9hgrwVIwjtg
// 001098463630806628632:gdghnjjktqg
// const q = `demi lovato`

function googleImageSearch(search) {
    return new Promise(function (resolve, reject) {
        axios.get(`https://www.googleapis.com/customsearch/v1?key=${credentials.google.key}&cx=${credentials.google.cx}&searchType=image&imgSize=huge&q=${search}`)

            .then(response => {
                const imgResult = response.data.items[0]
                if (imgResult) {
                    resolve(imgResult.link)

                } else {
                    reject(`Nenhum resultado encontrado!`)
                }
            })

            .catch(error => {
                reject(error)
            })

    })
}

export default googleImageSearch