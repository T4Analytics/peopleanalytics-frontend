<template>
  <div class="h-screen flex">
    <div
      class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
    >
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img
            class="h-12 w-auto"
            src="../../assets/t4-analytics-logo.png"
            alt="Workflow"
          />
        </div>

        <div class="mt-8">
          <div class="mt-6">
            <form @submit.prevent="login" class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium">
                  Email address
                </label>
                <div class="mt-1">
                  <input
                  v-model="userData.email"
                    id="email"
                    name="email"
                    type="text"
                    autocomplete="email"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-gray-900"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label for="password" class="block text-sm font-medium">
                  Password
                </label>
                <div class="mt-1">
                  <input
                    v-model="userData.password"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm dark:bg-gray-900"
                  />
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    class="h-4 w-4 border-gray-300 rounded accent-primary"
                  />
                  <label for="remember-me" class="ml-2 block text-sm">
                    Remember me
                  </label>
                </div>

                <div class="text-sm">
                  <a href="#" class="font-medium text-primary hover:opacity-90">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:opacity-90"
                >
                  Sign in
                </button>
                <p class="text-center mt-5 text-red-600" v-if="feedback!=null">{{feedback}}</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover object-bottom"
        src="../../assets/login-background.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { ref,reactive,computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter()
const store = useStore()
const userData = reactive({
  email: null,
  password:null
})
const feedback = ref(null)
const email = computed(()=>store.getters["user/getEmail"])
const password = computed(()=>store.getters["user/getPassword"])

const login = () => {
  if (userData.email === email.value && userData.password === password.value) {
    store.commit('user/setUser',userData)
    router.push({name:'Dashboard'})
  } else {
    feedback.value = 'HATA'
    setTimeout(() => {
      feedback.value = null
    }, 3000);
  }
}




document.body.classList.add("h-full", "dark:bg-gray-900", "dark:text-white");
</script>

<style></style>
