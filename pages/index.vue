<script setup lang="ts">
const config = useRuntimeConfig();

const SanityProjectID = config.public.sanityProjectId;
const { data } = await useAsyncData("landing", () =>
    $fetch(
        "https://" +
            SanityProjectID +
            ".api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%27page%27+%26%26+title+%3D%3D+%27Landing%27%5D+&perspective=published"
    )
);

const landing = (data.value as any).result[0].pageBuilder as Array<any>;
const heading = computed(() => {
    if (!landing) return null;
    return landing.filter((item) => {
        return item._type === "hero";
    })[0];
});
const heroTitle = heading.value
    ? heading.value.heading
    : `Complete
                <span class="text-primary">Vue.js<br />training</span> solutions <br />for companies`;
const heroParagraph = heading.value
    ? heading.value.paragraph
    : `Training solutions designed for companies, agencies and organizations with developers using or who are considering using the Vue.js framework`;
const buttonText = heading.value ? heading.value.buttonText : `Talk to Sales`;

const lessonSummary = computed(() => {
    if (!landing) return null;
    return landing.filter((item) => {
        return item._type === "lessonSummary";
    })[0];
});
const videoLessons = lessonSummary.value ? lessonSummary.value.lessons : 763;
const hoursLessons = lessonSummary.value ? lessonSummary.value.hours : 64;
const coursesLessons = lessonSummary.value ? lessonSummary.value.courses : 40;

const plans = computed(() => {
    if (!landing) return null;
    return landing.filter((item) => {
        return item._type === "plans";
    })[0];
});
const basicPlanBulletPoints = computed(() => {
    if (plans.value && plans.value.planBulletPoint.basic) {
        return (plans.value.planBulletPoint.basic.bulletPoints as Array<any>).map((item) => {
            return {
                title: item.title,
                disabled: !item.isActive,
                bold: item.bold,
            };
        });
    } else {
        return [];
    }
});

const professionalPlanBulletPoints = computed(() => {
    if (plans.value && plans.value.planBulletPoint.professional) {
        return (plans.value.planBulletPoint.professional.bulletPoints as Array<any>).map((item) => {
            return {
                title: item.title,
                disabled: !item.isActive,
                bold: item.bold,
            };
        });
    } else {
        return [];
    }
});

