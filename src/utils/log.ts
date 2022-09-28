export default {
  warn(message?: string, ...optionalParams: any[]) {
    console.warn(`[meadmin warn]:${message}`, ...optionalParams);
  },
  error(message?: string, ...optionalParams: any[]) {
    console.error(`[meadmin error]:${message}`, ...optionalParams);
  },
};
