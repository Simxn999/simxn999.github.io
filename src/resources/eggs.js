function wallpaper() {
  const body = document.getElementsByTagName('body')[0];
  for (let index = 0; index < body.children.length; index++)
    if (body.children[index].name === 'egg') return;

  const egg = document.createElement('span');
  let isSet = false;

  egg.name = 'egg';
  egg.style.position = 'fixed';
  egg.style.top = '0';
  egg.style.left = '0';
  egg.style.width = '1rem';
  egg.style.aspectRatio = '0.75';
  egg.style.cursor = 'pointer';
  egg.style.borderRadius = '100%';
  egg.onmouseover = () => egg.style.border = '1px solid black';
  egg.onmouseleave = () => egg.style.border = '';

  body.appendChild(egg);

  egg.onclick = () => {
    if (isSet) {
      body.style.backgroundImage = 'unset';
      isSet = false;
      return;
    }

    body.style.backgroundImage = 'url(./buddy-bg.jpg)';
    body.style.backgroundAttachment = 'fixed';
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'left center';
    isSet = true;
  };
}

function password() {
  const password = [...'1337'];
  const input = [];

  document.onkeyup = e => {
    e.key === password[input.length] ? input.push(e.key) : input.length = 0;
    if (input.length !== password.length) return;

    // TODO:
    console.log('buddy do be hoe sometimes');
  };
}

export function InitializeEggs() {
  wallpaper();
  password();
}