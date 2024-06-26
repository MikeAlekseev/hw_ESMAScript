// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.
const arr = [1, 5, 7, 9];

function arrMin(arr) {
  return Math.min(...arr); // - это считается за 1 строку? или без функции надо было?
}
console.log(arrMin(arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

function createCounter(count) {
  function increment(count) {
    return count + 1;
  }
  function decrement(count) {
    return count - 1;
  }
  return { increment, decrement };
}
const create = createCounter();
console.log(create.increment(33));
console.log(create.decrement(135));

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

// решение получено с помощью чатагпт

function findElementByClass(root, className) {
    if (root === null) {
        return null;
    }
    if (root.classList && root.classList.contains(className)) {
        return root;
    }
    for (let child of root.children) {
        const result = findElementByClass(child, className);
        if (result) {
            return result;
        }
    }
    return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);

