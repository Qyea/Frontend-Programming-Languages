import {
  logAndSaveError,
  showDifferentErrorText,
} from "../decorators/decorators";

export class Validator {
  private errorContainer: HTMLElement | null;
  private addTaskForm = document.getElementById(
    "addTaskForm"
  ) as HTMLFormElement;

  constructor() {
    this.errorContainer = null;
  }

  checkError(field: HTMLInputElement) {
    field.value;
    if (field?.value.replace(/ /g, "") === "") {
      switch (field.type) {
        case "text":
          this.createError(field, "*Title is required");
          break;
        case "date":
          this.createError(field, "*Date is required");
          break;
        case "select-one":
          this.createError(field, "*Priority is required");
          break;
        case "textarea":
          this.createError(field, "*Description is required");
          break;
        default:
          return false;
      }
      return true;
    }
  }

  @logAndSaveError
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
      this.showError(message);
    }

    const errorText = document.createElement("p");
    errorText.textContent = message;
    if (this.errorContainer.children.length === 0) {
      this.errorContainer.appendChild(errorText);
    }
  }

  @showDifferentErrorText
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
