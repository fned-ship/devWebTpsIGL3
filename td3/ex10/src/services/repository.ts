import { log } from '../utils/logger';

interface HasId {
    id: number;
}

export class Repository<T extends HasId> {
    private items: T[] = [];
    private name: string;

    constructor(name: string) {
        this.name = name;
        log(`Repository<${name}> initialized.`);
    }

    add(item: T): void {
        this.items.push(item);
        log(`${this.name}: Added item with ID ${item.id}`);
    }

    getById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    getAll(): T[] {
        return this.items;
    }

    remove(id: number): void {
        const initialLength = this.items.length;
        this.items = this.items.filter(item => item.id !== id);
        if (this.items.length < initialLength) {
            log(`${this.name}: Removed item with ID ${id}`);
        } else {
            log(`${this.name}: Item with ID ${id} not found.`);
        }
    }
}