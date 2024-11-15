import { component$, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const state = useStore({ isOpen: false, isDropdownOpen: false });

  return (
    <header class="z-50 fixed top-0 left-0 w-full bg-eventica-blue shadow-md">
    <div class="w-screen h-[60px] bg-eventica-blue flex items-center justify-between px-10 relative z-10">
      <div class="text-white text-3xl font-bold font-serif flex items-center cursor-pointer hover:text-gray-400 mt-[-10px]">
        <Link href="/">Eventica<span class="text-5xl mt-[-13px]">.</span></Link>
      </div>

      {/* Desktop Navigation */}
      <div class="hidden md:flex items-center space-x-6 text-2xl font-serif relative">
        <Link href="/" class="text-white hover:text-gray-400">Начало</Link>
        
        {/* Dropdown Menu */}
        <div 
          class="relative text-white cursor-pointer hover:text-gray-400"
          onMouseEnter$={() => state.isDropdownOpen = true}
          onMouseLeave$={() => state.isDropdownOpen = false}
        >
            <span class = "inline-flex items-center">Събития <span class="mt-1"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                </svg>
                </span>
            </span>
          {state.isDropdownOpen && (
            <div class="absolute top-full mt-0 bg-white text-eventica-blue shadow-lg rounded-lg overflow-hidden z-40">
              <Link href="/wedding" class="block px-4 py-2 hover:bg-gray-200">Сватби</Link>
              <Link href="/corporate" class="block px-4 py-2 hover:bg-gray-200">Корпоративни събития/Тиймбилдинг</Link>
              <Link href="/prom" class="block px-4 py-2 hover:bg-gray-200">Балoве</Link>
              <Link href="/party" class="block px-4 py-2 hover:bg-gray-200">Парти</Link>
              <Link href="/genderreveel" class="block px-4 py-2 hover:bg-gray-200">Разкриване пола на бебето</Link>
              <Link href="/other" class="block px-4 py-2 hover:bg-gray-200">Събитие по ваша идея</Link>
            </div>
          )}
        </div>

        <Link href="/about" class="text-white hover:text-gray-400">За нас</Link>

        {/* Call-to-Action Button */}
        <Link href="/contacts" class=" bg-eventica-white hover:bg-gray-300 text-eventica-blue border border-blue-500 font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center">
          Свържи се с нас
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div class="md:hidden flex items-center z-20">
        <button
          class="text-white focus:outline-none"
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

      {/* Mobile Menu */}
      {state.isOpen && (
        <div class="md:hidden bg-eventica-blue bg-opacity-90 text-eventica-black text-center text-2xl font-serif w-1/2 h-fit mt-[59px] fixed top-0 right-0 flex flex-col space-y-4 py-4 shadow-lg transition-transform transform translate-x-0 z-30">
          <Link href="/" class="block py-2 text-white hover:text-gray-400">Начало</Link>
          
          {/* Mobile Dropdown */}
          <div>
            <button 
              onClick$={() => state.isDropdownOpen = !state.isDropdownOpen}
              class="py-2 ml-[12vw] w-full text-center text-white hover:text-gray-400 inline-flex items-center"
            >
              Събития 
                <span class="mt-1">
                    <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
                    </svg>
                </span>
            </button>
            {state.isDropdownOpen && (
              <div class="pl-6 text-white">
                <Link href="/wedding" class="block py-2 hover:text-gray-400">Сватби</Link>
                <Link href="/corporate" class="block px-4 py-2 hover:bg-gray-200">Корпоративни събития/Тиймбилдинг</Link>
              <Link href="/prom" class="block px-4 py-2 hover:bg-gray-200">Балoве</Link>
              <Link href="/party" class="block px-4 py-2 hover:bg-gray-200">Парти</Link>
              <Link href="/genderreveel" class="block px-4 py-2 hover:bg-gray-200">Разкриване пола на бебето</Link>
              <Link href="/other" class="block px-4 py-2 hover:bg-gray-200">Събитие по ваша идея</Link>
              </div>
            )}
          </div>

          <Link href="/about" class="block py-2 text-white hover:text-gray-400">За нас</Link>
          <Link href="/contacts" class="block bg-eventica-white hover:bg-gray-300 text-eventica-blue border font-bold py-2 px-4 transition duration-300 items-center">
            Свържи се с нас
          </Link>
        </div>
      )}
    </div>
    </header>
  );
});