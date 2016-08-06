{
  const remove = (element) => element.parentNode.removeChild(element);

  const removeOneClickButtons = () => {
    const elements = document.getElementsByClassName('a-button-oneclick');
    const flattenElements = [].concat(...elements).map( e => remove(e));
  }

  const replaceOneClickButton2ReadRightNowButton = () => {
    const asin = document.getElementById('amsDetailRight').getAttribute('data-detailpageasin');

    const html = `
    <span class="a-button-inner">
      <input class="a-button-text" value="今すぐ読む" onclick="location.href='https://read.amazon.co.jp/?asin=${asin}'">
      <span class="a-button-text">
          今すぐ読む
      </span>
    </span>
    `;

    const button = document.getElementById('a-autoid-7');
    button.innerHTML = html;
    button.setAttribute('id', '');
    button.classList.remove('a-button-oneclick');
  }

  if(document.getElementById('amsDetailRight')) replaceOneClickButton2ReadRightNowButton();
  else removeOneClickButtons();
}