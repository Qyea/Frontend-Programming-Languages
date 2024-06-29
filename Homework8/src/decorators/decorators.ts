import { fetchData } from "../utils";

export function logAndSaveError(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  const originalMethod = descriptor.value;

  descriptor.value = function (field: HTMLInputElement, message: string): void {
    console.log(`Error: ${message}`);

    localStorage.setItem("error", message);

    originalMethod.call(this, field, message);

    fetchData({ method: "POST", body: message });
  };
}

export function showDifferentErrorText(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  console.log("A message from the decorator when executing");
  const originalMethod = descriptor.value;

  descriptor.value = function (message: string): void {
    const newMessage = `Decorator error message: ${message}`;
    console.log(newMessage);
    originalMethod.call(this, newMessage);
  };
}
