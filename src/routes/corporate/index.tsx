import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      {/* Заглавие на секцията */}
      <section class="h-[70vh] relative pt-[150px] pb-16 px-4 md:px-8 text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/corporate-slide.jpg)' }}>
        <div class="absolute inset-0 bg-black bg-opacity-50"></div> {/* Полупрозрачна тъмна покривка */}
        <h1 class="relative text-4xl font-bold text-white mb-4">Корпоративни събития и тиймбилдинг</h1>
        <p class="relative text-lg text-white max-w-3xl mx-auto mb-8">
          В Eventica вярваме, че добре организираните корпоративни събития и тиймбилдинг активности могат да сплотят екипите, да повишат мотивацията и да укрепят корпоративната култура. Нашият екип ще организира събитие, което ще остане в съзнанието на всички участници.
        </p>
      </section>
      {/* Основна част със специализации и процес */}
      <section class="pt-16 pb-24 px-4 md:px-8 text-center">
        <h2 class="text-3xl font-semibold text-eventica-blue mb-8">Какво предлагаме?</h2>
        <div class="grid gap-8 md:grid-cols-3 text-center max-w-5xl mx-auto">
          {/* Първа стъпка: Индивидуален подход */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🎯</div>
            <h3 class="text-2xl font-semibold mb-2">Индивидуален подход</h3>
            <p class="text-gray-600">
              Ние ще организираме вашето корпоративно събитие или тиймбилдинг активност така, че да отговори на нуждите и целите на вашия екип.
            </p>
          </div>

          {/* Втора стъпка: Комуникация с нас */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">💬</div>
            <h3 class="text-2xl font-semibold mb-2">Постоянна комуникация</h3>
            <p class="text-gray-600">
              Ще бъдете в постоянен контакт с нас по време на целия процес, за да осигурим безупречно изпълнение на събитието.
            </p>
          </div>

          {/* Трета стъпка: Постигане на резултати */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">📈</div>
            <h3 class="text-2xl font-semibold mb-2">Постигане на резултати</h3>
            <p class="text-gray-600">
              Нашите събития и активности са проектирани да подобрят ефективността, комуникацията и екипната работа във вашата компания.
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
              Ще започнем с консултация, за да разберем целите на събитието и как можем да подобрим взаимодействието в екипа.
            </p>
          </div>

          {/* Стъпка 2: Избор на активност */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🏃‍♂️</div>
            <h3 class="text-2xl font-semibold mb-2">Избор на активност</h3>
            <p class="text-gray-600">
              Ще подберем най-подходящите активности, които ще предизвикат екипната работа и ще се погрижат за мотивацията на всички.
            </p>
          </div>

          {/* Стъпка 3: Реализация на събитието */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🎉</div>
            <h3 class="text-2xl font-semibold mb-2">Реализация на събитието</h3>
            <p class="text-gray-600">
              Ще се погрижим за всички детайли на събитието, за да сте сигурни, че вашият екип ще се забавлява и ще постигне резултати.
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
        <h2 class="text-3xl font-semibold text-eventica-blue mb-8">Нашите корпоративни събития</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-cover bg-center h-80" style={{ backgroundImage: 'url(/images/team-building1.jpg)' }}></div>
          <div class="bg-cover bg-center h-80" style={{ backgroundImage: 'url(/images/team-building2.jpg)' }}></div>
          <div class="bg-cover bg-center h-80" style={{ backgroundImage: 'url(/images/team-building3.jpg)' }}></div>
        </div>
      </section>
      */}
    </>
  );
});

// Define the document head for SEO
export const head: DocumentHead = {
  title: 'Eventica | Организация на корпоративни събития и тиймбилдинг',
  meta: [
    {
      name: 'description',
      content: 'Евентика ще организира вашето корпоративно събитие или тимбилдинг с професионализъм и креативност! Цялостна реализация на корпоративни събития и тиймбилдинги. Пестим вашето време и ресурси.',
    },
    {
      property: 'og:title',
      content: 'Eventica | Организация на корпоративни събития и тиймбилдинг',
    },
    {
      property: 'og:description',
      content: 'Евентика ще организира вашето корпоративно събитие или тимбилдинг с професионализъм и креативност! Цялостна реализация на корпоративни събития и тиймбилдинги. Пестим вашето време и ресурси.',
    },
    {
      property: 'og:image',
      content: '/images/corporate-slide.jpg',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://example.com/team-building',
    },
  ],
};