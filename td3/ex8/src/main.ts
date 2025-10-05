import { add } from './math';
import type { CalculationResult, OperationName } from './types'; 

const resultValue = add(10, 5);

const opName: OperationName = 'Addition';

const resultObject: CalculationResult = {
    value: resultValue,
    timestamp: new Date()
};

console.log(`Opération: ${opName}, Résultat: ${resultObject.value}`);
