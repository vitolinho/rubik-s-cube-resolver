<script setup>

defineProps({
    face: {
        type: Array,
        default: () => []
    }
})

</script>

<template>
    <div
        class="grid grid-cols-3 grid-rows-3 w-fit border border-black rounded-md overflow-hidden [&>*:not(:nth-child(3n))]:border-r [&>*:nth-child(n+4)]:border-t *:border-black"
    >
        <CubeColor
            v-for="(color, colorIndex) in face"
            :key="`cube-face-color-${colorIndex}`"
            :color="color"
        />
    </div>
</template>
