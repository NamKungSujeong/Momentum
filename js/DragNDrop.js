const todoItems = document.querySelectorAll("#todo-list li");
const dragList = document.querySelector("#todo-list");

todoItems.forEach((item) => {
  item.addEventListener("dragstart", () => {
    setTimeout(() => item.classList.add("dragging"), 0);
  });
  item.addEventListener("dragend", () => item.classList.remove("dragging"));
});

const initDragItem = (e) => {
  e.preventDefault();
  const draggingItem = document.querySelector(".dragging");
  const siblings = [
    ...document.querySelectorAll("#todo-list li:not(.dragging)"),
  ];

  let nextSibling = siblings.find((sibling) => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
  });

  dragList.insertBefore(draggingItem, nextSibling);
};

dragList.addEventListener("dragover", initDragItem);
