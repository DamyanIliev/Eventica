import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

interface EventCardProps {
  title: string;
  imageUrl: string;
  description: string;
  link: string;
}

export const EventCard = component$(({ title, imageUrl, description, link }: EventCardProps) => {
  return (
    <Link href={link} class="block max-w-sm w-full rounded-lg overflow-hidden shadow-lg m-6 bg-white hover:shadow-2xl transition duration-300 transform hover:scale-105">
      <img
        class="w-full h-64 object-cover"
        src={imageUrl}
        alt={title}
        width="400" 
        height="256" 
      />
      <div class="px-6 py-4">
        <h2 class="font-bold text-2xl mb-3">{title}</h2>
        <p class="text-gray-700 text-base">{description}</p>
      </div>
    </Link>
  );
});