export function extractErrorMessage(error: any): string {
    const errorMessage = error.toString().match(/reverted with the following reason:\s*(.+)/);
    return errorMessage ? errorMessage[1] : 'Unknown error occurred';
  }

  export function generateFakeAddress() {
    const hex = [...Array(40)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
    return `0x${hex}`;
  }

  export function formatNumberWithHash(num: number): string {
    return `#${num.toString().padStart(4, "0")}`;
  }