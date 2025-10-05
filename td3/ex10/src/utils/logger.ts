export function log(message: string): void {
    console.log(`[LOG] ${new Date().toLocaleTimeString()} - ${message}`);
}