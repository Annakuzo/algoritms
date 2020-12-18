document.getElementById("form__add").onclick = function () {
  let numb = document.getElementById("form__value").value;
  viewResult(numb, "max", "min");
};

const findMAxNumber = (res) => {
  let arr = res.split(",");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(count) < arr[i]) {
      count = arr[i];
    }
  }
  console.log(parseInt(count));
  return count;
};

const findMinNumber = (res) => {
  let arr = res.split(",");
  let count = arr[0];
  for (let i = 0; i > arr.length; i++) {
    if (parseInt(count) > arr[i]) {
      count = arr[i];
    }
  }
  console.log(parseInt(count));
  return count;
};

document.getElementById("form2__add").onclick = function () {
  let numbSecond = document.getElementById("form2__value").value;
  viewResult(findSecondMaxNumber(numbSecond), "max2", "min2");
};

const findSecondMaxNumber = (arrSecond) => {
  let arr = arrSecond.split(",");
  let sortArray = convertStringToNumber(arr).sort(function (a, b) {//сортировка массива по возрастанию
    return a - b;
  });

  let obj = {
    max: sortArray[sortArray.length - 2],
    min: sortArray[1],
  };
  console.log(obj);
  return obj;
};

const convertStringToNumber = (arrSecond) => {
  for (let i = 0; i < arrSecond.length; i++) {
    arrSecond[i] = parseInt(arrSecond[i]);
  }
  return arrSecond;
};

const viewResult = (data, idMax, idMin) => {
  if (data instanceof Object) { //проверка объект или число
    document.getElementById(idMax).innerHTML = data.max;
    document.getElementById(idMin).innerHTML = data.min;
  } else {
    document.getElementById(idMax).innerHTML = findMAxNumber(data);
    document.getElementById(idMin).innerHTML = findMinNumber(data);
  }
};
