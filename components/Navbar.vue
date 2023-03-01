<template>
  <nav class="flex justify-between font-bold text-white items-center  py-6">
    <div>
      <nuxt-link to="/" class="text-4xl font-semibold text-blue-700 ">M e i x i</nuxt-link>
    </div>
    <div class=" ">
      <nuxt-link to="/" class="uppercase px-4 text-base ">Acceuil</nuxt-link>
      <nuxt-link to="/about" class="uppercase px-4 text-base">A propos</nuxt-link>
      <nuxt-link to="/contact" class="uppercase px-4 text-base">Contact</nuxt-link>
      <nuxt-link to="/login" class="uppercase px-4 text-base">Se connecter</nuxt-link>
      <nuxt-link to="/register" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 uppercase  focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Creer un compte</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>