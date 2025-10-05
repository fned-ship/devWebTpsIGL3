"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
const logger_1 = require("../utils/logger");
class Repository {
    items = [];
    name;
    constructor(name) {
        this.name = name;
        (0, logger_1.log)(`Repository<${name}> initialized.`);
    }
    add(item) {
        this.items.push(item);
        (0, logger_1.log)(`${this.name}: Added item with ID ${item.id}`);
    }
    getById(id) {
        return this.items.find(item => item.id === id);
    }
    getAll() {
        return this.items;
    }
    remove(id) {
        const initialLength = this.items.length;
        this.items = this.items.filter(item => item.id !== id);
        if (this.items.length < initialLength) {
            (0, logger_1.log)(`${this.name}: Removed item with ID ${id}`);
        }
        else {
            (0, logger_1.log)(`${this.name}: Item with ID ${id} not found.`);
        }
    }
}
exports.Repository = Repository;
//# sourceMappingURL=repository.js.map