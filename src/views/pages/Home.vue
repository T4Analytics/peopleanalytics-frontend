<template>
  <section
    class="relative flex flex-col gap-y-10 items-center justify-center"
    aria-labelledby="pricing-heading"
  >
    <!-- <div class="flex gap-x-5">
      <div
        v-for="i in 6"
        :key="i"
        class="relative bg-gray-700 text-white rounded-lg p-5 w-[200px]"
      >
        Filtered by country
        <span class="absolute right-2 top-0 cursor-pointer">x</span>
      </div>
    </div> -->

    <div class="flex justify-center items-center flex-wrap gap-8">
      <div
        v-for="tier in pricing.tiers"
        :key="tier.title"
        class="relative p-6 bg-white dark:bg-gray-800 border border-gray-400 rounded-2xl dark:shadow-none dark:border-none flex flex-col"
      >
        <div class="flex-1">
          <h3
            class="text-xl font-semibold text-gray-500 dark:text-gray-300 text-center"
          >
            {{ tier.title }}
          </h3>
          <img class="m-4" src="../../assets/t4-analytics-logo.png" alt="" />
        </div>

        <a
          href="#"
          class="bg-primary text-white hover:bg-opacity-80 mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
          >{{ tier.cta }}</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import { CheckIcon } from "@heroicons/vue/outline";

const pricing = {
  tiers: [
    {
      title: "Workforce Summary",

      cta: "Go to page",
    },
    {
      title: "Diagnostic Analytics",

      cta: "Go to page",
    },
    {
      title: "Employee Attrition Risk Prediction",
      cta: "Go to page",
    },
    {
      title: "Applicant Scoring",

      cta: "Go to page",
    },
    {
      title: "Absenteeism Prediction",

      cta: "Go to page",
    },
  ],
};

export default {
  components: {
    CheckIcon,
  },
  setup() {
    return {
      pricing,
    };
  },
};
</script>
