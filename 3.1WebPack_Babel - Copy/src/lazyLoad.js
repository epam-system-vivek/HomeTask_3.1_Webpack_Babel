

import lazyLoadImage from './images/lazyLoad.png'; /*img import*/
import './styles/lazyLoad.scss'; /*style import*/


export default function lazyLoad() {
  const lazyLoadContainer = document.getElementById('lazy-load-container');
  console.log("helo this will not be printed on consloe");/*check purpose*/

  lazyLoadContainer.innerHTML = `
    <h2>Lazy Load Content</h2>
    <p> This image is related to Calculator application with different functionalities.</p>
    <img src="${lazyLoadImage}" alt="Lazy Load Image">
  `;
}
