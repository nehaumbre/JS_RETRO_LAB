// Main Application Controller - JS Retro Lab

import { templates } from './templates.js';
import { consoleInstance } from './console.js';
import { JSVisualizer } from './visualizer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const editor = document.getElementById('code-editor');
  const lineNumbers = document.getElementById('line-numbers');
  const btnRun = document.getElementById('btn-run');
  const btnReset = document.getElementById('btn-reset');
  const btnClearConsole = document.getElementById('btn-clear-console');
  const topicIndicator = document.getElementById('current-topic-indicator');
  const topicList = document.getElementById('topic-list');
  const sidebarTitle = document.getElementById('sidebar-title');
  const footerTime = document.getElementById('footer-time');
  const tabs = document.querySelectorAll('.tab-btn:not(.disabled)');

  let currentTopic = 'arithmetic';
  let currentSection = 'basics';

  // Instantiate Visualizer
  const visualizer = new JSVisualizer('visualizer-body');

  // ==========================================
  // Sections & Topics Data
  // ==========================================
  const sections = {
    basics: {
      title: "Basics Topics",
      defaultTopic: "arithmetic",
      topics: [
        { id: "arithmetic", label: "Arithmetic" },
        { id: "boolean", label: "Boolean" },
        { id: "comparison", label: "Comparison operators" },
        { id: "typeconversion", label: "TypeConversion" },
        { id: "variables", label: "Variables" },
        { id: "strings", label: "Strings" },
        { id: "conditional", label: "Conditional (if)" },
        { id: "forloop", label: "ForLoop" },
        { id: "logicaloperators", label: "Logical Operators" },
        { id: "switch", label: "Switch" },
        { id: "whileanddowhile", label: "While & Do...While" },
        { id: "datetime", label: "Date & Time" },
        { id: "functions", label: "Functions" },
        { id: "objects", label: "Objects" },
        { id: "objectsmanipulation", label: "Object Manipulation" }
      ]
    },
    arrays: {
      title: "Array Topics",
      defaultTopic: "arraybasics",
      topics: [
        { id: "arraybasics", label: "Array Basics" },
        { id: "arrayaddremove", label: "Add & Remove" },
        { id: "arraysearching", label: "Searching" },
        { id: "arraymap", label: "Map Method" },
        { id: "arrayfilter", label: "Filter Method" },
        { id: "arrayreduce", label: "Reduce Method" }
      ]
    },
    advanced: {
      title: "Advanced Topics",
      defaultTopic: "defaultparams",
      topics: [
        { id: "defaultparams", label: "Default Parameters" },
        { id: "destructuring", label: "Destructuring" },
        { id: "enhancedobjects", label: "Enhanced Objects" },
        { id: "helpers", label: "Collection Helpers" },
        { id: "mapandset", label: "Map & Set" },
        { id: "restoperator", label: "Rest Operator" },
        { id: "spreadoperator", label: "Spread Operator" },
        { id: "symbols", label: "Symbols" },
        { id: "templatestrings", label: "Template Strings" },
        { id: "ternaryoperator", label: "Ternary Operator" },
        { id: "advforloops", label: "Advanced For Loops" },
        { id: "thiskeyword", label: "The 'this' Keyword" }
      ]
    }
  };

  // ==========================================
  // Line Numbers Sync
  // ==========================================
  const updateLineNumbers = () => {
    const lines = editor.value.split('\n').length;
    lineNumbers.innerHTML = Array(lines)
      .fill(0)
      .map((_, i) => `<div>${i + 1}</div>`)
      .join('');
  };

  editor.addEventListener('input', updateLineNumbers);
  editor.addEventListener('scroll', () => {
    lineNumbers.scrollTop = editor.scrollTop;
  });

  // Handle Tab key insertion inside editor
  editor.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;

      // set textarea value to: text before caret + tab + text after caret
      editor.value = editor.value.substring(0, start) + '  ' + editor.value.substring(end);

      // put caret at right position
      editor.selectionStart = editor.selectionEnd = start + 2;
      updateLineNumbers();
    }
  });

  // ==========================================
  // Topic & Section Switching
  // ==========================================
  const switchTopic = (topicName) => {
    currentTopic = topicName;

    // Update active button classes in sidebar
    const buttons = topicList.querySelectorAll('.topic-btn');
    buttons.forEach(btn => {
      if (btn.getAttribute('data-topic') === topicName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Format topic name for header indicator
    let displayName = topicName;
    if (topicName === 'typeconversion') displayName = 'TypeConversion';
    else if (topicName === 'forloop') displayName = 'ForLoop';
    else if (topicName === 'logicaloperators') displayName = 'LogicalOperators';
    else if (topicName === 'whileanddowhile') displayName = 'While & Do...While';
    else if (topicName === 'arraybasics') displayName = 'Array Basics';
    else if (topicName === 'arrayaddremove') displayName = 'Add & Remove';
    else if (topicName === 'arraysearching') displayName = 'Searching';
    else if (topicName === 'arraymap') displayName = 'Map Method';
    else if (topicName === 'arrayfilter') displayName = 'Filter Method';
    else if (topicName === 'arrayreduce') displayName = 'Reduce Method';
    else if (topicName === 'objectsmanipulation') displayName = 'Object Manipulation';
    else if (topicName === 'defaultparams') displayName = 'Default Parameters';
    else if (topicName === 'enhancedobjects') displayName = 'Enhanced Objects';
    else if (topicName === 'mapandset') displayName = 'Map & Set';
    else if (topicName === 'restoperator') displayName = 'Rest Operator';
    else if (topicName === 'spreadoperator') displayName = 'Spread Operator';
    else if (topicName === 'templatestrings') displayName = 'Template Strings';
    else if (topicName === 'ternaryoperator') displayName = 'Ternary Operator';
    else if (topicName === 'advforloops') displayName = 'Advanced For Loops';
    else if (topicName === 'thiskeyword') displayName = "The 'this' Keyword";
    else displayName = topicName.charAt(0).toUpperCase() + topicName.slice(1);

    topicIndicator.textContent = displayName;

    // Load template
    editor.value = templates[topicName] || '';
    updateLineNumbers();

    // Clear console & visualizer state
    consoleInstance.clear();
    consoleInstance.system(`Switched to topic: ${displayName}`);
    
    // Initialize Visualizer for topic
    visualizer.initTopic(topicName);
  };

  const switchSection = (sectionName) => {
    currentSection = sectionName;
    const sec = sections[sectionName];
    if (!sec) return;

    // Update sidebar title
    sidebarTitle.textContent = sec.title;

    // Repopulate topic list
    topicList.innerHTML = sec.topics
      .map(t => `<li><button class="topic-btn" data-topic="${t.id}">${t.label}</button></li>`)
      .join('');

    // Switch to default topic
    switchTopic(sec.defaultTopic);
  };

  // Add click listeners to sidebar buttons
  topicList.addEventListener('click', (e) => {
    const btn = e.target.closest('.topic-btn');
    if (btn) {
      const topic = btn.getAttribute('data-topic');
      switchTopic(topic);
    }
  });

  // Add click listeners to section tab buttons
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const section = tab.getAttribute('data-section');
      switchSection(section);
    });
  });

  // ==========================================
  // Code Execution Engine (Sandbox)
  // ==========================================
  const getVariableDeclarations = (code) => {
    const decls = {};
    const regex = /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
    let match;
    while ((match = regex.exec(code)) !== null) {
      const matchIndex = match.index;
      const prevText = code.substring(Math.max(0, matchIndex - 10), matchIndex).trim();
      let kind = 'var';
      if (prevText.endsWith('const')) kind = 'const';
      else if (prevText.endsWith('let')) kind = 'let';
      
      decls[match[1]] = kind;
    }
    return decls;
  };

  const runCode = () => {
    const code = editor.value;
    consoleInstance.clear();
    consoleInstance.system('Executing JS Code...');

    // Extract declarations for variable visualizer
    const decls = getVariableDeclarations(code);
    const varNames = Object.keys(decls);

    const reportBlock = `
;if (typeof console.reportVariables === 'function') {
  const varsObj = {};
  ${varNames.map(v => `
    try {
      varsObj['${v}'] = {
        value: typeof ${v} !== 'undefined' ? ${v} : undefined,
        type: typeof ${v}
      };
    } catch(e) {}
  `).join('\n')}
  console.reportVariables(varsObj);
}
    `;

    const compiledCode = code + '\n' + reportBlock;

    let runtimeVars = null;
    const sandboxConsole = {
      log: (...args) => consoleInstance.log(...args),
      error: (...args) => consoleInstance.error(...args),
      warn: (...args) => consoleInstance.warn(...args),
      info: (...args) => consoleInstance.info(...args),
      reportVariables: (varsObj) => {
        runtimeVars = varsObj;
      }
    };

    try {
      const runner = new Function('console', `
        try {
          ${compiledCode}
        } catch (err) {
          console.error(err);
        }
      `);
      
      runner(sandboxConsole);
      consoleInstance.system('Execution complete.');

      if (currentTopic === 'variables' && runtimeVars) {
        const enrichedVars = {};
        Object.keys(runtimeVars).forEach(name => {
          enrichedVars[name] = {
            value: runtimeVars[name].value,
            type: runtimeVars[name].type,
            kind: decls[name] || 'var'
          };
        });
        visualizer.update('variables', { variables: enrichedVars });
      }
    } catch (compileErr) {
      consoleInstance.error(`Compile Error: ${compileErr.message}`);
      consoleInstance.system('Execution failed.');
    }
  };

  // Button Listeners
  btnRun.addEventListener('click', runCode);
  
  btnReset.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset the code to the default template?')) {
      editor.value = templates[currentTopic] || '';
      updateLineNumbers();
      consoleInstance.clear();
      consoleInstance.system('Code reset to default template.');
      visualizer.initTopic(currentTopic);
    }
  });

  btnClearConsole.addEventListener('click', () => {
    consoleInstance.clear();
  });

  // ==========================================
  // Footer Clock Update
  // ==========================================
  const updateClock = () => {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    footerTime.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  };

  setInterval(updateClock, 1000);
  updateClock();

  // Initialize first topic
  switchSection('basics');
});
