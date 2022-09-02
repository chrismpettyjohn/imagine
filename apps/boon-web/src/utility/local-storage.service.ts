class LocalStorageService {
  exists(index: string): boolean {
    const value: string | null = localStorage.getItem(index);
    return !!value;
  }

  // Fetches value from localStorage
  // Throws exception upon undefined
  get(index: string): string {
    const value: string | null = localStorage.getItem(index);

    if (value === null) {
      throw new Error('Item not found');
    }

    return value;
  }

  // Sets a index.ts with its value in localStorage
  set(index: string, value?: string): void {
    localStorage.setItem(index, value as any);
  }

  // Removes a value from localStorage by its index.ts if it exists
  delete(index: string): void {
    localStorage.removeItem(index);
  }

  purge(): void {
    localStorage.clear();
  }
}

export const localStorageService: LocalStorageService =
  new LocalStorageService();
