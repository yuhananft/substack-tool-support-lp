(() => {
  const placeholderTokens = [
    "__MYASP_PAYMENT_URL__"
  ];

  const isPlaceholder = (value) => {
    if (!value) return true;
    return placeholderTokens.some((token) => value.includes(token));
  };

  document.querySelectorAll(".js-payment-link").forEach((link) => {
    if (!isPlaceholder(link.getAttribute("href"))) return;

    link.classList.add("is-placeholder");
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.alert("公開前に __MYASP_PAYMENT_URL__ をMyASPの商品販売ページURLへ置き換えてください。");
    });
  });
})();
