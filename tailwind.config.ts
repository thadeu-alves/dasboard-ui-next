/* tailwind.config.js */
module.exports = {
    theme: {
        extend: {
            utilities: {
                '.hide-scrollbar': {
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
            },
        },
    },
};
