export const authors = [
  {
    name: 'Mitchell Ozmun',
    avatar: '/images/mitch.jpg',
  },
  {
    name: 'Eduardo Sacco',
    avatar: '/images/ed.png',
  },
];

export function getAuthorAvatar(authorName: string): string | undefined {
  const author = authors.find(a => a.name === authorName);
  return author?.avatar;
}
