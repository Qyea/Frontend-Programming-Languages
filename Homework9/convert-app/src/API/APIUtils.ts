export const getCurrency = async (
  fromCurrency: string,
  toCurrency: string
): Promise<string> => {
  try {
    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
    );
    const data = await response.json();

    if (data) {
      return data[fromCurrency][toCurrency];
    } else {
      return "";
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCurrencies = async () => {
  try {
    const response = await fetch(`http://localhost:3000/currency`);
    const data = await response.json();

    if (data) {
      return data;
    } else {
      return "";
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
