const asin = document.getElementById('amsDetailRight').getAttribute('data-detailpageasin');

const html = `
<span class="a-button-inner">
  <input class="a-button-text" value="今すぐ読む" onclick="location.href='https://read.amazon.co.jp/?asin=${asin}'">
<span class="a-button-text">
    今すぐ読む
</span>
</span>
`;

document.getElementById('a-autoid-7').innerHTML = html;

