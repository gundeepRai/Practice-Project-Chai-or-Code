const insert = document.querySelector('#insert');
let newlyAddedElement;

window.addEventListener('keydown', (e) => {
  const key_table = document.querySelector('.keyTable');
  if (!key_table) {
    insert.innerHTML = `
      <table class = "keyTable">
        <tr>
          <th>Key</th>
          <th>Key Code</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === ' ' ? 'Space' : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    `;

    const btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Remove table'));
    btn.id = 'table_btn';
    insert.appendChild(btn);

    newlyAddedElement = document.getElementById('table_btn');

    btn.addEventListener('click', () => {
      document.querySelector('.keyTable')?.remove();
      btn.remove();
    });
  } else {
    const key_row = document.createElement('tr');
    key_row.innerHTML = `
      <td>${e.key === ' ' ? 'Space' : e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    `;
    key_table.appendChild(key_row);
  }
});

// below code is not working, having some mistakes
// newlyAddedElement = document.getElementById('table_btn');
if (newlyAddedElement) {
  newlyAddedElement.addEventListener('click', function (e) {
    insert.removeChild(document.querySelector('.keyTable'));
  });
}
