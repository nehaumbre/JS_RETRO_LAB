// Retro Terminal Console Manager

class RetroConsole {
  constructor(elementId) {
    this.container = document.getElementById(elementId);
    this.logs = [];
  }

  // Clear all console logs
  clear() {
    this.logs = [];
    if (this.container) {
      this.container.innerHTML = '<div class="console-line system">Console cleared. Ready for input...</div>';
    }
  }

  // Format arguments to string matching JS format
  formatArg(arg) {
    if (arg === null) return 'null';
    if (arg === undefined) return 'undefined';
    if (typeof arg === 'object') {
      try {
        return JSON.stringify(arg);
      } catch (e) {
        return '[Object]';
      }
    }
    if (typeof arg === 'string') {
      // Don't wrap outer logs in quotes, but wrap inside arrays/objects
      return arg;
    }
    return String(arg);
  }

  // Add a line to the console
  write(type, args) {
    const text = args.map(arg => this.formatArg(arg)).join(' ');
    
    // Store in log history
    this.logs.push({ type, text, timestamp: new Date() });

    if (!this.container) return;

    const line = document.createElement('div');
    line.className = `console-line ${type}`;
    
    // Retro prompt symbol for standard logs
    let prefix = '';
    if (type === 'log') prefix = '❯ ';
    else if (type === 'error') prefix = '❌ ERROR: ';
    else if (type === 'warning') prefix = '⚠️ WARN: ';
    else if (type === 'info') prefix = 'ℹ️ INFO: ';
    else if (type === 'system') prefix = '⚙️ ';

    line.textContent = prefix + text;
    this.container.appendChild(line);

    // Scroll to bottom
    this.container.scrollTop = this.container.scrollHeight;
  }

  log(...args) { this.write('log', args); }
  error(...args) { this.write('error', args); }
  warn(...args) { this.write('warning', args); }
  info(...args) { this.write('info', args); }
  system(...args) { this.write('system', args); }
}

export const consoleInstance = new RetroConsole('console-body');
export default consoleInstance;
