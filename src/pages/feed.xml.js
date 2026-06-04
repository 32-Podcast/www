import rss from '@astrojs/rss';
import { episodes } from '../data/episodes';
import { youtubeChannel } from '../data/site';

export async function GET(context) {
  return rss({
    title: '32 Подкаст',
    description: 'Училищният подкаст на 32. СУИЧЕ "Св. Климент Охридски" — новини, интервюта, музика и забавни рубрики.',
    site: context.site ?? 'https://www-6wp.pages.dev',
    items: episodes.map(e => ({
      title: e.title,
      pubDate: new Date(e.date),
      description: `${e.rubric} епизод. ${youtubeChannel}`,
      link: `https://www.youtube.com/watch?v=${e.id}`,
      guid: e.id,
    })),
    customData: '<language>bg-BG</language>',
  });
}
