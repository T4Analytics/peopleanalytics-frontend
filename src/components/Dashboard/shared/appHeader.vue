<template>
  <div
    class="flex-shrink-0 flex h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-none z-10"
  >
    <button
      type="button"
      class="px-4 border-r lg:border-none dark:border-gray-700 border-gray-200"
      @click="sidebarOpen"
    >
      <span class="sr-only">Open sidebar</span>
      <MenuAlt1Icon class="h-6 w-6" aria-hidden="true" />
    </button>
    <!-- Search bar -->
    <div
      class="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 items-center lg:gap-x-32"
    >
      <div class="flex-1 flex">
        <form class="w-full flex md:ml-0" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <div class="relative w-full text-gray-400 focus-within:text-gray-600">
            <div
              class="absolute inset-y-0 md:left-5 left-1 flex items-center pointer-events-none"
              aria-hidden="true"
            >
              <SearchIcon class="h-5 w-5" aria-hidden="true" />
            </div>
            <input
              id="search-field"
              name="search-field"
              class="block w-full h-full md:pl-12 pl-8 pr-3 py-2 rounded-md focus:outline-none sm:text-sm bg-input dark:bg-gray-900 text-primary dark:text-white md:font-semibold"
              placeholder="Search"
              type="search"
            />
          </div>
        </form>
      </div>
      <div class="ml-4 flex items-center md:ml-6">
        <button type="button" class="p-1 rounded-full">
          <span class="sr-only">View notifications</span>
          <BellIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          v-if="getThemeMode === 'light'"
          type="button"
          class="p-1 rounded-full"
          @click="setDarkMode"
        >
          <span class="sr-only">View notifications</span>
          <MoonIcon class="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          v-if="getThemeMode === 'dark'"
          type="button"
          class="p-1 rounded-full"
          @click="setLightMode"
        >
          <span class="sr-only">View notifications</span>
          <SunIcon class="h-6 w-6" aria-hidden="true" />
        </button>

        <!-- Profile dropdown -->
        <Menu as="div" class="ml-3 relative">
          <div>
            <MenuButton
              class="max-w-xs bg-white dark:bg-gray-800 rounded-full flex items-center text-sm lg:rounded-md lg:hover:bg-gray-50 lg:dark:hover:bg-opacity-5"
            >
              <img
                class="h-8 w-8 rounded-full"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFcORFVAgkVQg/profile-displayphoto-shrink_200_200/0/1649070771619?e=1658966400&v=beta&t=S4N4ggVQWFKNbq2eBS9Z2H1v-djLI5jF9p-c9PyTx9c"
                alt=""
              />
              <span class="hidden ml-3 text-sm font-medium lg:block"
                ><span class="sr-only">Open user menu for </span>Görkem
                Çakıcı</span
              >
              <ChevronDownIcon
                class="hidden flex-shrink-0 ml-1 h-5 w-5 lg:block"
                aria-hidden="true"
              />
            </MenuButton>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  >Your Profile</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                  >Settings</a
                >
              </MenuItem>
              <MenuItem>
                <a
                  @click="logout"
                  class="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                  >Logout</a
                >
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import {useRouter} from "vue-router"
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  BellIcon,
  MenuAlt1Icon,
  MoonIcon,
  SunIcon,
} from "@heroicons/vue/outline";
import { ChevronDownIcon, SearchIcon } from "@heroicons/vue/solid";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MoonIcon,
    SunIcon,
    ChevronDownIcon,
    MenuAlt1Icon,
    SearchIcon,
  },
  setup() {
    const router = useRouter()
    const store = useStore();
    const getThemeMode = computed(() => store.getters["ui/getThemeMode"]);
    const sidebarOpen = () => {
      store.commit("ui/setSidebarOpen", true);
    };
    const setLightMode = () => {
      store.commit("ui/setThemeMode", "light");
      document.documentElement.classList.remove("dark");
    };
    const setDarkMode = () => {
      store.commit("ui/setThemeMode", "dark");
      document.documentElement.classList.add("dark");
    };

    const logout = () => {
      router.push({ name: 'Login' })
      store.commit('user/setUser',null)
    }
    return {
      store,
      router,
      sidebarOpen,
      getThemeMode,
      setLightMode,
      setDarkMode,
      logout
    };
  },
};
</script>
<style></style>
