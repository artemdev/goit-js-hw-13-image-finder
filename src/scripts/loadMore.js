import { getImages } from './apiService'
import { createHtml, gallery, searchForm } from './displayResults'

async function appendImages () {
    const query = searchForm.textContent
    const nextPage = parseInt(gallery.childElementCount) + 1
    const images = await getImages(query, nextPage)

    if(!images) return

    const list = createHtml(images.hits)
    list.forEach(li => gallery.appendChild(li))
}

export default function createLoadMoreBtn () {

    if(document.getElementById("load-more")) return
    
    const btnWrap = document.createElement('div')
    btnWrap.className = "col-md-12  load-more-wrap"
    const btn = document.createElement('button')
    btn.textContent = "Load more"
    btn.id = 'load-more'
    btn.className = "btn btn-success"
    btnWrap.append(btn)
    gallery.after(btnWrap) 
    //add listener
    btn.addEventListener("click", appendImages)
}