<script setup>

defineProps({
    cube: {
        type: Array,
        default: () => []
    }
})

const gridPositions = [
    'col-start-2 row-start-1',
    'col-start-2 row-start-2',
    'col-start-3 row-start-2',
    'col-start-4 row-start-2',
    'col-start-1 row-start-2',
    'col-start-2 row-start-3'
]

</script>

<template>
    <div class="grid grid-cols-4 grid-rows-3 gap-3 w-fit">
        <div
            v-for="(face, faceIndex) in cube"
            :key="`cube-face-${faceIndex}`"
            :class="gridPositions[faceIndex]"
        >
            <CubeFace :face="face" />
        </div>
    </div>
</template>
