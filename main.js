function convert() {
  var text;
  var usdAmount = document.getElementById('usd-amount').value;
  var result = document.getElementById('skull-amount');
  var skullPrice = 1450.00;
  var skullAmount = Math.round(usdAmount/skullPrice * 100)/100;

  if (skullAmount == 1) {
    text = 'You could have 1 skull';
  } else if (isNaN(skullAmount) || skullAmount < 0) {
    text = 'You should not, could not have any skulls';
  } else {
    text = 'You could have ' + skullAmount + ' skulls';
  }

  result.innerHTML = text;
}
