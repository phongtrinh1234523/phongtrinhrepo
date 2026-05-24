const form = document.getElementById('signup-form');
const message = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();

  if (!email) {
    message.textContent = 'Vui lòng nhập email hợp lệ.';
    return;
  }

  message.textContent = `Cảm ơn ${email}! Chúng tôi sẽ gửi thông tin khóa học sớm.`;
  form.reset();
});
