import { component$, useStore, $ } from "@builder.io/qwik";

export default component$(() => {
    const contactForm = useStore({
        name: '',
        email: '',
        phone: ''
      });
    
      const alertMessage = useStore({
        message: '',
        type: '' // success or error
      });
    
      const handleSubmit = $(async (event: Event) => {
        event.preventDefault(); // Prevent default form submission
        
        // Събиране на данните от формата
        const formData = {
          name: contactForm.name,
          email: contactForm.email,
          phone: contactForm.phone
        };
    
        // Логиране на данните за тест
        console.log("Form submitted with:", formData);
    
        try {
          // Изпращане на данни към сървъра (пример с Express бекенд)
          const response = await fetch('http://localhost:8080/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
        } catch (error) {
          console.error("Error during form submission:", error);
          alertMessage.message = "Възникна неочаквана грешка!";
          alertMessage.type = "error";
        }
      });    

  return (
    <section class="flex flex-col md:flex-row items-center justify-center w-full h-[93vh] bg-gray-50 p-8 mt-[60px]">
  {/* Left side - Contact Info */}
  <div class="flex-1 flex flex-col items-center justify-center text-center p-6">
    <h2 class="text-2xl font-semibold text-eventica-blue mb-4">Свържете се с нас директно</h2>
    <p class="text-lg text-gray-700 mb-2">Телефон:</p>
    <p class="text-lg font-semibold text-eventica-blue">+359 123 456 789</p>
    <p class="text-gray-500 mt-4">На разположение сме от понеделник до петък, 9:00 - 18:00.</p>
  </div>

  {/* Center Divider Line */}
  <div class="hidden md:block border-l-4 border-eventica-blue mx-6 h-[80%]"></div>

  {/* Right side - Contact Form */}
  <div class="flex-1 w-full p-6">
    <h2 class="text-2xl font-semibold text-center text-eventica-blue mb-6">Оставете данни и ние ще се свържем с вас</h2>
    <form onSubmit$={handleSubmit} method="POST" class="space-y-4">
      {/* Name Field */}
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Име</label>
        <input 
          type="text" 
          id="name" 
          value={contactForm.name} 
          onInput$={(e) => contactForm.name = (e.target as HTMLInputElement).value} 
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required 
        />
      </div>
      
      {/* Email Field */}
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Имейл</label>
        <input 
          type="email" 
          id="email" 
          value={contactForm.email} 
          onInput$={(e) => contactForm.email = (e.target as HTMLInputElement).value} 
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required 
        />
      </div>
      
      {/* Phone Field */}
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">Телефон</label>
        <input 
          type="tel" 
          id="phone" 
          value={contactForm.phone} 
          onInput$={(e) => contactForm.phone = (e.target as HTMLInputElement).value} 
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          required 
        />
      </div>

      {/* Submit Button */}
      <button type="submit" class="w-full bg-eventica-blue text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
        Изпрати
      </button>
      {/* Показване на съобщението под бутона */}
      {alertMessage.message && (
        <div class={`mt-4 text-center p-2 rounded-md ${alertMessage.type === 'success' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
          {alertMessage.message}
        </div>
      )}
    </form>
  </div>
</section>
  );
});