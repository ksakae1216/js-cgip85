// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function aaa() {
  let a = new SpeechSynthesisUtterance();
  a.text = '日本語をかなり流暢に話します。';
  a.lang = 'ja-JP';
  a.rate = 1.2;
  speechSynthesis.speak(a);
}

const buttonElement = document.getElementById('speachExecute');
buttonElement.addEventListener('click', aaa);
