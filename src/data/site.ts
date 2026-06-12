export const site = {
  title: '32 Подкаст',
  description: 'Училищният сайт на 32. СУИЧЕ — ученически подкаст, съдържащ интервюта, дискусии и мнения от учениците.',
  url: 'https://www-6wp.pages.dev/',
  navItems: [
    { href: '/', label: 'Начало', exact: true },
    { href: '/episodes', label: 'Епизоди' },
    { href: '/rubrics', label: 'Рубрики' },
    { href: '/schedule', label: 'Програма' },
    { href: '/team', label: 'Екип' },
    { href: '/guests', label: 'Гости' },
    { href: '/contact', label: 'Контакти' },
  ],
  youtubeChannel: 'https://www.youtube.com/@schoolpodcast32',
  facebookPage: 'https://www.facebook.com/schoolpodcast32/',
  instagramPage: 'https://www.instagram.com/32.podcast/',
  schoolSite: 'https://school32.com/',
  githubRepo: 'https://github.com/32-Podcast/www',
  githubOrg: 'https://github.com/32-Podcast/',
  spotifyShow: 'https://open.spotify.com/show/7hJGzyMPmoClf3vthy2GB6',
  schoolAddress: 'Sofia Center, Hristo Botev Blvd 63, 1303 Sofia, Bulgaria',
  schoolAddressMapsUrl: 'https://maps.google.com/?q=Sofia+Center+Hristo+Botev+Blvd+63+1303+Sofia+Bulgaria',
  contactEmail: 'school32.podcast32@school32.com',
};

export const { title, description, url, navItems, youtubeChannel, facebookPage, instagramPage, schoolSite, githubRepo, githubOrg, spotifyShow, schoolAddress, schoolAddressMapsUrl, contactEmail } = site;

export type NavItem = {
  href: string;
  label: string;
  exact?: boolean;
};

export type NavItem = {
  href: string;
  label: string;
  exact?: boolean;
};