const calculateAmount = ({amount, currency, currencyExchangeRates}) => {
  let balance = amount || 0;

  if (currency !== 'Usd') {
    balance = amount * Number(currencyExchangeRates[`usdTo${currency}`]);
  }

  return formatAmount(balance, currency);
};

const formatAmount = (amount, currency) => {
  const options = {style: 'currency', currency};

  return new Intl.NumberFormat('tr-TR', options).format(amount);
};

const formatDate = (date, options) => {
  return new Date(date).toLocaleDateString('default', options);
};

export {calculateAmount, formatAmount, formatDate};
