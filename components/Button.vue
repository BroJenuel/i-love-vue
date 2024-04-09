<script setup lang="ts">
defineProps({
    type: {
        type: String,
        default: "default",
        validator(value: string) {
            return ["default", "border-gradient"].includes(value);
        },
    },
});
</script>
<template>
    <button
        :class="{
            'bg-gradient-to-b from-primary to-[#00C2FF] text-light-color  p-[2px]':
                type === 'border-gradient',
            '!bg-primary': type === 'default',
        }"
        class="rounded-[10px] group relative hover:bg-gradient-to-b from-primary to-[#00C2FF] hover:text-light-color"
    >
        <div
            class="absolute h-full w-full bg-primary bg-opacity-50 opacity-0 blur-md group-hover:opacity-100 -z-10"
        ></div>
        <span
            class="flex w-full rounded-[8px] px-[40px] py-[20px] justify-center fon-[500] z-10"
            :class="{
                'bg-dark-background group-hover:bg-opacity-0': type === 'border-gradient',
                'text-dark-background': type === 'default',
            }"
        >
            <slot />
        </span>
    </button>
</template>
