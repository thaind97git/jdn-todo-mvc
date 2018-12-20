import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {
    stogare: Storage;
    constructor() {
        this.stogare = window.localStorage;
    }

    set(key: string, value: string): void {
        this.stogare[key] = value;
    }

    get(key: string): string {
        return this.stogare[key] || false;
    }

    setObject(key: string, value: any): void {
        if (!value) {
            return;
        }
        this.stogare[key] = JSON.stringify(value);
    }

    getObject(key: string): any {
        return JSON.parse(this.stogare[key] || '{}');
    }

    getValue<T>(key: string): T {
        const obj = JSON.parse(this.stogare[key] || null);
        return <T>obj || null;
    }

    remove(key: string): any {
        this.stogare.removeItem(key);
    }

    clear() {
        this.stogare.clear();
    }

    get length(): number {
        return this.stogare.length;
    }

    get isStorageEmpty(): boolean {
        return this.length === 0;
    }
}
