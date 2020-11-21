import { fetchVideo } from './lib/api';
import { el, element, empty, isRelated, formatDate, allRelated } from './lib/utils';

document.addEventListener('DOMContentLoaded', async () => {
const main = document.querySelector('main');
const data = await fetchVideo();

const mainVideo =
element('div', { class: 'grid' }, null,null, ' ',
  element('div', { class: 'row' }, null, null, ' ',
    element('div', { class: 'col col-12' }, null, null, ' ',
      element('h1', { class: 'video__title' }, null, null, `${videos.title}`))),
  element('div', { class: 'row' }, null, null, ' ',
    element('div', { class: 'col col-12' }, null, null, ' ',
      element('div', { class: 'video__poster' }, null, null, `${videos.poster}`))),
  element('div', { class: 'row' }, null, null, ' ',
    element('div', { class: 'col col-12' }, null, null, ' ',
      element('div', { class: 'video__actions' }, null, null, ' '))),
  element('div', { class: 'row' }, null, null, ' ',
    element('div', { class: 'col col-12' }, null, null, ' ',
      element('p', { class: 'video__description' }, null, null, `${videos.description}`,))));

main.appendChild(mainVideo);

const line = element('hr', { class: 'line col col-10 offset-col-1' }, null, null, ' ');
const related = videos.related;
const id = videos.id;
const rCheck = allRelated(id, related);

if (rCheck) {
const relatedVideos =
element('div', { class: 'grid' }, null,null, ' ',
  element('div', { class: 'row' }, null, null, ' ',
    element('div', { class: 'col col-12' }, null, null, ' ',
      element('h2', { class: 'category__title' }, null, null, `Tengd myndbönd`))),
  element('div', { class: `row videoRow` }, null, null, ' ',
  line,
    element('div', { class: 'col col-4 col-sm-12' }, null, null, ' ',
      element('div', { class: 'card' }, null, null, ' ' ,
        element('img', {src: videos.poster, class: 'card__poster' }, null, null, ' '),
        element('h3', { class: 'card__title' }, null, null, `${videos.title}`),
        element('p', { class: 'card__created' }, null, null, `${formatDate(videos.created)}`)))));
        main.appendChild(relatedVideos);
}

});
