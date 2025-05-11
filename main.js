const doubleNumbers = (numbers) => {
    const doubled = numbers.map(num => num * 2);
    document.getElementById('originalArrayContent').textContent = '[' + numbers.join(', ') + ']';
    document.getElementById('doubledArrayContent').textContent = '[' + doubled.join(', ') + ']';
  };
  
  doubleNumbers([1, 2, 3, 4, 5]);