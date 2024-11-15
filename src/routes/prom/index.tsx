import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      {/* Заглавие на секцията */}
      <section class="h-[70vh] relative pt-[150px] pb-16 px-4 md:px-8 text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/prom-slide.jpg)' }}>
        <div class="absolute inset-0 bg-black bg-opacity-50"></div> {/* Полупрозрачна тъмна покривка */}
        <h1 class="relative text-4xl font-bold text-white mb-4">Организация на балове</h1>
        <p class="relative text-lg text-white max-w-3xl mx-auto mb-8">
          В Eventica знаем, че баловете са специални моменти, които остават в спомените за цял живот. Независимо дали става въпрос за бал за абитуриенти, годишнина или друг елегантен повод, ние ще се погрижим за всяка подробност, за да превърнем вашето събитие в истинска приказка.
        </p>
      </section>
      {/* Основна част със специализации и процес */}
      <section class="pt-16 pb-24 px-4 md:px-8 text-center">
        <h2 class="text-3xl font-semibold text-eventica-blue mb-8">Какво предлагаме?</h2>
        <div class="grid gap-8 md:grid-cols-3 text-center max-w-5xl mx-auto">
          {/* Първа стъпка: Индивидуален подход */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">👗/👔</div>
            <h3 class="text-2xl font-semibold mb-2">Елегантност и стил</h3>
            <p class="text-gray-600">
              Вашият бал заслужава най-доброто! Ще се погрижим за всеки детайл, от избора на облекло, през декорацията до изборът на меню, за да осигурим елегантността на събитието.
            </p>
          </div>

          {/* Втора стъпка: Комуникация с нас */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">💬</div>
            <h3 class="text-2xl font-semibold mb-2">Постоянна комуникация</h3>
            <p class="text-gray-600">
              Ще бъдете в постоянен контакт с нас по време на подготовката и изпълнението, за да осигурим, че всичко ще бъде на ниво.
            </p>
          </div>

          {/* Трета стъпка: Възможности за персонализация */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🎉</div>
            <h3 class="text-2xl font-semibold mb-2">Персонализирани решения</h3>
            <p class="text-gray-600">
              Всеки бал е уникален! Ние предлагаме персонализирани решения, които отразяват вашите желания и стил.
            </p>
          </div>
        </div>
      </section>

      {/* Нашият процес */}
      <section class="pt-16 pb-24 px-4 md:px-8 text-center bg-gray-100">
        <h2 class="text-3xl font-semibold text-eventica-blue mb-8">Нашият процес на работа</h2>
        <div class="flex flex-col md:flex-row justify-center gap-8 max-w-6xl mx-auto">
          {/* Стъпка 1: Консултация */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">📞</div>
            <h3 class="text-2xl font-semibold mb-2">Консултация</h3>
            <p class="text-gray-600">
              Ще започнем с консултация, за да разберем вашите идеи и как можем да направим бала ви незабравим.
            </p>
          </div>

          {/* Стъпка 2: Избор на локация и доставчици */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🏰</div>
            <h3 class="text-2xl font-semibold mb-2">Избор на локация и доставчици</h3>
            <p class="text-gray-600">
              Ние ще изберем идеалната локация и ще се погрижим за всички необходими услуги – от кетъринг до музика и фотографи.
            </p>
          </div>

          {/* Стъпка 3: Координация и изпълнение */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🎶</div>
            <h3 class="text-2xl font-semibold mb-2">Координация и изпълнение</h3>
            <p class="text-gray-600">
              Ние ще се погрижим за всички детайли и координацията на събитието, за да може вашето бал да премине безпроблемно.
            </p>
          </div>
        </div>

        {/* Call to Action buttons */}
        <div class="mt-12">
          <Link href="/contacts" class="bg-eventica-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Свържете се с нас
          </Link>
        </div>
      </section>

      {/* Галерия или testimonials */}
      {/*<section class="pt-16 pb-24 px-4 md:px-8 text-center">
        <h2 class="text-3xl font-semibold text-eventica-blue mb-8">Нашите балове</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-cover bg-center h-80" style={{ backgroundImage: 'url(/images/ball1.jpg)' }}></div>
          <div class="bg-cover bg-center h-80" style={{ backgroundImage: 'url(/images/ball2.jpg)' }}></div>
          <div class="bg-cover bg-center h-80" style={{ backgroundImage: 'url(/images/ball3.jpg)' }}></div>
        </div>
      </section>*/}
    </>
  );
});

// Define the document head for SEO
export const head: DocumentHead = {
  title: 'Организация на балове',
  meta: [
    {
      name: 'description',
      content: 'Eventica | Организация на балове',
    },
    {
      property: 'og:title',
      content: 'Eventica | Организация на балове',
    },
    {
      property: 'og:description',
      content: 'Eventica ще ви помогне да организирате един изискан и елегантен бал, който ще остане в спомените за цял живот.',
    },
    {
      property: 'og:image',
      content: '../../public/images/ball-slide.jpg',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://example.com/balls',
    },
  ],
};