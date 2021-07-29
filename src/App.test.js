import { setItem, deleteItem, getAll, updateItem } from "./utils/Storage";
import { LocalStorageMock } from "./utils/tests/LocalStorageMock";
function setTestItem() {
  const obj = {
    title: "title",
    yearOfRelease: "2021",
    director: "test",
    description: "description",
  };
  const uid = setItem(obj);
  obj.id = uid;
  return obj;
}

beforeAll(() => {
  const localStorageMock = new LocalStorageMock();
  global.localStorage = localStorageMock;
});

beforeEach(() => {
  localStorage.clear();
});

test("get all must return an array", () => {
  const items = getAll();
  expect(items).toBeDefined();
  expect(Array.isArray(items)).toBeTruthy();
});

test("set item in local storage", () => {
  const obj = setTestItem();
  const items = JSON.parse(localStorage.getItem("blue-rays"));
  expect(items.length).toStrictEqual(1);

  const item = items[0];
  expect(item.title).toStrictEqual(obj.title);
  expect(item.yearOfRelease).toStrictEqual(obj.yearOfRelease);
  expect(item.director).toStrictEqual(obj.director);
  expect(item.description).toStrictEqual(obj.description);
  expect(item.id).toStrictEqual(obj.id);
});

test("delete item from local storage", () => {
  const obj = setTestItem();

  let items = JSON.parse(localStorage.getItem("blue-rays"));
  expect(items.length).toStrictEqual(1);

  deleteItem(obj.id);
  items = JSON.parse(localStorage.getItem("blue-rays"));
  expect(items.length).toStrictEqual(0);
});

test("update items in local storage", () => {
  const obj = setTestItem();

  let items = JSON.parse(localStorage.getItem("blue-rays"));
  expect(items.length).toStrictEqual(1);

  obj.title = "updated title";
  obj.description = "updated description";
  updateItem(obj.id, obj);

  items = JSON.parse(localStorage.getItem("blue-rays"));
  const updatedItem = items[0];

  expect(obj.title).toStrictEqual(updatedItem.title);
  expect(obj.description).toStrictEqual(updatedItem.description);
  expect(obj.id).toStrictEqual(updatedItem.id);
});
