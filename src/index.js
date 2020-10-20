import './styles.css';
import searchImages from './scripts/fetch.js';
import { searchForm, gallery } from './scripts/displayResults.js'
import * as debounce from 'lodash.debounce'
import searchTemplate from './templates/card.hbs';

const displayImages = (data) => {
    const name = data.target.value
    console.log(name)
    console.log(searchImages(name))
}

searchForm.addEventListener("input", debounce(displayImages, 500))

const menuData = {
    thumb: 1,
    visibility: 1,
    comment: 1,
    cloudDownload: 1
  };

const markup = searchTemplate(menuData);

gallery.innerHTML = markup