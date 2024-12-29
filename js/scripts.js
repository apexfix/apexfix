function switchLanguage(lang) {
    document.querySelectorAll('.content').forEach(content => {
        content.classList.add('hidden');
    });
    document.querySelector(`#content-${lang}`).classList.remove('hidden');
}
