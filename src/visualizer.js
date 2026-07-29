// JS Retro Lab Visualizations Controller

import consoleInstance from './console.js';

export class JSVisualizer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentTopic = null;
  }

  // Load the visualizer layout for a specific topic
  initTopic(topic) {
    this.currentTopic = topic;
    if (!this.container) return;

    this.container.innerHTML = ''; // Clear container

    switch (topic) {
      case 'arithmetic':
        this.renderArithmetic();
        break;
      case 'boolean':
        this.renderBoolean();
        break;
      case 'comparison':
        this.renderComparison();
        break;
      case 'typeconversion':
        this.renderTypeConversion();
        break;
      case 'variables':
        this.renderVariables(null); // No runtime variables initially
        break;
      case 'strings':
        this.renderStrings();
        break;
      case 'conditional':
        this.renderConditional();
        break;
      case 'forloop':
        this.renderForLoop();
        break;
      case 'logicaloperators':
        this.renderLogicalOperators();
        break;
      case 'switch':
        this.renderSwitch();
        break;
      case 'whileanddowhile':
        this.renderWhileAndDoWhile();
        break;
      case 'datetime':
        this.renderDateTime();
        break;
      case 'functions':
        this.renderFunctions();
        break;
      case 'objects':
        this.renderObjects();
        break;
      case 'objectsmanipulation':
        this.renderObjectsManipulation();
        break;
      case 'arraybasics':
        this.renderArrayBasics();
        break;
      case 'arrayaddremove':
        this.renderArrayAddRemove();
        break;
      case 'arraysearching':
        this.renderArraySearching();
        break;
      case 'arraymap':
        this.renderArrayMap();
        break;
      case 'arrayfilter':
        this.renderArrayFilter();
        break;
      case 'arrayreduce':
        this.renderArrayReduce();
        break;
      case 'defaultparams':
        this.renderDefaultParams();
        break;
      case 'destructuring':
        this.renderDestructuring();
        break;
      case 'enhancedobjects':
        this.renderEnhancedObjects();
        break;
      case 'helpers':
        this.renderHelpers();
        break;
      case 'mapandset':
        this.renderMapAndSet();
        break;
      case 'restoperator':
        this.renderRestOperator();
        break;
      case 'spreadoperator':
        this.renderSpreadOperator();
        break;
      case 'symbols':
        this.renderSymbols();
        break;
      case 'templatestrings':
        this.renderTemplateStrings();
        break;
      case 'ternaryoperator':
        this.renderTernaryOperator();
        break;
      case 'advforloops':
        this.renderAdvForLoops();
        break;
      case 'thiskeyword':
        this.renderThisKeyword();
        break;
      default:
        this.container.innerHTML = '<div class="visualizer-card">Select a topic from the sidebar to visualize.</div>';
    }
  }

  // Update visualizer with run-time data from sandbox execution
  update(topic, runData) {
    if (topic !== this.currentTopic) {
      this.initTopic(topic);
    }

    if (topic === 'variables' && runData && runData.variables) {
      this.renderVariables(runData.variables);
    }
  }

  // Helper: Create safe eval context for small interactive fields
  safeEval(expression) {
    try {
      // Limit eval scope for safety
      const fn = new Function(`return (${expression});`);
      return fn();
    } catch (e) {
      return 'Error';
    }
  }

  // ==========================================
  // ARITHMETIC VISUALIZER
  // ==========================================
  renderArithmetic() {
    const card = document.createElement('div');
    card.className = 'arithmetic-calc';
    card.innerHTML = `
      <div class="calc-display" id="calc-expr-display">0.1 + 0.2 = 0.30000000000000004</div>
      
      <div class="visualizer-card yellow">
        <strong>⚡ Live Operator Sandbox:</strong>
        <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem; align-items: center;">
          <input type="number" id="calc-val-a" class="retro-btn" style="width: 70px; font-size:0.85rem;" value="5">
          <select id="calc-op" class="retro-btn" style="font-size:0.85rem; padding: 0.4rem;">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
            <option value="**">**</option>
          </select>
          <input type="number" id="calc-val-b" class="retro-btn" style="width: 70px; font-size:0.85rem;" value="3">
          <button id="btn-calc-eval" class="retro-btn" style="background:var(--pastel-pink);">Evaluate</button>
        </div>
      </div>

      <div class="operator-grid">
        <div class="op-badge" title="Addition">+</div >
        <div class="op-badge" title="Subtraction">-</div>
        <div class="op-badge" title="Multiplication">*</div>
        <div class="op-badge" title="Division">/</div>
        <div class="op-badge" title="Modulo (Remainder)">%</div>
        <div class="op-badge" title="Exponent (Power)">**</div>
      </div>

      <div class="calc-explanation">
        <strong>💡 Floating Point Trivia:</strong> In JS, numbers are double-precision 64-bit binary floats (IEEE 754). This makes representations of 0.1 and 0.2 imprecise, causing <code>0.1 + 0.2 === 0.30000000000000004</code>!
      </div>
    `;

    this.container.appendChild(card);

    // Event listeners
    const calcA = card.querySelector('#calc-val-a');
    const calcB = card.querySelector('#calc-val-b');
    const calcOp = card.querySelector('#calc-op');
    const display = card.querySelector('#calc-expr-display');
    const btn = card.querySelector('#btn-calc-eval');

    const evaluate = () => {
      const a = calcA.value;
      const b = calcB.value;
      const op = calcOp.value;
      const expression = `${a} ${op} ${b}`;
      const result = this.safeEval(expression);
      display.textContent = `${expression} = ${result}`;
    };

    btn.addEventListener('click', evaluate);
  }

  // ==========================================
  // BOOLEAN VISUALIZER
  // ==========================================
  renderBoolean() {
    const wrapper = document.createElement('div');
    wrapper.className = 'boolean-container';
    wrapper.innerHTML = `
      <div class="visualizer-card mint" style="margin-bottom: 0.75rem;">
        <strong>🔮 Truthiness Sandbox:</strong>
        <p style="font-size: 0.75rem; margin-bottom: 0.5rem; color: var(--text-muted);">Type value (e.g. <code>[]</code>, <code>"hello"</code>, <code>0</code>, <code>false</code>):</p>
        <div style="display: flex; gap: 0.5rem;">
          <input type="text" id="bool-input" class="retro-btn" style="flex: 1; font-size: 0.85rem;" value="[]" placeholder="Enter value...">
          <button id="btn-bool-eval" class="retro-btn" style="background:var(--pastel-blue);">Cast to Boolean</button>
        </div>
        <div id="bool-result-box" class="comp-result true-val" style="margin-top: 0.75rem; font-size: 0.95rem; text-align: center; border-radius: 4px; padding: 0.4rem;">
          Boolean([]) ➔ true (Truthy!)
        </div>
      </div>

      <div class="truth-falsy-container">
        <div class="tf-column">
          <div class="tf-header" style="color: #2b9348;">Truthy 👍</div>
          <div class="tf-item truthy-active">true</div>
          <div class="tf-item truthy-active">Non-zero numbers (e.g., 42, -5)</div>
          <div class="tf-item truthy-active">Non-empty strings ("hello")</div>
          <div class="tf-item truthy-active">Empty Array []</div>
          <div class="tf-item truthy-active">Empty Object {}</div>
        </div>
        <div class="tf-column">
          <div class="tf-header" style="color: #d90429;">Falsy 👎</div>
          <div class="tf-item falsy-active">false</div>
          <div class="tf-item falsy-active">0 (and -0, 0n)</div>
          <div class="tf-item falsy-active">"" (empty string)</div>
          <div class="tf-item falsy-active">null</div>
          <div class="tf-item falsy-active">undefined</div>
          <div class="tf-item falsy-active">NaN</div>
        </div>
      </div>
    `;

    this.container.appendChild(wrapper);

    const input = wrapper.querySelector('#bool-input');
    const btn = wrapper.querySelector('#btn-bool-eval');
    const resultBox = wrapper.querySelector('#bool-result-box');

    btn.addEventListener('click', () => {
      const valStr = input.value.trim();
      let evaluated;
      
      // Handle simple string inputs as direct JS literals, fall back to parsing
      try {
        if ((valStr.startsWith('"') && valStr.endsWith('"')) || 
            (valStr.startsWith("'") && valStr.endsWith("'")) ||
            valStr === 'true' || valStr === 'false' ||
            valStr === 'null' || valStr === 'undefined' ||
            !isNaN(valStr)) {
          evaluated = this.safeEval(valStr);
        } else {
          // Wrapped evaluation for structures like [] or {}
          evaluated = this.safeEval(valStr);
        }
      } catch (e) {
        evaluated = valStr; // Treat as literal string if eval fails
      }

      const isTruthy = Boolean(evaluated);
      resultBox.className = `comp-result ${isTruthy ? 'true-val' : 'false-val'}`;
      resultBox.style.backgroundColor = isTruthy ? 'var(--pastel-mint)' : 'var(--pastel-pink)';
      
      let displayVal = valStr;
      if (typeof evaluated === 'string' && !valStr.startsWith('"')) {
        displayVal = `"${valStr}"`;
      }
      
      resultBox.innerHTML = `Boolean(${displayVal}) ➔ <strong>${isTruthy}</strong> (${isTruthy ? 'Truthy!' : 'Falsy!'})`;
    });
  }

  // ==========================================
  // COMPARISON VISUALIZER
  // ==========================================
  renderComparison() {
    const card = document.createElement('div');
    card.className = 'comparison-machine';
    card.innerHTML = `
      <div class="visualizer-card purple">
        <strong>⚖️ Comparison Machine:</strong>
        <div style="display: flex; gap: 0.5rem; align-items: center; margin-top: 0.5rem;">
          <input type="text" id="comp-val-a" class="retro-btn" style="width: 70px; font-size: 0.85rem;" value="5">
          <select id="comp-operator" class="retro-btn" style="padding: 0.4rem; font-size: 0.85rem;">
            <option value="==">==</option>
            <option value="===">===</option>
            <option value="!=">!=</option>
            <option value="!==">!==</option>
            <option value=">">&gt;</option>
            <option value="<">&lt;</option>
          </select>
          <input type="text" id="comp-val-b" class="retro-btn" style="width: 70px; font-size: 0.85rem;" value="'5'">
          <button id="btn-comp-eval" class="retro-btn" style="background:var(--pastel-yellow);">Compare</button>
        </div>
      </div>

      <div class="comp-result true-val" id="comp-machine-result">
        5 == '5' ➔ true
      </div>

      <div class="calc-explanation" id="comp-explanation">
        <strong>📝 Coercion Details:</strong><br>
        <code>==</code> casts string '5' to number 5 before comparison. Types do not have to match.
      </div>

      <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 0.25rem;">
        <button class="retro-btn preset-comp-btn" data-a="5" data-op="==" data-b="'5'">5 == '5'</button>
        <button class="retro-btn preset-comp-btn" data-a="5" data-op="===" data-b="'5'">5 === '5'</button>
        <button class="retro-btn preset-comp-btn" data-a="0" data-op="==" data-b="false">0 == false</button>
        <button class="retro-btn preset-comp-btn" data-a="[]" data-op="==" data-b="false">[] == false</button>
        <button class="retro-btn preset-comp-btn" data-a="null" data-op="==" data-b="undefined">null == undef</button>
      </div>
    `;

    this.container.appendChild(card);

    const inputA = card.querySelector('#comp-val-a');
    const inputB = card.querySelector('#comp-val-b');
    const opSelect = card.querySelector('#comp-operator');
    const resultBox = card.querySelector('#comp-machine-result');
    const explanation = card.querySelector('#comp-explanation');
    const btn = card.querySelector('#btn-comp-eval');

    const compare = () => {
      const valAStr = inputA.value.trim();
      const valBStr = inputB.value.trim();
      const op = opSelect.value;
      
      let valA, valB;
      try { valA = this.safeEval(valAStr); } catch(e) { valA = valAStr; }
      try { valB = this.safeEval(valBStr); } catch(e) { valB = valBStr; }

      // Safe evaluation of comparison
      let result = false;
      if (op === '==') result = (valA == valB);
      else if (op === '===') result = (valA === valB);
      else if (op === '!=') result = (valA != valB);
      else if (op === '!==') result = (valA !== valB);
      else if (op === '>') result = (valA > valB);
      else if (op === '<') result = (valA < valB);

      resultBox.textContent = `${valAStr} ${op} ${valBStr} ➔ ${result}`;
      resultBox.className = `comp-result ${result ? 'true-val' : 'false-val'}`;
      resultBox.style.backgroundColor = result ? 'var(--pastel-mint)' : 'var(--pastel-pink)';

      // Explanatory texts
      let explText = '';
      const typeA = typeof valA;
      const typeB = typeof valB;

      if (op === '==') {
        if (typeA !== typeB) {
          explText = `<strong>📝 Coercion active (==):</strong> Operands are of different types (<code>${typeA}</code> vs <code>${typeB}</code>). JS converts one or both types implicitly before comparing values.`;
        } else {
          explText = `<strong>📝 Simple equality (==):</strong> Operands are of the same type (<code>${typeA}</code>). No coercion is needed.`;
        }
      } else if (op === '===') {
        if (typeA !== typeB) {
          explText = `<strong>🔒 Strict identity (===):</strong> Immediate <code>false</code>. Types differ (<code>${typeA}</code> vs <code>${typeB}</code>). No type coercion is allowed!`;
        } else {
          explText = `<strong>🔒 Strict identity (===):</strong> Types are identical (<code>${typeA}</code>). JS simply compares their values.`;
        }
      } else {
        explText = `Comparing <code>${typeA}</code> and <code>${typeB}</code> values using relational operators.`;
      }
      explanation.innerHTML = explText;
    };

    btn.addEventListener('click', compare);

    card.querySelectorAll('.preset-comp-btn').forEach(presetBtn => {
      presetBtn.addEventListener('click', (e) => {
        inputA.value = e.target.getAttribute('data-a');
        opSelect.value = e.target.getAttribute('data-op');
        inputB.value = e.target.getAttribute('data-b');
        compare();
      });
    });
  }

  // ==========================================
  // TYPE CONVERSION VISUALIZER
  // ==========================================
  renderTypeConversion() {
    const card = document.createElement('div');
    card.className = 'coercion-funnel';
    card.innerHTML = `
      <div class="visualizer-card blue">
        <strong>🧪 Coercion & Casting Funnel:</strong>
        <p style="font-size:0.75rem; margin-bottom:0.5rem; color:var(--text-muted);">Enter a value to feed into the coercion funnel:</p>
        <input type="text" id="coerce-input" class="retro-btn" style="width:100%; font-size:0.85rem; margin-bottom: 0.75rem;" value="'42'">
        
        <div style="display:flex; justify-content:space-between; gap:0.5rem;">
          <button class="retro-btn coerce-btn" style="flex:1; background:var(--pastel-pink);" data-cast="Number">Number()</button>
          <button class="retro-btn coerce-btn" style="flex:1; background:var(--pastel-yellow);" data-cast="String">String()</button>
          <button class="retro-btn coerce-btn" style="flex:1; background:var(--pastel-purple);" data-cast="Boolean">Boolean()</button>
        </div>

        <div style="margin-top: 0.75rem;">
          <span style="font-size:0.75rem; font-weight:bold; color:var(--text-dark);">⚡ Test Implicit Coercion Glitches:</span>
          <div style="display:flex; flex-wrap:wrap; gap:0.35rem; margin-top:0.25rem;">
            <button class="retro-btn preset-coerce-btn" style="font-size:0.7rem; padding:0.2rem 0.4rem;" data-expr="[] + []">[] + []</button>
            <button class="retro-btn preset-coerce-btn" style="font-size:0.7rem; padding:0.2rem 0.4rem;" data-expr="true + true">true + true</button>
            <button class="retro-btn preset-coerce-btn" style="font-size:0.7rem; padding:0.2rem 0.4rem;" data-expr="'10' - 2">'10' - 2</button>
            <button class="retro-btn preset-coerce-btn" style="font-size:0.7rem; padding:0.2rem 0.4rem;" data-expr="'10' + 2">'10' + 2</button>
            <button class="retro-btn preset-coerce-btn" style="font-size:0.7rem; padding:0.2rem 0.4rem;" data-expr="[1,2] + [3]">[1,2] + [3]</button>
          </div>
        </div>
      </div>

      <div class="funnel-stage input">
        <span class="stage-label">Input Value:</span>
        <span class="stage-value" id="stage-in-val">'42' (string)</span>
      </div>
      <div class="funnel-stage conversion">
        <span class="stage-label">Conversion Function:</span>
        <span class="stage-value" id="stage-conv-op">Number(x)</span>
      </div>
      <div class="funnel-stage output">
        <span class="stage-label">Result Value:</span>
        <span class="stage-value" id="stage-out-val">42 (number)</span>
      </div>
    `;

    this.container.appendChild(card);

    const input = card.querySelector('#coerce-input');
    const stageIn = card.querySelector('#stage-in-val');
    const stageConv = card.querySelector('#stage-conv-op');
    const stageOut = card.querySelector('#stage-out-val');

    card.querySelectorAll('.coerce-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const castType = e.target.getAttribute('data-cast');
        const valStr = input.value.trim();
        
        let parsedVal;
        try { parsedVal = this.safeEval(valStr); } catch(err) { parsedVal = valStr; }

        let resultVal;
        if (castType === 'Number') resultVal = Number(parsedVal);
        else if (castType === 'String') resultVal = String(parsedVal);
        else if (castType === 'Boolean') resultVal = Boolean(parsedVal);

        // Update visual elements
        stageIn.textContent = `${valStr} (${typeof parsedVal})`;
        stageConv.textContent = `${castType}(x)`;
        
        let outDisplay = String(resultVal);
        if (typeof resultVal === 'string') outDisplay = `"${resultVal}"`;
        stageOut.textContent = `${outDisplay} (${typeof resultVal})`;
      });
    });

    card.querySelectorAll('.preset-coerce-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const expr = e.target.getAttribute('data-expr');
        const resultVal = this.safeEval(expr);
        
        stageIn.textContent = `${expr}`;
        stageConv.textContent = `Implicit Coercion`;
        
        let outDisplay = String(resultVal);
        if (typeof resultVal === 'string') outDisplay = `"${resultVal}"`;
        stageOut.textContent = `${outDisplay} (${typeof resultVal})`;
      });
    });
  }

  // ==========================================
  // VARIABLES VISUALIZER
  // ==========================================
  renderVariables(variables) {
    // Render variables title and layout container
    this.container.innerHTML = `
      <div class="visualizer-card pink" style="margin-bottom:0.75rem;">
        <strong>📦 Memory Cells (Variable Store)</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-top:0.25rem;">
          Write variables in the code editor (e.g. <code>let lives = 3;</code>) and click <strong>⚡ Run Code</strong> to see them populate here live!
        </p>
      </div>
      <div class="variables-grid" id="vars-container">
        <!-- Render lockers here -->
      </div>
      <div class="calc-explanation" style="margin-top:0.75rem; font-size:0.75rem;">
        <strong>💡 Scoping Quick Guide:</strong>
        <ul style="margin-left: 1.1rem; margin-top: 0.25rem; display: flex; flex-direction: column; gap: 0.2rem; list-style-type: none; padding-left: 0;">
          <li>🔒 <strong>const</strong>: Block scoped. Cannot be reassigned. Throws error if modified.</li>
          <li>🔑 <strong>let</strong>: Block scoped. Reassignable. Trapped inside <code>{ }</code> blocks.</li>
          <li>💧 <strong>var</strong>: Function scoped. Hoisted to top. Leaks out of <code>{ }</code> blocks!</li>
        </ul>
      </div>
    `;

    const grid = this.container.querySelector('#vars-container');
    if (!variables || Object.keys(variables).length === 0) {
      grid.innerHTML = `
        <div style="grid-column: span 2; text-align: center; color: var(--text-muted); padding: 1.5rem; border: 2px dashed var(--border-dark); border-radius: 4px;">
          (Memory Empty. Run code with declarations)
        </div>
      `;
      return;
    }

    // Loop through variables runData
    Object.keys(variables).forEach(name => {
      const item = variables[name];
      const kind = item.kind || 'var'; // default fallback
      const value = item.value;
      const type = item.type || typeof value;

      // Select icon badge based on declaration kind
      let iconBadge = '💧';
      if (kind === 'const') iconBadge = '🔒';
      else if (kind === 'let') iconBadge = '🔑';

      // Highlight hoisted/uninitialized values
      const isHoisted = value === undefined;
      const valStr = value === null ? 'null' : (isHoisted ? 'undefined' : String(value));
      const valClass = isHoisted ? 'style="color: var(--console-err); font-weight: bold;"' : '';

      const card = document.createElement('div');
      card.className = 'variable-card';
      card.innerHTML = `
        <div class="var-header">
          <span class="var-name">${iconBadge} ${name}</span>
          <span class="var-kind ${kind}">${kind}</span>
        </div>
        <div class="var-value-row">
          <span class="var-type">&lt;${type}&gt;</span>
          <span class="var-val" ${valClass}>${valStr}</span>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  // ==========================================
  // STRINGS VISUALIZER
  // ==========================================
  renderStrings() {
    const card = document.createElement('div');
    card.className = 'string-visualizer-container';
    card.innerHTML = `
      <div class="visualizer-card mint">
        <strong>🔠 String Inspector:</strong>
        <input type="text" id="str-input" class="retro-btn" style="width:100%; font-size:0.85rem; margin-top:0.5rem;" value="RETRO_GAME">
      </div>

      <div class="string-grid-scroll">
        <div class="string-box-grid" id="str-box-grid">
          <!-- Dynamically populated character cells -->
        </div>
      </div>

      <div class="string-metadata">
        <span>length: <span id="str-len-val">10</span></span>
      </div>

      <div class="visualizer-card yellow" style="font-size:0.8rem;">
        <strong>🛠️ Interactive String Methods:</strong>
        <div style="display:flex; flex-direction:column; gap:0.5rem; margin-top:0.5rem;">
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <span>.slice(</span>
            <input type="number" id="slice-start" class="retro-btn" style="width:50px; font-size:0.75rem; padding:0.25rem;" value="0" min="0">
            <span>,</span>
            <input type="number" id="slice-end" class="retro-btn" style="width:50px; font-size:0.75rem; padding:0.25rem;" value="5" min="0">
            <span>)</span>
            <button id="btn-slice-apply" class="retro-btn" style="font-size:0.75rem; padding:0.25rem 0.5rem; background:var(--pastel-pink);">Apply</button>
          </div>
          <div id="method-result" style="font-weight:bold; border-top:1px solid #ccc; padding-top:0.4rem; color:var(--text-dark);">
            Result: "RETRO"
          </div>
        </div>
      </div>
    `;

    this.container.appendChild(card);

    const input = card.querySelector('#str-input');
    const grid = card.querySelector('#str-box-grid');
    const lenVal = card.querySelector('#str-len-val');
    
    const sliceStart = card.querySelector('#slice-start');
    const sliceEnd = card.querySelector('#slice-end');
    const btnSlice = card.querySelector('#btn-slice-apply');
    const methodResult = card.querySelector('#method-result');

    const updateStringGrid = (highlightRange = null) => {
      const text = input.value;
      lenVal.textContent = text.length;
      grid.innerHTML = '';
      
      for (let i = 0; i < text.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'char-cell';
        
        let isHighlighted = false;
        if (highlightRange && i >= highlightRange.start && i < highlightRange.end) {
          isHighlighted = true;
          cell.className += ' highlighted';
        }
        
        cell.innerHTML = `
          <span class="char-val">${text[i] === ' ' ? '&nbsp;' : text[i]}</span>
          <span class="char-idx">${i}</span>
        `;
        grid.appendChild(cell);
      }
    };

    input.addEventListener('input', () => {
      updateStringGrid();
      // Reset slice bounds max values
      sliceStart.max = input.value.length;
      sliceEnd.max = input.value.length;
    });

    btnSlice.addEventListener('click', () => {
      const text = input.value;
      const start = Math.max(0, parseInt(sliceStart.value) || 0);
      const end = Math.min(text.length, parseInt(sliceEnd.value) || 0);
      
      const sliced = text.slice(start, end);
      methodResult.innerHTML = `Result: <code>"${sliced}"</code>`;
      updateStringGrid({ start, end });
    });

    // Run initial build
    updateStringGrid({ start: 0, end: 5 });
  }

  // ==========================================
  // CONDITIONAL VISUALIZER
  // ==========================================
  renderConditional() {
    const card = document.createElement('div');
    card.className = 'conditional-visualizer';
    card.innerHTML = `
      <div class="visualizer-card yellow">
        <strong>🚦 Branching Pathway:</strong>
        <p style="font-size:0.75rem; margin-bottom:0.5rem; color:var(--text-muted);">Adjust Score slider to watch the branches execute:</p>
        <div style="display:flex; align-items:center; gap:0.75rem;">
          <input type="range" id="cond-score-slider" style="flex:1;" min="0" max="100" value="85">
          <span class="retro-btn" id="cond-score-val" style="padding:0.2rem 0.5rem; font-weight:bold;">85</span>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.5rem;">
        <div class="tf-item" id="branch-s" style="border: 2px solid var(--border-dark); padding:0.5rem;">
          <strong>if (score >= 90)</strong> ➔ Rank: S Class ⭐
        </div>
        <div class="tf-item" id="branch-a" style="border: 2px solid var(--border-dark); padding:0.5rem;">
          <strong>else if (score >= 70)</strong> ➔ Rank: A Class 👍
        </div>
        <div class="tf-item" id="branch-b" style="border: 2px solid var(--border-dark); padding:0.5rem;">
          <strong>else</strong> ➔ Rank: B Class 🎮
        </div>
      </div>

      <div class="comp-result true-val" id="cond-result-box" style="margin-top:0.75rem; text-align:center; padding:0.5rem;">
        Result: Rank A Class
      </div>
    `;

    this.container.appendChild(card);

    const slider = card.querySelector('#cond-score-slider');
    const scoreVal = card.querySelector('#cond-score-val');
    const branchS = card.querySelector('#branch-s');
    const branchA = card.querySelector('#branch-a');
    const branchB = card.querySelector('#branch-b');
    const resultBox = card.querySelector('#cond-result-box');

    const updateBranches = () => {
      const score = parseInt(slider.value);
      scoreVal.textContent = score;

      // Reset branch stylings
      branchS.style.backgroundColor = '#fff';
      branchS.style.fontWeight = 'normal';
      branchA.style.backgroundColor = '#fff';
      branchA.style.fontWeight = 'normal';
      branchB.style.backgroundColor = '#fff';
      branchB.style.fontWeight = 'normal';

      if (score >= 90) {
        branchS.style.backgroundColor = 'var(--pastel-mint)';
        branchS.style.fontWeight = 'bold';
        resultBox.textContent = 'Executed Path: S Class ⭐';
        resultBox.style.backgroundColor = 'var(--pastel-mint)';
      } else if (score >= 70) {
        branchA.style.backgroundColor = 'var(--pastel-blue)';
        branchA.style.fontWeight = 'bold';
        resultBox.textContent = 'Executed Path: A Class 👍';
        resultBox.style.backgroundColor = 'var(--pastel-blue)';
      } else {
        branchB.style.backgroundColor = 'var(--pastel-pink)';
        branchB.style.fontWeight = 'bold';
        resultBox.textContent = 'Executed Path: B Class 🎮';
        resultBox.style.backgroundColor = 'var(--pastel-pink)';
      }
    };

    slider.addEventListener('input', updateBranches);
    updateBranches();
  }

  // ==========================================
  // FOR LOOP VISUALIZER
  // ==========================================
  renderForLoop() {
    const card = document.createElement('div');
    card.className = 'loop-visualizer';
    card.innerHTML = `
      <div class="visualizer-card blue" style="margin-bottom:0.75rem;">
        <strong>🔁 Loop Stepper:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem;">Simulate looping step-by-step:</p>
        <div style="display:flex; gap:0.5rem;">
          <button id="btn-loop-step" class="retro-btn" style="flex:1; background:var(--pastel-yellow);">Step Forward ➔</button>
          <button id="btn-loop-reset" class="retro-btn" style="background:#e5e5e5;">Reset</button>
        </div>
      </div>

      <div style="display:flex; gap:0.35rem; margin-bottom:0.75rem;" id="loop-box-grid">
        <!-- Iteration markers -->
      </div>

      <div class="calc-explanation" id="loop-trace" style="font-size:0.75rem; min-height:80px;">
        Click <strong>Step Forward</strong> to initialize loop.
      </div>
    `;

    this.container.appendChild(card);

    const btnStep = card.querySelector('#btn-loop-step');
    const btnReset = card.querySelector('#btn-loop-reset');
    const grid = card.querySelector('#loop-box-grid');
    const trace = card.querySelector('#loop-trace');

    const totalIterations = 5;
    let currentIdx = -1; // -1 means uninitialized

    const drawGrid = () => {
      grid.innerHTML = '';
      for (let i = 1; i <= totalIterations; i++) {
        const cell = document.createElement('div');
        cell.className = 'char-cell';
        cell.style.flex = '1';
        cell.style.height = '40px';
        cell.innerHTML = `
          <span class="char-val" style="font-size:0.8rem;">i=${i}</span>
        `;
        if (i === currentIdx) {
          cell.className += ' highlighted';
          cell.style.backgroundColor = 'var(--pastel-pink)';
        } else if (i < currentIdx) {
          cell.style.backgroundColor = 'var(--pastel-mint)';
        }
        grid.appendChild(cell);
      }
    };

    const updateLoopState = () => {
      if (currentIdx === -1) {
        currentIdx = 1;
        trace.innerHTML = `
          <strong>Initialization:</strong> <code>let i = 1;</code><br>
          <strong>Condition Check:</strong> <code>i (${currentIdx}) <= 5</code> is <strong>true</strong>.<br>
          <em>Loop body runs!</em>
        `;
      } else if (currentIdx < totalIterations) {
        currentIdx++;
        trace.innerHTML = `
          <strong>Increment:</strong> <code>i++</code> (new value: ${currentIdx})<br>
          <strong>Condition Check:</strong> <code>i (${currentIdx}) <= 5</code> is <strong>true</strong>.<br>
          <em>Loop body runs!</em>
        `;
      } else {
        currentIdx++;
        trace.innerHTML = `
          <strong>Increment:</strong> <code>i++</code> (new value: 6)<br>
          <strong>Condition Check:</strong> <code>i (6) <= 5</code> is <strong>false</strong>.<br>
          <strong>Loop terminated!</strong>
        `;
        btnStep.disabled = true;
      }
      drawGrid();
    };

    btnStep.addEventListener('click', updateLoopState);
    btnReset.addEventListener('click', () => {
      currentIdx = -1;
      btnStep.disabled = false;
      trace.innerHTML = 'Click <strong>Step Forward</strong> to initialize loop.';
      drawGrid();
    });

    drawGrid();
  }

  // ==========================================
  // LOGICAL OPERATORS VISUALIZER
  // ==========================================
  renderLogicalOperators() {
    const card = document.createElement('div');
    card.className = 'logical-visualizer';
    card.innerHTML = `
      <div class="visualizer-card purple" style="margin-bottom:0.75rem;">
        <strong>🔌 Logic Gates:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem;">Toggle Input A and B to test logical outcomes:</p>
        <div style="display:flex; justify-content:space-around; gap:0.5rem;">
          <button class="retro-btn" id="btn-gate-a" style="flex:1; background:var(--pastel-pink);">A: TRUE</button>
          <button class="retro-btn" id="btn-gate-b" style="flex:1; background:var(--pastel-pink);">B: TRUE</button>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.5rem;">
        <div class="comp-result true-val" id="gate-and" style="text-align:center; padding:0.4rem;">
          A && B (AND) ➔ true
        </div>
        <div class="comp-result true-val" id="gate-or" style="text-align:center; padding:0.4rem;">
          A || B (OR) ➔ true
        </div>
        <div class="comp-result false-val" id="gate-not" style="text-align:center; padding:0.4rem;">
          !A (NOT) ➔ false
        </div>
      </div>

      <div class="calc-explanation" style="margin-top:0.75rem; font-size:0.7rem;">
        <strong>Rules:</strong><br>
        • <code>&&</code>: returns true ONLY if both sides are true.<br>
        • <code>||</code>: returns true if at least one side is true.<br>
        • <code>!</code>: flips a true to false, and vice versa.
      </div>
    `;

    this.container.appendChild(card);

    const btnA = card.querySelector('#btn-gate-a');
    const btnB = card.querySelector('#btn-gate-b');
    const gateAnd = card.querySelector('#gate-and');
    const gateOr = card.querySelector('#gate-or');
    const gateNot = card.querySelector('#gate-not');

    let stateA = true;
    let stateB = true;

    const updateGates = () => {
      btnA.textContent = `A: ${stateA ? 'TRUE' : 'FALSE'}`;
      btnA.style.backgroundColor = stateA ? 'var(--pastel-mint)' : 'var(--pastel-pink)';

      btnB.textContent = `B: ${stateB ? 'TRUE' : 'FALSE'}`;
      btnB.style.backgroundColor = stateB ? 'var(--pastel-mint)' : 'var(--pastel-pink)';

      const andVal = stateA && stateB;
      const orVal = stateA || stateB;
      const notVal = !stateA;

      gateAnd.textContent = `A && B (AND) ➔ ${andVal}`;
      gateAnd.style.backgroundColor = andVal ? 'var(--pastel-mint)' : 'var(--pastel-pink)';

      gateOr.textContent = `A || B (OR) ➔ ${orVal}`;
      gateOr.style.backgroundColor = orVal ? 'var(--pastel-mint)' : 'var(--pastel-pink)';

      gateNot.textContent = `!A (NOT) ➔ ${notVal}`;
      gateNot.style.backgroundColor = notVal ? 'var(--pastel-mint)' : 'var(--pastel-pink)';
    };

    btnA.addEventListener('click', () => { stateA = !stateA; updateGates(); });
    btnB.addEventListener('click', () => { stateB = !stateB; updateGates(); });

    updateGates();
  }

  // ==========================================
  // SWITCH STATEMENT VISUALIZER
  // ==========================================
  renderSwitch() {
    const card = document.createElement('div');
    card.className = 'switch-visualizer';
    card.innerHTML = `
      <div class="visualizer-card pink" style="margin-bottom:0.75rem;">
        <strong>🎛️ Switch Selection:</strong>
        <div style="display:flex; justify-content:space-between; gap:0.5rem; margin-top:0.4rem; align-items:center;">
          <select id="switch-choice-sel" class="retro-btn" style="flex:1.5; padding:0.4rem;">
            <option value="Warrior">Warrior</option>
            <option value="Mage">Mage</option>
            <option value="Rogue">Rogue</option>
            <option value="Archer">Archer (Default)</option>
          </select>
          <label style="font-size:0.75rem; font-weight:bold; display:flex; align-items:center; gap:0.25rem; flex:1;">
            <input type="checkbox" id="switch-break-chk" checked> Break;
          </label>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.4rem;">
        <div class="tf-item" id="case-warrior" style="border: 2px solid var(--border-dark); padding:0.35rem; font-size:0.8rem;">
          <code>case "Warrior":</code> ➔ Iron Sword ⚔️
        </div>
        <div class="tf-item" id="case-mage" style="border: 2px solid var(--border-dark); padding:0.35rem; font-size:0.8rem;">
          <code>case "Mage":</code> ➔ Fire Staff 🪄
        </div>
        <div class="tf-item" id="case-rogue" style="border: 2px solid var(--border-dark); padding:0.35rem; font-size:0.8rem;">
          <code>case "Rogue":</code> ➔ Poison Dagger 🗡️
        </div>
        <div class="tf-item" id="case-default" style="border: 2px solid var(--border-dark); padding:0.35rem; font-size:0.8rem;">
          <code>default:</code> ➔ Fists 👊
        </div>
      </div>

      <div class="calc-explanation" id="switch-explain" style="margin-top:0.75rem; font-size:0.75rem; min-height:55px;">
        Warrior matches Warrior Case. Break skips remaining cases.
      </div>
    `;

    this.container.appendChild(card);

    const sel = card.querySelector('#switch-choice-sel');
    const chkBreak = card.querySelector('#switch-break-chk');
    const cWarrior = card.querySelector('#case-warrior');
    const cMage = card.querySelector('#case-mage');
    const cRogue = card.querySelector('#case-rogue');
    const cDefault = card.querySelector('#case-default');
    const explain = card.querySelector('#switch-explain');

    const updateSwitchDemo = () => {
      const choice = sel.value;
      const useBreak = chkBreak.checked;

      // Reset
      cWarrior.style.backgroundColor = '#fff';
      cMage.style.backgroundColor = '#fff';
      cRogue.style.backgroundColor = '#fff';
      cDefault.style.backgroundColor = '#fff';

      let hitMatch = false;
      let fellThrough = false;

      // Warrior evaluation
      if (choice === 'Warrior' || fellThrough) {
        cWarrior.style.backgroundColor = 'var(--pastel-yellow)';
        hitMatch = true;
        if (!useBreak) fellThrough = true;
      }
      // Mage evaluation
      if ((choice === 'Mage' && !hitMatch) || fellThrough) {
        cMage.style.backgroundColor = 'var(--pastel-yellow)';
        hitMatch = true;
        if (!useBreak) fellThrough = true;
      }
      // Rogue evaluation
      if ((choice === 'Rogue' && !hitMatch) || fellThrough) {
        cRogue.style.backgroundColor = 'var(--pastel-yellow)';
        hitMatch = true;
        if (!useBreak) fellThrough = true;
      }
      // Default evaluation
      if (!hitMatch || fellThrough) {
        cDefault.style.backgroundColor = 'var(--pastel-yellow)';
      }

      // Explain
      if (useBreak) {
        explain.innerHTML = `<strong>Execution:</strong> Matches Case <code>"${choice}"</code>, executes its block, and stops because of the <code>break;</code> statement.`;
      } else {
        explain.innerHTML = `<strong>⚠️ Fall-Through Warning:</strong> Matches Case <code>"${choice}"</code>, but since <code>break;</code> is missing, execution "falls through" and runs subsequent cases too!`;
      }
    };

    sel.addEventListener('change', updateSwitchDemo);
    chkBreak.addEventListener('change', updateSwitchDemo);

    updateSwitchDemo();
  }

  // ==========================================
  // WHILE & DO...WHILE VISUALIZER
  // ==========================================
  renderWhileAndDoWhile() {
    const card = document.createElement('div');
    card.className = 'while-visualizer';
    card.innerHTML = `
      <div class="visualizer-card mint" style="margin-bottom:0.75rem;">
        <strong>⚖️ Loop Comparison:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.4rem;">Select Starting HP to compare behaviors:</p>
        <div style="display:flex; justify-content:space-between; gap:0.5rem; align-items:center;">
          <select id="while-hp-sel" class="retro-btn" style="flex:1; padding:0.4rem;">
            <option value="0">HP = 0</option>
            <option value="1">HP = 1</option>
            <option value="3">HP = 3</option>
          </select>
          <button id="btn-while-run" class="retro-btn" style="background:var(--pastel-pink); flex:1;">Run Comparison</button>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem;">
        <div style="border: 2px solid var(--border-dark); border-radius:4px; padding:0.4rem; background:#fff;">
          <div style="font-weight:bold; border-bottom:1.5px solid var(--border-dark); margin-bottom:0.25rem; font-size:0.8rem;">while (hp > 0)</div>
          <div id="trace-while" style="font-size:0.7rem; font-family:var(--font-mono); line-height:1.3; min-height:100px;">
            Click Run to start...
          </div>
        </div>
        <div style="border: 2px solid var(--border-dark); border-radius:4px; padding:0.4rem; background:#fff;">
          <div style="font-weight:bold; border-bottom:1.5px solid var(--border-dark); margin-bottom:0.25rem; font-size:0.8rem;">do ... while (hp > 0)</div>
          <div id="trace-dowhile" style="font-size:0.7rem; font-family:var(--font-mono); line-height:1.3; min-height:100px;">
            Click Run to start...
          </div>
        </div>
      </div>
    `;

    this.container.appendChild(card);

    const sel = card.querySelector('#while-hp-sel');
    const btn = card.querySelector('#btn-while-run');
    const tWhile = card.querySelector('#trace-while');
    const tDoWhile = card.querySelector('#trace-dowhile');

    btn.addEventListener('click', () => {
      const startingHp = parseInt(sel.value);
      
      // 1. Trace while loop
      let hp = startingHp;
      let traceW = [];
      traceW.push(`Start: hp = ${hp}`);
      traceW.push(`Check condition (hp > 0)`);
      if (hp <= 0) {
        traceW.push(`➔ 0 > 0 is FALSE.<br><strong>Result: Body ran 0 times.</strong>`);
      } else {
        let count = 0;
        while (hp > 0 && count < 5) {
          traceW.push(`➔ hp is ${hp}. Body runs!`);
          hp--;
          traceW.push(`  hp decremented to ${hp}`);
          traceW.push(`Check condition (hp > 0)`);
          count++;
        }
        traceW.push(`➔ hp is ${hp}. Loop terminates.<br><strong>Result: Body ran ${count} times.</strong>`);
      }
      tWhile.innerHTML = traceW.join('<br>');

      // 2. Trace do...while loop
      hp = startingHp;
      let traceDo = [];
      traceDo.push(`Start: hp = ${hp}`);
      traceDo.push(`Run loop body first!`);
      
      let count = 0;
      do {
        traceDo.push(`➔ hp is ${hp}. Body runs!`);
        hp--;
        traceDo.push(`  hp decremented to ${hp}`);
        traceDo.push(`Check condition (hp > 0)`);
        count++;
      } while (hp > 0 && count < 5);
      
      if (hp <= 0) {
        traceDo.push(`➔ ${hp} > 0 is FALSE. Loop ends.<br><strong>Result: Body ran ${count} time(s).</strong>`);
      } else {
        traceDo.push(`➔ hp is ${hp}. Loop terminates.<br><strong>Result: Body ran ${count} times.</strong>`);
      }
      tDoWhile.innerHTML = traceDo.join('<br>');
    });
  }

  // ==========================================
  // DATE & TIME VISUALIZER
  // ==========================================
  renderDateTime() {
    const card = document.createElement('div');
    card.className = 'datetime-visualizer';
    card.innerHTML = `
      <div class="visualizer-card purple" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem;">
        <div>
          <strong>⌚ Retro Digital Watch:</strong>
          <div id="retro-watch-time" style="font-family:var(--font-logo); font-size:2.8rem; line-height:1; color:var(--text-dark); margin-top:0.25rem;">00:00:00</div>
        </div>
        <div style="border:3px solid var(--border-dark); border-radius:6px; background:#fff; width:90px; height:90px; display:flex; flex-direction:column; align-items:center; justify-content:center; box-shadow:3px 3px 0 var(--border-dark);">
          <div id="retro-cal-month" style="background:var(--pastel-pink); width:100%; text-align:center; font-size:0.75rem; font-weight:bold; border-bottom:2px solid var(--border-dark); padding:0.1rem 0;">JUL</div>
          <div id="retro-cal-date" style="font-size:2rem; font-weight:bold; line-height:1.1;">30</div>
          <div id="retro-cal-day" style="font-size:0.65rem; font-weight:bold; text-transform:uppercase; color:var(--text-muted);">THU</div>
        </div>
      </div>

      <div class="visualizer-card yellow" style="margin-bottom:0.75rem;">
        <strong>⚙️ Date Math & Rollover Sandbox:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem;">Slide offsets to see JS handle auto-rollovers:</p>
        
        <div style="display:flex; flex-direction:column; gap:0.5rem;">
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span style="font-size:0.75rem; width:80px; font-weight:bold;">Offset Days:</span>
            <input type="range" id="date-offset-days" style="flex:1;" min="-45" max="45" value="0">
            <span class="retro-btn" id="date-days-val" style="padding:0.1rem 0.4rem; font-size:0.75rem; font-weight:bold; width:35px; text-align:center;">0</span>
          </div>
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span style="font-size:0.75rem; width:80px; font-weight:bold;">Offset Hours:</span>
            <input type="range" id="date-offset-hours" style="flex:1;" min="-24" max="24" value="0">
            <span class="retro-btn" id="date-hours-val" style="padding:0.1rem 0.4rem; font-size:0.75rem; font-weight:bold; width:35px; text-align:center;">0</span>
          </div>
        </div>
      </div>

      <div class="calc-explanation" id="datetime-explanation" style="font-size:0.75rem; min-height:65px;">
        JS date objects represent time as milliseconds since Jan 1, 1970 UTC.
      </div>
    `;

    this.container.appendChild(card);

    const watchTime = card.querySelector('#retro-watch-time');
    const calMonth = card.querySelector('#retro-cal-month');
    const calDate = card.querySelector('#retro-cal-date');
    const calDay = card.querySelector('#retro-cal-day');

    const sliderDays = card.querySelector('#date-offset-days');
    const sliderHours = card.querySelector('#date-offset-hours');
    const valDays = card.querySelector('#date-days-val');
    const valHours = card.querySelector('#date-hours-val');
    const explain = card.querySelector('#datetime-explanation');

    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    const updateDateTimeDemo = () => {
      const offsetDays = parseInt(sliderDays.value);
      const offsetHours = parseInt(sliderHours.value);

      valDays.textContent = offsetDays >= 0 ? `+${offsetDays}` : offsetDays;
      valHours.textContent = offsetHours >= 0 ? `+${offsetHours}` : offsetHours;

      // Calculate new date
      const d = new Date();
      // Apply offsets using setDate and setHours
      d.setDate(d.getDate() + offsetDays);
      d.setHours(d.getHours() + offsetHours);

      // Render clock
      const pad = (n) => String(n).padStart(2, '0');
      watchTime.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;

      // Render calendar
      calMonth.textContent = months[d.getMonth()];
      calDate.textContent = d.getDate();
      calDay.textContent = days[d.getDay()];

      // Explanation
      let expl = `<strong>Active Date:</strong> <code>${d.toDateString()} ${d.toLocaleTimeString()}</code><br>`;
      if (offsetDays !== 0 || offsetHours !== 0) {
        expl += `<strong>💡 Rollover Trivia:</strong> Modifying the date with offsets triggered JS's auto-rollover. For example, adding days or hours automatically adjusts the month and year, keeping dates 100% mathematically correct.`;
      } else {
        expl += `JS date objects represent time as milliseconds since the Unix Epoch (Jan 1, 1970 UTC). Year: <code>${d.getFullYear()}</code>, Month index: <code>${d.getMonth()}</code>.`;
      }
      explain.innerHTML = expl;
    };

    sliderDays.addEventListener('input', updateDateTimeDemo);
    sliderHours.addEventListener('input', updateDateTimeDemo);

    // Dynamic clock ticking for seconds
    const intervalId = setInterval(() => {
      if (document.getElementById('retro-watch-time')) {
        updateDateTimeDemo();
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    updateDateTimeDemo();
  }

  // ==========================================
  // FUNCTIONS VISUALIZER
  // ==========================================
  renderFunctions() {
    const card = document.createElement('div');
    card.className = 'functions-visualizer';
    card.innerHTML = `
      <div class="visualizer-card blue" style="margin-bottom:0.75rem;">
        <strong>⚙️ Function Processing Machine:</strong>
        <div style="display:flex; flex-direction:column; gap:0.5rem; margin-top:0.4rem;">
          <select id="func-type-sel" class="retro-btn" style="padding:0.4rem; font-size:0.8rem; width:100%;">
            <option value="double">double(x) = x * 2</option>
            <option value="greet">greet(name) = "Welcome " + name</option>
          </select>
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <input type="text" id="func-param-in" class="retro-btn" style="flex:2; font-size:0.85rem;" value="50">
            <button id="btn-func-run" class="retro-btn" style="flex:1; background:var(--pastel-pink);">Run Machine ➔</button>
          </div>
        </div>
      </div>

      <div style="display:flex; align-items:center; justify-content:space-between; border:2px solid var(--border-dark); border-radius:4px; padding:0.6rem; background:#fff; margin-bottom:0.75rem;">
        <div style="text-align:center; flex:1;">
          <div style="font-size:0.7rem; text-transform:uppercase; color:var(--text-muted); font-weight:bold;">Input (Param)</div>
          <div id="func-vis-in" style="font-weight:bold; font-size:0.95rem; background:var(--pastel-yellow); border:1.5px solid var(--border-dark); border-radius:4px; padding:0.2rem; margin-top:0.25rem;">50</div>
        </div>
        <div style="font-size:1.5rem; flex:0.5; text-align:center;">➔</div>
        <div style="text-align:center; flex:1.5; border:2px dashed var(--border-dark); border-radius:4px; padding:0.25rem; background:var(--pastel-purple);">
          <div style="font-size:0.7rem; text-transform:uppercase; color:var(--text-muted); font-weight:bold;">Process (Body)</div>
          <div id="func-vis-body" style="font-family:var(--font-mono); font-size:0.8rem; font-weight:bold; margin-top:0.25rem;">x * 2</div>
        </div>
        <div style="font-size:1.5rem; flex:0.5; text-align:center;">➔</div>
        <div style="text-align:center; flex:1.2;">
          <div style="font-size:0.7rem; text-transform:uppercase; color:var(--text-muted); font-weight:bold;">Output (Return)</div>
          <div id="func-vis-out" style="font-weight:bold; font-size:0.95rem; background:var(--pastel-mint); border:1.5px solid var(--border-dark); border-radius:4px; padding:0.2rem; margin-top:0.25rem;">100</div>
        </div>
      </div>

      <div class="calc-explanation" id="func-code-syntax" style="font-size:0.7rem; font-family:var(--font-mono); line-height:1.4;">
        // Traditional syntax<br>
        function double(x) { return x * 2; }
      </div>
    `;

    this.container.appendChild(card);

    const sel = card.querySelector('#func-type-sel');
    const paramIn = card.querySelector('#func-param-in');
    const btnRun = card.querySelector('#btn-func-run');
    
    const visIn = card.querySelector('#func-vis-in');
    const visBody = card.querySelector('#func-vis-body');
    const visOut = card.querySelector('#func-vis-out');
    const codeSyntax = card.querySelector('#func-code-syntax');

    const updateSelectorInfo = () => {
      const funcType = sel.value;
      if (funcType === 'double') {
        paramIn.value = '50';
        visBody.textContent = 'x * 2';
        codeSyntax.innerHTML = `
          <strong>Compare Syntaxes:</strong><br>
          <span style="color:var(--text-muted);">// Traditional:</span><br>
          <code>function double(x) { return x * 2; }</code><br>
          <span style="color:var(--text-muted);">// Arrow (=>) shorthand:</span><br>
          <code>const double = x => x * 2;</code>
        `;
      } else {
        paramIn.value = 'Player';
        visBody.textContent = '"Welcome " + name';
        codeSyntax.innerHTML = `
          <strong>Compare Syntaxes:</strong><br>
          <span style="color:var(--text-muted);">// Traditional:</span><br>
          <code>function greet(name) { return "Welcome " + name; }</code><br>
          <span style="color:var(--text-muted);">// Arrow (=>) shorthand:</span><br>
          <code>const greet = name => "Welcome " + name;</code>
        `;
      }
      visIn.textContent = '-';
      visOut.textContent = '-';
    };

    const runMachine = () => {
      const funcType = sel.value;
      const paramVal = paramIn.value.trim();

      visIn.textContent = paramVal;

      let result;
      if (funcType === 'double') {
        const num = parseFloat(paramVal) || 0;
        result = num * 2;
        visOut.textContent = result;
      } else {
        result = `Welcome ${paramVal}`;
        visOut.textContent = `"${result}"`;
      }
    };

    sel.addEventListener('change', updateSelectorInfo);
    btnRun.addEventListener('click', runMachine);

    updateSelectorInfo();
  }

  // ==========================================
  // ARRAY BASICS VISUALIZER
  // ==========================================
  renderArrayBasics() {
    const card = document.createElement('div');
    card.className = 'array-basics-visualizer';
    card.innerHTML = `
      <div class="visualizer-card blue" style="margin-bottom:0.75rem;">
        <strong>📦 Array Box Indices:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.4rem;">Select index and write value to modify locker:</p>
        <div style="display:flex; gap:0.5rem; align-items:center;">
          <select id="arr-idx-sel" class="retro-btn" style="padding:0.4rem; font-size:0.8rem; flex:1;">
            <option value="0">Index 0</option>
            <option value="1">Index 1</option>
            <option value="2">Index 2</option>
          </select>
          <input type="text" id="arr-val-in" class="retro-btn" style="flex:1.5; font-size:0.85rem;" value="Laser Gun">
          <button id="btn-arr-assign" class="retro-btn" style="background:var(--pastel-pink); flex:1;">Assign</button>
        </div>
      </div>

      <div style="display:flex; gap:0.5rem; justify-content:center; margin-bottom:0.75rem;" id="arr-lockers-container">
        <!-- Lockers -->
      </div>

      <div class="calc-explanation" id="arr-basics-explanation" style="font-size:0.75rem;">
        Array elements are zero-indexed. Length of array is 3.
      </div>
    `;

    this.container.appendChild(card);

    const sel = card.querySelector('#arr-idx-sel');
    const valIn = card.querySelector('#arr-val-in');
    const btn = card.querySelector('#btn-arr-assign');
    const grid = card.querySelector('#arr-lockers-container');
    const explain = card.querySelector('#arr-basics-explanation');

    const arr = ["Potion", "Sword", "Shield"];

    const drawLockers = (highlightIdx = -1) => {
      grid.innerHTML = '';
      for (let i = 0; i < arr.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'char-cell';
        cell.style.flex = '1';
        cell.style.height = '65px';
        cell.style.padding = '0.3rem 0';
        cell.style.justifyContent = 'space-between';
        
        if (i === highlightIdx) {
          cell.className += ' highlighted';
          cell.style.backgroundColor = 'var(--pastel-yellow)';
        }

        cell.innerHTML = `
          <span class="char-val" style="font-size:0.75rem; font-weight:bold; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; width:90%; text-align:center;">${arr[i]}</span>
          <span class="char-idx" style="font-size:0.7rem; border-top:1px solid #ccc; width:100%; text-align:center;">[${i}]</span>
        `;
        grid.appendChild(cell);
      }
      explain.innerHTML = `<strong>Array State:</strong> <code>["${arr[0]}", "${arr[1]}", "${arr[2]}"]</code><br>Length: <code>${arr.length}</code>. Index 0: <code>"${arr[0]}"</code>.`;
    };

    btn.addEventListener('click', () => {
      const idx = parseInt(sel.value);
      const val = valIn.value.trim();
      arr[idx] = val;
      drawLockers(idx);
    });

    drawLockers();
  }

  // ==========================================
  // ARRAY ADD/REMOVE VISUALIZER
  // ==========================================
  renderArrayAddRemove() {
    const card = document.createElement('div');
    card.className = 'array-addremove-visualizer';
    card.innerHTML = `
      <div class="visualizer-card yellow" style="margin-bottom:0.75rem;">
        <strong>🔋 Push, Pop, Shift, Unshift conveyor:</strong>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.4rem; margin-top:0.4rem;">
          <button class="retro-btn method-btn" data-method="push" style="background:var(--pastel-pink);">push("🍄") [End]</button>
          <button class="retro-btn method-btn" data-method="pop" style="background:#e5e5e5;">pop() [End]</button>
          <button class="retro-btn method-btn" data-method="unshift" style="background:var(--pastel-blue);">unshift("👑") [Start]</button>
          <button class="retro-btn method-btn" data-method="shift" style="background:#e5e5e5;">shift() [Start]</button>
        </div>
      </div>

      <div style="display:flex; gap:0.35rem; justify-content:center; margin-bottom:0.75rem; min-height:45px;" id="addremove-belt">
        <!-- Emojis inside array -->
      </div>

      <div class="comp-result true-val" id="addremove-return" style="text-align:center; padding:0.4rem; margin-bottom:0.5rem; font-size:0.8rem;">
        Return Value: -
      </div>

      <div class="calc-explanation" id="addremove-explanation" style="font-size:0.7rem;">
        • <code>push()</code> and <code>unshift()</code> return the <strong>new length</strong> of the array.<br>
        • <code>pop()</code> and <code>shift()</code> return the <strong>removed element</strong>.
      </div>
    `;

    this.container.appendChild(card);

    const belt = card.querySelector('#addremove-belt');
    const returnBox = card.querySelector('#addremove-return');
    const explain = card.querySelector('#addremove-explanation');

    const arr = ["👾", "🕹️", "🎯"];

    const drawBelt = () => {
      belt.innerHTML = '';
      if (arr.length === 0) {
        belt.innerHTML = '<span style="color:var(--text-muted); font-style:italic;">[ Empty Array ]</span>';
        return;
      }
      for (let i = 0; i < arr.length; i++) {
        const itemBox = document.createElement('div');
        itemBox.className = 'char-cell';
        itemBox.style.width = '35px';
        itemBox.style.height = '35px';
        itemBox.style.padding = '0';
        itemBox.style.justifyContent = 'center';
        itemBox.style.fontSize = '1.1rem';
        itemBox.textContent = arr[i];
        belt.appendChild(itemBox);
      }
    };

    card.querySelectorAll('.method-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const method = e.target.getAttribute('data-method');
        let retVal;

        if (method === 'push') {
          retVal = arr.push("🍄");
          returnBox.textContent = `Return Value (New Length): ${retVal}`;
          explain.innerHTML = `<code>push("🍄")</code> appended the emoji at index <code>${arr.length - 1}</code> (End of array).`;
        } else if (method === 'pop') {
          retVal = arr.pop();
          returnBox.textContent = `Return Value (Removed Item): ${retVal || 'undefined'}`;
          explain.innerHTML = `<code>pop()</code> removed the rightmost item <code>${retVal || 'none'}</code> (End of array).`;
        } else if (method === 'unshift') {
          retVal = arr.unshift("👑");
          returnBox.textContent = `Return Value (New Length): ${retVal}`;
          explain.innerHTML = `<code>unshift("👑")</code> inserted the emoji at index <code>0</code> (Start of array).`;
        } else if (method === 'shift') {
          retVal = arr.shift();
          returnBox.textContent = `Return Value (Removed Item): ${retVal || 'undefined'}`;
          explain.innerHTML = `<code>shift()</code> removed the leftmost item <code>${retVal || 'none'}</code> (Start of array).`;
        }

        drawBelt();
      });
    });

    drawBelt();
  }

  // ==========================================
  // ARRAY SEARCHING VISUALIZER
  // ==========================================
  renderArraySearching() {
    const card = document.createElement('div');
    card.className = 'array-searching-visualizer';
    card.innerHTML = `
      <div class="visualizer-card purple" style="margin-bottom:0.75rem;">
        <strong>🔍 Squad Array Scanner:</strong>
        <div style="display:flex; gap:0.5rem; margin-top:0.4rem; align-items:center;">
          <select id="search-choice-sel" class="retro-btn" style="flex:1.5; padding:0.4rem; font-size:0.8rem;">
            <option value="Sonic">Sonic</option>
            <option value="Knuckles">Knuckles</option>
            <option value="Shadow">Shadow</option>
            <option value="Mario">Mario (Not Found)</option>
          </select>
          <button id="btn-search-inc" class="retro-btn" style="background:var(--pastel-mint); font-size:0.8rem;">.includes()</button>
          <button id="btn-search-idx" class="retro-btn" style="background:var(--pastel-yellow); font-size:0.8rem;">.indexOf()</button>
        </div>
      </div>

      <div style="display:flex; gap:0.5rem; justify-content:center; margin-bottom:0.75rem;" id="search-squad-belt">
        <!-- Squad items -->
      </div>

      <div class="comp-result true-val" id="search-vis-result" style="text-align:center; padding:0.4rem; font-size:0.85rem;">
        Result: Click a search method
      </div>
    `;

    this.container.appendChild(card);

    const sel = card.querySelector('#search-choice-sel');
    const btnInc = card.querySelector('#btn-search-inc');
    const btnIdx = card.querySelector('#btn-search-idx');
    const grid = card.querySelector('#search-squad-belt');
    const resultBox = card.querySelector('#search-vis-result');

    const squad = ["Sonic", "Tails", "Knuckles", "Shadow"];

    const drawSquad = (highlightIdx = -1) => {
      grid.innerHTML = '';
      for (let i = 0; i < squad.length; i++) {
        const cell = document.createElement('div');
        cell.className = 'char-cell';
        cell.style.flex = '1';
        cell.style.height = '48px';
        cell.style.padding = '0.2rem 0';
        cell.style.justifyContent = 'space-between';

        if (i === highlightIdx) {
          cell.className += ' highlighted';
          cell.style.backgroundColor = 'var(--pastel-pink)';
        }

        cell.innerHTML = `
          <span class="char-val" style="font-size:0.75rem; font-weight:bold;">${squad[i]}</span>
          <span class="char-idx" style="font-size:0.65rem;">[${i}]</span>
        `;
        grid.appendChild(cell);
      }
    };

    const runSearchAnimation = (method) => {
      const target = sel.value;
      let step = 0;
      btnInc.disabled = true;
      btnIdx.disabled = true;

      const intervalId = setInterval(() => {
        if (step < squad.length) {
          drawSquad(step);
          resultBox.textContent = `Scanning Index [${step}]... checking "${squad[step]}"`;
          resultBox.style.backgroundColor = '#e5e5e5';

          if (squad[step] === target) {
            clearInterval(intervalId);
            btnInc.disabled = false;
            btnIdx.disabled = false;
            const res = method === 'includes' ? 'true' : step;
            resultBox.textContent = `Match Found at index [${step}]! Returned: ${res}`;
            resultBox.style.backgroundColor = 'var(--pastel-mint)';
          } else {
            step++;
          }
        } else {
          clearInterval(intervalId);
          btnInc.disabled = false;
          btnIdx.disabled = false;
          drawSquad(-1);
          const res = method === 'includes' ? 'false' : '-1';
          resultBox.textContent = `No Match Found! Returned: ${res}`;
          resultBox.style.backgroundColor = 'var(--pastel-pink)';
        }
      }, 550);
    };

    btnInc.addEventListener('click', () => runSearchAnimation('includes'));
    btnIdx.addEventListener('click', () => runSearchAnimation('indexOf'));

    drawSquad();
  }

  // ==========================================
  // ARRAY MAP VISUALIZER
  // ==========================================
  renderArrayMap() {
    const card = document.createElement('div');
    card.className = 'array-map-visualizer';
    card.innerHTML = `
      <div class="visualizer-card blue" style="margin-bottom:0.75rem;">
        <strong>🗺️ Map Transformation Conveyor:</strong>
        <div style="display:flex; justify-content:space-between; gap:0.5rem; margin-top:0.4rem; align-items:center;">
          <select id="map-fn-sel" class="retro-btn" style="flex:1.5; padding:0.4rem; font-size:0.8rem;">
            <option value="double">x ➔ x * 2</option>
            <option value="format">x ➔ "$" + x + ".00"</option>
          </select>
          <button id="btn-map-run" class="retro-btn" style="background:var(--pastel-pink); flex:0.8; font-size:0.8rem;">Map Array</button>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.5rem;">
        <div>
          <span style="font-size:0.7rem; font-weight:bold; color:var(--text-muted);">INPUT ARRAY:</span>
          <div style="display:flex; gap:0.5rem; margin-top:0.2rem;" id="map-in-grid"></div>
        </div>
        
        <div style="text-align:center; font-size:0.75rem; font-weight:bold; border:2px dashed var(--border-dark); padding:0.2rem; border-radius:4px; background:var(--pastel-purple);" id="map-center-fn">
          Applying function: x * 2
        </div>

        <div>
          <span style="font-size:0.7rem; font-weight:bold; color:var(--text-muted);">OUTPUT NEW ARRAY:</span>
          <div style="display:flex; gap:0.5rem; margin-top:0.2rem; min-height:45px;" id="map-out-grid">
            <span style="color:var(--text-muted); font-style:italic; font-size:0.75rem;">Click Map Array to run...</span>
          </div>
        </div>
      </div>
    `;

    this.container.appendChild(card);

    const sel = card.querySelector('#map-fn-sel');
    const btn = card.querySelector('#btn-map-run');
    const inGrid = card.querySelector('#map-in-grid');
    const outGrid = card.querySelector('#map-out-grid');
    const centerFn = card.querySelector('#map-center-fn');

    const inArr = [10, 20, 30];

    const drawInput = () => {
      inGrid.innerHTML = '';
      inArr.forEach(x => {
        const cell = document.createElement('div');
        cell.className = 'char-cell';
        cell.style.flex = '1';
        cell.style.height = '35px';
        cell.style.padding = '0';
        cell.style.justifyContent = 'center';
        cell.innerHTML = `<span class="char-val" style="font-size:0.8rem;">${x}</span>`;
        inGrid.appendChild(cell);
      });
    };

    sel.addEventListener('change', () => {
      centerFn.textContent = sel.value === 'double' ? 'Applying function: x * 2' : 'Applying function: "$" + x + ".00"';
      outGrid.innerHTML = '<span style="color:var(--text-muted); font-style:italic; font-size:0.75rem;">Click Map Array to run...</span>';
    });

    btn.addEventListener('click', () => {
      const mode = sel.value;
      outGrid.innerHTML = '';
      
      inArr.forEach((x, idx) => {
        const outVal = mode === 'double' ? x * 2 : `$${x}.00`;
        const cell = document.createElement('div');
        cell.className = 'char-cell highlighted';
        cell.style.flex = '1';
        cell.style.height = '35px';
        cell.style.padding = '0';
        cell.style.justifyContent = 'center';
        cell.style.backgroundColor = 'var(--pastel-mint)';
        cell.innerHTML = `<span class="char-val" style="font-size:0.8rem;">${outVal}</span>`;
        
        // Add step delay for visual feel
        setTimeout(() => {
          outGrid.appendChild(cell);
        }, idx * 300);
      });
    });

    drawInput();
  }

  // ==========================================
  // ARRAY FILTER VISUALIZER
  // ==========================================
  renderArrayFilter() {
    const card = document.createElement('div');
    card.className = 'array-filter-visualizer';
    card.innerHTML = `
      <div class="visualizer-card mint" style="margin-bottom:0.75rem;">
        <strong>🧪 Filter Gate Scanner:</strong>
        <div style="display:flex; justify-content:space-between; gap:0.5rem; margin-top:0.4rem; align-items:center;">
          <select id="filter-cond-sel" class="retro-btn" style="flex:1.5; padding:0.4rem; font-size:0.8rem;">
            <option value="passing">score >= 70 (Pass)</option>
            <option value="low">score < 50 (Fail)</option>
          </select>
          <button id="btn-filter-run" class="retro-btn" style="background:var(--pastel-yellow); flex:0.8; font-size:0.8rem;">Filter Array</button>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.5rem;">
        <div>
          <span style="font-size:0.7rem; font-weight:bold; color:var(--text-muted);">INPUT ARRAY:</span>
          <div style="display:flex; gap:0.4rem; margin-top:0.2rem;" id="filter-in-grid"></div>
        </div>

        <div style="text-align:center; font-size:0.75rem; font-weight:bold; border:2px dashed var(--border-dark); padding:0.2rem; border-radius:4px; background:var(--pastel-pink);" id="filter-gate-op">
          Filter Gate Condition: score >= 70
        </div>

        <div>
          <span style="font-size:0.7rem; font-weight:bold; color:var(--text-muted);">OUTPUT NEW ARRAY:</span>
          <div style="display:flex; gap:0.4rem; margin-top:0.2rem; min-height:45px;" id="filter-out-grid">
            <span style="color:var(--text-muted); font-style:italic; font-size:0.75rem;">Click Filter Array to run...</span>
          </div>
        </div>
      </div>
    `;

    this.container.appendChild(card);

    const sel = card.querySelector('#filter-cond-sel');
    const btn = card.querySelector('#btn-filter-run');
    const inGrid = card.querySelector('#filter-in-grid');
    const outGrid = card.querySelector('#filter-out-grid');
    const gateOp = card.querySelector('#filter-gate-op');

    const scores = [45, 90, 60, 80, 95, 30];

    const drawInput = (highlightIdx = -1) => {
      inGrid.innerHTML = '';
      scores.forEach((x, i) => {
        const cell = document.createElement('div');
        cell.className = 'char-cell';
        cell.style.flex = '1';
        cell.style.height = '35px';
        cell.style.padding = '0';
        cell.style.justifyContent = 'center';
        
        if (i === highlightIdx) {
          cell.className += ' highlighted';
          cell.style.backgroundColor = 'var(--pastel-yellow)';
        }

        cell.innerHTML = `<span class="char-val" style="font-size:0.8rem;">${x}</span>`;
        inGrid.appendChild(cell);
      });
    };

    sel.addEventListener('change', () => {
      gateOp.textContent = sel.value === 'passing' ? 'Filter Gate Condition: score >= 70' : 'Filter Gate Condition: score < 50';
      outGrid.innerHTML = '<span style="color:var(--text-muted); font-style:italic; font-size:0.75rem;">Click Filter Array to run...</span>';
    });

    btn.addEventListener('click', () => {
      const mode = sel.value;
      outGrid.innerHTML = '';
      btn.disabled = true;

      let idx = 0;
      const runNextStep = () => {
        if (idx < scores.length) {
          const score = scores[idx];
          drawInput(idx);

          const isPass = mode === 'passing' ? score >= 70 : score < 50;
          if (isPass) {
            const cell = document.createElement('div');
            cell.className = 'char-cell highlighted';
            cell.style.width = '35px';
            cell.style.height = '35px';
            cell.style.padding = '0';
            cell.style.justifyContent = 'center';
            cell.style.backgroundColor = 'var(--pastel-mint)';
            cell.innerHTML = `<span class="char-val" style="font-size:0.8rem;">${score}</span>`;
            outGrid.appendChild(cell);
          }

          idx++;
          setTimeout(runNextStep, 450);
        } else {
          drawInput(-1);
          btn.disabled = false;
        }
      };

      runNextStep();
    });

    drawInput();
  }

  // ==========================================
  // ARRAY REDUCE VISUALIZER
  // ==========================================
  renderArrayReduce() {
    const card = document.createElement('div');
    card.className = 'array-reduce-visualizer';
    card.innerHTML = `
      <div class="visualizer-card purple" style="margin-bottom:0.75rem;">
        <strong>🧺 Accumulator Bin:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem;">Sum chest gold coins step-by-step:</p>
        <div style="display:flex; gap:0.5rem;">
          <button id="btn-reduce-step" class="retro-btn" style="flex:1.5; background:var(--pastel-yellow);">Step Accumulator ➔</button>
          <button id="btn-reduce-reset" class="retro-btn" style="background:#e5e5e5; flex:1;">Reset</button>
        </div>
      </div>

      <div style="display:flex; gap:0.5rem; justify-content:center; margin-bottom:0.75rem;" id="reduce-grid"></div>

      <div style="display:flex; align-items:center; justify-content:space-between; border:2px solid var(--border-dark); border-radius:4px; padding:0.5rem; background:#fff; margin-bottom:0.5rem;">
        <span style="font-weight:bold; font-size:0.8rem;">Accumulator Value (acc):</span>
        <span class="retro-btn" id="reduce-acc-box" style="background:var(--pastel-mint); font-size:1.1rem; padding:0.1rem 0.6rem; font-weight:bold;">0</span>
      </div>

      <div class="calc-explanation" id="reduce-explain" style="font-size:0.7rem; min-height:50px;">
        Click <strong>Step Accumulator</strong> to start summation.
      </div>
    `;

    this.container.appendChild(card);

    const btnStep = card.querySelector('#btn-reduce-step');
    const btnReset = card.querySelector('#btn-reduce-reset');
    const grid = card.querySelector('#reduce-grid');
    const accBox = card.querySelector('#reduce-acc-box');
    const explain = card.querySelector('#reduce-explain');

    const chests = [10, 50, 100, 25];
    let acc = 0;
    let step = 0;

    const drawChests = (highlightIdx = -1) => {
      grid.innerHTML = '';
      chests.forEach((val, i) => {
        const cell = document.createElement('div');
        cell.className = 'char-cell';
        cell.style.flex = '1';
        cell.style.height = '42px';
        cell.style.padding = '0.2rem 0';
        cell.style.justifyContent = 'space-between';

        if (i === highlightIdx) {
          cell.className += ' highlighted';
          cell.style.backgroundColor = 'var(--pastel-pink)';
        } else if (i < highlightIdx) {
          cell.style.backgroundColor = 'var(--pastel-mint)';
        }

        cell.innerHTML = `
          <span class="char-val" style="font-size:0.8rem;">💰${val}</span>
          <span class="char-idx" style="font-size:0.65rem;">[${i}]</span>
        `;
        grid.appendChild(cell);
      });
    };

    btnStep.addEventListener('click', () => {
      if (step < chests.length) {
        const current = chests[step];
        drawChests(step);

        const oldAcc = acc;
        acc += current;
        accBox.textContent = acc;

        explain.innerHTML = `
          <strong>Step ${step + 1}:</strong> Current value = <code>${current}</code>.<br>
          Accumulation math: <code>acc (${oldAcc}) + current (${current}) ➔ ${acc}</code>.
        `;

        step++;
        if (step === chests.length) {
          explain.innerHTML += `<br><strong>Finished! reduce() returned final accumulated value: ${acc}</strong>.`;
          btnStep.disabled = true;
        }
      }
    });

    btnReset.addEventListener('click', () => {
      acc = 0;
      step = 0;
      accBox.textContent = '0';
      btnStep.disabled = false;
      explain.innerHTML = 'Click <strong>Step Accumulator</strong> to start summation.';
      drawChests(-1);
    });

    drawChests(-1);
  }

  // ==========================================
  // OBJECTS VISUALIZER
  // ==========================================
  renderObjects() {
    const card = document.createElement('div');
    card.className = 'objects-visualizer';
    card.innerHTML = `
      <div class="visualizer-card blue" style="margin-bottom:0.75rem;">
        <strong>📋 Character Status Object:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem;">Simulate modifying object properties:</p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.4rem;">
          <button id="btn-obj-dmg" class="retro-btn" style="background:var(--pastel-pink); font-size:0.75rem;">hero.hp = 85</button>
          <button id="btn-obj-weap" class="retro-btn" style="background:var(--pastel-yellow); font-size:0.75rem;">hero.weapon = "Mega Buster"</button>
          <button id="btn-obj-add" class="retro-btn" style="background:var(--pastel-mint); font-size:0.75rem; grid-column:span 2;">hero.shield = 50 (New Prop)</button>
        </div>
      </div>

      <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.6rem; margin-bottom:0.75rem; box-shadow:3px 3px 0 var(--border-dark);">
        <div style="background:var(--pastel-purple); font-weight:bold; border-bottom:2px solid var(--border-dark); padding:0.25rem; font-size:0.8rem; display:flex; justify-content:space-between; margin-bottom:0.4rem;">
          <span>STATUS: hero</span>
          <span>Object</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.35rem; font-family:var(--font-mono); font-size:0.75rem;">
          <div style="display:flex; justify-content:space-between; border-bottom:1px dashed #eee; padding-bottom:0.15rem;">
            <span>name:</span>
            <strong id="obj-val-name" style="color:var(--text-dark);">"Mega Man"</strong>
          </div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px dashed #eee; padding-bottom:0.15rem;">
            <span>hp:</span>
            <strong id="obj-val-hp" style="color:var(--text-dark);">100</strong>
          </div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px dashed #eee; padding-bottom:0.15rem;">
            <span>weapon:</span>
            <strong id="obj-val-weapon" style="color:var(--text-dark);">"Plasma Cannon"</strong>
          </div>
          <div style="display:flex; justify-content:space-between; border-bottom:1px dashed #eee; padding-bottom:0.15rem;">
            <span>isAlive:</span>
            <strong id="obj-val-alive" style="color:var(--text-dark);">true</strong>
          </div>
          <div id="obj-row-shield" style="display:none; justify-content:space-between; border-bottom:1px dashed #eee; padding-bottom:0.15rem;">
            <span style="color:var(--pastel-mint); font-weight:bold;">shield (new):</span>
            <strong id="obj-val-shield" style="color:var(--text-dark);">50</strong>
          </div>
        </div>
      </div>

      <div class="calc-explanation" id="obj-explanation" style="font-size:0.75rem;">
        Objects represent a collection of key-value pairs (properties).
      </div>
    `;

    this.container.appendChild(card);

    const btnDmg = card.querySelector('#btn-obj-dmg');
    const btnWeap = card.querySelector('#btn-obj-weap');
    const btnAdd = card.querySelector('#btn-obj-add');

    const vHp = card.querySelector('#obj-val-hp');
    const vWeap = card.querySelector('#obj-val-weapon');
    const rowShield = card.querySelector('#obj-row-shield');
    const vShield = card.querySelector('#obj-val-shield');
    const explain = card.querySelector('#obj-explanation');

    let hpVal = 100;
    let weaponVal = "Plasma Cannon";
    let hasShield = false;

    const updateDisplay = () => {
      vHp.textContent = hpVal;
      vWeap.textContent = `"${weaponVal}"`;
      if (hasShield) {
        rowShield.style.display = 'flex';
        vShield.textContent = '50';
      } else {
        rowShield.style.display = 'none';
      }
    };

    btnDmg.addEventListener('click', () => {
      hpVal = 85;
      updateDisplay();
      vHp.style.color = 'var(--pastel-pink)';
      vHp.parentElement.style.fontWeight = 'bold';
      setTimeout(() => {
        vHp.style.color = 'var(--text-dark)';
        vHp.parentElement.style.fontWeight = 'normal';
      }, 500);
      explain.innerHTML = `<code>hero.hp = 85;</code> updated the value of the <code>hp</code> property from <code>100</code> to <code>85</code>.`;
    });

    btnWeap.addEventListener('click', () => {
      weaponVal = "Mega Buster";
      updateDisplay();
      vWeap.style.color = 'var(--pastel-yellow)';
      vWeap.parentElement.style.fontWeight = 'bold';
      setTimeout(() => {
        vWeap.style.color = 'var(--text-dark)';
        vWeap.parentElement.style.fontWeight = 'normal';
      }, 500);
      explain.innerHTML = `<code>hero.weapon = "Mega Buster";</code> modified the value of the <code>weapon</code> property.`;
    });

    btnAdd.addEventListener('click', () => {
      hasShield = true;
      updateDisplay();
      rowShield.style.backgroundColor = 'rgba(100, 240, 150, 0.2)';
      setTimeout(() => {
        rowShield.style.backgroundColor = 'transparent';
      }, 800);
      explain.innerHTML = `<code>hero.shield = 50;</code> added a brand new key/property <code>shield</code> to the object dynamically!`;
    });

    updateDisplay();
  }

  // ==========================================
  // OBJECT MANIPULATION VISUALIZER
  // ==========================================
  renderObjectsManipulation() {
    const card = document.createElement('div');
    card.className = 'objects-manipulation-visualizer';
    card.innerHTML = `
      <div class="visualizer-card yellow" style="margin-bottom:0.75rem;">
        <strong>⚙️ Object Manipulation Machine:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.4rem;">Perform operations on item object:</p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.4rem;">
          <button id="btn-manip-keys" class="retro-btn" style="background:var(--pastel-blue); font-size:0.75rem;">Object.keys(item)</button>
          <button id="btn-manip-vals" class="retro-btn" style="background:var(--pastel-mint); font-size:0.75rem;">Object.values(item)</button>
          <button id="btn-manip-del" class="retro-btn" style="background:var(--pastel-pink); font-size:0.75rem;">delete item.value</button>
          <button id="btn-manip-has" class="retro-btn" style="background:var(--pastel-yellow); font-size:0.75rem;">"name" in item</button>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:0.5rem; margin-bottom:0.75rem;">
        <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.4rem; box-shadow:3px 3px 0 var(--border-dark);">
          <div style="font-weight:bold; border-bottom:1.5px solid var(--border-dark); padding-bottom:0.1rem; font-size:0.75rem; background:var(--pastel-yellow); text-align:center;">item Object</div>
          <div style="font-family:var(--font-mono); font-size:0.7rem; padding:0.25rem 0;" id="manip-obj-fields">
            <!-- Populated via javascript -->
          </div>
        </div>

        <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.4rem; box-shadow:3px 3px 0 var(--border-dark); display:flex; flex-direction:column; justify-content:space-between;">
          <div>
            <div style="font-weight:bold; border-bottom:1.5px solid var(--border-dark); padding-bottom:0.1rem; font-size:0.75rem; background:var(--pastel-purple); text-align:center;">Returned Output</div>
            <div style="font-family:var(--font-mono); font-size:0.75rem; padding:0.4rem 0.2rem; text-align:center; word-break:break-all;" id="manip-out-box">-</div>
          </div>
          <button id="btn-manip-reset" class="retro-btn" style="font-size:0.7rem; padding:0.1rem; background:#eee; width:100%;">Reset Object</button>
        </div>
      </div>

      <div class="calc-explanation" id="manip-explanation" style="font-size:0.75rem; min-height:55px;">
        Click a manipulation method to process the object.
      </div>
    `;

    this.container.appendChild(card);

    const btnKeys = card.querySelector('#btn-manip-keys');
    const btnVals = card.querySelector('#btn-manip-vals');
    const btnDel = card.querySelector('#btn-manip-del');
    const btnHas = card.querySelector('#btn-manip-has');
    const btnReset = card.querySelector('#btn-manip-reset');

    const objFields = card.querySelector('#manip-obj-fields');
    const outBox = card.querySelector('#manip-out-box');
    const explain = card.querySelector('#manip-explanation');

    let item = {
      id: "potion_1",
      name: "Red Potion",
      value: 15
    };

    const drawObjectState = (hlKey = false, hlVal = false) => {
      objFields.innerHTML = '';
      const keys = Object.keys(item);
      if (keys.length === 0) {
        objFields.innerHTML = '<span style="color:var(--text-muted); font-style:italic;">[ Empty Object ]</span>';
        return;
      }
      keys.forEach(k => {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.style.borderBottom = '1px dashed #eee';
        row.style.padding = '0.1rem 0';

        const kSpan = document.createElement('span');
        kSpan.textContent = `${k}:`;
        if (hlKey) kSpan.style.backgroundColor = 'var(--pastel-blue)';

        const vSpan = document.createElement('strong');
        vSpan.textContent = typeof item[k] === 'string' ? `"${item[k]}"` : item[k];
        if (hlVal) vSpan.style.backgroundColor = 'var(--pastel-mint)';

        row.appendChild(kSpan);
        row.appendChild(vSpan);
        objFields.appendChild(row);
      });
    };

    btnKeys.addEventListener('click', () => {
      drawObjectState(true, false);
      const keysArr = Object.keys(item);
      outBox.textContent = `["${keysArr.join('", "')}"]`;
      explain.innerHTML = `<code>Object.keys(item)</code> returns a list array of all keys/properties present in the object.`;
    });

    btnVals.addEventListener('click', () => {
      drawObjectState(false, true);
      const valsArr = Object.values(item).map(v => typeof v === 'string' ? `"${v}"` : v);
      outBox.textContent = `[${valsArr.join(', ')}]`;
      explain.innerHTML = `<code>Object.values(item)</code> returns a list array of all values corresponding to keys.`;
    });

    btnDel.addEventListener('click', () => {
      if ('value' in item) {
        delete item.value;
        drawObjectState();
        outBox.textContent = 'true (deleted)';
        explain.innerHTML = `<code>delete item.value;</code> completely deletes the <code>value</code> property. It is no longer part of the object.`;
      } else {
        explain.innerHTML = `Property <code>value</code> is already deleted. Click <strong>Reset Object</strong> to restore.`;
      }
    });

    btnHas.addEventListener('click', () => {
      const hasName = "name" in item;
      drawObjectState();
      outBox.textContent = String(hasName);
      explain.innerHTML = `<code>"name" in item</code> checks if the property <code>"name"</code> is a key in the object. Returns <code>${hasName}</code>.`;
    });

    btnReset.addEventListener('click', () => {
      item = {
        id: "potion_1",
        name: "Red Potion",
        value: 15
      };
      drawObjectState();
      outBox.textContent = '-';
      explain.innerHTML = 'Object reset to original state.';
    });

    drawObjectState();
  }

  // ==========================================
  // DEFAULT PARAMETERS VISUALIZER
  // ==========================================
  renderDefaultParams() {
    const card = document.createElement('div');
    card.className = 'defaultparams-visualizer';
    card.innerHTML = `
      <div class="visualizer-card yellow" style="margin-bottom:0.75rem;">
        <strong>🦸 Hero Generator Config:</strong>
        <div style="display:flex; flex-direction:column; gap:0.4rem; margin-top:0.4rem; font-size:0.75rem;">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span>Hero Name:</span>
            <input type="text" id="def-name-in" class="retro-btn" style="padding:0.25rem; font-size:0.75rem; width:120px;" placeholder="(leave empty)">
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span>Hero Role:</span>
            <select id="def-role-sel" class="retro-btn" style="padding:0.25rem; font-size:0.75rem; width:120px;">
              <option value="DEFAULT">-- Default --</option>
              <option value="Warrior">Warrior</option>
              <option value="Mage">Mage</option>
              <option value="Rogue">Rogue</option>
            </select>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span>Level:</span>
            <input type="number" id="def-lvl-in" class="retro-btn" style="padding:0.25rem; font-size:0.75rem; width:120px;" placeholder="(leave empty)" min="1">
          </div>
          <button id="btn-def-generate" class="retro-btn" style="background:var(--pastel-pink); margin-top:0.25rem;">createHero()</button>
        </div>
      </div>

      <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.5rem; margin-bottom:0.5rem; box-shadow:3px 3px 0 var(--border-dark);">
        <div style="font-weight:bold; border-bottom:1.5px solid var(--border-dark); padding-bottom:0.15rem; font-size:0.8rem; background:var(--pastel-mint); display:flex; justify-content:space-between; margin-bottom:0.4rem;">
          <span>GENERATED HERO</span>
          <span>Object</span>
        </div>
        <div style="display:flex; flex-direction:column; gap:0.3rem; font-family:var(--font-mono); font-size:0.75rem;">
          <div style="display:flex; justify-content:space-between;">
            <span>name:</span>
            <strong id="def-out-name">"Mystery Knight"</strong>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span>role:</span>
            <strong id="def-out-role">"Warrior"</strong>
          </div>
          <div style="display:flex; justify-content:space-between;">
            <span>level:</span>
            <strong id="def-out-lvl">1</strong>
          </div>
        </div>
      </div>

      <div class="calc-explanation" id="def-explain" style="font-size:0.75rem; min-height:45px;">
        JS handles missing parameters by falling back to specified default variables.
      </div>
    `;

    this.container.appendChild(card);

    const nameIn = card.querySelector('#def-name-in');
    const roleSel = card.querySelector('#def-role-sel');
    const lvlIn = card.querySelector('#def-lvl-in');
    const btn = card.querySelector('#btn-def-generate');

    const oName = card.querySelector('#def-out-name');
    const oRole = card.querySelector('#def-out-role');
    const oLvl = card.querySelector('#def-out-lvl');
    const explain = card.querySelector('#def-explain');

    btn.addEventListener('click', () => {
      const name = nameIn.value.trim();
      const role = roleSel.value;
      const lvlStr = lvlIn.value;

      // Fallback evaluation mimicking defaults
      const finalName = name === '' ? 'Mystery Knight' : name;
      const finalRole = role === 'DEFAULT' ? 'Warrior' : role;
      const finalLvl = lvlStr === '' ? 1 : parseInt(lvlStr);

      oName.textContent = `"${finalName}"`;
      oRole.textContent = `"${finalRole}"`;
      oLvl.textContent = finalLvl;

      // Color coding default outcomes
      oName.style.color = name === '' ? 'var(--pastel-pink)' : 'var(--text-dark)';
      oRole.style.color = role === 'DEFAULT' ? 'var(--pastel-pink)' : 'var(--text-dark)';
      oLvl.style.color = lvlStr === '' ? 'var(--pastel-pink)' : 'var(--text-dark)';

      let info = [];
      if (name === '') info.push('name fallback to "Mystery Knight"');
      if (role === 'DEFAULT') info.push('role fallback to "Warrior"');
      if (lvlStr === '') info.push('level fallback to 1');

      explain.innerHTML = info.length > 0 
        ? `<strong>Fallback Triggered:</strong> ${info.join(', ')}`
        : `All parameters supplied manually. No defaults needed!`;
    });
  }

  // ==========================================
  // DESTRUCTURING VISUALIZER
  // ==========================================
  renderDestructuring() {
    const card = document.createElement('div');
    card.className = 'destructuring-visualizer';
    card.innerHTML = `
      <div class="visualizer-card blue" style="margin-bottom:0.75rem;">
        <strong>📦 Destructuring Extractor:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.4rem;">Select variable format to extract values:</p>
        <div style="display:flex; gap:0.5rem;">
          <button id="btn-destruct-obj" class="retro-btn" style="flex:1.2; background:var(--pastel-mint); font-size:0.75rem;">const { heroName, hp } = player;</button>
          <button id="btn-destruct-arr" class="retro-btn" style="flex:1; background:var(--pastel-yellow); font-size:0.75rem;">const [gold, silver] = scores;</button>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1.2fr 1fr; gap:0.5rem; margin-bottom:0.5rem;">
        <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.4rem;">
          <div style="font-weight:bold; border-bottom:1.5px solid var(--border-dark); padding-bottom:0.1rem; font-size:0.75rem; background:#f0f0f0;">Source Structures</div>
          <div style="font-family:var(--font-mono); font-size:0.65rem; padding:0.25rem 0; line-height:1.3;">
            <strong>player = {</strong><br>
            &nbsp;&nbsp;heroName: "Proto Man",<br>
            &nbsp;&nbsp;hp: 90,<br>
            &nbsp;&nbsp;weapon: "Proto Shield"<br>
            <strong>}</strong><br>
            <br>
            <strong>scores = [1000, 500, 250]</strong>
          </div>
        </div>

        <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.4rem; display:flex; flex-direction:column; justify-content:center;">
          <div style="font-weight:bold; border-bottom:1.5px solid var(--border-dark); padding-bottom:0.1rem; font-size:0.75rem; background:var(--pastel-purple); text-align:center;">Extracted Variables</div>
          <div style="font-family:var(--font-mono); font-size:0.7rem; padding:0.35rem 0;" id="destruct-vars-out">
            (Variables not yet created)
          </div>
        </div>
      </div>

      <div class="calc-explanation" id="destruct-explain" style="font-size:0.75rem; min-height:45px;">
        Destructuring matches values by key name (for objects) or by index position (for arrays).
      </div>
    `;

    this.container.appendChild(card);

    const btnObj = card.querySelector('#btn-destruct-obj');
    const btnArr = card.querySelector('#btn-destruct-arr');
    const outBox = card.querySelector('#destruct-vars-out');
    const explain = card.querySelector('#destruct-explain');

    btnObj.addEventListener('click', () => {
      outBox.innerHTML = `
        <div style="color:var(--pastel-mint); font-weight:bold;">heroName: "Proto Man"</div>
        <div style="color:var(--pastel-mint); font-weight:bold;">hp: 90</div>
      `;
      explain.innerHTML = `Object properties <code>heroName</code> and <code>hp</code> were extracted matching their key names directly.`;
    });

    btnArr.addEventListener('click', () => {
      outBox.innerHTML = `
        <div style="color:var(--pastel-yellow); font-weight:bold;">gold: 1000</div>
        <div style="color:var(--pastel-yellow); font-weight:bold;">silver: 500</div>
      `;
      explain.innerHTML = `Array index <code>0</code> and <code>1</code> items were extracted matching index order into variables <code>gold</code> and <code>silver</code>.`;
    });
  }

  // ==========================================
  // ENHANCED OBJECT LITERALS VISUALIZER
  // ==========================================
  renderEnhancedObjects() {
    const card = document.createElement('div');
    card.className = 'enhancedobjects-visualizer';
    card.innerHTML = `
      <div class="visualizer-card purple" style="margin-bottom:0.75rem;">
        <strong>🛠️ Enhanced Object Literals:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.4rem;">Observe variables compile shorthand keys and methods:</p>
        <div style="display:flex; gap:0.5rem; justify-content:space-around;">
          <span class="retro-btn" style="font-size:0.7rem; font-weight:bold; background:#fff;">name = "Zero"</span>
          <span class="retro-btn" style="font-size:0.7rem; font-weight:bold; background:#fff;">hp = 150</span>
          <button id="btn-enh-run" class="retro-btn" style="background:var(--pastel-pink); font-size:0.7rem;">Run warrior.slash()</button>
        </div>
      </div>

      <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.5rem; margin-bottom:0.5rem;">
        <div style="font-family:var(--font-mono); font-size:0.75rem;">
          <strong style="color:var(--pastel-purple);">const warrior = {</strong><br>
          &nbsp;&nbsp;name,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:var(--text-muted);">// shorthand for name: name</span><br>
          &nbsp;&nbsp;hp,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:var(--text-muted);">// shorthand for hp: hp</span><br>
          &nbsp;&nbsp;slash() {},&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:var(--text-muted);">// method shorthand</span><br>
          &nbsp;&nbsp;[configKey]: "..."&nbsp;<span style="color:var(--text-muted);">// computed property name</span><br>
          <strong style="color:var(--pastel-purple);">};</strong>
        </div>
      </div>

      <div class="calc-explanation" id="enh-explain" style="font-size:0.75rem; min-height:40px;">
        Object is successfully built. Click <strong>Run warrior.slash()</strong> to call object method.
      </div>
    `;

    this.container.appendChild(card);

    const btn = card.querySelector('#btn-enh-run');
    const explain = card.querySelector('#enh-explain');

    btn.addEventListener('click', () => {
      explain.innerHTML = `<strong>Method Output:</strong> <code>warrior.slash() ➔ "Slashes Z-Saber! ⚔️"</code>`;
    });
  }

  // ==========================================
  // HELPERS (every, some) VISUALIZER
  // ==========================================
  renderHelpers() {
    const card = document.createElement('div');
    card.className = 'helpers-visualizer';
    card.innerHTML = `
      <div class="visualizer-card mint" style="margin-bottom:0.75rem;">
        <strong>🎮 Collection Condition Checker:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.5rem;">Test array values using collection helpers:</p>
        <div style="display:flex; gap:0.5rem;">
          <button id="btn-helper-some" class="retro-btn" style="flex:1.3; background:var(--pastel-pink); font-size:0.75rem;">.some(hp => hp === 0)</button>
          <button id="btn-helper-every" class="retro-btn" style="flex:1.3; background:var(--pastel-blue); font-size:0.75rem;">.every(hp => hp > 50)</button>
        </div>
      </div>

      <div style="display:flex; gap:0.4rem; justify-content:center; margin-bottom:0.75rem;" id="helper-squad-belt"></div>

      <div class="comp-result true-val" id="helper-result" style="text-align:center; padding:0.4rem; font-size:0.85rem;">
        Result: -
      </div>
    `;

    this.container.appendChild(card);

    const btnSome = card.querySelector('#btn-helper-some');
    const btnEvery = card.querySelector('#btn-helper-every');
    const grid = card.querySelector('#helper-squad-belt');
    const resultBox = card.querySelector('#helper-result');

    const hpValues = [100, 85, 40, 0];

    const drawSquad = (highlightIdx = -1) => {
      grid.innerHTML = '';
      hpValues.forEach((hp, i) => {
        const cell = document.createElement('div');
        cell.className = 'char-cell';
        cell.style.flex = '1';
        cell.style.height = '48px';
        cell.style.padding = '0.2rem 0';
        cell.style.justifyContent = 'space-between';

        if (i === highlightIdx) {
          cell.className += ' highlighted';
          cell.style.backgroundColor = 'var(--pastel-pink)';
        }

        cell.innerHTML = `
          <span class="char-val" style="font-size:0.75rem; font-weight:bold;">💖${hp} HP</span>
          <span class="char-idx" style="font-size:0.65rem;">[${i}]</span>
        `;
        grid.appendChild(cell);
      });
    };

    btnSome.addEventListener('click', () => {
      let step = 0;
      btnSome.disabled = true;
      btnEvery.disabled = true;

      const intervalId = setInterval(() => {
        if (step < hpValues.length) {
          drawSquad(step);
          resultBox.textContent = `Testing Index [${step}]: does ${hpValues[step]} === 0?`;
          resultBox.style.backgroundColor = '#e5e5e5';

          if (hpValues[step] === 0) {
            clearInterval(intervalId);
            btnSome.disabled = false;
            btnEvery.disabled = false;
            resultBox.textContent = `Match Found! Returned: true (At least one HP is 0)`;
            resultBox.style.backgroundColor = 'var(--pastel-mint)';
          } else {
            step++;
          }
        }
      }, 500);
    });

    btnEvery.addEventListener('click', () => {
      let step = 0;
      btnSome.disabled = true;
      btnEvery.disabled = true;

      const intervalId = setInterval(() => {
        if (step < hpValues.length) {
          drawSquad(step);
          resultBox.textContent = `Testing Index [${step}]: is ${hpValues[step]} > 50?`;
          resultBox.style.backgroundColor = '#e5e5e5';

          if (hpValues[step] <= 50) {
            clearInterval(intervalId);
            btnSome.disabled = false;
            btnEvery.disabled = false;
            resultBox.textContent = `Check Failed at Index [${step}]! Returned: false (Not all HP are > 50)`;
            resultBox.style.backgroundColor = 'var(--pastel-pink)';
          } else {
            step++;
          }
        }
      }, 500);
    });

    drawSquad();
  }

  // ==========================================
  // MAP AND SET VISUALIZER
  // ==========================================
  renderMapAndSet() {
    const card = document.createElement('div');
    card.className = 'mapandset-visualizer';
    card.innerHTML = `
      <div style="display:grid; grid-template-columns:1fr 1.2fr; gap:0.5rem; margin-bottom:0.5rem;">
        
        <!-- Left: Set Visualizer -->
        <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.4rem; box-shadow:3px 3px 0 var(--border-dark);">
          <div style="font-weight:bold; font-size:0.75rem; border-bottom:1.5px solid var(--border-dark); padding-bottom:0.1rem; background:var(--pastel-pink); text-align:center;">Set (Unique ids)</div>
          <div style="display:flex; flex-direction:column; gap:0.35rem; margin-top:0.4rem;">
            <input type="number" id="set-num-in" class="retro-btn" style="padding:0.2rem; font-size:0.7rem; width:100%;" value="101">
            <button id="btn-set-add" class="retro-btn" style="background:#eee; font-size:0.7rem; padding:0.15rem 0;">.add() to Set</button>
            <div id="set-values" style="font-family:var(--font-mono); font-size:0.7rem; border-top:1px dashed #ccc; padding-top:0.25rem;">
              Set contents: (empty)
            </div>
          </div>
        </div>

        <!-- Right: Map Visualizer -->
        <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.4rem; box-shadow:3px 3px 0 var(--border-dark);">
          <div style="font-weight:bold; font-size:0.75rem; border-bottom:1.5px solid var(--border-dark); padding-bottom:0.1rem; background:var(--pastel-blue); text-align:center;">Map (Key-Value)</div>
          <div style="display:flex; flex-direction:column; gap:0.35rem; margin-top:0.4rem;">
            <input type="text" id="map-key-in" class="retro-btn" style="padding:0.2rem; font-size:0.7rem; width:100%;" placeholder="Key (e.g. P3)">
            <input type="number" id="map-val-in" class="retro-btn" style="padding:0.2rem; font-size:0.7rem; width:100%;" placeholder="Value (e.g. 500)">
            <button id="btn-map-set" class="retro-btn" style="background:#eee; font-size:0.7rem; padding:0.15rem 0;">.set() Key Value</button>
            <div id="map-values" style="font-family:var(--font-mono); font-size:0.7rem; border-top:1px dashed #ccc; padding-top:0.25rem; word-break:break-all;">
              Map items: (empty)
            </div>
          </div>
        </div>

      </div>

      <div class="calc-explanation" id="mapset-explain" style="font-size:0.75rem;">
        <strong>Set</strong> ignores duplicate values. <strong>Map</strong> associates unique keys with values.
      </div>
    `;

    this.container.appendChild(card);

    const setNum = card.querySelector('#set-num-in');
    const btnSetAdd = card.querySelector('#btn-set-add');
    const setVals = card.querySelector('#set-values');

    const mapKey = card.querySelector('#map-key-in');
    const mapVal = card.querySelector('#map-val-in');
    const btnMapSet = card.querySelector('#btn-map-set');
    const mapVals = card.querySelector('#map-values');
    const explain = card.querySelector('#mapset-explain');

    const mySet = new Set([101, 202]);
    const myMap = new Map([["Player_1", 9500], ["Player_2", 8200]]);

    const drawSet = () => {
      const vals = [];
      mySet.forEach(v => vals.push(v));
      setVals.innerHTML = `<strong>Set Size:</strong> ${mySet.size}<br>Values: <code>{ ${vals.join(', ')} }</code>`;
    };

    const drawMap = () => {
      const items = [];
      myMap.forEach((val, k) => {
        items.push(`"${k}" ➔ ${val}`);
      });
      mapVals.innerHTML = `<strong>Map Size:</strong> ${myMap.size}<br>${items.join('<br>')}`;
    };

    btnSetAdd.addEventListener('click', () => {
      const num = parseInt(setNum.value);
      if (isNaN(num)) return;

      if (mySet.has(num)) {
        explain.innerHTML = `<span style="color:var(--pastel-pink); font-weight:bold;">Duplicate Ignored!</span> Set already contains <code>${num}</code>.`;
        setNum.style.borderColor = 'var(--pastel-pink)';
        setTimeout(() => setNum.style.borderColor = 'var(--border-dark)', 800);
      } else {
        mySet.add(num);
        drawSet();
        explain.innerHTML = `Added unique value <code>${num}</code> to Set successfully.`;
      }
    });

    btnMapSet.addEventListener('click', () => {
      const key = mapKey.value.trim();
      const val = parseInt(mapVal.value);
      if (key === '' || isNaN(val)) return;

      myMap.set(key, val);
      drawMap();
      explain.innerHTML = `Associated key <code>"${key}"</code> with value <code>${val}</code> inside Map.`;
      mapKey.value = '';
      mapVal.value = '';
    });

    drawSet();
    drawMap();
  }

  // ==========================================
  // REST OPERATOR VISUALIZER
  // ==========================================
  renderRestOperator() {
    const card = document.createElement('div');
    card.className = 'restoperator-visualizer';
    card.innerHTML = `
      <div class="visualizer-card blue" style="margin-bottom:0.75rem;">
        <strong>📥 Rest Parameter Packer:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.4rem;">Pass times into function parameter: <code>sumTimes(lvl, ...times)</code></p>
        <div style="display:flex; gap:0.5rem; align-items:center;">
          <input type="text" id="rest-times-in" class="retro-btn" style="flex:1.8; font-size:0.8rem;" value="45, 60, 55">
          <button id="btn-rest-run" class="retro-btn" style="background:var(--pastel-pink); flex:1; font-size:0.8rem;">Call function</button>
        </div>
      </div>

      <div style="display:flex; justify-content:space-between; align-items:center; border:2px solid var(--border-dark); border-radius:4px; padding:0.5rem; background:#fff; margin-bottom:0.5rem;">
        <div>
          <span style="font-size:0.7rem; font-weight:bold; color:var(--text-muted);">Arguments passed:</span>
          <div style="font-family:var(--font-mono); font-size:0.75rem; margin-top:0.1rem;" id="rest-args-out">"Stage 1", 45, 60, 55</div>
        </div>
        <div style="font-size:1.5rem;">➔</div>
        <div>
          <span style="font-size:0.7rem; font-weight:bold; color:var(--text-muted);">...times Gathered:</span>
          <div style="font-family:var(--font-mono); font-size:0.75rem; font-weight:bold; background:var(--pastel-yellow); border:1.5px solid var(--border-dark); padding:0.15rem 0.4rem; border-radius:4px; margin-top:0.1rem;" id="rest-gather-out">[45, 60, 55]</div>
        </div>
      </div>

      <div class="calc-explanation" id="rest-explain" style="font-size:0.75rem;">
        The rest operator <code>...</code> packs arguments into a single Array object.
      </div>
    `;

    this.container.appendChild(card);

    const timesIn = card.querySelector('#rest-times-in');
    const btn = card.querySelector('#btn-rest-run');
    const argsOut = card.querySelector('#rest-args-out');
    const gatherOut = card.querySelector('#rest-gather-out');
    const explain = card.querySelector('#rest-explain');

    btn.addEventListener('click', () => {
      const rawTimes = timesIn.value.split(',').map(x => parseInt(x.trim())).filter(x => !isNaN(x));
      argsOut.textContent = `"Stage 1", ${rawTimes.join(', ')}`;
      gatherOut.textContent = `[${rawTimes.join(', ')}]`;

      const sum = rawTimes.reduce((a, b) => a + b, 0);
      explain.innerHTML = `Function executed successfully! Total times sum: <code>${sum}s</code>.`;
    });
  }

  // ==========================================
  // SPREAD OPERATOR VISUALIZER
  // ==========================================
  renderSpreadOperator() {
    const card = document.createElement('div');
    card.className = 'spreadoperator-visualizer';
    card.innerHTML = `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-bottom:0.5rem;">
        <div style="border:2px solid var(--border-dark); border-radius:4px; padding:0.4rem; background:#fff;">
          <div style="font-weight:bold; font-size:0.75rem;">weapons Array</div>
          <code style="font-size:0.7rem;">["Sword", "Bow"]</code>
        </div>
        <div style="border:2px solid var(--border-dark); border-radius:4px; padding:0.4rem; background:#fff;">
          <div style="font-weight:bold; font-size:0.75rem;">spells Array</div>
          <code style="font-size:0.7rem;">["Fire", "Ice"]</code>
        </div>
      </div>

      <div class="visualizer-card yellow" style="margin-bottom:0.75rem; text-align:center;">
        <button id="btn-spread-run" class="retro-btn" style="background:var(--pastel-pink); width:100%; font-size:0.8rem;">const inv = [...weapons, ...spells, "Shield"]</button>
      </div>

      <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.5rem; margin-bottom:0.5rem; box-shadow:3px 3px 0 var(--border-dark);">
        <span style="font-size:0.7rem; font-weight:bold; color:var(--text-muted);">COMBINED INVENTORY GRID:</span>
        <div style="display:flex; gap:0.35rem; margin-top:0.25rem; min-height:35px;" id="spread-out-grid">
          <span style="color:var(--text-muted); font-style:italic; font-size:0.75rem;">Click button to spread...</span>
        </div>
      </div>
    `;

    this.container.appendChild(card);

    const btn = card.querySelector('#btn-spread-run');
    const grid = card.querySelector('#spread-out-grid');

    const weapons = ["Sword", "Bow"];
    const spells = ["Fire", "Ice"];

    btn.addEventListener('click', () => {
      grid.innerHTML = '';
      const inv = [...weapons, ...spells, "Shield"];

      inv.forEach((item, idx) => {
        const cell = document.createElement('div');
        cell.className = 'char-cell highlighted';
        cell.style.flex = '1';
        cell.style.height = '35px';
        cell.style.padding = '0';
        cell.style.justifyContent = 'center';
        cell.style.backgroundColor = 'var(--pastel-mint)';
        cell.innerHTML = `<span class="char-val" style="font-size:0.75rem;">${item}</span>`;

        setTimeout(() => {
          grid.appendChild(cell);
        }, idx * 250);
      });
    });
  }

  // ==========================================
  // SYMBOLS VISUALIZER
  // ==========================================
  renderSymbols() {
    const card = document.createElement('div');
    card.className = 'symbols-visualizer';
    card.innerHTML = `
      <div class="visualizer-card purple" style="margin-bottom:0.75rem;">
        <strong>🔑 Symbol Uniqueness Engine:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.4rem;">Evaluate symbol equivalence:</p>
        <button id="btn-sym-eq" class="retro-btn" style="background:var(--pastel-yellow); width:100%; font-size:0.75rem;">Symbol("id") === Symbol("id")</button>
      </div>

      <div class="comp-result false-val" id="sym-eq-result" style="text-align:center; padding:0.45rem; font-size:0.85rem; margin-bottom:0.5rem;">
        Returned value: -
      </div>

      <div class="calc-explanation" style="font-size:0.7rem;">
        Every Symbol constructor call returns a completely unique identity instance, ensuring property names cannot overwrite key slots.
      </div>
    `;

    this.container.appendChild(card);

    const btn = card.querySelector('#btn-sym-eq');
    const resultBox = card.querySelector('#sym-eq-result');

    btn.addEventListener('click', () => {
      resultBox.textContent = "Returned value: false";
      resultBox.style.backgroundColor = 'var(--pastel-pink)';
    });
  }

  // ==========================================
  // TEMPLATE STRINGS VISUALIZER
  // ==========================================
  renderTemplateStrings() {
    const card = document.createElement('div');
    card.className = 'templatestrings-visualizer';
    card.innerHTML = `
      <div class="visualizer-card blue" style="margin-bottom:0.75rem;">
        <strong>📝 Dynamic Interpolator:</strong>
        <div style="display:flex; gap:0.4rem; margin-top:0.4rem; align-items:center;">
          <input type="text" id="temp-name-in" class="retro-btn" style="flex:1.2; font-size:0.75rem;" value="Alucard">
          <input type="number" id="temp-lvl-in" class="retro-btn" style="flex:0.8; font-size:0.75rem;" value="50">
          <button id="btn-temp-render" class="retro-btn" style="background:var(--pastel-mint); font-size:0.75rem;">Interpolate</button>
        </div>
      </div>

      <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.5rem; margin-bottom:0.5rem;">
        <span style="font-size:0.7rem; font-weight:bold; color:var(--text-muted);">COMPILED STRING OUTPUT:</span>
        <pre id="temp-out-pre" style="font-family:var(--font-mono); font-size:0.75rem; margin-top:0.25rem; white-space:pre-wrap; line-height:1.3; font-weight:bold; background:var(--pastel-yellow); padding:0.35rem; border-radius:4px; border:1px solid #ccc;"></pre>
      </div>
    `;

    this.container.appendChild(card);

    const nameIn = card.querySelector('#temp-name-in');
    const lvlIn = card.querySelector('#temp-lvl-in');
    const btn = card.querySelector('#btn-temp-render');
    const outPre = card.querySelector('#temp-out-pre');

    const updateString = () => {
      const name = nameIn.value.trim();
      const lvl = lvlIn.value;
      outPre.textContent = `--- STATUS CARD ---
Name: ${name}
Level: ${lvl}
Status: Poisoned 🧪
-------------------`;
    };

    btn.addEventListener('click', updateString);
    updateString();
  }

  // ==========================================
  // TERNARY OPERATOR VISUALIZER
  // ==========================================
  renderTernaryOperator() {
    const card = document.createElement('div');
    card.className = 'ternaryoperator-visualizer';
    card.innerHTML = `
      <div class="visualizer-card yellow" style="margin-bottom:0.75rem;">
        <strong>🚦 Nested Ternary Brancher:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.4rem;">Adjust Score to test evaluation paths:</p>
        <div style="display:flex; align-items:center; gap:0.5rem;">
          <input type="range" id="ternary-score" style="flex:1;" min="0" max="100" value="85">
          <span class="retro-btn" id="ternary-score-val" style="padding:0.2rem 0.5rem; font-weight:bold;">85</span>
        </div>
      </div>

      <div style="display:flex; flex-direction:column; gap:0.4rem; font-family:var(--font-mono); font-size:0.7rem; border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.5rem;">
        <div id="tern-path-1" style="padding:0.15rem;">score >= 90 ? "Gold Medal 🥇"</div>
        <div id="tern-path-2" style="padding:0.15rem; margin-left:1rem;">: score >= 70 ? "Silver Medal 🥈"</div>
        <div id="tern-path-3" style="padding:0.15rem; margin-left:2rem;">: "Bronze Medal 🥉"</div>
      </div>

      <div class="comp-result true-val" id="ternary-out-box" style="margin-top:0.75rem; text-align:center; padding:0.4rem; font-weight:bold;">
        Result: Silver Medal 🥈
      </div>
    `;

    this.container.appendChild(card);

    const slider = card.querySelector('#ternary-score');
    const scoreVal = card.querySelector('#ternary-score-val');
    const path1 = card.querySelector('#tern-path-1');
    const path2 = card.querySelector('#tern-path-2');
    const path3 = card.querySelector('#tern-path-3');
    const outBox = card.querySelector('#ternary-out-box');

    const updateTernary = () => {
      const score = parseInt(slider.value);
      scoreVal.textContent = score;

      path1.style.backgroundColor = 'transparent';
      path2.style.backgroundColor = 'transparent';
      path3.style.backgroundColor = 'transparent';

      if (score >= 90) {
        path1.style.backgroundColor = 'var(--pastel-yellow)';
        outBox.textContent = 'Result: Gold Medal 🥇';
        outBox.style.backgroundColor = 'var(--pastel-yellow)';
      } else if (score >= 70) {
        path2.style.backgroundColor = 'var(--pastel-blue)';
        outBox.textContent = 'Result: Silver Medal 🥈';
        outBox.style.backgroundColor = 'var(--pastel-blue)';
      } else {
        path3.style.backgroundColor = 'var(--pastel-pink)';
        outBox.textContent = 'Result: Bronze Medal 🥉';
        outBox.style.backgroundColor = 'var(--pastel-pink)';
      }
    };

    slider.addEventListener('input', updateTernary);
    updateTernary();
  }

  // ==========================================
  // ADVANCED FOR LOOPS VISUALIZER
  // ==========================================
  renderAdvForLoops() {
    const card = document.createElement('div');
    card.className = 'advforloops-visualizer';
    card.innerHTML = `
      <div class="visualizer-card blue" style="margin-bottom:0.75rem;">
        <strong>🔁 Advanced Loop Selector:</strong>
        <div style="display:flex; gap:0.5rem; margin-top:0.4rem;">
          <button id="btn-loop-of" class="retro-btn" style="flex:1; background:var(--pastel-mint); font-size:0.75rem;">for (const x of arr)</button>
          <button id="btn-loop-in" class="retro-btn" style="flex:1; background:var(--pastel-pink); font-size:0.75rem;">for (const k in obj)</button>
        </div>
      </div>

      <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.5rem; margin-bottom:0.5rem; min-height:85px;">
        <span style="font-size:0.7rem; font-weight:bold; color:var(--text-muted);" id="loop-trace-lbl">LOOP TRACE:</span>
        <div style="font-family:var(--font-mono); font-size:0.75rem; margin-top:0.25rem;" id="loop-trace-box">
          Click a loop button to trace values.
        </div>
      </div>
    `;

    this.container.appendChild(card);

    const btnOf = card.querySelector('#btn-loop-of');
    const btnIn = card.querySelector('#btn-loop-in');
    const lbl = card.querySelector('#loop-trace-lbl');
    const traceBox = card.querySelector('#loop-trace-box');

    const arr = ["Shield", "Potion", "Ring"];
    const obj = { name: "Rogue", speed: 95, defense: 30 };

    btnOf.addEventListener('click', () => {
      lbl.textContent = 'for...of ITERATION TRACE:';
      traceBox.innerHTML = '';
      arr.forEach((item, idx) => {
        setTimeout(() => {
          traceBox.innerHTML += `Iteration ${idx + 1} ➔ Item Value: <code>"${item}"</code><br>`;
        }, idx * 400);
      });
    });

    btnIn.addEventListener('click', () => {
      lbl.textContent = 'for...in ITERATION TRACE:';
      traceBox.innerHTML = '';
      const keys = Object.keys(obj);
      keys.forEach((key, idx) => {
        setTimeout(() => {
          traceBox.innerHTML += `Iteration ${idx + 1} ➔ Key: <code>"${key}"</code> | Value: <code>${obj[key]}</code><br>`;
        }, idx * 400);
      });
    });
  }

  // ==========================================
  // THIS KEYWORD VISUALIZER
  // ==========================================
  renderThisKeyword() {
    const card = document.createElement('div');
    card.className = 'thiskeyword-visualizer';
    card.innerHTML = `
      <div class="visualizer-card blue" style="margin-bottom:0.75rem;">
        <strong>🎯 Context Scope Mapper:</strong>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:0.4rem;">Select a method invocation to trace 'this' binding context:</p>
        <div style="display:flex; gap:0.5rem;">
          <button id="btn-this-std" class="retro-btn" style="flex:1; background:var(--pastel-mint); font-size:0.75rem;">warrior.describe()</button>
          <button id="btn-this-arr" class="retro-btn" style="flex:1; background:var(--pastel-pink); font-size:0.75rem;">mage.describeArrow()</button>
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.5rem; margin-bottom:0.5rem;">
        <!-- Standard Method Context -->
        <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.4rem; box-shadow:3px 3px 0 var(--border-dark);" id="this-box-warrior">
          <div style="font-weight:bold; font-size:0.75rem; border-bottom:1.5px solid var(--border-dark); padding-bottom:0.1rem; background:var(--pastel-yellow); text-align:center;">warrior Object</div>
          <div style="font-family:var(--font-mono); font-size:0.65rem; padding:0.25rem 0; line-height:1.3; margin-top:0.2rem;">
            {<br>
            &nbsp;&nbsp;name: "Zero",<br>
            &nbsp;&nbsp;hp: 150,<br>
            &nbsp;&nbsp;describe() {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;return <span id="this-std-ptr" style="padding:0.05rem;">this</span>.name;<br>
            &nbsp;&nbsp;}<br>
            }
          </div>
        </div>

        <!-- Arrow Method Context -->
        <div style="border:2px solid var(--border-dark); border-radius:6px; background:#fff; padding:0.4rem; box-shadow:3px 3px 0 var(--border-dark);" id="this-box-mage">
          <div style="font-weight:bold; font-size:0.75rem; border-bottom:1.5px solid var(--border-dark); padding-bottom:0.1rem; background:var(--pastel-pink); text-align:center;">mage Object</div>
          <div style="font-family:var(--font-mono); font-size:0.65rem; padding:0.25rem 0; line-height:1.3; margin-top:0.2rem;">
            {<br>
            &nbsp;&nbsp;name: "Merlin",<br>
            &nbsp;&nbsp;hp: 100,<br>
            &nbsp;&nbsp;describeArrow: () => {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;return <span id="this-arr-ptr" style="padding:0.05rem;">this</span>.name;<br>
            &nbsp;&nbsp;}<br>
            }
          </div>
        </div>
      </div>

      <div class="comp-result true-val" id="this-vis-output" style="text-align:center; padding:0.4rem; font-size:0.85rem; margin-bottom:0.5rem;">
        Returned value: -
      </div>

      <div class="calc-explanation" id="this-vis-explain" style="font-size:0.75rem; min-height:55px;">
        Click invocation buttons to see what context 'this' gets bound to at runtime.
      </div>
    `;

    this.container.appendChild(card);

    const btnStd = card.querySelector('#btn-this-std');
    const btnArr = card.querySelector('#btn-this-arr');

    const boxWarrior = card.querySelector('#this-box-warrior');
    const boxMage = card.querySelector('#this-box-mage');

    const stdPtr = card.querySelector('#this-std-ptr');
    const arrPtr = card.querySelector('#this-arr-ptr');

    const outBox = card.querySelector('#this-vis-output');
    const explain = card.querySelector('#this-vis-explain');

    btnStd.addEventListener('click', () => {
      // Standard function binding -> refers to warrior object
      boxWarrior.style.borderColor = 'var(--pastel-mint)';
      boxMage.style.borderColor = 'var(--border-dark)';
      
      stdPtr.style.backgroundColor = 'var(--pastel-mint)';
      stdPtr.style.fontWeight = 'bold';
      arrPtr.style.backgroundColor = 'transparent';
      arrPtr.style.fontWeight = 'normal';

      outBox.textContent = 'Returned value: "Zero has 150 HP. ⚔️"';
      outBox.style.backgroundColor = 'var(--pastel-mint)';
      explain.innerHTML = `<strong>Active Context:</strong> <code>this</code> bound to the calling object <code>warrior</code>. It can read properties <code>name</code> and <code>hp</code>.`;
    });

    btnArr.addEventListener('click', () => {
      // Arrow function binding -> refers to outer lexical context (e.g. window/global)
      boxWarrior.style.borderColor = 'var(--border-dark)';
      boxMage.style.borderColor = 'var(--pastel-pink)';

      stdPtr.style.backgroundColor = 'transparent';
      stdPtr.style.fontWeight = 'normal';
      arrPtr.style.backgroundColor = 'var(--pastel-pink)';
      arrPtr.style.fontWeight = 'bold';

      outBox.textContent = 'Returned value: "undefined has undefined HP. 🪄"';
      outBox.style.backgroundColor = 'var(--pastel-pink)';
      explain.innerHTML = `<strong>Lexical Context:</strong> Arrow functions do not get their own <code>this</code>. It inherits from parent lexical scope (global context), yielding <code>undefined</code>.`;
    });
  }
}
