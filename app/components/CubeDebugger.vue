<script setup>

const faces = [
    new Face('W').face,
    new Face('G').face,
    new Face('R').face,
    new Face('B').face,
    new Face('O').face,
    new Face('Y').face
]

const facesRef = ref(faces)

const cubeInstance = new Cube(facesRef.value)

const myCube = ref(cubeInstance.faces)

</script>

<template>

    <Cube :cube="myCube" />

    <div class="my-10" />

    <div class="flex flex-row gap-3 flex-wrap">
        <UButton
            label="U"
            variant="outline"
            @click="cubeInstance.U()"
        />
    
        <UButton
            label="U'"
            variant="outline"
            @click="cubeInstance.UPrime()"
        />

        <UButton
            label="U2"
            variant="outline"
            @click="cubeInstance.U2()"
        />

        <UButton
            label="D"
            variant="outline"
            @click="cubeInstance.D()"
        />

        <UButton
            label="D'"
            variant="outline"
            @click="cubeInstance.DPrime()"
        />

        <UButton
            label="D2"
            variant="outline"
            @click="cubeInstance.D2()"
        />

        <UButton
            label="F"
            variant="outline"
            @click="cubeInstance.F()"
        />

        <UButton
            label="F'"
            variant="outline"
            @click="cubeInstance.FPrime()"
        />

        <UButton
            label="F2"
            variant="outline"
            @click="cubeInstance.F2()"
        />

        <UButton
            label="B"
            variant="outline"
            @click="cubeInstance.B()"
        />

        <UButton
            label="B'"
            variant="outline"
            @click="cubeInstance.BPrime()"
        />

        <UButton
            label="B2"
            variant="outline"
            @click="cubeInstance.B2()"
        />

        <UButton
            label="R"
            variant="outline"
            @click="cubeInstance.R()"
        />

        <UButton
            label="R'"
            variant="outline"
            @click="cubeInstance.RPrime()"
        />

        <UButton
            label="R2"
            variant="outline"
            @click="cubeInstance.R2()"
        />

        <UButton
            label="L"
            variant="outline"
            @click="cubeInstance.L()"
        />

        <UButton
            label="L'"
            variant="outline"
            @click="cubeInstance.LPrime()"
        />

        <UButton
            label="L2"
            variant="outline"
            @click="cubeInstance.L2()"
        />
    </div>
</template>
