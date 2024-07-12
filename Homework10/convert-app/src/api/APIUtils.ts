import { CurrencyData } from "../types";

const formatDate = (date: Date) => {
  const formatted = <string[]>[];
  formatted.push(date.getFullYear().toString());
  formatted.push(
    date.getMonth() > 9
      ? (date.getMonth() + 1).toString()
      : `0${date.getMonth() + 1}`
  );
  formatted.push(
    date.getDate() > 9 ? date.getDate().toString() : `0${date.getDate()}`
  );
  return formatted.join("-");
};

export const getDateCurrency = async (
  date: Date,
  fromCurrency: string,
  toCurrency: string
): Promise<CurrencyData> => {
  try {
    const response = await fetch(
      `https://${formatDate(
        date
      )}.currency-api.pages.dev/v1/currencies/${fromCurrency}.json`
    );
    const data = await response.json();

    if (data) {
      const result = {
        rate: String(data[fromCurrency][toCurrency]),
        date: date.toLocaleString(),
      };
      return result;
    } else {
      return {
        rate: "",
        date: "",
      };
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCurrencyHistory = async (
  fromCurrency: string,
  toCurrency: string
) => {
  try {
    const response = <CurrencyData[]>[];
    const fromDate = new Date();
    const toDate = new Date();
    fromDate.setMonth(fromDate.getMonth() - 1);

    while (fromDate <= toDate) {
      const res = await getDateCurrency(fromDate, fromCurrency, toCurrency);
      if (res) {
        response.push(res);
      }
      fromDate.setDate(fromDate.getDate() + 1);
    }
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

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
