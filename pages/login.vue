<template>
 <div class="relative">
   <topbar></topbar>
  <div class="font-sans">
    <div class="relative min-h-screen flex flex-col sm:justify-center items-center  ">
      <div class="relative sm:max-w-sm w-full">
        <div class="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label for="" class="block mt-3 text-lg text-gray-700 text-center font-semibold">
              Connectez vous !
            </label>
            <form method="#" action="#" class="mt-10">
                                            
              <div>
                <input type="email" placeholder="Entrez votre adresse email" class="mt-1 block w-full border-none px-2 bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">
              </div>
                  
              <div class="mt-7">                
                <input type="password" placeholder="Entrez votre code secret" class="mt-1 px-2 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0">                           
              </div>

              <div class="mt-7 flex">
                <label for="remember_me" class="inline-flex items-center w-full cursor-pointer">
                  <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" name="remember">
                  <span class="ml-2 text-sm text-gray-600">
                    Se souvenir de moi
                  </span>
                </label>
                  
                <div class="w-full text-right">     
                  <a class="underline text-sm text-gray-600 hover:text-gray-900" href="#">
                    Mots de passe oublier
                  </a>                                  
                </div>
              </div>
                  
              <div class="mt-7">
                <button class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                 Se connecter
                </button>
              </div>
                  
              <div class="flex mt-7 items-center text-center">
                <hr class="border-gray-300 border-1 w-full rounded-md">
                <label class="block font-medium text-sm text-gray-600 w-full">
                  ou
                </label>
                <hr class="border-gray-300 border-1 w-full rounded-md">
              </div>
                  
              <div class="flex mt-7 justify-center w-full">
                <button class="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Facebook
                </button>
                  
                <button class="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                  Google
                </button>
              </div>
                  
              <div class="mt-7">
                <div class="flex justify-center items-center">
                  <label class="mr-2" >Vous n'avez pas un compte?</label>
                    <a href="#" class=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Creer un compte
                    </a>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>         
  </div>
 </div>
</template>