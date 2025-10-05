interface HasId {
    id: number;
}
export declare class Repository<T extends HasId> {
    private items;
    private name;
    constructor(name: string);
    add(item: T): void;
    getById(id: number): T | undefined;
    getAll(): T[];
    remove(id: number): void;
}
export {};
//# sourceMappingURL=repository.d.ts.map