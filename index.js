document.getElementById("form__add").onclick = function () {
  let numb = document.getElementById("form__value").value;
  viewRes(numb);
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

const viewRes = (count) => {
  document.getElementById("max").innerHTML = findMAxNumber(count);
  document.getElementById("min").innerHTML = findMinNumber(count);
};

