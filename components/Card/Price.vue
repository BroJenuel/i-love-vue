<script setup lang="ts">
interface INCLUDE_ACCESS {
    title: string;
    bold?: boolean;
    disabled?: boolean;
}

defineProps({
    title: String,
    includes: Array as () => INCLUDE_ACCESS[],
});
</script>
<template>
    <div>
        <div
            class="w-[370px] bg-gradient-to-b from-[#FFFFFF33] to-[#FFFFFF00] p-[2px] rounded-[30px] bg-opacity-50"
        >
            <div
                class="p-[2px] bg-secondary-background rounded-[28px] px-6 py-10 flex flex-col gap-10 bg-opacity-90"
            >
                <div class="flex text-[22px] gap-2 leading-8 items-center font-[500]">
                    <slot name="icon">
                        <IconLeaf class="size-10" />
                    </slot>
                    {{ title }}
                </div>
                <div class="flex flex-col gap-6">
                    <template v-if="includes?.length">
                        <div class="text-primary">Includes 1 year access to:</div>
                        <div class="text-base flex flex-col gap-4">
                            <div
                                v-for="include in includes"
                                class="flex items-center justify-between"
                                :class="{ 'opacity-20': include.disabled }"
                            >
                                <div class="flex items-center gap-4">
                                    <IconGreenCheck v-if="!include.disabled" />
                                    <IconEx v-else />
                                    <span
                                        class="font-light"
                                        :class="{ '!font-bold': include.bold }"
                                        >{{ include.title }}</span
                                    >
                                </div>
                                <Icon name="mdi:information" />
                            </div>
                        </div>
                    </template>
                    <slot />
                    <div class="bg-dark-background rounded-2xl p-6">
                        <div class="flex items-center mb-5">
                            <span class="text-[40px] mr-[10px] font-[500]">$50</span>
                            <span class="text-[#A0A8C3]">/ seat / month</span>
                        </div>
                        <p class="mb-2">How many license do you need?</p>
                        <InputRange class="w-full mb-4" />
                        <div class="flex items-center gap-3">
                            <div
                                class="bg-[#0E0E1033] px-[14px] py-1 flex items-center gap-2 rounded-lg"
                            >
                                <IconGroup />
                                <span class="text-[26px] mr-[10px] font-[500]">12</span>
                                <span class="text-[#A0A8C3]">seats</span>
                            </div>
                            <div class="text-primary font-[500]">26% discound</div>
                        </div>
                    </div>
                </div>
                <div class="w-full text-center">
                    <Button class="font-[500] w-full mb-6"> Start Learning </Button>
                    <a href="#" class="text-center text-primary">Refer your manager</a>
                </div>
            </div>
        </div>
    </div>
</template>
