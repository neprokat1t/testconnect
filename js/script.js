// Получите ссылку на кнопку "Connect Wallet"
const connectButton = document.getElementById('connect-wallet-button');

// Добавьте обработчик события на клик кнопки
connectButton.addEventListener('click', () => {
  // Попробуйте подключить кошелек пользователя
  if (typeof window.ethereum !== 'undefined') {
    // Метамаск или другой кошелек доступен
    ethereum.request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        const selectedAddress = accounts[0];
        // Пользователь подключил кошелек, выполняйте нужные действия
        console.log(`Connected to wallet with address: ${selectedAddress}`);
      })
      .catch((error) => {
        // Обработка ошибок при подключении кошелька
        console.error(error);
      });
  } else {
    // Кошелек не найден или не доступен
    console.error('Wallet not found or not accessible');
  }
});
