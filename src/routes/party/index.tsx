import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      {/* Hero секция */}
      <section
        class="h-[70vh] relative flex flex-col items-center justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/party-slide.jpg)' }}
      >
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 class="relative text-4xl md:text-5xl font-bold text-white mb-4">
          Организация на различни видове партита
        </h1>
        <p class="relative text-lg md:text-xl text-white max-w-2xl mx-auto">
          Без значение дали става въпрос за рожден ден, тематично парти, фирмено събитие или празнуване на личен повод,
          ние ще направим вашето събитие незабравимо!
        </p>
      </section>

      {/* Какво предлагаме */}
      <section class="pt-16 pb-24 px-4 md:px-8 text-center">
        <h2 class="text-3xl font-semibold text-eventica-blue mb-8">Какво включва организацията?</h2>
        <div class="grid gap-8 md:grid-cols-3 text-center max-w-5xl mx-auto">
          {/* Декорация */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🎈</div>
            <h3 class="text-2xl font-semibold mb-2">Тематична декорация</h3>
            <p class="text-gray-600">
              Ще подготвим декорация, съобразена с вашите изисквания, тема и стил на събитието.
            </p>
          </div>

          {/* Забавления */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🎤</div>
            <h3 class="text-2xl font-semibold mb-2">Програма и забавления</h3>
            <p class="text-gray-600">
              От наемане на диджей до организиране на игри, шоу програми и танцьори - ще създадем уникално преживяване!
            </p>
          </div>

          {/* Кетъринг */}
          <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div class="text-eventica-blue text-6xl mb-4">🍹</div>
            <h3 class="text-2xl font-semibold mb-2">Кетъринг и напитки</h3>
            <p class="text-gray-600">
              Ще осигурим подходящо меню за вашето парти, включително коктейли, сладки изкушения и изискани ястия.
            </p>
          </div>
        </div>
      </section>

      {/* Видове партита */}
      <section class="pt-16 pb-24 px-4 md:px-8 text-center bg-gray-100">
  <h2 class="text-3xl font-semibold text-eventica-blue mb-8">Видове партита</h2>
  <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-center max-w-6xl mx-auto">
    {/* Рождени дни */}
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div class="text-eventica-blue text-6xl mb-4">🎂</div>
      <h3 class="text-2xl font-semibold mb-2">Рождени дни</h3>
      <p class="text-gray-600">
        От малки празненства до грандиозни събития – ще направим вашия рожден ден специален!
      </p>
    </div>

    {/* Тематични партита */}
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div class="text-eventica-blue text-6xl mb-4">🎭</div>
      <h3 class="text-2xl font-semibold mb-2">Тематични партита</h3>
      <p class="text-gray-600">
        Маскаради, филмови вечери или ретро партита – ние ще вдъхнем живот на всяка тема.
      </p>
    </div>

    {/* Градински партита */}
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div class="text-eventica-blue text-6xl mb-4">🌳</div>
      <h3 class="text-2xl font-semibold mb-2">Градински партита</h3>
      <p class="text-gray-600">
        Насладете се на свежия въздух с перфектно организирано градинско парти.
      </p>
    </div>

    {/* Момински и ергенски партита */}
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div class="text-eventica-blue text-6xl mb-4">💃🕺</div>
      <h3 class="text-2xl font-semibold mb-2">Момински и ергенски партита</h3>
      <p class="text-gray-600">
        Специални изненади и забавления за бъдещата булка или младоженец.
      </p>
    </div>

    {/* Детски партита */}
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div class="text-eventica-blue text-6xl mb-4">🎈</div>
      <h3 class="text-2xl font-semibold mb-2">Детски партита</h3>
      <p class="text-gray-600">
        Организирайте магическо парти за вашето дете с игри, анимации и забавления!
      </p>
    </div>

    {/* Лични поводи */}
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div class="text-eventica-blue text-6xl mb-4">🌟</div>
      <h3 class="text-2xl font-semibold mb-2">Лични поводи</h3>
      <p class="text-gray-600">
        Юбилеи, годишнини или специални празненства – ние ще осигурим всичко необходимо.
      </p>
    </div>
  </div>

  {/* Call-to-Action */}
  <div class="mt-12">
    <Link href="/contacts" class="bg-eventica-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
      Свържете се с нас
    </Link>
  </div>
</section>
      {/* Галерия 
      <section class="pt-16 pb-24 px-4 md:px-8 text-center">
        <h2 class="text-3xl font-semibold text-eventica-blue mb-8">Галерия</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-cover bg-center h-80" style={{ backgroundImage: 'url(/images/party1.jpg)' }}></div>
          <div class="bg-cover bg-center h-80" style={{ backgroundImage: 'url(/images/party2.jpg)' }}></div>
          <div class="bg-cover bg-center h-80" style={{ backgroundImage: 'url(/images/party3.jpg)' }}></div>
        </div>
      </section>
      */}
    </>
  );
});

// SEO настройки
export const head: DocumentHead = {
  title: '| Eventica | Организация на партита',
  meta: [
    {
      name: 'description',
      content: 'Планирайте своето незабравимо парти с Eventica! Тематични събития, рождени дни, корпоративни събития и много други.',
    },
    {
      property: 'og:title',
      content: 'Eventica | Организация на партита',
    },
    {
      property: 'og:description',
      content: 'Организирайте своето незабравимо парти с помощта на Eventica. Тематични събития, рождени дни, корпоративни събития и още!',
    },
    {
      property: 'og:image',
      content: '/images/party-slide.jpg',
    },
  ],
  links: [
    {
      rel: 'canonical',
      href: 'https://example.com/parties',
    },
  ],
};