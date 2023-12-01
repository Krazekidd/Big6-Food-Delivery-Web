var myCard = $('#my-card');

var cardNumber = myCard.CardJs('cardNumber');
var cardType = myCard.CardJs('cardType');
var name = myCard.CardJs('name');
var expiryMonth = myCard.CardJs('expiryMonth');
var expiryYear = myCard.CardJs('expiryYear');
var cvc = myCard.CardJs('cvc');

<script>
    new Card({
      form: '#card-js-container',
    });
  </script>