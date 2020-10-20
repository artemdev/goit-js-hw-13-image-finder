const API_KEY = "18780193-436169229a2154530dbda7607"

export default function searchImages(name) {
    const URL = `https://pixabay.com/api/?key=${API_KEY}&${name}&image_type=photo`
    return fetch(URL)
    .then(res => {
        return res.json()
    })
    .catch(console.log)
}

