import { component$, useStore } from "@builder.io/qwik";

export default component$(() => {
    // Използваме useStore за да съхраняваме състоянието на менюто
    const state = useStore({ isOpen: false });

    return (
    <div class="w-screen h-[60px] bg-eventica-red flex items-center justify-between px-10">
        <div class="text-eventica-black text-3xl font-bold font-serif flex items-center cursor-pointer hover:text-eventica-yellow mt-[-10px]">
            <a href="/">Eventica<span class="text-5xl mt-[-13px]">.</span></a>
        </div>

        {/* Линкове на навигацията (за големи екрани) */}
        <div class="hidden md:flex items-center space-x-6 text-2xl font-serif">
            <a href="/" class="text-eventica-black hover:text-eventica-yellow">Home</a>
            <a href="/svatbi" class="text-eventica-black hover:text-eventica-yellow">Сватби</a>
            <a href="#" class="text-eventica-black hover:text-eventica-yellow">Services</a>
            <a href="#" class="text-eventica-black hover:text-eventica-yellow">Contact</a>

            {/* CTA бутон със същата височина */}
            <a href="#contact" class="bg-eventica-yellow hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center">
            Свържи се с нас
            </a>
        </div>

    {/* Бургер бутон за мобилно меню (за малки екрани) */}
        <div class="md:hidden flex items-center">
            <button
                class="text-eventica-black focus:outline-none"
                onClick$={() => { state.isOpen = !state.isOpen; }}
            >
                {state.isOpen ? (
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                ) : (
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                )}
            </button>
        </div>

    {/* Мобилно меню */}
        {state.isOpen && (
            <div class="md:hidden bg-eventica-red bg-opacity-90 text-eventica-black text-center text-2xl font-serif w-1/2 h-fit mt-[59px] fixed top-0 right-0 flex flex-col space-y-4 py-4 shadow-lg transition-transform transform translate-x-0">
                <a href="/" class="block py-2 hover:text-eventica-yellow">Home</a>
                <a href="/svatbi" class="block py-2 hover:text-eventica-yellow">Сватби</a>
                <a href="#" class="block py-2 hover:text-eventica-yellow">Services</a>
                <a href="#" class="block py-2 hover:text-eventica-yellow">Contact</a>

                <a href="#contact" class="block bg-eventica-yellow hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 items-center">
                Свържи се с нас
                </a>
            </div>
        )}
    </div>
    );
});