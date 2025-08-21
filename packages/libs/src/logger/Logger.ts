class Logger {
  // Set this to true to enable logging for debugging
  private static debug: boolean = true;
  private static TAG: string = "Logger"; // Tag for the logger
  private static logStyles: string = "\x1B[92;102;1m"; // Styles for the console log
  private static errorStyles: string = "\x1B[41;93;1m"; // Styles for the console error
  private static warningStyles: string = "\x1B[93;103;1m"; // Styles for the console warning

  public static log(tag: string, message: string, ...args: any[]): void {
    if (this.debug) {
      // eslint-disable-next-line no-console
      console.log(this.logStyles, `[${this.TAG}-info] - ${tag} ${message}`, ...args, "\x1B[m");
    }
  }

  public static error(tag: string, message: string, ...args: any[]): void {
    if (this.debug) {
      // eslint-disable-next-line no-console
      console.error(this.errorStyles, `[${this.TAG}-error] - ${tag} ${message}`, ...args, "\x1B[m");
    }
  }

  public static warn(tag: string, message: string, ...args: any[]): void {
    if (this.debug) {
      // eslint-disable-next-line no-console
      console.warn(this.warningStyles, `[${this.TAG}-warn] - ${tag} ${message}`, ...args, "\x1B[m");
    }
  }

  public static setDebugMode(debug: boolean): void {
    this.debug = debug;
  }
}

export default Logger;
