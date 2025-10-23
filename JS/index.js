const toggleInput = document.getElementById('toggle-input');
const htmlElement = document.documentElement;

// التحقق من التفضيل المحفوظ
if (localStorage.getItem('theme') === 'dark') {
    htmlElement.setAttribute('data-bs-theme', 'dark');
    if (toggleInput) toggleInput.checked = true;
}

// إضافة حدث التغيير
if (toggleInput) {
    toggleInput.addEventListener('change', function() {
        if (this.checked) {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
}