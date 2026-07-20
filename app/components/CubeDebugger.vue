<script setup>

const faces = [
    new Face('W').face,
    new Face('G').face,
    new Face('R').face,
    new Face('B').face,
    new Face('O').face,
    new Face('Y').face
]

const myCube = new Cube(faces).faces

</script>

<template>
    <Cube :cube="myCube" />
</template>
