// ===== Popup бронювання =====

// Отримуємо елементи кнопки бронювання, попапу, кнопки закриття, форми та повідомлення про успіх
const bookBtn = document.getElementById('bookBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
const bookingForm = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

// Відкриваємо попап при натисканні на кнопку "Забронювати місце"
bookBtn.addEventListener('click', (e) => {
  e.preventDefault(); // відміна стандартної поведінки посилання
  popup.style.display = 'flex'; // показуємо попап
});

// Закриваємо попап при натисканні на кнопку "x"
closePopup.addEventListener('click', () => {
  popup.style.display = 'none'; // ховаємо попап
  bookingForm.reset(); // очищаємо форму
  successMessage.style.display = 'none'; // ховаємо повідомлення про успіх
});

// Закриваємо попап, якщо користувач клікнув поза блоком форми
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
    bookingForm.reset();
    successMessage.style.display = 'none';
  }
});

// Обробка відправки форми бронювання
bookingForm.addEventListener('submit', (e) => {
  e.preventDefault(); // відміна стандартної поведінки форми
  successMessage.style.display = 'block'; // показуємо повідомлення про успіх
  setTimeout(() => { // після 2 секунд автоматично ховаємо попап
    popup.style.display = 'none';
    bookingForm.reset();
    successMessage.style.display = 'none';
  }, 2000);
});


// ===== Lightbox (галерея у повний екран) =====

// Отримуємо всі зображення галереї
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

// Відкриваємо lightbox при натисканні на будь-яке зображення
galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex'; // показуємо lightbox
    lightboxImg.src = img.src; // підставляємо зображення у lightbox
  });
});

// Закриваємо lightbox при натисканні на кнопку "x"
closeLightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Закриваємо lightbox, якщо клікнули поза зображенням
window.addEventListener('click', (e) => {
  if (e.target === lightbox) lightbox.style.display = 'none';
});
