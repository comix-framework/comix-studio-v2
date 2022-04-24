module.exports = {
    theme: {
        extend: {
            screens: {
                chap: '1300px',
                web: '990px'
            },
            maxWidth: {
                max: '990px'
            },
            fontFamily: {
                nunito: [
                    'Nunito Sans',
                    'SF Pro Text',
                    'SF Pro Icons',
                    'Roboto',
                    'Helvetica Neue',
                    'Helvetica',
                    'Arial',
                    'sans-serif'
                ]
            },
            fontSize: {
                mini: '.7rem',
                'semi-mini': '.8rem',
                tiny: '.9375rem'
            },
            backgroundImage: {
                'title-pattern': "url('/images/title.svg')",
                'play-pattern': "url('/images/gplaypattern.png')"
            },
            backgroundPosition: {
                title: '100% 50%'
            },
            colors: {
                primary: {
                    50: '#f5f7ff',
                    100: '#ebf0fe',
                    200: '#ced9fd',
                    300: '#b1c2fb',
                    400: '#7694f8',
                    500: '#3b66f5',
                    600: '#355cdd',
                    700: '#2c4db8',
                    800: '#233d93',
                    900: '#1d3278'
                }
            }
        }
    },
    //plugins: [require('@tailwindcss/line-clamp')]
}