const basicPlusPlanBulletPoints = computed(() => {
    if (plans.value && plans.value.planBulletPoint.basicPlus) {
        return (plans.value.planBulletPoint.basicPlus.bulletPoints as Array<any>).map((item) => {
            return {
                title: item.title,
                disabled: !item.isActive,
                bold: item.bold,
            };
        });
    } else {
        return [];
    }
});
</script>
<template>
    <section
        class="w-full max-w-[1170px] mx-auto flex flex-col lg:flex-row items-center gap-10 justify-between mt-[20px] md:mt-[60px] lg:mt-[80px] px-[15px]"
    >
        <div class="w-full max-w-[570px] flex flex-col items-center lg:items-start gap-[30px]">
            <h1
                class="text-[40px] sm:text-[60px] leading-[47.4px] text-center lg:text-left sm:leading-[71.1px] font-[700]"
                v-html="heroTitle"
            ></h1>
            <p
                class="sm:text-[22px] leading-[30px] text-center lg:text-left"
                v-html="heroParagraph"
            ></p>
            <div>
                <Button class="font-[500]">{{ buttonText }}</Button>
            </div>
        </div>
        <div>
            <img class="" src="~/assets/media/hero.svg" />
        </div>
    </section>
    <section class="relative pt-20 px-[15px] w-full my-10">
        <div>
            <img src="~/assets/media/bg/wave-2.svg" class="w-full absolute top-0 left-0 -z-10" />
            <img src="~/assets/media/bg/wave-1.svg" class="w-full absolute top-109 left-0 -z-10" />
        </div>
        <div
            class="w-full max-w-[1170px] mx-auto flex items-center gap-[24px] sm:gap-[40px] bg-dark-background bg-opacity-90 p-[24px] sm:p-[40px] rounded-[30px] flex-col sm:flex-row text-center sm:text-left"
        >
            <img class="w-[100px] sm:w-[280px]" src="~/assets/media/Logo.svg" />
            <div class="flex flex-col gap-[32px]">
                <h2
                    class="text-[24px] sm:text-[40px] leading-[28.44px] sm:leading-[47.4px] font-[700]"
                >
                    About Vue School corporate training
                </h2>
                <p class="text-[14px] sm:text-[22px] leading-[24px] sm:leading-[30px]">
                    School is the #1 training resource for Vue.js and has provided the most
                    comprehensive Vue.js video library in the world to over 140,000 developers.
                    Private individuals and small to enterprise companies have used our services to
                    develop their skills since 2016.
                </p>
            </div>
        </div>
        <div
            class="w-full max-w-[1170px] mx-auto items-center gap-[31px] bg-opacity-90 hidden lg:flex mt-[64px]"
        >
            <img class="w-[169px]" src="~/assets/media/company-logo/google.svg" />
            <img class="w-[169px]" src="~/assets/media/company-logo/google.svg" />
            <img class="w-[169px]" src="~/assets/media/company-logo/google.svg" />
            <img class="w-[169px]" src="~/assets/media/company-logo/google.svg" />
            <img class="w-[169px]" src="~/assets/media/company-logo/google.svg" />
            <img class="w-[169px]" src="~/assets/media/company-logo/google.svg" />
        </div>

        <div
            class="w-full max-w-[1170px] mx-auto items-center justify-between bg-opacity-90 flex flex-col lg:flex-row mt-[90px] lg:mt-[204px] text-center lg:text-left gap-[29px]"
        >
            <div class="w-full max-w-[570px]">
                <h3
                    class="text-transparent text-[16px] sm:text-[24px] bg-clip-text bg-gradient-to-r from-primary to-[#00F0FF] leading-[28.44px] font-[500]"
                >
                    YOUR #1 SOURCE OF VUE.JS COURSES
                </h3>
                <h2
                    class="text-[40px] sm:text-[60px] leading-[47.4px] sm:leading-[71.1px] font-[700]"
                >
                    Full Stack
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00F0FF]"
                    >
                        Vue
                    </span>
                    <span
                        class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00F0FF]"
                    >
                        Training
                    </span>
                    Solutions
                </h2>
            </div>
            <div class="flex gap-[20px] sm:gap-[61px]">
                <div class="flex flex-col items-center">
                    <div
                        class="text-[64px] sm:text-[90px] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00F0FF]"
                    >
                        {{ videoLessons }}
                    </div>
                    <div class="text-sm">
                        <Icon name="material-symbols:play-circle-rounded" class="mr-1" />
                        Video Lessons
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <div
                        class="text-[64px] sm:text-[90px] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00F0FF]"
                    >
                        {{ coursesLessons }}
                    </div>
                    <div class="text-sm">
                        <Icon name="ph:wallet-fill" class="mr-1" />
                        Courses
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <div
                        class="text-[64px] sm:text-[90px] font-[500] text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00F0FF]"
                    >
                        {{ hoursLessons }}
                    </div>
                    <div class="text-sm">
                        <Icon name="material-symbols:alarm-rounded" class="mr-1" />
                        15 Hours
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section
        class="mt-[90px] sm:mt-[200px] relative overflow-x-hidden mb-[120px] md:mb-[140px] lg:mb-[160px]"
    >
        <img
            class="absolute w-full top-[180px] md:top-[120px] sm:top-[80px] scale-150 sm:scale-100 -z-20"
            src="~/assets/media/bg/wave-4.svg"
        />
        <img
            class="absolute w-full top-[290px] md:top-[500px] -z-10"
            src="~/assets/media/bg/wave-3.svg"
        />
        <h2
            class="text-[40px] sm:text-[60px] leading-[47.4px] sm:leading-[71.1px] font-[700] text-center mb-[56px] sm:mb-[120px]"
        >
            Discounted
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00F0FF]">
                Corporate
            </span>
            <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#00F0FF]">
                Training
            </span>
            Bundles
        </h2>
        <div
            class="w-full max-w-[1165px] mx-auto flex flex-col md:flex-row items-center md:items-start flex-wrap lg:flex-nowrap gap-8 justify-center"
        >
            <CardPrice class="order-1" title="Basic" :includes="basicPlanBulletPoints"> </CardPrice>
            <CardPrice
                class="order-3 lg:order-2"
                title="Professional"
                :includes="professionalPlanBulletPoints"
            >
                <template #icon>
                    <IconRocket class="size-10" />
                </template>
                <div class="flex gap-4 px-6 py-4 bg-primary bg-opacity-30 rounded-xl">
                    <div
                        class="bg-gradient-to-r from-[#1E0A44] to-[#300F55] overflow-hidden rounded-md w-[48px] h-[48px]"
                    >
                        <img
                            width="48"
                            height="48"
                            class="w-[48px] h-[48px]"
                            src="/images/thumbnails/the-vue-3-materials.png"
                        />
                    </div>
                    <div>
                        <p class="text-gray text-sm font-medium">Enough time to watch:</p>
                        <h4 class="text-lg font-medium">The Vue 3 Masterclass</h4>
                    </div>
                </div>
            </CardPrice>
            <CardPrice
                class="order-2 lg:order-3"
                title="Basic"
                :includes="basicPlusPlanBulletPoints"
            >
                <template #icon>
                    <IconLightning class="size-10" />
                </template>
            </CardPrice>
        </div>
    </section>
    <section class="mb-[200px]">
        <div
            class="w-full max-w-[1165px] mx-auto flex justify-center text-center lg:text-left lg:justify-between items-center mb-[56px] sm:mb-[72px]"
        >
            <h2 class="font-bold text-[40px] sm:text-6xl">Available Workshops</h2>
            <Button class="font-medium hidden lg:block">See all the workshops</Button>
        </div>
        <CardAvailableWorkShops />
        <Button class="font-medium block lg:hidden mx-auto">See all the workshops</Button>
    </section>
</template>
