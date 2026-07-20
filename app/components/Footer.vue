<script setup>

const columns = ref([
    {
        label: 'Attributions',
        children: [
            {
                label: 'Rubik icons created by Good Ware - Flaticon',
                to: 'https://www.flaticon.com/free-icons/rubik',
                targer: '_blank'
            }
        ]
    }
])

</script>

<template>
    <USeparator
        type="solid"
        class="h-px"
    />

    <UFooterColumns
        :columns="columns"
        class="w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8 py-4 pb-20 gap-3 h-full"
    >
        <template #left>
            <div class="flex flex-col gap-3">
                <p class="shrink-0 font-bold text-xl text-highlighted">
                    Rubik's Cube Resolver
                </p>

                <p class="text-muted text-sm">
                    Copyright © 2026
                </p>
            </div>
        </template>
    </UFooterColumns>
</template>
