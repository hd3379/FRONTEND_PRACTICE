class Item{
  type: string;
  gender: string;
  size: string;
  color: string;
  image: string;

  constructor(type: string, gender: string,
    size: string, color: string, image: string) {
    this.type = type;
    this.gender = gender;
    this.size = size;
    this.color = color;
    this.image = image;
  }
}

// Fetch the items from the JSON file
function loadItems() {
  const items = fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
  
  return items;
}

export { Item , loadItems}