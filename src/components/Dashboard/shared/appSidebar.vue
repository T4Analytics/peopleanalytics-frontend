<template>
  <TransitionRoot as="template" :show="getSidebarOpen">
    <Dialog as="div" class="fixed inset-0 flex z-40" @close="closeSidebar">
      <TransitionChild
        as="template"
        enter="transition-opacity ease-linear duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
      </TransitionChild>
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <div
          class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white dark:bg-gray-800"
        >
          <TransitionChild
            as="template"
            enter="ease-in-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                @click="closeSidebar"
              >
                <span class="sr-only">Close sidebar</span>
                <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
              </button>
            </div>
          </TransitionChild>
          <div class="flex-shrink-0 flex items-center px-4">
            <img
              class="h-14 w-auto"
              src="../../../assets/t4-analytics-logo.png"
              alt="Easywire logo"
            />
          </div>
          <nav
            class="mt-5 flex-shrink-0 h-full divide-y divide-secondary dark:divide-gray-600 overflow-y-auto"
            aria-label="Sidebar"
          >
            <div class="px-2 space-y-1">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="{ name: item.href }"
                class="link group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-800 hover:text-primary dark:text-gray-100 dark:hover:text-primary"
                :aria-current="item.current ? 'page' : undefined"
                @click="closeSidebar()"
              >
                <component
                  :is="item.icon"
                  class="mr-4 flex-shrink-0 h-6 w-6"
                  aria-hidden="true"
                />
                {{ item.name }}
              </router-link>
            </div>
            <div class="mt-6 pt-6">
              <div class="px-2 space-y-1">
                <router-link
                  v-for="item in secondaryNavigation"
                  :key="item.name"
                  :to="{ name: item.href }"
                  class="link group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-800 hover:text-primary dark:text-gray-100 dark:hover:text-primary"
                  @click="closeSidebar()"
                >
                  <component
                    :is="item.icon"
                    class="mr-4 h-6 w-6"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </nav>
        </div>
      </TransitionChild>
      <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  UserIcon,
  CogIcon,
  HomeIcon,
  // ShieldCheckIcon,
  // QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/vue/outline";

const navigation = [
  { name: "Home", href: "Home", icon: HomeIcon },
  { name: "Account", href: "Account", icon: UserIcon },
];
const secondaryNavigation = [
  { name: "Settings", href: "Settings", icon: CogIcon },
  // { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
  // { name: "Privacy", href: "#", icon: ShieldCheckIcon },
];

export default {
  components: {
    Dialog,
    DialogOverlay,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  setup() {
    const store = useStore();

    const getSidebarOpen = computed(() => store.getters["ui/getSidebarOpen"]);
    const closeSidebar = () => {
      store.commit("ui/setSidebarOpen", false);
    };

    return {
      navigation,
      secondaryNavigation,
      getSidebarOpen,
      closeSidebar,
      store,
    };
  },
};
</script>
<style scoped>
.link.active {
  color: #448ab6;
  font-weight: bold;
}
</style>
