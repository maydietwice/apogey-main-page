document.addEventListener('DOMContentLoaded', () => {
    console.log("Started");

    //Объявление переменных кнопок
    const btnAccountant = document.getElementById('btn-accountant');
    const btnCandidate = document.getElementById('btn-candidate');

    //Блоки для переключения
    const defaultIntro = document.getElementById('default-intro');

    //Блоки для смещения
    const header = document.getElementById('header');

    //Объявление переменных блоков
    const contentAccountant = document.getElementById('accountant-info');
    const contentCandidate = document.getElementById('candidate-info');

    //Копия иконок
    const iconsBottom = document.getElementById('copy-configurations');

    //Объявление переменных кнопок "back"
    const btnBackAccountant = document.getElementById('btn-back-accountant');
    const btnBackCandidate = document.getElementById('btn-back-candidate');

    //Проверка на получение всех элементов DOM
    if (!btnAccountant || !btnCandidate || !contentAccountant || !contentCandidate || !defaultIntro) {
        console.error('Элементы DOM дерева не были обнаружены!');
        return;
    }

    //Функция полного ресета страницы
    function resetToDefault() {
        contentAccountant.classList.add('hidden', 'opacity-0');
        contentCandidate.classList.add('hidden', 'opacity-0');
        if (iconsBottom) {
            iconsBottom.classList.add('hidden', 'opacity-0');
        }

        btnAccountant.classList.remove('active-btn');
        btnCandidate.classList.remove('active-btn');

        defaultIntro.classList.remove('hidden');

        header.classList.add('opacity-0');
        setTimeout(() => {
            header.classList.remove('text-center');
            header.classList.remove('opacity-0');
            setTimeout(() => {
                defaultIntro.classList.remove('opacity-0', 'max-h-0');
                defaultIntro.classList.add('max-h-[3000px]', 'opacity-100');
            }, 20);
        }, 300);
    }

    //Функция перехода на конкретную вкладку
    function openTab(tabName) {
        defaultIntro.classList.remove('max-h-[3000px]', 'opacity-100');
        defaultIntro.classList.add('max-h-0', 'opacity-0');

        if (!header.classList.contains('text-center')) {
            header.classList.add('opacity-0');
            setTimeout(() => {
                header.classList.add('text-center');
                header.classList.remove('opacity-0');
            }, 300);
        }

        setTimeout(() => {
            defaultIntro.classList.add('hidden');
        }, 500)

        contentAccountant.classList.add('hidden', 'opacity-0');
        contentCandidate.classList.add('hidden', 'opacity-0');

        btnAccountant.classList.remove('active-btn');
        btnCandidate.classList.remove('active-btn');

        let targetContent;
        let targetBtn;

        if (tabName === 'accountant') {
            targetContent = contentAccountant;
            targetBtn = btnAccountant;
        } else {
            targetContent = contentCandidate;
            targetBtn = btnCandidate;
        }
        targetBtn.classList.add('active-btn');
        targetContent.classList.remove('hidden');

        setTimeout(() => {
            targetContent.classList.remove('opacity-0')
        }, 20);

        if (iconsBottom) {
            iconsBottom.classList.remove('hidden');
            setTimeout(() => {
                iconsBottom.classList.remove('opacity-0');
            })
        }
    }

    btnAccountant.addEventListener('click', () => openTab('accountant'));
    btnCandidate.addEventListener('click', () => openTab('candidate'));

    if (btnBackAccountant) btnBackAccountant.addEventListener('click', resetToDefault);
    if (btnBackCandidate) btnBackCandidate.addEventListener('click', resetToDefault);

})
