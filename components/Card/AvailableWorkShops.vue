<script setup lang="ts">
const availableWorkshops = [
    {
        time: "December 14th - 11:00 AM (GMT-3)",
        title: "Vue.js Fundamentals",
        hours: 15,
        description: `A progressive framework for building user interfaces. Unlike other
                        monolithic frameworks, Vue is designed from the ground up to be
                        incrementally...`,
        profile: "/images/badge/profile.png",
        author: "Steve Popoola",
    },
    {
        time: "December 14th - 11:00 AM (GMT-3)",
        title: "Vue 3 and Composition API",
        hours: 15,
        description: `Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...`,
        profile: "/images/badge/profile.png",
        author: "Steve Popoola",
    },
    {
        time: "December 14th - 11:00 AM (GMT-3)",
        title: "Vue 3 and Composition API",
        hours: 15,
        description: `Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...`,
        profile: "/images/badge/profile.png",
        author: "Steve Popoola",
    },
    {
        time: "December 14th - 11:00 AM (GMT-3)",
        title: "Vue 3 and Composition API",
        hours: 15,
        description: `Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...`,
        profile: "/images/badge/profile.png",
        author: "Steve Popoola",
    },
    {
        time: "December 14th - 11:00 AM (GMT-3)",
        title: "Vue 3 and Composition API",
        hours: 15,
        description: `Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...`,
        profile: "/images/badge/profile.png",
        author: "Steve Popoola",
    },
    {
        time: "December 14th - 11:00 AM (GMT-3)",
        title: "Vue 3 and Composition API",
        hours: 15,
        description: `Take a deep dive into the new and exciting features of Vue 3. Learn about Portals, Suspense, Composition API, Fragments, and much much more...`,
        profile: "/images/badge/profile.png",
        author: "Steve Popoola",
    },
];
</script>
<template>
    <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div class="flex flex-nowrap lg:ml-[110px] md:ml-20 ml-5 gap-[30px]">
            <div
                v-for="workshop in availableWorkshops"
                class="w-[345px] sm:w-[570px] rounded-4xl overflow-hidden cursor-pointer group relative"
            >
                <div
                    class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#4F08E6] to-[#FF4975] -z-10"
                ></div>
                <div
                    class="px-4 sm:px-9 py-6 bg-secondary-background bg-opacity-50 group-hover:bg-opacity-0 flex items-center gap-2 group-hover:shadow-2xl -z-10 transition-all"
                >
                    <Icon size="18" name="mdi:calendar" />
                    <span>{{ workshop.time }}</span>
                </div>
                <div
                    class="px-[16px] sm:px-[35px] py-[35px] bg-secondary-background group-hover:bg-opacity-50 text-[#737B98] flex flex-col gap-5 transition-all h-full"
                >
                    <div class="text-sm flex gap-9 group-hover:text-light-color transition-all">
                        <div>
                            <Icon
                                class="mr-2"
                                size="20"
                                name="material-symbols:play-circle-rounded"
                            />
                            <span>LIVE Training</span>
                        </div>
                        <div>
                            <Icon class="mr-2" size="20" name="ic:outline-access-time-filled" />
                            <span>{{ workshop.hours }} Hours</span>
                        </div>
                    </div>
                    <h3
                        class="text-light-color text-2xl font-medium group-hover:text-light-color transition-all"
                    >
                        {{ workshop.title }}
                    </h3>
                    <p class="text-sm group-hover:text-light-color transition-all">
                        {{ workshop.description }}
                    </p>
                    <div class="flex items-center gap-3">
                        <img width="24" height="24" class="w-6 h-6" :src="workshop.profile" />
                        <span class="group-hover:text-light-color transition-all text-sm">
                            {{ workshop.author }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.hide-scroll-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
    display: none;
}
</style>
