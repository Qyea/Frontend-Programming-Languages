export class Validator {
  private errorContainer: HTMLElement | null;
  private addTaskForm = document.getElementById(
    "addTaskForm"
  ) as HTMLFormElement;

  constructor() {
    this.errorContainer = null;
  }

  createError(field: HTMLInputElement, message: string) {
    field.classList.add("error");
    field.addEventListener("input", () => {
      field.classList.remove("error");
      this.hideError();
    });

    if (!this.errorContainer) {
      this.errorContainer = document.createElement("div");
      this.errorContainer.classList.add("error-container");
      this.addTaskForm.appendChild(this.errorContainer);
    }

    const errorText = document.createElement("p");
    errorText.textContent = message;
    this.errorContainer.appendChild(errorText);
  }

  showError(message: string) {
    if (!this.errorContainer) {
      this.errorContainer = document.createElement("div");
      this.errorContainer.classList.add("error-container");
      this.addTaskForm.appendChild(this.errorContainer);
    }

    const errorText = document.createElement("p");
    errorText.textContent = message;
    this.errorContainer.appendChild(errorText);
  }

  hideError() {
    if (this.errorContainer && this.errorContainer.parentNode) {
      this.errorContainer.textContent = "";
      this.errorContainer.parentNode.removeChild(this.errorContainer);
      this.errorContainer = null;
    }
  }
}
