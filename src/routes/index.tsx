import { component$, useStore, useVisibleTask$} from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { EventCard } from "~/components/event-card";
import { Link } from '@builder.io/qwik-city';

export default component$(() => {

  const state = useStore({
    currentSlide: 0,
    slides: [
      '/images/wedding-slide.jpg',
      '/images/corporate-slide.jpg',
      '/images/party-slide.jpg',
      '/images/other-slide.jpg',
      '/images/prom-slide.jpg',
      '/images/baby-slide.png',

    ],
    isFadingOut: false,
  });

  // Смяна на изображенията на всеки 5 секунди с плавен преход
  useVisibleTask$(() => {
    const interval = setInterval(() => {
      state.isFadingOut = true;
      setTimeout(() => {
        state.currentSlide = (state.currentSlide + 1) % state.slides.length;
        state.isFadingOut = false;
      }, 1000); // Време за fade-out (1 секунда)
    }, 5000); // Интервал на смяна на снимките (5 секунди)

    return () => clearInterval(interval); // Спиране на интервала при премахване на компонента
  });

  const events = [
    {
      id: '1',
      title: 'Сватби',
      imageUrl: '/images/wedding.jpg',
      description: 'Ще организираме перфектната за теб сватба!',
      link: '/svatbi'
    },
    {
      id: '2',
      title: 'Корпоративни събития / Тиймбилдинг',
      imageUrl: '/images/corporate.jpg',
      description: 'Искате да организирате фирмено събите? Ние можем да помогнем.',
      link: '/corporate'
    },
    {
      id: '3',
      title: 'Балове',
      imageUrl: '/images/prom.jpg',
      description: 'Ние знаем коелко е важен този ден за теб. Не се притеснявай за организацията, ние поемаме!',
      link: '/proms'
    },
    {
      id: '4',
      title: 'Партита',
      imageUrl: '/images/party.jpg',
      description: 'Организираме незабравими партита за нашите клиенти! Парти за Рожден ден, или по друг повод.',
      link: '/party'
    },
    {
      id: '5',
      title: 'Разкриване пола на бебето',
      imageUrl: '/images/baby.jpg',
      description: 'Ако искате да разкриете пола на бебето ви, пред вашите приятели по интересен начин, ние ще се погрижим за организацията на партито.',
      link: '/genderreveel'
    },
    {
      id: '6',
      title: 'Събитие по ваша идея',
      imageUrl: '/images/other.jpg',
      description: 'Можем да организираме друго, желано от вас събитие.',
      link: '/other'
    },
    
  ];

  return (
    <> 
    {/* Call to action part */}
    <section class=" pt-[60px] relative w-full h-[99vh] bg-cover bg-center flex items-center justify-center text-center text-white overflow-hidden">
      {/* Overlay за по-голям контраст */}
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Основно съдържание */}
      <div class="relative z-10 max-w-2xl mx-auto p-4">
        <h1 class="text-5xl font-bold mb-4">
          Създаваме незабравими събития за вашите специални моменти
        </h1>
        <p class="text-lg mb-8">
          Персонализирани сватби, корпоративни събития и рождени дни – професионално организирани с внимание към всеки детайл.
        </p>
        {/* Бутоните за CTA */}
        <div class="flex justify-center space-x-4">
          <Link href="#contact" class="bg-eventica-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Свържете се с нас
          </Link>
          <Link href="#gallery" class="bg-white text-eventica-blue font-bold py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300">
            Разгледайте нашите събития
          </Link>
        </div>
      </div>

      {/* Фонова секция за изображения или видео */}
      <div
        class={`bg-red-950 opacity-50 absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${state.isFadingOut ? 'opacity-0' : 'opacity-100'}`}
        style={{
          backgroundImage: `url(${state.slides[state.currentSlide]})`,
        }}
      ></div>
    </section>

    {/* What we offer */}
      <div class="w-full mx-1 mt-8">
        <h1 class="text-3xl font-bold mb-6 flex flex-col text-center">Ние организираме</h1>
        <div class="flex flex-wrap justify-center">
        {events.map(event => (
          <EventCard
            key={event.id}
            title={event.title}
            imageUrl={event.imageUrl}
            description={event.description}
            link={event.link}
          />
        ))}
      </div>
    </div>
    <section class="pt-16 pb-24 px-4 md:px-8 text-center bg-gray-100">
      {/* Заглавие и уводен текст */}
      <div class="text-center mb-8">
        <h2 class="text-4xl font-bold text-eventica-blue mb-4">Защо да изберете нас?</h2>
        <p class="text-gray-700 text-lg max-w-2xl mx-auto">
           Ние създаваме незабравими събития. Пестим вашето време и усилия. Оптимизират разходите, така че да се наслаждавате на деня си. Предоставяме професионално организирани събития с внимание към всеки детайл.
        </p>
      </div>

      {/* Модел на работа в 3 стъпки */}
      <div class="grid gap-8 md:grid-cols-3 text-center max-w-5xl mx-auto">
        {/* Стъпка 1: Консултация */}
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="text-eventica-blue text-6xl mb-4">📞</div>
          <h3 class="text-2xl font-semibold mb-2">Консултация</h3>
          <p class="text-gray-600">
            Първата ни стъпка е обсъждане на вашите желания и визия, за да създадем събитие, което отговаря на очакванията ви.
          </p>
        </div>

        {/* Стъпка 2: Посредничество */}
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="text-eventica-blue text-6xl mb-4">🤝</div>
          <h3 class="text-2xl font-semibold mb-2">Посредничество</h3>
          <p class="text-gray-600">
            Ние се грижим за всички договорки с доставчици, осигурявайки качествени услуги на изгодни цени.
          </p>
        </div>

        {/* Стъпка 3: Организация */}
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div class="text-eventica-blue text-6xl mb-4">🎉</div>
          <h3 class="text-2xl font-semibold mb-2">Организация</h3>
          <p class="text-gray-600">
            Поемаме цялата координация и изпълнение, така че да се насладите напълно на вашия специален ден.
          </p>
        </div>
      </div>

      {/* Заключителен текст и бутон за действие */}
      <div class="mt-12">
        <Link href="#contact" class="bg-eventica-blue text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
          Свържете се с нас
        </Link>
      </div>
    </section>
    </>
  );
});



export const head: DocumentHead = {
  title: "Eventica",
  meta: [
    {
      name: "description",
      content: "Eventica - организира вашите събития!",
    },
  ],
};
