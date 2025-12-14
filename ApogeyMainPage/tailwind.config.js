module.exports = {
    content: [
        './Pages/**/*.cshtml',  // Для Razor Pages
        './Views/**/*.cshtml',  // Для MVC
        './Areas/**/*.cshtml'
    ],
    safelist: [
        'active-btn'
    ],
    theme: { extend: {} },
    plugins: [],
}
