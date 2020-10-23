const API_KEY = "18780193-436169229a2154530dbda7607"
const PER_PAGE = 12;
export default async function searchImages(name) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${name}&page=1&per_page=${PER_PAGE}&key=${API_KEY}`;
    return await fetch(url).then(res => res.json()).catch(console.log);
} 

