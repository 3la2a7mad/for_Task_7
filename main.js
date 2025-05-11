const originalnum = [1,2,3,4,5];
const originalArrayContent = document.getElementById('originalArrayContent');
originalArrayContent.textContent = '['+ originalnum.join(', ') + ']';

const originalDnum =originalnum.map(Number => Number *2);
const doubledArrayContent = document.getElementById('doubledArrayContent');
doubledArrayContent.textContent = '[' + originalDnum.join(', ')+']';
