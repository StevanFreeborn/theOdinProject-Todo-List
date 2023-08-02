export default function AddList() {
  function handleCancelClick(event: Event, target: HTMLButtonElement) {
    history.back();
  }

  return /*html*/ `
    <h1>Add List</h1>
    <form onsubmit="">
      <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name">
      <div>
        <button onclick="(${handleCancelClick})(event, this)" type="button">Cancel</button>
        <button type="submit">Add</button>
      </div>
      </div>      
    </form>
  `;
}
