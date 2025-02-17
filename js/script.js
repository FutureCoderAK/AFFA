////////////////////// Start Load /////////////////////
// إخفاء اللودر بعد تحميل الصفحة
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');  // الحصول على العنصر الذي يحمل الـ id "loader"
    loader.classList.add('vanish-mode');  // إضافة الـ class لإخفاء اللودر بشكل تدريجي
});
////////////////////// End Load /////////////////////

////////////////////// start Slider /////////////////////
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000);
////////////////////// start Slider /////////////////////

////////////////////// start Language /////////////////////
var languagespan = document.getElementById('languagespan');
var languageMenu = document.getElementById('languageMenu');
var closeButton = document.getElementById('closeButton');
var languageItems = document.querySelectorAll('#languageMenu ul li');

// إظهار القائمة عند الضغط على زر اللغات 
languagespan.addEventListener('click', function () {
    languageMenu.classList.add('visible');
});

// إخفاء القائمة عند الضغط على زر الإغلاق 
closeButton.addEventListener('click', function () {
    languageMenu.classList.remove('visible');
});

// إخفاء القائمة عند الضغط خارجها 
document.addEventListener('click', function (event) {
    if (!languageMenu.contains(event.target) && event.target !== languagespan) {
        languageMenu.classList.remove('visible');
    }
});

// تغيير النص مع الاحتفاظ بالأيقونة عند اختيار اللغة 
languageItems.forEach(function (item) {
    item.addEventListener('click', function () {
        var selectedLanguage = item.textContent; // الحصول على النص الجديد للغة
        languagespan.innerHTML = selectedLanguage + ' <i class="fa-solid fa-globe"></i>'; // تغيير النص مع الاحتفاظ بالأيقونة
        languageMenu.classList.remove('visible'); // إغلاق القائمة 
    });
});
////////////////////// End Language /////////////////////

////////////////////// start Open Img Profile /////////////////////
// فتح الصورة في نافذة العرض
function openImage(element) {
    const overlay = document.getElementById("overlay");
    const overlayImg = document.getElementById("overlay-img");
    overlayImg.src = element.src; // نسخ رابط الصورة المختارة
    overlay.style.display = "flex"; // عرض النافذة
    document.body.style.overflow = "hidden"; // تعطيل التمرير
}

// إغلاق نافذة العرض
function closeImage(event) {
    if (event?.target?.id === "overlay" || !event) {
        const overlay = document.getElementById("overlay");
        overlay.style.display = "none"; // إخفاء النافذة
        document.body.style.overflow = "auto"; // إعادة التمرير
    }
}
////////////////////// End Open Img Profile /////////////////////

////////////////////// start Open Work Time /////////////////////
const openPopupButton = document.getElementById('openPopup');
const overlaydark = document.getElementById('overlaydark');
const popup = document.getElementById('popup');

// فتح النافذة
openPopupButton.addEventListener('click', () => {
    overlaydark.classList.add('visible');
    popup.classList.add('visible');
});

// إغلاق النافذة عند الضغط على الخلفية
overlaydark.addEventListener('click', () => {
    overlaydark.classList.remove('visible');
    popup.classList.remove('visible');
});

// إغلاق النافذة عند الضغط على المفتاح Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        overlaydark.classList.remove('visible');
        popup.classList.remove('visible');
    }
});
////////////////////// End Open Work Time /////////////////////

////////////////////// Start /////////////////////
function toggleContent() {
    let block1 = document.getElementById("block1");
    let block2 = document.getElementById("block2");
    let toggleButton = document.querySelector(".random2");

    block1.classList.toggle("active");
    block2.classList.toggle("active");
    toggleButton.classList.toggle("active");
}
////////////////////// End /////////////////////

////////////////////// Start According /////////////////////
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.icon');

    if (content.classList.contains('open')) {
        content.classList.remove('open');
        icon.classList.remove('rotate');
    } else {
        // إغلاق جميع الأكوردين الأخرى
        document.querySelectorAll('.product-content').forEach(item => item.classList.remove('open'));
        document.querySelectorAll('.icon').forEach(icon => icon.classList.remove('rotate'));

        // فتح الأكوردين الحالي
        content.classList.add('open');
        icon.classList.add('rotate');
    }
}
////////////////////// End According /////////////////////

//////////////////////  Start Description  /////////////////////
document.querySelectorAll('.itemBox').forEach(item => {
    item.addEventListener('click', () => {
        let modalId = item.getAttribute('data-link-to');
        let modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add("open");
            document.body.style.overflow = 'hidden';  // تعطيل التمرير في الـ body
        }
    });
});

document.querySelectorAll('.hiddenLayer').forEach(modal => {
    modal.addEventListener('click', (event) => {
        if (event.target === modal || event.target.classList.contains('exitMark')) {
            modal.classList.remove("open");
            document.body.style.overflow = '';  // إعادة التمرير في الـ body
        }
    });
});

document.querySelectorAll('.goBack').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.hiddenLayer').classList.remove("open");
        document.body.style.overflow = '';  // إعادة التمرير في الـ body
    });
});
//////////////////////  End Description  /////////////////////

//////////////////////  Start Footer  /////////////////////
const openModalButton = document.getElementById('openModalButton');
const modalOverlay = document.getElementById('modalOverlay');
const modalPopup = document.getElementById('modalPopup');
const closeModalButton = document.getElementById('closeModalButton');

// فتح النافذة
openModalButton.addEventListener('click', () => {
    modalOverlay.classList.add('visible');
    modalPopup.classList.add('visible');
    document.body.classList.add("modal-open"); // منع التمرير
});

// إغلاق النافذة عند الضغط على الخلفية
modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.remove('visible');
    modalPopup.classList.remove('visible');
    document.body.classList.remove("modal-open"); // إعادة التمرير
});

// إغلاق النافذة عند الضغط على زر الإغلاق
closeModalButton.addEventListener('click', () => {
    modalOverlay.classList.remove('visible');
    modalPopup.classList.remove('visible');
    document.body.classList.remove("modal-open"); // إعادة التمرير
});

// إغلاق النافذة عند الضغط على المفتاح Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modalOverlay.classList.remove('visible');
        modalPopup.classList.remove('visible');
        document.body.classList.remove("modal-open"); // إعادة التمرير
    }
});
//////////////////////  End Footer  /////////////////////

//////////////////////  Start Description  /////////////////////
function updateDescription(card) {
    const description_textElement = card.querySelector('.description_text');
    if (!description_textElement.dataset.full) {
        description_textElement.dataset.full = description_textElement.textContent.trim();
    }
    const fullText = description_textElement.dataset.full;

    const cardWidth = card.clientWidth;
    let maxChars = Math.floor(cardWidth / 6); // لكل 10 بكسل حرف واحد

    description_textElement.textContent = fullText.length > maxChars
        ? fullText.substring(0, maxChars) + '...'
        : fullText;
}

function updateAllCards() {
    document.querySelectorAll('.content-product').forEach(updateDescription);
}

document.addEventListener('DOMContentLoaded', updateAllCards);
window.addEventListener('resize', updateAllCards);
//////////////////////  End Description  /////////////////////
