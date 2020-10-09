const reviewBoxFix = () => {
  const newScript = document.createElement("script");
  const inlineScript = document.createTextNode(`
  const reviewModal = document.querySelector('#review-changes-modal > div > div');

  reviewModal.style.maxHeight = 'unset';
  reviewModal.style.width = '650px';
  `);

  newScript.appendChild(inlineScript);
  const head = document.getElementsByTagName('head')[0];
  head.appendChild(newScript);
}

reviewBoxFix();
