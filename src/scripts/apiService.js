const API_KEY = "18780193-436169229a2154530dbda7607"
export const PER_PAGE = 12;
export async function getImages(query, page=1) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=${PER_PAGE}&key=${API_KEY}`;
    return await fetch(url).then(res => res.json()).catch(console.log);
} 

