import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div class = "text-red-900 text-4xl h-fit w-screen bg-eventica-white">
          Home
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
