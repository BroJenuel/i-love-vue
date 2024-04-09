<script setup lang="ts">
const links = [
    [
        {
            title: "Products",
            links: [
                {
                    title: "Courses",
                    url: "#",
                },
                {
                    title: "Workshops",
                    url: "#",
                },
                {
                    title: "Vue Masterclass",
                    url: "#",
                },
                {
                    title: "Mastering Nuxt",
                    url: "#",
                },
            ],
        },
        {
            title: "Pricing",
            links: [
                {
                    title: "Plans",
                    url: "#",
                },
            ],
        },
        {
            title: "CONNEct with us",
            links: [
                {
                    title: "About Us",
                    url: "#",
                },
                {
                    title: "Careers",
                    url: "#",
                },
                {
                    title: "Contact Us",
                    url: "#",
                },
            ],
        },
    ],
    [
        {
            title: "EVENTS",
            links: [
                {
                    title: "Vue.js Nation",
                    url: "#",
                },
                {
                    title: "Nuxt Nation",
                    url: "#",
                },
                {
                    title: "Vue.js Forge",
                    url: "#",
                },
            ],
        },
        {
            title: "CORPORATE",
            links: [
                {
                    title: "Corporate Training",
                    url: "#",
                },
                {
                    title: "Developer Recruitment",
                    url: "#",
                },
                {
                    title: "Course Development",
                    url: "#",
                },
                {
                    title: "On-site Workshops",
                    url: "#",
                },
                {
                    title: "Consulting",
                    url: "#",
                },
                {
                    title: "Affiliate Programs",
                    url: "#",
                },
            ],
        },
        {
            title: "Resources",
            links: [
                {
                    title: "Articles",
                    url: "#",
                },
            ],
        },
    ],
];
</script>
<template>
    <footer
        class="w-full max-w-[1170px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[200px] mb-[130px]"
    >
        <div class="w-full lg:w-1/2 text-center lg:text-left">
            <img class="mb-[85px] mx-auto lg:mx-0" src="~/assets/media/Logo-with-letters.svg" />
            <p class="leading-[24px] mb-[61px]">
                Thanks to fine people like you, Vue School can proudly sponsor Evan and the future
                of Vue.js by being a Platinum Patreon
            </p>
            <h5 class="text-[22px] text-[#737B98] mb-[37px]">FOLLOW US IN SOCIAL MEDIA</h5>
            <div class="flex gap-[11px] md:gap-11 justify-center lg:justify-start">
                <img src="~/assets/media/icon/social-fb.svg" />
                <img src="~/assets/media/icon/social-tweeter.svg" />
                <img src="~/assets/media/icon/social-github.svg" />
                <img src="~/assets/media/icon/linkedin.svg" />
                <img src="~/assets/media/icon/social-youtube.svg" />
            </div>
        </div>
        <div
            class="w-full lg:w-1/2 flex text-center md:text-left items-center md:items-start flex-col md:flex-row justify-center md:justify-around gap-[30px]"
        >
            <div v-for="linksItem in links" class="flex flex-col gap-[50px]">
                <div v-for="dataLink in linksItem">
                    <h5 class="text-[22px] text-[#737B98] mb-[20px] font-medium uppercase">
                        {{ dataLink.title }}
                    </h5>
                    <ul class="flex flex-col gap-[14px]">
                        <li v-for="link in dataLink.links">
                            <a :href="link.url">{{ link.title }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
