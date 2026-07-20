import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
    rules: {
        'vue/no-multiple-template-root': 'off',
        'vue/multi-word-component-names': 'off',
        'no-undef': 'off',
        'no-console': 'warn',
        'no-debugger': 'error',
        'prefer-const': 'error',
        'no-var': 'error',
        'indent': ['error', 4],
        'vue/html-indent': ['error', 4],
        'vue/attribute-hyphenation': ['error', 'always'],
        'vue/v-on-event-hyphenation': ['error', 'always'],
        'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
    },
}).override('nuxt/vue/rules', {
    rules: {
        'vue/max-attributes-per-line': ['error', { singleline: 1, multiline: 1 }],
    },
})
