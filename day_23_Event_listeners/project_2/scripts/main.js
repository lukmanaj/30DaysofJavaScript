const style = document.createElement('style');
style.innerHTML = `
body{
  font-family: Arial, Helvetica, sans-serif;
}
.key{
  padding: 4px;
  margin: 100px auto;
  font-size: large;
  max-width: 280px;
  border: 2px solid grey;
  text-align: center;
}
.key-code{
  padding: 4px;
  font-size: large;
  height: 80px;
  width: 60px;
  border: 1px solid grey;
  margin: 100px auto;
  text-align: center;
}
.green{
  color: rgb(139, 236, 139);
}
`;
document.body.appendChild(style);

const body = document.querySelector("body");

const keyName = document.createElement('div');
keyName.classList.add('key')
body.appendChild(keyName)

const keyCode = document.createElement('div');
keyCode.classList.add('key-code')
body.appendChild(keyCode)

body.addEventListener("keydown", function (e) {
    keyCode.innerHTML = ""
    keyName.innerHTML = ""
    let keyMessage = `<h1>you pressed <span class="green">${e.key}</span></h1>`
    keyName.innerHTML = keyMessage;
    let keyCodeMessage = `<h1><span class="green">${e.keyCode}</span></h1>`
    keyCode.innerHTML = keyCodeMessage;
});
