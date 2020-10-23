import './styles.css';
import searchImages from './scripts/apiService.js';
import { searchForm, gallery } from './scripts/displayResults.js'
import * as debounce from 'lodash.debounce'
import searchTemplate from './templates/card.hbs';

const displayImages = async (data) => {
    const query = data.target.value
    const imagesObj = searchImages(query)
    const images = await imagesObj.then(images => 
    {
      let response = [];
      images.hits.forEach(image => {
        const imageObj = {
          thumb: image.previewURL,
          downloads: image.downloads,
          comments: image.comments,
          likes: image.likes,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL
        }
        response.push(imageObj)
      })
      return response
    }
    ).catch(console.log)
    //make html template
    const markup = searchTemplate(images[0]);
    //insert html template
    gallery.innerHTML = markup
}

searchForm.addEventListener("input", debounce(displayImages, 500))