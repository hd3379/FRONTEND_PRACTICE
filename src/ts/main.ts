import { Item , loadItems} from './item';



// Update the list with the given items
function displayItems(items : HTMLElement[]) {
  const container  = document.querySelector('.items');
  
  if (container != null) {
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
  }
}

// Create HTML list item from the given data item
function createHTMLString(item : any) {

  return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

function onButtonClick(event: Event, items : HTMLElement[]) {
  const target = event.target as HTMLButtonElement;
  const dataset = target.dataset  ;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  displayItems(items.filter( item => item.dataset[key] === value));
}

function setEventListeners(items : HTMLElement[]) {
  const logo = document.querySelector('.logo');
  const buttons = document.querySelector('.buttons');
  logo?.addEventListener('click', () => displayItems(items));
  buttons?.addEventListener('click', event => onButtonClick(event, items));
}

// main
loadItems()
  .then(items => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
