import { fetchVideo } from './liberty/prufa';
import { el, element, empty, isRelated, formatDate } from './liberty/ifelse';

document.addEventListener('DOMContentLoaded', async () => {
const main = document.querySelector('main');
const data = await fetchVideo();
console.log(data);
console.log(data.categories);

  //Skoðum appenChild hja okkur
  data.categories.forEach(categories => {
    const line = element('hr', { class: 'line col col-10 offset-col-1' }, null, null, ' ');
    const catVidRel = categories.videos;
    const videoRow = element('div', { class: `row videoRow` }, null, null, ' ');
    const category = el('section',
      element('div', { class: 'grid' }, null,null, ' ',
        element('div', { class: 'row' }, null, null, ' ',
          element('div', { class: 'col col-12' }, null, null, ' ',
            element('h2', { class: 'category__title' }, null, null, `${categories.title}`))),
        videoRow,
        line));
      main.appendChild(category);

      data.videos.forEach(videos => {
        //Kolli hjálp hér, með video elementin o.fl
        //Ath nullin
        // const related samsvarar videos.related;
        const id = videos.id;
        console.log(id);
        const rCheck = isRelated(catVidRel, id);
        if (rCheck) {
        const video = element('div', { class: 'col col-4 col-sm-12' }, null, null, ' ',
          element('div', { class: 'card' }, null, null, ' ' ,
            element('img', {src: videos.poster, class: 'card__poster' }, null, null, ' '),
            element('h3', { class: 'card__title' }, null, null, `${videos.title}`),
            element('p', { class: 'card__created' }, null, null, `${formatDate(videos.created)}`)));
            videoRow.appendChild(video);
          }
      });
  });
});
