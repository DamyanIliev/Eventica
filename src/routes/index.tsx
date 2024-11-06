import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { EventCard } from "~/components/event-card";

export default component$(() => {
  const events = [
    {
      id: '1',
      title: 'Сватби',
      imageUrl: '/images/wedding2.jpg',
      description: 'Ще организираме перфектната за теб сватба!',
      link: '/svatbi'
    },
    {
      id: '2',
      title: 'Корпоративни събития',
      imageUrl: '/images/corporate.jpg',
      description: 'Имате идея за фирмено събите? Ние можем да помогнем.',
      link: '/corporate'
    },
  ];

  return (
    <>
       <div class="container mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold mb-6">Ние организираме</h1>
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
