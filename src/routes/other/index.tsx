import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      {/* Заглавие на секцията */}
      <section class="h-[70vh] relative pt-[150px] pb-16 px-4 md:px-8 text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/other-slide.jpg)' }}>
        <div class="absolute inset-0 bg-black bg-opacity-50"></div> {/* Полупрозрачна тъмна покривка */}
        <h1 class="relative text-4xl font-bold text-white mb-4">Събитие по ваша идея</h1>
        <p class="relative text-lg text-white max-w-3xl mx-auto mb-8">
          Вашата идея, нашата експертиза. Ние ще създадем уникално събитие, което напълно отразява вашата визия и стил, независимо от повода.
        </p>
      </section>

      {/* Основна част със специализации */}
      <section class="pt-16 pb-24 px-4 md:px-8 text-center">
        <h2 class="text-3xl font-semibold text-eventica-blue mb-8">Какво включва нашата работа?</h2>
        <div class="grid gap-8 md:grid-cols-3 text-center max-w-5xl mx-auto">
          {/* Индивидуален подход */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🎨</div>
            <h3 class="text-2xl font-semibold mb-2">Индивидуален дизайн</h3>
            <p class="text-gray-600">
              Ние ще проектираме събитие, което отговаря на вашите идеи и нужди, като съчетаваме креативност и професионализъм.
            </p>
          </div>

          {/* Постоянна комуникация */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">💬</div>
            <h3 class="text-2xl font-semibold mb-2">Постоянна комуникация</h3>
            <p class="text-gray-600">
              Ще работим заедно с вас на всяка стъпка – от планирането до изпълнението, за да се уверим, че всичко върви гладко.
            </p>
          </div>

          {/* Персонализирани решения */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">✨</div>
            <h3 class="text-2xl font-semibold mb-2">Персонализирани решения</h3>
            <p class="text-gray-600">
              Всеки детайл ще бъде подбран според вашите предпочитания – от декорацията до забавленията и менюто.
            </p>
          </div>
        </div>
      </section>

      {/* Нашият процес */}
      <section class="pt-16 pb-24 px-4 md:px-8 text-center bg-gray-100">
        <h2 class="text-3xl font-semibold text-eventica-blue mb-8">Как работим за вашата идея?</h2>
        <div class="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
          {/* Консултация */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🗨️</div>
            <h3 class="text-2xl font-semibold mb-2">Първа стъпка: Идеи и концепция</h3>
            <p class="text-gray-600">
              Ще проведем среща или разговор, за да разберем вашата идея и как можем да я превърнем в реалност.
            </p>
          </div>

          {/* Планиране */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">📋</div>
            <h3 class="text-2xl font-semibold mb-2">Втора стъпка: Планиране</h3>
            <p class="text-gray-600">
              Ще съставим подробен план за събитието, включващ всички етапи – от локация до организация на услугите.
            </p>
          </div>

          {/* Изпълнение */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🏁</div>
            <h3 class="text-2xl font-semibold mb-2">Трета стъпка: Реализация</h3>
            <p class="text-gray-600">
              Нашият екип ще се погрижи за перфектното изпълнение на събитието, за да създадем незабравими спомени.
            </p>
          </div>
        </div>
        {/* Call to Action */}
        <div class="mt-12">
          <Link href="/contacts" class="bg-eventica-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Споделете идеята си с нас
          </Link>
        </div>
      </section>
    </>
  );
});

// Define the document head for SEO
export const head: DocumentHead = {
  title: 'Eventica | Агенция за организиране на събития',
  meta: [
    {
      name: 'description',
      content: 'Създайте уникално събитие по ваша идея с помощта на професионалистите от Евентика. Цялостна реализация на събития. Пестим вашето време и ресурси.',
    },
    {
      property: 'og:title',
      content: 'Eventica | Агенция за организиране на събития',
    },
    {
      property: 'og:description',
      content: 'Създайте уникално събитие по ваша идея с помощта на професионалистите от Евентика. Цялостна реализация на събития. Пестим вашето време и ресурси.',
    },
    {
      property: 'og:image',
      content: '../../public/images/other-slide.jpg',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://example.com/custom-event',
    },
  ],
};