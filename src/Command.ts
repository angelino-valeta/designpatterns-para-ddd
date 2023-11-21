export default interface Command {
  operation: string;
  execute(): void;
}