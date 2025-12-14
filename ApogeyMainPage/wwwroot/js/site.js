document.addEventListener('DOMContentLoaded', () => {
    console.log("Started");

    //Объявление переменных кнопок
    const btnAccountant = document.getElementById('btn-accountant');
    const btnCandidate = document.getElementById('btn-candidate');

    //Объявление переменных блоков
    const contentAccountant = document.getElementById('accountant-info');
    const contentCandidate = document.getElementById('candidate-info');

    //Объявление переменных кнопок "back"
    const btnBackAccountant = document.getElementById('btn-back-accountant');
    const btnBackCandidate = document.getElementById('btn-back-candidate');

    //Проверка на получение всех элементов DOM
    if (!btnAccountant || !btnCandidate || !contentAccountant || !contentCandidate) {
        console.error('Элементы DOM дерева не были обнаружены!');
        return;
    }

    //Функция полного ресета страницы
    function resetAll() {
        contentAccountant.classList.add('hidden');
        contentCandidate.classList.add('hidden');

        contentAccountant.classList.add('opacity-0');
        contentCandidate.classList.add('opacity-0')

        btnAccountant.classList.remove('active-btn');
        btnCandidate.classList.remove('active-btn');
    }

    //Функция перехода на конкретную вкладку
    function openTab(tabName) {
        resetAll();

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
    }

    btnAccountant.addEventListener('click', () => openTab('accountant'));
    btnCandidate.addEventListener('click', () => openTab('candidate'));

    if (btnBackAccountant) btnBackAccountant.addEventListener('click', resetAll);
    if (btnBackCandidate) btnBackCandidate.addEventListener('click', resetAll);

})
