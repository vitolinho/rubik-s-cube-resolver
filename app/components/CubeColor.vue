<script setup>

defineProps({
    color: {
        type: String,
        default: ''
    }
})

const colors = {
    W: 'bg-white',
    G: 'bg-green-400',
    R: 'bg-red-400',
    B: 'bg-blue-400',
    O: 'bg-orange-400',
    Y: 'bg-yellow-400',
}

</script>

<template>
    <div
        class="size-10"
        :class="colors[color]"
    />
</template>
