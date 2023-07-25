
let counter: number = 0;
let text: string = 'Counter';
const button: HTMLButtonElement = document.createElement('button');
const btnContent: Text = document.createTextNode(`${text} ${counter}`);
button.appendChild(btnContent);
const root: HTMLElement | null = document.getElementById('root');
button.setAttribute('class', 'btn')
const img = document.querySelector('img');

if(root !== null) {
  if(img !== null) root.insertBefore(button, img)
}

button.addEventListener('click', (): void => {
  counter++;
  button.textContent = `${text} ${counter}`

  if(counter > 10) {
    const loveTitle: HTMLHeadingElement = document.createElement('h2');
    const loveText: Text = document.createTextNode('');
    loveTitle.appendChild(loveText);

    if(img !== null) {
      root?.replaceChild(loveTitle, img);
      const text: string = 'Sowon-shi saranghae';
      let idx = 0;
      setInterval(() => {
        if(idx < text.length) {
          loveTitle.textContent += text[idx];
          idx++;
        }

      }, 100)
    }
  }
})

