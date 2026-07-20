<script setup></script>

<template>
    <div>
        <Header />

        <UMain>
            <UContainer class="py-8">
                <slot />
            </UContainer>
        </UMain>

        <LazyFooter />
    </div>
</template>
