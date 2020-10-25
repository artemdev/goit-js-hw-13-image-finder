import searchTemplate from '../templates/card.hbs';
import { getImages } from './apiService'
import createLoadMoreBtn  from './loadMore'

export const searchForm = document.getElementById("search-form")
export const gallery = document.querySelector("div.gallery")



export function createHtml (images) {
    let $list = [];
    images.forEach(image => {
        const $li = document.createElement("figure")
        $li.className = "col-md-4 image-box"
        $li.innerHTML = searchTemplate(image);
        $list.push($li)
      })
    return $list
}
export async function displayImages (data) {
        const $loadMoreBtn = document.getElementById("load-more")
        if($loadMoreBtn) $loadMoreBtn.remove()
        gallery.innerHTML = ""
        const query = data.target.value
        const images = await getImages(query)
        
        if(images.hits.length > 0) {
            const $list = createHtml(images.hits)
            $list.forEach(li => gallery.appendChild(li))
            createLoadMoreBtn()
        }
}

