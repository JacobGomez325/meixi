<template>
  <div>
    <div class="header">
      <div class="custom-shape-divider-bottom-1644914909">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
        </svg>
      </div>
      <div class="md:container mx-auto ">
        <navbar></navbar>
        <div style="margin-top:-80px" class="flex h-screen justify-center items-center">
          <div class="w-4/5  text-white ">
            <h1 class="text-6xl  text-center capitalize font-semibold py-8 ">Bienvenue sur <span class="text-blue-700">Meixi</span>  </h1>
            <p class="text-2xl mb-8 leading-10 text-center">Meixi est une plateforme web de service entre les parents d'eleves et les repititeurs . La plateforme à pour but d'acceuillir tout personne desireux monetiser leur savoir faire en donnant des cours de maison à domicile. </p>
            <div class="flex justify-center">
              <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 uppercase  focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">et si vous essayer pour voir !</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <main class="md:container mx-auto mt-12">
      
      <h1 class="text-4xl uppercase text-center font-bold py-8 ">trouver facilement des repititeurs </h1>
      <div>
        <div class="flex justify-center items-center pt-16 pb-8">
          <div>
            <span class="text-md inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 text-white rounded-full">Tous</span>
            <span class="text-md inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded-full">Mathematiques</span>
            <span class="text-md inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded-full">Physique & Chimie</span>
            <span class="text-md inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded-full">Science de la vie et la terre</span>
            <span class="text-md inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded-full">Histoire & Geographine</span>
            <span class="text-md inline-block py-2 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-gray-800 text-white rounded-full">...</span>
          </div>
        </div>
        <div class="listes">
          <card-prof></card-prof>
          <div class="flex justify-end items-center ">
            <nuxt-link to="listes-meixi" class="mr-2 hover:font-bold hover:underline font-bold">Voir plus </nuxt-link>
            <span  class="cursor-pointer shadow bg-primary text-white rounded-full p-2 hover:bg-red-700 :hover:transition-all py-2 ">
              <svg stroke="currentColor"  class="w-4 h-4 " fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg>
            </span>
          </div>
        </div>
      </div>
    </main>
    <div class="flex justify-center py-10">
      <div class="bg-gray-50 shadow-md rounded-lg p-4 w-2/4 ">
          <div class="flex  justify-between">
            <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="5.4em" width="5.4em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="2" d="M12,22 C12,22 2.99999999,18 3,11 L3,5 L12,2 L21,5 C21,5 21,11 21,11 C21,18 12,22 12,22 Z M12,14 C13.6568542,14 15,12.6568542 15,11 C15,9.34314575 13.6568542,8 12,8 C10.3431458,8 9,9.34314575 9,11 C9,12.6568542 10.3431458,14 12,14 Z M12,8 L12,5 M12,17 L12,14 M6,11 L9,11 M15,11 L18,11 M8,7 L10,9 M14,13 L16,15 M16,7 L14,9 M10,13 L8,15"></path></svg></span>
            <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" height="5.4em" width="5.4em" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path></svg></span>
            <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="5.4em" width="5.4em" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"></path><path fill-rule="evenodd" d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"></path></svg></span>
            <span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512"  height="5.4em" width="5.4em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></svg></span>
          </div>
          <div class="flex  justify-between">
            <span class="text-center uppercase text-lg font-semibold py-2">securité</span>
            <span class="text-center uppercase text-lg font-semibold py-2">facilité</span>
            <span class="text-center uppercase text-lg font-semibold py-2">vitesse</span>
            <span class="text-center uppercase text-lg font-semibold py-2">confiance</span>
          </div>
    </div>
    </div>
    <div>
      <stat></stat>
    </div>
    <footere></footere>
 </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Acceuil',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          content: 'Meixi plateforme web pour trouver facilement des repétiteurs pour vos enfants'
        }
      ]
    }
  },
  data() {
    return {
      
    }
  },
}
</script>
<style scoped>
.header {
  position: relative;
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to right, rgba(29, 78, 216,.4), rgba(36, 24, 24, 0.8)),url('/images/natasha-hall-9rBmRhysF9Y-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.custom-shape-divider-bottom-1644914909 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1644914909 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 120px;
}

.custom-shape-divider-bottom-1644914909 .shape-fill {
  fill: rgba(29, 78, 216,.4)
}
.center {
  opacity:45%;
  position:absolute;
  bottom:5%;
  left: 50%;
  transform: translateX(-50%)
}
</style>
