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
    const btnBack = document.getElementById('btn-back');

    //Проверка на получение всех элементов DOM
    if (!btnAccountant || !btnCandidate || !contentAccountant || !contentCandidate || !defaultIntro) {
        console.error('Элементы DOM дерева не были обнаружены!');
        return;
    }

    //Функция полного ресета страницы
    async function resetToDefault() {
        $("html, body").animate({ scrollTop: 0 }, "slow").promise();
        contentAccountant.classList.add('opacity-0');
        contentCandidate.classList.add('opacity-0');
        await wait(300);
        contentAccountant.classList.add('hidden');
        contentCandidate.classList.add('hidden');
        if (iconsBottom) {
            iconsBottom.classList.add('hidden', 'opacity-0');
        }

        btnAccountant.classList.remove('active-btn');
        btnCandidate.classList.remove('active-btn');

        defaultIntro.classList.remove('hidden');

        if (header.classList.contains('text-center')) {
            header.classList.add('opacity-0');

            await wait(300);

            header.classList.remove('text-center');
            header.classList.remove('opacity-0');
        }

        await wait(20);

        defaultIntro.classList.remove('opacity-0', 'max-h-0');
        defaultIntro.classList.add('max-h-[3000px]', 'opacity-100');
    }

    //Функция перехода на конкретную вкладку
    async function openTab(tabName) {
        $("html, body").animate({ scrollTop: 0 }, 300).promise();
        defaultIntro.classList.remove('max-h-[3000px]', 'opacity-100');
        defaultIntro.classList.add('max-h-0', 'opacity-0');

        if (!header.classList.contains('text-center')) {
            header.classList.add('opacity-0');

            await wait(300);

            header.classList.add('text-center');
            header.classList.remove('opacity-0');
        }

        await wait(200);

        defaultIntro.classList.add('hidden');

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

        await wait(20);

        targetContent.classList.remove('opacity-0')

        if (iconsBottom) {
            iconsBottom.classList.remove('hidden');

            await wait(20);

            iconsBottom.classList.remove('opacity-0');
        }
    }

    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    btnAccountant.addEventListener('click', () => openTab('accountant'));
    btnCandidate.addEventListener('click', () => openTab('candidate'));

    if (btnBack) btnBack.addEventListener('click', resetToDefault);

})
