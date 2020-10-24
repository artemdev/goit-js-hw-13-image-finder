export const searchForm = document.getElementById("search-form")
export const gallery = document.querySelector("ul.gallery")
export const loadMoreBtn =  document.querySelector("load-more")
import searchTemplate from '../templates/card.hbs';
import { getImages } from './apiService'

async function appendImages () {
      const query = searchForm.textContent
      const nextPage = parseInt(document.querySelector("ul.gallery").childElementCount) + 1
      const images = await getImages(query, nextPage)
      if(!images) return
      const list = createHtml(images.hits)
      list.forEach(li => gallery.appendChild(li))
}

const createLoadMoreBtn = () => {
    //validation
    if(document.getElementById("load-more")) return
    //create btn
    const btn = document.createElement('button')
    btn.textContent = "Load more"
    btn.id = 'load-more'
    gallery.after(btn) 
    //add listener
    btn.addEventListener("click", appendImages)
}

export function createHtml (images) {
    let $list = [];
    images.forEach(image => {
        const $li = document.createElement("li")
        $li.innerHTML = searchTemplate(image);
        $list.push($li)
      })
      //insert html template
    //   const $li = document.createElement('')
    return $list
}
export async function displayImages (data) {
        const query = data.target.value
        const images = await getImages(query)
        if(!images) return
        const $list = createHtml(images.hits)
        $list.forEach(li => gallery.appendChild(li))
        createLoadMoreBtn()
}

