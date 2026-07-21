<script setup>

const toast = useToast()

const moves = [
    {
        label: "U",
        method: 'U'
    },
    {
        label: "U'",
        method: 'UPrime'
    },
    {
        label: "U2",
        method: 'U2'
    },
    {
        label: "D",
        method: 'D'
    },
    {
        label: "D'",
        method: 'DPrime'
    },
    {
        label: "D2",
        method: 'D2'
    },
    {
        label: "L",
        method: 'L'
    },
    {
        label: "L'",
        method: 'LPrime'
    },
    {
        label: "L2",
        method: 'L2'
    },
    {
        label: "R",
        method: 'R'
    },
    {
        label: "R'",
        method: 'RPrime'
    },
    {
        label: "R2",
        method: 'R2'
    },
    {
        label: "F",
        method: 'F'
    },
    {
        label: "F'",
        method: 'FPrime'
    },
    {
        label: "F2",
        method: 'F2'
    },
    {
        label: "B",
        method: 'B'
    },
    {
        label: "B'",
        method: 'BPrime'
    },
    {
        label: "B2",
        method: 'B2'
    }
]

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

const inputScrambling = ref('')

const errorMessage = ref('')

const toScramble = () => {
    try {
        cubeInstance.applyMoves(inputScrambling.value)

        errorMessage.value = ''
    } catch (error) {
        errorMessage.value = error.message

        toast.add({
            id: 'errorInput',
            title: 'Invalid notation',
            description: error.message,
            icon: 'i-lucide-circle-alert',
            color: 'error'
        })
    }
}

const handleReset = () => {
    errorMessage.value = ''

    inputScrambling.value = ''

    cubeInstance.reset()
}

watch(inputScrambling, () => {
    errorMessage.value = ''
})

</script>

<template>
    <div>
        <div class="flex items-center gap-3">
            <UButton
                label="Reset"
                variant="outline"
                size="xl"
                class="cursor-pointer"
                @click="handleReset"
            />

            <UInput
                v-model="inputScrambling"
                size="xl"
                placeholder="Ex: R U R' U' F2 D L"
                autofocus
                @keyup.enter="toScramble"
            />
    
            <UButton
                label="Scramble"
                size="xl"
                class="cursor-pointer"
                @click="toScramble"
            />
        </div>

        <p
            v-if="errorMessage"
            class="text-red-500 mt-3"
        >
            {{ errorMessage }}
        </p>
    </div>

    <div class="my-10" />

    <Cube :cube="myCube" />

    <div class="my-10" />

    <div class="flex flex-row gap-3 flex-wrap">
        <UButton
            v-for="move of moves"
            :key="move.label"
            :label="move.label"
            variant="outline"
            size="xl"
            class="cursor-pointer"
            @click="cubeInstance[move.method]()"
        />
    </div>
</template>
