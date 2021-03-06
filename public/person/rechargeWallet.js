$(document).ready(function () {
  fetch('/balances', {
    method: 'GET',
  })
    .then(res => res.json())
    .then(res => {
      $('#balance').html(res.balances['personBalance']);
    }).catch(function (err) {
      console.log(err);
    });

  $('#rechargeButton').click(function (event) {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });
    fetch('/person/recharge', {
      method: 'post',
      headers: headers,
      body: JSON.stringify({ rechargeAmount: $('#rechargeAmount').val() }),
    })
      .then(res => res.json())
      .then(res => {
        $('#balance').html(res.personUpdatedBalance);
      })
      .catch(function () {
        $('#balance').html('Some error Occured');
      });
  });
});
