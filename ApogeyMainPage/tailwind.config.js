module.exports = {
    content: [
        './Pages/**/*.cshtml',  // Для Razor Pages
        './Views/**/*.cshtml',  // Для MVC
        './Areas/**/*.cshtml'
    ],
    safelist: [
        'max-h-[3000px]',
        'max-h-0',
        'opacity-0',
        'opacity-100',
        'hidden',
        'active-btn' // для компиляции TailWind'ом
    ],
    theme: { extend: {} },
    plugins: [],
}
