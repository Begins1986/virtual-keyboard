  let keybordButtons = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "Shift", "ArrowUp", "Control", "Meta", "Alt", " ", "Alt", "Control", "ArrowLeft", "ArrowDown", "ArrowRight"];

  let keybordButtonsRu = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Shift", "ArrowUp", "Control", "Win", "Alt", " ", "Alt", "Control", "ArrowLeft", "ArrowDown", "ArrowRight"];

  let keybordButtonsBig = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift", "ArrowUp", "Control", "Meta", "Alt", " ", "Alt", "Control", "ArrowLeft", "ArrowDown", "ArrowRight"];

  let keybordButtonsRuBig = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "Shift", "ArrowUp", "Control", "Win", "Alt", " ", "Alt", "Control", "ArrowLeft", "ArrowDown", "ArrowRight"];

  let keyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ArrowUp', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

  var cont = document.createElement('div');
  cont.className = "container";
  document.querySelector('body').appendChild(cont);
  var textareaKeybord = document.createElement('textarea');
  textareaKeybord.className = "textareaKeybord";
  document.querySelector('.container').appendChild(textareaKeybord);
  var keybord = document.createElement('div');
  keybord.className = "keybord";
  document.querySelector('.container').appendChild(keybord);
  let paragraph = document.createElement("p");
  paragraph.innerHTML = "Переключение языков - Shift + Alt (Win)";
  document.querySelector('.container').appendChild(paragraph);
  let lang = true;
  let capslock = false;

  function start() {
      if (lang) {
          if (capslock) {
              initEnBig();
          } else {
              initEn();
          }
      } else {
          if (capslock) {
              initRuBig();
          } else {
              initRu();
          }
      }
  }
  start();

  let rasc = document.querySelector('.keybord');
  let table = document.querySelector('.textareaKeybord')

  function initEn() {
      let out = '';
      for (let i = 0; i < keybordButtons.length; i++) {
          if (keybordButtons[i] == "Control") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtons[i] + '">' + "Ctrl" + '</div>';
          } else if (keybordButtons[i] == "Meta") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtons[i] + '">' + "Win" + '</div>';
          } else if (keybordButtons[i] == "ArrowUp") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtons[i] + '">' + "↑" + '</div>';
          } else if (keybordButtons[i] == "ArrowLeft") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtons[i] + '">' + "←" + '</div>';
          } else if (keybordButtons[i] == "ArrowDown") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtons[i] + '">' + "↓" + '</div>';
          } else if (keybordButtons[i] == "ArrowRight") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtons[i] + '">' + "→" + '</div>';
          } else {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtons[i] + '">' + (keybordButtons[i]) + '</div>';
          }
      }
      document.querySelector('.keybord').innerHTML = out;
  }

  function initEnBig() {
      let out = '';
      for (let i = 0; i < keybordButtonsBig.length; i++) {
          if (keybordButtons[i] == "Control") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsBig[i] + '">' + "Ctrl" + '</div>';
          } else if (keybordButtonsBig[i] == "Meta") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsBig[i] + '">' + "Win" + '</div>';
          } else if (keybordButtonsBig[i] == "ArrowUp") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsBig[i] + '">' + "↑" + '</div>';
          } else if (keybordButtonsBig[i] == "ArrowLeft") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsBig[i] + '">' + "←" + '</div>';
          } else if (keybordButtonsBig[i] == "ArrowDown") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsBig[i] + '">' + "↓" + '</div>';
          } else if (keybordButtonsBig[i] == "ArrowRight") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsBig[i] + '">' + "→" + '</div>';
          } else {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsBig[i] + '">' + (keybordButtonsBig[i]) + '</div>';
          }
      }
      document.querySelector('.keybord').innerHTML = out;
  }

  function initRu() {
      let out = '';
      for (let i = 0; i < keybordButtonsRu.length; i++) {
          if (keybordButtonsRu[i] == "Control") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRu[i] + '">' + "Ctrl" + '</div>';
          } else if (keybordButtonsRu[i] == "Meta") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRu[i] + '">' + "Win" + '</div>';
          } else if (keybordButtonsRu[i] == "ArrowUp") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRu[i] + '">' + "↑" + '</div>';
          } else if (keybordButtonsRu[i] == "ArrowLeft") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRu[i] + '">' + "←" + '</div>';
          } else if (keybordButtonsRu[i] == "ArrowDown") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRu[i] + '">' + "↓" + '</div>';
          } else if (keybordButtonsRu[i] == "ArrowRight") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRu[i] + '">' + "→" + '</div>';
          } else {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRu[i] + '">' + (keybordButtonsRu[i]) + '</div>';
          }
      }
      document.querySelector('.keybord').innerHTML = out;
  }

  function initRuBig() {
      let out = '';
      for (let i = 0; i < keybordButtonsRuBig.length; i++) {
          if (keybordButtonsRuBig[i] == "Control") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRuBig[i] + '">' + "Ctrl" + '</div>';
          } else if (keybordButtonsRuBig[i] == "Meta") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRuBig[i] + '">' + "Win" + '</div>';
          } else if (keybordButtonsRuBig[i] == "ArrowUp") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRuBig[i] + '">' + "↑" + '</div>';
          } else if (keybordButtonsRuBig[i] == "ArrowLeft") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRuBig[i] + '">' + "←" + '</div>';
          } else if (keybordButtonsRuBig[i] == "ArrowDown") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRuBig[i] + '">' + "↓" + '</div>';
          } else if (keybordButtonsRuBig[i] == "ArrowRight") {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRuBig[i] + '">' + "→" + '</div>';
          } else {
              out += '<div class="keybutton ' + keyCode[i] + '" data="' + keybordButtonsRuBig[i] + '">' + (keybordButtonsRuBig[i]) + '</div>';
          }
      }
      document.querySelector('.keybord').innerHTML = out;
  }

  document.onkeydown = function (event) {
      rasc.querySelector('[data="' + event.key + '"]').classList.add('active');
      if (event.key == "Control" || event.key == "Tab" || event.key == "Meta") {
          table.value += '';
      } else if (event.key == "Enter") {
          table.value += '\n';
      } else if (event.key == "Backspace") {
          table.value = table.value.slice(0, -1);
      } else if (event.key == "CapsLock") {
          if (capslock) {
              capslock = false;
              event.preventDefault();
              start();
          } else {
              capslock = true;
              event.preventDefault();
              start();
          }
      } else if (event.key == " ") {
          table.value += ' ';
      } else if (event.key == "ArrowUp") {
          table.value += '↑';
      } else if (event.key == "ArrowLeft") {
          table.value += '←';
      } else if (event.key == "ArrowDown") {
          table.value += '↓';
      } else if (event.key == "ArrowRight") {
          table.value += '→';
      } else if (event.code == "ShiftLeft") {
          table.value += '';
          document.onkeydown = function (event) {
              if (event.code == "AltLeft") {
                  table.value += '';
                  if (lang) {
                      lang = false;
                      event.preventDefault();
                      start();
                  } else {
                      lang = true;
                      event.preventDefault();
                      start();
                  }
              }
          }
      } else {
          table.value += event.key;
      }
  }

  document.onkeyup = function (event) {
      rasc.querySelectorAll('.keybutton').forEach(function (el) {
          el.classList.remove('active');
      });
  }
  rasc.querySelectorAll('.keybutton').forEach(function (el) {
      el.onmousedown = function (event) {
          let code = this.getAttribute('data');
          this.classList.add('active');
          if (this.getAttribute('data') == "Shift" || this.getAttribute('data') == "Alt" || this.getAttribute('data') == "Ctrl" || this.getAttribute('data') == "Tab" || this.getAttribute('data') == "Win" || this.getAttribute('data') == "CapsLock") {
              table.value += '';
          } else if (this.getAttribute('data') == "Backspace") {
              table.value = table.value.slice(0, -1);
          } else if (this.getAttribute('data') == "Space") {
              table.value += ' ';
          } else if (this.getAttribute('data') == "ArrowUp") {
              table.value += '↑';
          } else if (this.getAttribute('data') == "ArrowLeft") {
              table.value += '←';
          } else if (this.getAttribute('data') == "ArrowDown") {
              table.value += '↓';
          } else if (this.getAttribute('data') == "ArrowRight") {
              table.value += '→';
          } else if (this.getAttribute('data') == "Enter") {
              table.value += '\n';
          } else {
              table.value += this.getAttribute('data');
          }
      }
  });
  rasc.querySelectorAll('.keybutton').forEach(function (el) {
      el.onmouseup = function (event) {
          let code = this.getAttribute('data');
          this.classList.remove('active');
      }
  });
