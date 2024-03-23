const fontSizes = document.querySelector('.book__control_font-size').querySelectorAll('.font-size')
const fontColors = document.querySelector('.book__control_color').querySelectorAll('.color')
const backgrounds = document.querySelector('.book__control_background').querySelectorAll('.color')
const book = document.querySelector('.book')

fontSizes.forEach((fontSize) => {
    fontSize.addEventListener('click', (event) => {
        event.preventDefault();
        let fontSizeActive = document.querySelector('.font-size_active')
        book.classList.remove('font-size_' + fontSizeActive.dataset.size)
        fontSizeActive.classList.remove('font-size_active')
        fontSize.classList.add('font-size_active')
        book.classList.add('font-size_' + fontSize.dataset.size)
    })
})

fontColors.forEach((fontColor) => {
    fontColor.addEventListener('click', (event) => {
        event.preventDefault();
        let colorActive = document.querySelector('.color_active')
        book.classList.remove('book_color-' + colorActive.dataset.textColor)
        colorActive.classList.remove('color_active')
        fontColor.classList.add('color_active')
        book.classList.add('book_color-' + fontColor.dataset.textColor)
    })
})

backgrounds.forEach((background) => {
    background.addEventListener('click', (event) => {
        event.preventDefault();
        let backgroundActive = document.querySelector('.color_active')
        book.classList.remove('bg_color_' + backgroundActive.dataset.bgColor)
        backgroundActive.classList.remove('color_active')
        background.classList.add('color_active')
        book.classList.add('bg_color_' + background.dataset.bgColor)
    })
})