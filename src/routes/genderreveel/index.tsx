import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      {/* Заглавие на секцията */}
      <section class="h-[70vh] relative pt-[150px] pb-16 px-4 md:px-8 text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/baby-slide.png)' }}>
        <div class="absolute inset-0 bg-black bg-opacity-50"></div> {/* Полупрозрачна тъмна покривка */}
        <h1 class="relative text-4xl font-bold text-white mb-4">Партита за разкриване на пола на вашето бебе</h1>
        <p class="relative text-lg text-white max-w-3xl mx-auto mb-8">
          Направете момента незабравим! Ние от Eventica ще организираме за вас най-забавното и емоционално парти за разкриване на пола на вашето бебе.
          Ние се грижим за всички детайли, за да се насладите на този специален ден с вашите близки и приятели.
        </p>
      </section>

      {/* Основна част с предложения */}
      <section class="pt-16 pb-4 px-4 md:px-8 text-center bg-gradient-to-b from-gray-50 to-gray-100">
        <h2 class="text-3xl font-semibold text-eventica-blue mb-8">Какво предлагаме?</h2>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-center max-w-6xl mx-auto pb-14">
          {/* Персонализирана украса */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🎈</div>
            <h3 class="text-2xl font-semibold mb-2">Персонализирана украса</h3>
            <p class="text-gray-600">
              Балони, цветове и декорации, които отговарят на вашия стил и предпочитания.
            </p>
          </div>

          {/* Креативни начини за разкриване */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🎉</div>
            <h3 class="text-2xl font-semibold mb-2">Креативни начини за разкриване</h3>
            <p class="text-gray-600">
              Димни фойерверки, торти, конфети или изненадващи кутии – вие избирате, а ние реализираме.
            </p>
          </div>

          {/* Координация и тайминг */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">⏱️</div>
            <h3 class="text-2xl font-semibold mb-2">Координация и тайминг</h3>
            <p class="text-gray-600">
              Ние ще се погрижим всичко да се случи в точното време, за да създадем перфектната изненада.
            </p>
          </div>

          {/* Фото и видео заснемане */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">📸</div>
            <h3 class="text-2xl font-semibold mb-2">Фото и видео заснемане</h3>
            <p class="text-gray-600">
              Заснемете всеки специален момент с професионален фотограф и видеограф.
            </p>
          </div>

          {/* Игри и забавления */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🎲</div>
            <h3 class="text-2xl font-semibold mb-2">Игри и забавления</h3>
            <p class="text-gray-600">
              Организираме забавни игри за гостите, за да направим събитието още по-вълнуващо.
            </p>
          </div>

          {/* Кетъринг */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🍰</div>
            <h3 class="text-2xl font-semibold mb-2">Кетъринг</h3>
            <p class="text-gray-600">
              Специално подбрани храни и напитки, които ще зарадват всички ваши гости.
            </p>
          </div>
        </div>
        <div class="mt-16 mb-24">
          <Link href="/contacts" class="bg-eventica-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Свържете се с нас
          </Link>
        </div>
      </section>
    </>
  );
});

// Define the document head for SEO
export const head: DocumentHead = {
  title: 'Eventica | Организация на Gender Reveal партита',
  meta: [
    {
      name: 'description',
      content: 'Направете момента незабравим с Евентика. Професионална организация на партита за разкриване на пола. Цялостна реализация на събития. Пестим вашето време и ресурси.',
    },
    {
      property: 'og:title',
      content: 'Eventica | Gender Reveal партита',
    },
    {
      property: 'og:description',
      content: 'Направете момента незабравим с Евентика. Професионална организация на партита за разкриване на пола. Цялостна реализация на събития. Пестим вашето време и ресурси.',
    },
    {
      property: 'og:image',
      content: '../../public/images/genderreveal-slide.jpg',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://example.com/gender-reveal',
    },
  ],
};