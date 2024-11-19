import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      {/* Заглавие на секцията */}
      <section class="h-[70vh] relative pt-[150px] pb-16 px-4 md:px-8 text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/wedding3-slide.jpg)' }}>
        <div class="absolute inset-0 bg-black bg-opacity-50"></div> {/* Полупрозрачна тъмна покривка */}
        <h1 class="relative text-4xl font-bold text-white mb-4">Организация на сватби</h1>
          <p class="relative text-lg text-white max-w-3xl mx-auto mb-8">
            В Eventica разбираме колко важен е денят на вашата сватба. Затова ние се грижим за всяка малка подробност,
            за да бъде всичко перфектно. Ще спестим вашето време и усилия, като организираме сватбата по най-модерния
            начин, съобразен с вашия бюджет и желания. Вие имате контрол, а ние се грижим за изпълнението!
          </p>
      </section>
      {/* Основна част със специализации и процес */}
      <section class="pt-16 pb-24 px-4 md:px-8 text-center">
        <h2 class="text-3xl font-semibold text-eventica-blue mb-8">Какво предлагаме?</h2>
        <div class="grid gap-8 md:grid-cols-3 text-center max-w-5xl mx-auto">
          {/* Първа стъпка: Индивидуален подход */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">📋</div>
            <h3 class="text-2xl font-semibold mb-2">Индивидуален подход</h3>
            <p class="text-gray-600">
              Всеки клиент е уникален! Ние ще организираме сватбата ви според вашите желания и предпочитания.
            </p>
          </div>

          {/* Втора стъпка: Комуникация с нас */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">💬</div>
            <h3 class="text-2xl font-semibold mb-2">Постоянна комуникация</h3>
            <p class="text-gray-600">
              Ще бъдете в постоянен контакт с нас за всяка стъпка от организацията. Вашето мнение е важно!
            </p>
          </div>

          {/* Трета стъпка: Бюджет и спестяване */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">💰</div>
            <h3 class="text-2xl font-semibold mb-2">Оптимизиране на бюджета</h3>
            <p class="text-gray-600">
              Ще ви помогнем да организирате сватбата по най-ефективния начин, съобразен с вашия бюджет.
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
        Ще започнем с подробна консултация, за да разберем вашите желания и визия. Ние ще предложим най-добрите решения.
      </p>
    </div>

    {/* Стъпка 2: Избор на доставчици */}
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div class="text-eventica-blue text-6xl mb-4">🤝</div>
      <h3 class="text-2xl font-semibold mb-2">Избор на доставчици</h3>
      <p class="text-gray-600">
        Ще ви предложим най-добрите доставчици на услуги и ще водим преговори за вас, за да постигнем най-доброто съотношение качество-цена.
      </p>
    </div>

    {/* Стъпка 3: Координация и изпълнение */}
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div class="text-eventica-blue text-6xl mb-4">🎉</div>
      <h3 class="text-2xl font-semibold mb-2">Координация и изпълнение</h3>
      <p class="text-gray-600">
        Ние ще се погрижим за всички детайли и координацията на сватбата, за да може вие да се насладите на деня си.
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
      <section class="pt-16 pb-24 px-4 md:px-8 text-center">
        <h2 class="text-3xl font-semibold text-eventica-blue mb-8">Нашите сватби</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-cover bg-center h-80" style={{ backgroundImage: 'url(/images/wedding1.jpg)' }}></div>
          <div class="bg-cover bg-center h-80" style={{ backgroundImage: 'url(/images/wedding2.jpg)' }}></div>
          <div class="bg-cover bg-center h-80" style={{ backgroundImage: 'url(/images/wedding3.jpg)' }}></div>
        </div>
      </section>
    </>
  );
});

// Define the document head for SEO
export const head: DocumentHead = {
  title: 'Eventica | Организация на сватби',
  meta: [
    {
      name: 'description',
      content: 'Евентика ще Ви помогне да организирате мечтаната от вас сватба! Цялостна реализация на сватби. Пестим вашето време и ресурси.',
    },
    {
      property: 'og:title',
      content: 'Eventica | Oрганизация на сватби',
    },
    {
      property: 'og:description',
      content: 'Евентика ще Ви помогне да организирате мечтаната от вас сватба! Цялостна реализация на сватби. Пестим вашето време и ресурси',
    },
    {
      property: 'og:image',
      content: '/images/wedding3-slide.jpg',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://example.com/weddings',
    },
  ],
};