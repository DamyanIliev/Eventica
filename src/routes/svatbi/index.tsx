import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return <h1>сватби</h1>;
});

// Define the document head for SEO
export const head: DocumentHead = {
  title: 'Организация на сватби',
  meta: [
    {
      name: 'description',
      content: 'Eventica | Oрганизация на сватби',
    },
    {
      property: 'og:title',
      content: 'Eventica | Oрганизация на сватби',
    },
    {
      property: 'og:description',
      content: 'Eventica ще Ви помогне да организирате мечтаната от вас сватба!',
    },
    {
      property: 'og:image',
      content: 'https://example.com/path-to-your-image.jpg', // Replace with your image URL
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://example.com/about',
    },
  ],
};