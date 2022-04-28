import template from './swag-shortcut.html.twig';

const { Component } = Shopware;

Component.register('swag-shortcut', {
    template,

    shortcuts: {
        'SYSTEMKEY+L': {
            active: () => true,
            method: 'logToConsole',
        },
    },

    methods: {
        logToConsole() {
            console.log('Shopware is great.');
        },
    },
});
