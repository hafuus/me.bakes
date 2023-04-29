import images from './images';

const wines = [
  {
    title: 'Coconut Lime',
    price: '$7',
    tags: 'zesty lime cream cheese frosting ',
  },
  {
    title: "Maple Bacon",
    price: '$7',
    tags: 'crispy bacon crumble and maple cream cheese frosting',
  },
  {
    title: 'Strawberry Shortcake',
    price: '$10',
    tags: 'fresh strawberries',
  },
  {
    title: 'Cinnamon Roll',
    price: '$5',
    tags: 'cream cheese frosting, and a drizzle of cinnamon icing',
  },
  {
    title: 'Pumpkin Spice',
    price: '$10',
    tags: 'warm spices, topped with a creamy cinnamon cream cheese frosting',
  },
];

const cocktails = [
  {
    title: 'Classic Hot Chocolate:',
    price: '$7',
    tags: 'Hot | whipped cream',
  },
  {
    title: "Vanilla Latte",
    price: '$7',
    tags: 'Hot | whipped cream ',
  },
  {
    title: 'Iced Tea',
    price: '$10',
    tags: 'cold | Citrus juice',
  },
  {
    title: 'Iced Coffee',
    price: '$5',
    tags: 'cold | Brown sugar',
  },
  {
    title: 'Iced Tea',
    price: '$10',
    tags: 'cold | lemon garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
