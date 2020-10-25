import './styles.scss';
import * as debounce from 'lodash.debounce'
import { searchForm, displayImages} from './scripts/displayResults.js'

searchForm.addEventListener("input", debounce(displayImages, 500))
