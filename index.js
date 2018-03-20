function getFirstSelector(selector) {
  return document.querySelector(`${selector}`);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  debugger;
  let list = document.getElementById('app').querySelectorAll('div#grand-node');
  //let text = list[4].innerHTML;
  for (let i = 0; i < list.length; i++) {
    //console.log(list[0].innerHTML)
    console.log('list length is: ' + list.length);
    console.log('test in for');
  }
  //console.log(list[0][0][0][1].innerHTML)
  console.log('test');
  return list;
  
}