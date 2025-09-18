
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('nav-toggle').addEventListener('click', function(){
  const nav = document.getElementById('nav');
  Array.from(nav.querySelectorAll('a')).forEach(a => {
    a.style.display = a.style.display === 'inline-block' ? '' : 'inline-block';
  });
});
function submitContact(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('form-feedback');
  if(!name || !email || !message){ feedback.textContent = 'Please fill all fields.'; return; }
  const subject = encodeURIComponent('Portfolio contact from ' + name);
  const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')');
  window.location.href = 'mailto:srividyabellamkonda04@gmail.com?subject=' + subject + '&body=' + body;
  feedback.textContent = 'Opening your email client...';
}
