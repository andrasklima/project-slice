/*
  TODO app-ot kell készíteni.
  Az a feladat, hogy megjelenítse a program a teendőket, legalább 10 sorban.
  Funkciók: készre jelentés, hozzáadni és törölni lehessen

 -1. js-ben létrehozni a load eseményfigyelőt

  0. root  div elemet kell létregozni html fájlban

  1. három változót deklarálni
     root div tárolására
     teendők számának tárolására
     minta html script tárolására (checkbox, szöveg, törlés gomb)

  2. minta html a hozzáadás gombhoz

  2. csinálni kell egy for ciklust, ami előállítja a html struktúrát a root elemen belül

  3. hozzá kell adni a hozzáadás gombot a root elemen kívül

  4. kattinthatóvá tesszük az összes delete gombot egy for ciklussal
*/

function _load() {
  /* 
  1. három változót deklarálni
     root div tárolására
     teendők számának tárolására
     minta html script tárolására (checkbox, szöveg, törlés gomb)
 */
  let rootDiv = document.querySelector(".root");
  let numberOfTasks = 10;
  let htmlRowTemplate = `
      <div class="row">
        <input type="checkbox" class="doneCheckbox" />
        <input type="text" class="text" />
        <button class="delButton">Delete</button>
      </div>
  `;

  /* 
  2. minta html a hozzáadás gombhoz
 */
  let htmlAddTemplate = `
      <button class="addButton">Add new</button>
  `;

  function addNewTask() {
    rootDiv.insertAdjacentHTML("beforeend", htmlRowTemplate);

    //TODO valahol itt kell rárakni a delete gombra a click eseményt.
  }

  for (let index = 0; index < numberOfTasks; index++) {
    addNewTask();
  }

  /*   
  3. hozzá kell adni a hozzáadás gombot a root elemen kívül
  */
  rootDiv.insertAdjacentHTML("afterend", htmlAddTemplate);

  document.querySelector(".addButton").addEventListener("click", addNewTask);

  /*
  delete gombra ezt hajtjuk végre
  */
  function delTask(e) { //minden eseményfigyelő egy paraméterrel tér vissza
    console.log(e);

    e.currentTarget.parentNode.remove();
  }

  /*
  4. kattinthatóvá tesszük az összes delete gombot egy for ciklussal
  */
  let delButtons = rootDiv.querySelectorAll(".delButton");
  for (let index = 0; index < delButtons.length; index++) {
    const element = delButtons[index];
    element.addEventListener("click", delTask); //azért nem tesszünk () a függvény végére, mert felülírja az eseményfigyelő objektumait
  }
}

//  -1. js-ben létrehozni a load eseményfigyelőt
window.addEventListener("load", _load);
