<script setup lang="ts">
defineProps({
    min: {
        type: [Number, String],
        default: 5
    },
    max: {
        type: [Number, String],
        default: 20
    }
})

const model = ref(10)

</script>
<template>
    <div>
        <input v-model="model" type="range" :min="min" :max="max" class="w-full" />
        <div class="flex justify-between text-[#737B98] text-sm">
            <span>{{ min }}</span>
            <span>{{ max }}</span>
        </div>
    </div>
</template>
<style lang="scss">
/*Chrome*/
@media screen and (-webkit-min-device-pixel-ratio: 0) {
    input[type="range"] {
        -webkit-appearance: none;
        @apply bg-gray rounded-md;
    }

    input[type="range"]::-webkit-slider-runnable-track {
        height: 5px;
        -webkit-appearance: none;
        color: #13bba4;
        margin-top: -1px;
        border-radius: 100%;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        cursor: ew-resize;
        @apply bg-primary -mt-[5px] w-[15px] h-[15px] rounded-full;
    }
}
</style>
