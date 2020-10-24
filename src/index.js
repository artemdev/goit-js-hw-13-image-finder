import './styles.css';
import * as debounce from 'lodash.debounce'
import { searchForm, displayImages, loadMoreBtn} from './scripts/displayResults.js'

searchForm.addEventListener("input", debounce(displayImages, 500))