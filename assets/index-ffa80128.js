(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))p(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&p(i)}).observe(document,{childList:!0,subtree:!0});function d(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function p(l){if(l.ep)return;l.ep=!0;const o=d(l);fetch(l.href,o)}})();const A={arithmetic:`// --- Arithmetic Operators in JS ---
console.log("1. Addition: 10 + 5 =", 10 + 5);
console.log("2. Subtraction: 20 - 7 =", 20 - 7);
console.log("3. Multiplication: 4 * 8 =", 4 * 8);
console.log("4. Division: 15 / 3 =", 15 / 3);
console.log("5. Exponentiation: 2 ** 3 =", 2 ** 3);
console.log("6. Remainder (Modulo): 17 % 5 =", 17 % 5);

// The famous Floating Point Gotcha!
const floatSum = 0.1 + 0.2;
console.log("Is 0.1 + 0.2 equal to 0.3?", floatSum === 0.3);
console.log("Actual value of 0.1 + 0.2:", floatSum);
`,boolean:`// --- Booleans & Short Circuiting ---
console.log("1. Truthy values (evaluate to true):");
console.log("   Boolean('hello') ->", Boolean('hello'));
console.log("   Boolean(42) ->", Boolean(42));
console.log("   Boolean([]) ->", Boolean([]));

console.log("\\n2. Falsy values (evaluate to false):");
console.log("   Boolean(0) ->", Boolean(0));
console.log("   Boolean('') ->", Boolean(''));
console.log("   Boolean(null) ->", Boolean(null));
console.log("   Boolean(undefined) ->", Boolean(undefined));
console.log("   Boolean(NaN) ->", Boolean(NaN));

// Short-circuiting evaluation
const username = "";
const displayName = username || "RetroGamer";
console.log("\\n3. Fallback with || (OR):", displayName);

const isVIP = true;
const accessMsg = isVIP && "Welcome to VIP Room!";
console.log("4. Guard with && (AND):", accessMsg);
`,comparison:`// --- Comparison Operators: == vs === ---
console.log("1. Double Equals (==) performs Type Coercion:");
console.log("   5 == '5' ->", 5 == '5');
console.log("   0 == false ->", 0 == false);
console.log("   '' == false ->", '' == false);
console.log("   null == undefined ->", null == undefined);

console.log("\\n2. Triple Equals (===) checks Value AND Type:");
console.log("   5 === '5' ->", 5 === '5');
console.log("   0 === false ->", 0 === false);
console.log("   null === undefined ->", null === undefined);

console.log("\\n3. Relational comparisons:");
console.log("   10 > 5 ->", 10 > 5);
console.log("   'apple' < 'banana' ->", 'apple' < 'banana'); // Alphabetical!
`,typeconversion:`// --- JavaScript Type Conversion (Casting & Coercion) ---

// 1. Unary Plus & Explicit Number Parsing
let money = "50";
console.log("money = +money:", money = +money); // Coerces to number 50
console.log("typeof(money):", typeof(money));
console.log("parseInt(money):", parseInt(money));
console.log("parseFloat(money):", parseFloat(money));
console.log("Number(money):", Number(money));
console.log("typeof(parseInt(money)):", typeof(parseInt(money)));
console.log("typeof(parseFloat(money)):", typeof(parseFloat(money)));
console.log("typeof(Number(money)):", typeof(Number(money)));

// 2. Explicit Conversion to String
let contact = 244354444;
console.log("\\ncontact.toString():", contact.toString());
console.log("String(contact):", String(contact));
console.log("typeof(contact.toString()):", typeof(contact.toString()));
console.log("typeof(String(contact)):", typeof(String(contact)));

// 3. Implicit Concatenation Trap
console.log("\\nImplicit Concatenation Trap:");
console.log("   '1' + 2 + 3  ➔", '1' + 2 + 3);  // "123"
console.log("   1 + 2 + '3'  ➔", 1 + 2 + '3');  // "33"

// 4. Implicit Math Operations
console.log("\\nMath operations coerce strings to Numbers:");
console.log("   '10' - 2    ➔", '10' - 2);     // 8
console.log("   true + true  ➔", true + true);  // 2
console.log("   [] + []      ➔", [] + []);      // ""
`,variables:`// --- Var vs Let vs Const: Scoping & Reassignment ---

// 1. const (Constant Binding)
const heroName = "MEGA_MAN"; 
console.log("Hero Name (const):", heroName);
// heroName = "ZERO"; // ❌ Throws TypeError if uncommented!

// 2. let (Block-Scoped & Reassignable)
let healthPoints = 100;
healthPoints = 85; // Reassignment is allowed
console.log("HP (let) after damage:", healthPoints);

// 3. var vs let (Scoping differences)
if (true) {
  var varWeapon = "Plasma Cannon"; // Leaks out of blocks!
  let letWeapon = "Energy Sword";   // Trapped inside blocks!
}
console.log("varWeapon accessible here:", varWeapon);
try {
  console.log(letWeapon);
} catch (e) {
  console.error("letWeapon trapped! Error:", e.message);
}

// 4. Hoisting Behavior
console.log("\\nAccessing var before declaration yields:", hoistedVar); // undefined (hoisted!)
var hoistedVar = "I am hoisted!";

try {
  console.log(hoistedLet);
} catch (e) {
  console.error("Accessing let before declaration yields:", e.message);
}
let hoistedLet = "I am not hoisted!";
`,strings:`// --- Strings and String Indexing ---
const msg = "RETRO_GAME";
console.log("Original String:", msg);
console.log("String Length:", msg.length);

// Index Accessing
console.log("Character at index 0:", msg[0]);
console.log("Character at index 6:", msg[6]);

// Common String Methods
console.log("Uppercase:", msg.toUpperCase());
console.log("Sliced (indices 0 to 5):", msg.slice(0, 5));
console.log("Split by underscore:", msg.split("_"));
console.log("Index of 'GAME':", msg.indexOf("GAME"));
`,conditional:`// --- Conditionals (if / else if / else) ---
let score = 85;
console.log("Player Score:", score);

if (score >= 90) {
  console.log("Rank: S Class ⭐");
} else if (score >= 70) {
  console.log("Rank: A Class 👍"); // This will execute!
} else {
  console.log("Rank: B Class 🎮");
}

// Ternary Operator (shorthand if/else)
let isGameOver = false;
let message = isGameOver ? "GAME OVER" : "KEEP PLAYING";
console.log("\\nGame Message:", message);
`,forloop:`// --- For Loops (Counting & Iterating) ---

console.log("1. Simple Counter:");
for (let i = 1; i <= 5; i++) {
  console.log("  Loop index i = " + i);
}

console.log("\\n2. Iterating through inventory:");
const items = ["Potion", "Sword", "Shield"];
for (let i = 0; i < items.length; i++) {
  console.log("  Item at index " + i + " is " + items[i]);
}
`,logicaloperators:`// --- Logical Operators (&&, ||, !) ---
let hasKey = true;
let coins = 10;
let isVIP = false;

// && (AND) - Both sides must be true
console.log("1. Has Key AND 5+ Coins?", hasKey && coins >= 5);

// || (OR) - At least one side must be true
console.log("2. Is VIP OR Has Coins?", isVIP || coins > 0);

// ! (NOT) - Inverts boolean
console.log("3. Is NOT a VIP?", !isVIP);
`,switch:`// --- Switch Statements (Multi-case branch) ---
let choice = "Mage";
console.log("Selected Hero Class:", choice);

switch (choice) {
  case "Warrior":
    console.log("Equipped Weapon: Iron Sword ⚔️");
    break;
  case "Mage":
    console.log("Equipped Weapon: Fire Staff 🪄"); // Matches!
    break;
  case "Rogue":
    console.log("Equipped Weapon: Dual Daggers 🗡️");
    break;
  default:
    console.log("Equipped Weapon: Fists 👊");
}
`,whileanddowhile:`// --- While & Do...While Loops ---

// While loop check condition BEFORE executing
console.log("1. While Loop (checks HP):");
let hp = 3;
while (hp > 0) {
  console.log("  Current HP:", hp);
  hp--;
}
console.log("  HP reached 0! Player defeated.");

// Do...While loops execute ONCE before checking condition
console.log("\\n2. Do...While Loop (runs at least once):");
let coins = 0;
do {
  console.log("  Inside do...while. Adding initial coin.");
  coins++;
} while (coins < 0); // Condition is false, but body ran once!
`,datetime:`// --- JavaScript Date and Time ---

// 1. Create a Date object (current date and time)
const now = new Date();
console.log("Current Date & Time:", now.toString());

// 2. Extract specific parts
console.log("Full Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());   // ⚠️ NOTE: 0 is January, 11 is December!
console.log("Date (day of month):", now.getDate());
console.log("Day (day of week, 0-6):", now.getDay()); // ⚠️ NOTE: 0 is Sunday, 6 is Saturday!
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// 3. Simple Formatting methods
console.log("\\nLocal Date Format:", now.toLocaleDateString());
console.log("Local Time Format:", now.toLocaleTimeString());

// 4. Time difference (milliseconds since Jan 1, 1970)
console.log("\\nTimestamp in ms:", now.getTime());
`,functions:`// --- JavaScript Functions ---

// 1. Traditional Function Declaration
// Takes a parameter (name) and returns a message
function greetPlayer(name) {
  return "Welcome back, " + name + "! 🕹️";
}

// Executing/calling the function
const welcomeMsg = greetPlayer("RetroGamer");
console.log(welcomeMsg);

// 2. Arrow Function (Modern Shorthand syntax)
// Uses the 'const name = (params) => { body }' pattern
const addScores = (current, points) => {
  return current + points;
};

const finalScore = addScores(1000, 250);
console.log("New Score:", finalScore);

// 3. One-line Arrow Function (implicit return)
// If there's only one line of code, we can omit { } and the 'return' keyword!
const double = x => x * 2;
console.log("Double of 50 is:", double(50));
`,arraybasics:`// --- Array Basics: Creation & Indexing ---

// 1. Create an array of retro inventory items
const inventory = ["Potion", "Sword", "Shield"];
console.log("Full Inventory Array:", inventory);
console.log("Number of elements (.length):", inventory.length);

// 2. Access elements by index (0-based)
console.log("First item (index 0):", inventory[0]);
console.log("Second item (index 1):", inventory[1]);
console.log("Third item (index 2):", inventory[2]);

// 3. Modifying elements directly via index
inventory[1] = "Laser Gun"; // Swaps Sword for Laser Gun
console.log("Updated Inventory:", inventory);
`,arrayaddremove:`// --- Adding & Removing Elements from Arrays ---
const queue = ["Mario", "Luigi"];
console.log("Initial Line-up:", queue);

// 1. push() - Appends item to the END of array
const newLenPush = queue.push("Peach");
console.log("After push('Peach'):", queue);
console.log("push() return value (New Length):", newLenPush);

// 2. pop() - Removes item from the END of array
const popped = queue.pop();
console.log("After pop():", queue);
console.log("pop() return value (Removed Item):", popped);

// 3. unshift() - Inserts item at the BEGINNING of array
const newLenUnshift = queue.unshift("Bowser");
console.log("After unshift('Bowser'):", queue);
console.log("unshift() return value (New Length):", newLenUnshift);

// 4. shift() - Removes item from the BEGINNING of array
const shifted = queue.shift();
console.log("After shift():", queue);
console.log("shift() return value (Removed Item):", shifted);
`,arraysearching:`// --- Searching inside Arrays ---
const squad = ["Sonic", "Tails", "Knuckles", "Shadow"];
console.log("Active Squad:", squad);

// 1. includes() - Checks if value exists (returns true/false)
console.log("Is Tails in the squad?", squad.includes("Tails"));
console.log("Is Mario in the squad?", squad.includes("Mario"));

// 2. indexOf() - Finds index of element (returns index, or -1 if not found)
console.log("Index of Knuckles:", squad.indexOf("Knuckles"));
console.log("Index of Luigi:", squad.indexOf("Luigi"));

// 3. find() - Returns first element matching a custom test condition
const numbers = [5, 12, 8, 130, 44];
const firstOverTen = numbers.find(x => x > 10);
console.log("First number > 10:", firstOverTen);
`,arraymap:`// --- Array.prototype.map() ---
// map() transforms every element of an array and returns a NEW array.
// The original array remains completely unchanged!

const prices = [10, 20, 30];
console.log("Original Price List:", prices);

// 1. Double all prices
const doubled = prices.map(price => price * 2);
console.log("Doubled Prices:", doubled);

// 2. Format numbers into price tags
const formatted = prices.map(price => "$" + price + ".00");
console.log("Formatted Price Tags:", formatted);
`,arrayfilter:`// --- Array.prototype.filter() ---
// filter() selects elements that pass a test condition and returns a NEW array.
// The original array remains completely unchanged!

const levelScores = [45, 90, 60, 80, 95, 30];
console.log("Level Scores:", levelScores);

// 1. Filter passing scores (70+)
const passing = levelScores.filter(score => score >= 70);
console.log("Passing Scores (70+):", passing);

// 2. Filter failing scores (< 50)
const failing = levelScores.filter(score => score < 50);
console.log("Failing Scores (< 50):", failing);
`,arrayreduce:`// --- Array.prototype.reduce() ---
// reduce() executes a reducer callback function on each element,
// carrying forward an accumulator result to yield a SINGLE final value.

const chestGold = [10, 50, 100, 25];
console.log("Gold found in chests:", chestGold);

// Sum up all gold coins starting with 0 as accumulator base
const totalGold = chestGold.reduce((acc, current) => {
  console.log("  acc is:", acc, "| adding current:", current);
  return acc + current;
}, 0);

console.log("Total Gold Coins Accumulated:", totalGold);
`,objects:`// --- JavaScript Objects ---

// 1. Create a character object (key-value pairs)
const hero = {
  name: "Mega Man",
  hp: 100,
  weapon: "Plasma Cannon",
  isAlive: true
};

console.log("Full Object:", hero);

// 2. Accessing properties (Dot Notation)
console.log("Hero Name:", hero.name);
console.log("Hero HP:", hero.hp);

// 3. Modifying properties
hero.hp = 85; // Take damage!
hero.weapon = "Mega Buster"; // Upgrade weapon!
console.log("\\nAfter taking damage & upgrading:");
console.log("Updated HP:", hero.hp);
console.log("Updated Weapon:", hero.weapon);

// 4. Adding new properties
hero.shield = 50;
console.log("\\nObject after adding 'shield' property:", hero);
`,objectsmanipulation:`// --- JavaScript Object Manipulation ---

const item = {
  id: "potion_1",
  name: "Red Potion",
  value: 15
};
console.log("Original Item Object:", item);

// 1. Get all keys of an object: Object.keys()
const keys = Object.keys(item);
console.log("Object Keys:", keys); // Array of keys: ["id", "name", "value"]

// 2. Get all values of an object: Object.values()
const values = Object.values(item);
console.log("Object Values:", values); // Array of values: ["potion_1", "Red Potion", 15]

// 3. Delete a property: delete keyword
delete item.value;
console.log("After deleting 'value' property:", item);

// 4. Check if a property exists: in operator
console.log("Does 'name' exist in item?", "name" in item);   // true
console.log("Does 'value' exist in item?", "value" in item); // false
`,defaultparams:`// --- Default Function Parameters ---

// Parameters can have default values if undefined/missing
function createHero(name = "Mystery Knight", role = "Warrior", level = 1) {
  return {
    name: name,
    role: role,
    level: level
  };
}

// 1. Calling with NO parameters (takes all defaults)
console.log("No params:", createHero());

// 2. Calling with partial parameters
console.log("Name only:", createHero("Mega Man"));

// 3. Overriding all defaults
console.log("All overridden:", createHero("Merlin", "Mage", 100));
`,destructuring:`// --- Destructuring Assignment ---

// 1. Object Destructuring (extract properties by key name)
const player = {
  heroName: "Proto Man",
  hp: 90,
  weapon: "Proto Shield"
};

const { heroName, hp } = player;
console.log("Destructured Name:", heroName);
console.log("Destructured HP:", hp);

// 2. Array Destructuring (extract items by index position)
const scores = [1000, 500, 250];
const [gold, silver, bronze] = scores;
console.log("Gold Score:", gold);
console.log("Silver Score:", silver);
console.log("Bronze Score:", bronze);
`,enhancedobjects:`// --- Enhanced Object Literals ---

const name = "Zero";
const hp = 150;
const configKey = "stage";

// 1. Property Shorthand (variable name matches property key)
const warrior = {
  name,
  hp,

  // 2. Method Shorthand (omit "function" keyword)
  slash() {
    return "Slashes Z-Saber! ⚔️";
  },

  // 3. Computed Property Names (dynamic keys in square brackets)
  [configKey]: "Highway Level"
};

console.log("Hero Object:", warrior);
console.log("Calling method:", warrior.slash());
console.log("Computed stage:", warrior.stage);
`,helpers:`// --- Collection Helpers: every() & some() ---
// Array helper methods that check conditions across all elements.

const squadHp = [100, 85, 40, 0];
console.log("Squad HP values:", squadHp);

// 1. some() - checks if AT LEAST ONE element passes
const isSomeoneFallen = squadHp.some(hp => hp === 0);
console.log("Is someone defeated (HP = 0)?", isSomeoneFallen);

// 2. every() - checks if ALL elements pass
const isEveryoneHealthy = squadHp.every(hp => hp > 50);
console.log("Is everyone healthy (HP > 50)?", isEveryoneHealthy);
`,mapandset:`// --- Map & Set Collections ---

// 1. Set - Stores UNIQUE values (duplicates are ignored)
const uniqueIds = new Set();
uniqueIds.add(101);
uniqueIds.add(202);
uniqueIds.add(101); // Duplicate! Will be ignored.

console.log("Unique Set Values (Size: " + uniqueIds.size + "):");
uniqueIds.forEach(id => console.log("  ID:", id));

// 2. Map - Key-Value map that preserves key types
const scoreboard = new Map();
scoreboard.set("Player_1", 9500);
scoreboard.set("Player_2", 8200);

console.log("\\nMap Scoreboard (Size: " + scoreboard.size + "):");
console.log("  Player_1 Score:", scoreboard.get("Player_1"));
console.log("  Has Player_3?", scoreboard.has("Player_3"));
`,restoperator:`// --- Rest Operator (...) ---
// Rest parameters gather multiple leftover arguments into a single array list.

// Accumulate any number of level completion times
function sumTimes(levelName, ...times) {
  console.log("Level:", levelName);
  console.log("Times array gathered:", times);
  const total = times.reduce((a, b) => a + b, 0);
  return "Total time: " + total + "s";
}

console.log(sumTimes("Stage 1", 45, 60, 55));
`,spreadoperator:`// --- Spread Operator (...) ---
// Spread unpacks array elements or object properties into new collections.

// 1. Array Spread (combining items)
const weapons = ["Sword", "Bow"];
const spells = ["Fire", "Ice"];
const inventory = [...weapons, ...spells, "Shield"];
console.log("Combined Inventory:", inventory);

// 2. Object Spread (merging or copying with overrides)
const character = { name: "Mage", hp: 60 };
const buffedChar = { ...character, hp: 120, mp: 100 };
console.log("Buffed Character:", buffedChar);
`,symbols:`// --- Symbols ---
// Symbols are completely unique identifiers that prevent property name collisions.

// 1. Symbol uniqueness check
const keyA = Symbol("secret");
const keyB = Symbol("secret");
console.log("Is keyA equal to keyB?", keyA === keyB); // false!

// 2. Symbol as object property key
const config = {
  title: "Retro Game",
  [keyA]: "Hidden Cheat Code Mode"
};

console.log("Object Title:", config.title);
console.log("Symbol Hidden Property:", config[keyA]);
console.log("Keys list (symbol omitted!):", Object.keys(config)); // Symbol keys are hidden!
`,templatestrings:`// --- Template Strings (Template Literals) ---

const name = "Alucard";
const level = 50;

// 1. String Interpolation (using backticks and \${expression})
const stats = \`Player \${name} is currently Level \${level}.\`;
console.log("Single line:", stats);

// 2. Multi-line Strings directly in code
const statusReport = \`--- STATUS CARD ---
Name: \${name}
Level: \${level}
Status: Poisoned 🧪
-------------------\`;

console.log("\\nMulti-line string output:\\n" + statusReport);
`,ternaryoperator:`// --- Ternary Operator (Advanced Chaining) ---

// 1. Basic Ternary
const hp = 80;
const status = hp > 50 ? "HEALTHY" : "CRITICAL";
console.log("Status:", status);

// 2. Chained/Nested Ternary (behaves like if-else-if-else)
const score = 85;
const medal = score >= 90 
  ? "Gold Medal 🥇" 
  : score >= 70 
    ? "Silver Medal 🥈" 
    : "Bronze Medal 🥉";

console.log("Medal won:", medal);
`,advforloops:`// --- Advanced For Loops: for...of & for...in ---

const inventory = ["Shield", "Potion", "Ring"];
const stats = { name: "Rogue", speed: 95, defense: 30 };

// 1. for...of loop (iterates through array VALUES)
console.log("Iterating array values with for...of:");
for (const item of inventory) {
  console.log("  Item:", item);
}

// 2. for...in loop (iterates through object KEYS/PROPERTIES)
console.log("\\nIterating object properties with for...in:");
for (const key in stats) {
  console.log("  Key: " + key + " | Value: " + stats[key]);
}
`,thiskeyword:`// --- The 'this' Keyword in JS ---

// 1. 'this' in a standard object method
// In standard methods, 'this' refers to the object calling the method.
const warrior = {
  name: "Zero",
  hp: 150,
  describe() {
    return this.name + " has " + this.hp + " HP. ⚔️";
  }
};
console.log("warrior.describe():", warrior.describe()); // "Zero has 150 HP. ⚔️"

// 2. 'this' in Arrow Functions (Lexical Binding)
// Arrow functions do NOT get their own 'this'. They inherit it from parent scope.
const mage = {
  name: "Merlin",
  hp: 100,
  describeArrow: () => {
    // 'this' here refers to the outer scope (e.g. global window), not the 'mage' object!
    return this.name + " has " + this.hp + " HP. 🪄";
  }
};
console.log("mage.describeArrow():", mage.describeArrow()); // "undefined has undefined HP. 🪄"

// 3. 'this' in Global Scope
console.log("\\nGlobal 'this' represents global context:", this);
`};class q{constructor(e){this.container=document.getElementById(e),this.logs=[]}clear(){this.logs=[],this.container&&(this.container.innerHTML='<div class="console-line system">Console cleared. Ready for input...</div>')}formatArg(e){if(e===null)return"null";if(e===void 0)return"undefined";if(typeof e=="object")try{return JSON.stringify(e)}catch{return"[Object]"}return typeof e=="string"?e:String(e)}write(e,d){const p=d.map(i=>this.formatArg(i)).join(" ");if(this.logs.push({type:e,text:p,timestamp:new Date}),!this.container)return;const l=document.createElement("div");l.className=`console-line ${e}`;let o="";e==="log"?o="❯ ":e==="error"?o="❌ ERROR: ":e==="warning"?o="⚠️ WARN: ":e==="info"?o="ℹ️ INFO: ":e==="system"&&(o="⚙️ "),l.textContent=o+p,this.container.appendChild(l),this.container.scrollTop=this.container.scrollHeight}log(...e){this.write("log",e)}error(...e){this.write("error",e)}warn(...e){this.write("warning",e)}info(...e){this.write("info",e)}system(...e){this.write("system",e)}}const S=new q("console-body");class H{constructor(e){this.container=document.getElementById(e),this.currentTopic=null}initTopic(e){if(this.currentTopic=e,!!this.container)switch(this.container.innerHTML="",e){case"arithmetic":this.renderArithmetic();break;case"boolean":this.renderBoolean();break;case"comparison":this.renderComparison();break;case"typeconversion":this.renderTypeConversion();break;case"variables":this.renderVariables(null);break;case"strings":this.renderStrings();break;case"conditional":this.renderConditional();break;case"forloop":this.renderForLoop();break;case"logicaloperators":this.renderLogicalOperators();break;case"switch":this.renderSwitch();break;case"whileanddowhile":this.renderWhileAndDoWhile();break;case"datetime":this.renderDateTime();break;case"functions":this.renderFunctions();break;case"objects":this.renderObjects();break;case"objectsmanipulation":this.renderObjectsManipulation();break;case"arraybasics":this.renderArrayBasics();break;case"arrayaddremove":this.renderArrayAddRemove();break;case"arraysearching":this.renderArraySearching();break;case"arraymap":this.renderArrayMap();break;case"arrayfilter":this.renderArrayFilter();break;case"arrayreduce":this.renderArrayReduce();break;case"defaultparams":this.renderDefaultParams();break;case"destructuring":this.renderDestructuring();break;case"enhancedobjects":this.renderEnhancedObjects();break;case"helpers":this.renderHelpers();break;case"mapandset":this.renderMapAndSet();break;case"restoperator":this.renderRestOperator();break;case"spreadoperator":this.renderSpreadOperator();break;case"symbols":this.renderSymbols();break;case"templatestrings":this.renderTemplateStrings();break;case"ternaryoperator":this.renderTernaryOperator();break;case"advforloops":this.renderAdvForLoops();break;case"thiskeyword":this.renderThisKeyword();break;default:this.container.innerHTML='<div class="visualizer-card">Select a topic from the sidebar to visualize.</div>'}}update(e,d){e!==this.currentTopic&&this.initTopic(e),e==="variables"&&d&&d.variables&&this.renderVariables(d.variables)}safeEval(e){try{return new Function(`return (${e});`)()}catch{return"Error"}}renderArithmetic(){const e=document.createElement("div");e.className="arithmetic-calc",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#calc-val-a"),p=e.querySelector("#calc-val-b"),l=e.querySelector("#calc-op"),o=e.querySelector("#calc-expr-display"),i=e.querySelector("#btn-calc-eval"),t=()=>{const s=d.value,r=p.value,n=l.value,a=`${s} ${n} ${r}`,c=this.safeEval(a);o.textContent=`${a} = ${c}`};i.addEventListener("click",t)}renderBoolean(){const e=document.createElement("div");e.className="boolean-container",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#bool-input"),p=e.querySelector("#btn-bool-eval"),l=e.querySelector("#bool-result-box");p.addEventListener("click",()=>{const o=d.value.trim();let i;try{o.startsWith('"')&&o.endsWith('"')||o.startsWith("'")&&o.endsWith("'")||o==="true"||o==="false"||o==="null"||o==="undefined"||!isNaN(o)?i=this.safeEval(o):i=this.safeEval(o)}catch{i=o}const t=!!i;l.className=`comp-result ${t?"true-val":"false-val"}`,l.style.backgroundColor=t?"var(--pastel-mint)":"var(--pastel-pink)";let s=o;typeof i=="string"&&!o.startsWith('"')&&(s=`"${o}"`),l.innerHTML=`Boolean(${s}) ➔ <strong>${t}</strong> (${t?"Truthy!":"Falsy!"})`})}renderComparison(){const e=document.createElement("div");e.className="comparison-machine",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#comp-val-a"),p=e.querySelector("#comp-val-b"),l=e.querySelector("#comp-operator"),o=e.querySelector("#comp-machine-result"),i=e.querySelector("#comp-explanation"),t=e.querySelector("#btn-comp-eval"),s=()=>{const r=d.value.trim(),n=p.value.trim(),a=l.value;let c,u;try{c=this.safeEval(r)}catch{c=r}try{u=this.safeEval(n)}catch{u=n}let m=!1;a==="=="?m=c==u:a==="==="?m=c===u:a==="!="?m=c!=u:a==="!=="?m=c!==u:a===">"?m=c>u:a==="<"&&(m=c<u),o.textContent=`${r} ${a} ${n} ➔ ${m}`,o.className=`comp-result ${m?"true-val":"false-val"}`,o.style.backgroundColor=m?"var(--pastel-mint)":"var(--pastel-pink)";let y="";const v=typeof c,f=typeof u;a==="=="?v!==f?y=`<strong>📝 Coercion active (==):</strong> Operands are of different types (<code>${v}</code> vs <code>${f}</code>). JS converts one or both types implicitly before comparing values.`:y=`<strong>📝 Simple equality (==):</strong> Operands are of the same type (<code>${v}</code>). No coercion is needed.`:a==="==="?v!==f?y=`<strong>🔒 Strict identity (===):</strong> Immediate <code>false</code>. Types differ (<code>${v}</code> vs <code>${f}</code>). No type coercion is allowed!`:y=`<strong>🔒 Strict identity (===):</strong> Types are identical (<code>${v}</code>). JS simply compares their values.`:y=`Comparing <code>${v}</code> and <code>${f}</code> values using relational operators.`,i.innerHTML=y};t.addEventListener("click",s),e.querySelectorAll(".preset-comp-btn").forEach(r=>{r.addEventListener("click",n=>{d.value=n.target.getAttribute("data-a"),l.value=n.target.getAttribute("data-op"),p.value=n.target.getAttribute("data-b"),s()})})}renderTypeConversion(){const e=document.createElement("div");e.className="coercion-funnel",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#coerce-input"),p=e.querySelector("#stage-in-val"),l=e.querySelector("#stage-conv-op"),o=e.querySelector("#stage-out-val");e.querySelectorAll(".coerce-btn").forEach(i=>{i.addEventListener("click",t=>{const s=t.target.getAttribute("data-cast"),r=d.value.trim();let n;try{n=this.safeEval(r)}catch{n=r}let a;s==="Number"?a=Number(n):s==="String"?a=String(n):s==="Boolean"&&(a=!!n),p.textContent=`${r} (${typeof n})`,l.textContent=`${s}(x)`;let c=String(a);typeof a=="string"&&(c=`"${a}"`),o.textContent=`${c} (${typeof a})`})}),e.querySelectorAll(".preset-coerce-btn").forEach(i=>{i.addEventListener("click",t=>{const s=t.target.getAttribute("data-expr"),r=this.safeEval(s);p.textContent=`${s}`,l.textContent="Implicit Coercion";let n=String(r);typeof r=="string"&&(n=`"${r}"`),o.textContent=`${n} (${typeof r})`})})}renderVariables(e){this.container.innerHTML=`
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
    `;const d=this.container.querySelector("#vars-container");if(!e||Object.keys(e).length===0){d.innerHTML=`
        <div style="grid-column: span 2; text-align: center; color: var(--text-muted); padding: 1.5rem; border: 2px dashed var(--border-dark); border-radius: 4px;">
          (Memory Empty. Run code with declarations)
        </div>
      `;return}Object.keys(e).forEach(p=>{const l=e[p],o=l.kind||"var",i=l.value,t=l.type||typeof i;let s="💧";o==="const"?s="🔒":o==="let"&&(s="🔑");const r=i===void 0,n=i===null?"null":r?"undefined":String(i),a=r?'style="color: var(--console-err); font-weight: bold;"':"",c=document.createElement("div");c.className="variable-card",c.innerHTML=`
        <div class="var-header">
          <span class="var-name">${s} ${p}</span>
          <span class="var-kind ${o}">${o}</span>
        </div>
        <div class="var-value-row">
          <span class="var-type">&lt;${t}&gt;</span>
          <span class="var-val" ${a}>${n}</span>
        </div>
      `,d.appendChild(c)})}renderStrings(){const e=document.createElement("div");e.className="string-visualizer-container",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#str-input"),p=e.querySelector("#str-box-grid"),l=e.querySelector("#str-len-val"),o=e.querySelector("#slice-start"),i=e.querySelector("#slice-end"),t=e.querySelector("#btn-slice-apply"),s=e.querySelector("#method-result"),r=(n=null)=>{const a=d.value;l.textContent=a.length,p.innerHTML="";for(let c=0;c<a.length;c++){const u=document.createElement("div");u.className="char-cell",n&&c>=n.start&&c<n.end&&(u.className+=" highlighted"),u.innerHTML=`
          <span class="char-val">${a[c]===" "?"&nbsp;":a[c]}</span>
          <span class="char-idx">${c}</span>
        `,p.appendChild(u)}};d.addEventListener("input",()=>{r(),o.max=d.value.length,i.max=d.value.length}),t.addEventListener("click",()=>{const n=d.value,a=Math.max(0,parseInt(o.value)||0),c=Math.min(n.length,parseInt(i.value)||0),u=n.slice(a,c);s.innerHTML=`Result: <code>"${u}"</code>`,r({start:a,end:c})}),r({start:0,end:5})}renderConditional(){const e=document.createElement("div");e.className="conditional-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#cond-score-slider"),p=e.querySelector("#cond-score-val"),l=e.querySelector("#branch-s"),o=e.querySelector("#branch-a"),i=e.querySelector("#branch-b"),t=e.querySelector("#cond-result-box"),s=()=>{const r=parseInt(d.value);p.textContent=r,l.style.backgroundColor="#fff",l.style.fontWeight="normal",o.style.backgroundColor="#fff",o.style.fontWeight="normal",i.style.backgroundColor="#fff",i.style.fontWeight="normal",r>=90?(l.style.backgroundColor="var(--pastel-mint)",l.style.fontWeight="bold",t.textContent="Executed Path: S Class ⭐",t.style.backgroundColor="var(--pastel-mint)"):r>=70?(o.style.backgroundColor="var(--pastel-blue)",o.style.fontWeight="bold",t.textContent="Executed Path: A Class 👍",t.style.backgroundColor="var(--pastel-blue)"):(i.style.backgroundColor="var(--pastel-pink)",i.style.fontWeight="bold",t.textContent="Executed Path: B Class 🎮",t.style.backgroundColor="var(--pastel-pink)")};d.addEventListener("input",s),s()}renderForLoop(){const e=document.createElement("div");e.className="loop-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#btn-loop-step"),p=e.querySelector("#btn-loop-reset"),l=e.querySelector("#loop-box-grid"),o=e.querySelector("#loop-trace"),i=5;let t=-1;const s=()=>{l.innerHTML="";for(let n=1;n<=i;n++){const a=document.createElement("div");a.className="char-cell",a.style.flex="1",a.style.height="40px",a.innerHTML=`
          <span class="char-val" style="font-size:0.8rem;">i=${n}</span>
        `,n===t?(a.className+=" highlighted",a.style.backgroundColor="var(--pastel-pink)"):n<t&&(a.style.backgroundColor="var(--pastel-mint)"),l.appendChild(a)}},r=()=>{t===-1?(t=1,o.innerHTML=`
          <strong>Initialization:</strong> <code>let i = 1;</code><br>
          <strong>Condition Check:</strong> <code>i (${t}) <= 5</code> is <strong>true</strong>.<br>
          <em>Loop body runs!</em>
        `):t<i?(t++,o.innerHTML=`
          <strong>Increment:</strong> <code>i++</code> (new value: ${t})<br>
          <strong>Condition Check:</strong> <code>i (${t}) <= 5</code> is <strong>true</strong>.<br>
          <em>Loop body runs!</em>
        `):(t++,o.innerHTML=`
          <strong>Increment:</strong> <code>i++</code> (new value: 6)<br>
          <strong>Condition Check:</strong> <code>i (6) <= 5</code> is <strong>false</strong>.<br>
          <strong>Loop terminated!</strong>
        `,d.disabled=!0),s()};d.addEventListener("click",r),p.addEventListener("click",()=>{t=-1,d.disabled=!1,o.innerHTML="Click <strong>Step Forward</strong> to initialize loop.",s()}),s()}renderLogicalOperators(){const e=document.createElement("div");e.className="logical-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#btn-gate-a"),p=e.querySelector("#btn-gate-b"),l=e.querySelector("#gate-and"),o=e.querySelector("#gate-or"),i=e.querySelector("#gate-not");let t=!0,s=!0;const r=()=>{d.textContent=`A: ${t?"TRUE":"FALSE"}`,d.style.backgroundColor=t?"var(--pastel-mint)":"var(--pastel-pink)",p.textContent=`B: ${s?"TRUE":"FALSE"}`,p.style.backgroundColor=s?"var(--pastel-mint)":"var(--pastel-pink)";const n=t&&s,a=t||s,c=!t;l.textContent=`A && B (AND) ➔ ${n}`,l.style.backgroundColor=n?"var(--pastel-mint)":"var(--pastel-pink)",o.textContent=`A || B (OR) ➔ ${a}`,o.style.backgroundColor=a?"var(--pastel-mint)":"var(--pastel-pink)",i.textContent=`!A (NOT) ➔ ${c}`,i.style.backgroundColor=c?"var(--pastel-mint)":"var(--pastel-pink)"};d.addEventListener("click",()=>{t=!t,r()}),p.addEventListener("click",()=>{s=!s,r()}),r()}renderSwitch(){const e=document.createElement("div");e.className="switch-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#switch-choice-sel"),p=e.querySelector("#switch-break-chk"),l=e.querySelector("#case-warrior"),o=e.querySelector("#case-mage"),i=e.querySelector("#case-rogue"),t=e.querySelector("#case-default"),s=e.querySelector("#switch-explain"),r=()=>{const n=d.value,a=p.checked;l.style.backgroundColor="#fff",o.style.backgroundColor="#fff",i.style.backgroundColor="#fff",t.style.backgroundColor="#fff";let c=!1,u=!1;(n==="Warrior"||u)&&(l.style.backgroundColor="var(--pastel-yellow)",c=!0,a||(u=!0)),(n==="Mage"&&!c||u)&&(o.style.backgroundColor="var(--pastel-yellow)",c=!0,a||(u=!0)),(n==="Rogue"&&!c||u)&&(i.style.backgroundColor="var(--pastel-yellow)",c=!0,a||(u=!0)),(!c||u)&&(t.style.backgroundColor="var(--pastel-yellow)"),a?s.innerHTML=`<strong>Execution:</strong> Matches Case <code>"${n}"</code>, executes its block, and stops because of the <code>break;</code> statement.`:s.innerHTML=`<strong>⚠️ Fall-Through Warning:</strong> Matches Case <code>"${n}"</code>, but since <code>break;</code> is missing, execution "falls through" and runs subsequent cases too!`};d.addEventListener("change",r),p.addEventListener("change",r),r()}renderWhileAndDoWhile(){const e=document.createElement("div");e.className="while-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#while-hp-sel"),p=e.querySelector("#btn-while-run"),l=e.querySelector("#trace-while"),o=e.querySelector("#trace-dowhile");p.addEventListener("click",()=>{const i=parseInt(d.value);let t=i,s=[];if(s.push(`Start: hp = ${t}`),s.push("Check condition (hp > 0)"),t<=0)s.push("➔ 0 > 0 is FALSE.<br><strong>Result: Body ran 0 times.</strong>");else{let a=0;for(;t>0&&a<5;)s.push(`➔ hp is ${t}. Body runs!`),t--,s.push(`  hp decremented to ${t}`),s.push("Check condition (hp > 0)"),a++;s.push(`➔ hp is ${t}. Loop terminates.<br><strong>Result: Body ran ${a} times.</strong>`)}l.innerHTML=s.join("<br>"),t=i;let r=[];r.push(`Start: hp = ${t}`),r.push("Run loop body first!");let n=0;do r.push(`➔ hp is ${t}. Body runs!`),t--,r.push(`  hp decremented to ${t}`),r.push("Check condition (hp > 0)"),n++;while(t>0&&n<5);t<=0?r.push(`➔ ${t} > 0 is FALSE. Loop ends.<br><strong>Result: Body ran ${n} time(s).</strong>`):r.push(`➔ hp is ${t}. Loop terminates.<br><strong>Result: Body ran ${n} times.</strong>`),o.innerHTML=r.join("<br>")})}renderDateTime(){const e=document.createElement("div");e.className="datetime-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#retro-watch-time"),p=e.querySelector("#retro-cal-month"),l=e.querySelector("#retro-cal-date"),o=e.querySelector("#retro-cal-day"),i=e.querySelector("#date-offset-days"),t=e.querySelector("#date-offset-hours"),s=e.querySelector("#date-days-val"),r=e.querySelector("#date-hours-val"),n=e.querySelector("#datetime-explanation"),a=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],c=["SUN","MON","TUE","WED","THU","FRI","SAT"],u=()=>{const y=parseInt(i.value),v=parseInt(t.value);s.textContent=y>=0?`+${y}`:y,r.textContent=v>=0?`+${v}`:v;const f=new Date;f.setDate(f.getDate()+y),f.setHours(f.getHours()+v);const w=h=>String(h).padStart(2,"0");d.textContent=`${w(f.getHours())}:${w(f.getMinutes())}:${w(f.getSeconds())}`,p.textContent=a[f.getMonth()],l.textContent=f.getDate(),o.textContent=c[f.getDay()];let g=`<strong>Active Date:</strong> <code>${f.toDateString()} ${f.toLocaleTimeString()}</code><br>`;y!==0||v!==0?g+="<strong>💡 Rollover Trivia:</strong> Modifying the date with offsets triggered JS's auto-rollover. For example, adding days or hours automatically adjusts the month and year, keeping dates 100% mathematically correct.":g+=`JS date objects represent time as milliseconds since the Unix Epoch (Jan 1, 1970 UTC). Year: <code>${f.getFullYear()}</code>, Month index: <code>${f.getMonth()}</code>.`,n.innerHTML=g};i.addEventListener("input",u),t.addEventListener("input",u);const m=setInterval(()=>{document.getElementById("retro-watch-time")?u():clearInterval(m)},1e3);u()}renderFunctions(){const e=document.createElement("div");e.className="functions-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#func-type-sel"),p=e.querySelector("#func-param-in"),l=e.querySelector("#btn-func-run"),o=e.querySelector("#func-vis-in"),i=e.querySelector("#func-vis-body"),t=e.querySelector("#func-vis-out"),s=e.querySelector("#func-code-syntax"),r=()=>{d.value==="double"?(p.value="50",i.textContent="x * 2",s.innerHTML=`
          <strong>Compare Syntaxes:</strong><br>
          <span style="color:var(--text-muted);">// Traditional:</span><br>
          <code>function double(x) { return x * 2; }</code><br>
          <span style="color:var(--text-muted);">// Arrow (=>) shorthand:</span><br>
          <code>const double = x => x * 2;</code>
        `):(p.value="Player",i.textContent='"Welcome " + name',s.innerHTML=`
          <strong>Compare Syntaxes:</strong><br>
          <span style="color:var(--text-muted);">// Traditional:</span><br>
          <code>function greet(name) { return "Welcome " + name; }</code><br>
          <span style="color:var(--text-muted);">// Arrow (=>) shorthand:</span><br>
          <code>const greet = name => "Welcome " + name;</code>
        `),o.textContent="-",t.textContent="-"},n=()=>{const a=d.value,c=p.value.trim();o.textContent=c;let u;a==="double"?(u=(parseFloat(c)||0)*2,t.textContent=u):(u=`Welcome ${c}`,t.textContent=`"${u}"`)};d.addEventListener("change",r),l.addEventListener("click",n),r()}renderArrayBasics(){const e=document.createElement("div");e.className="array-basics-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#arr-idx-sel"),p=e.querySelector("#arr-val-in"),l=e.querySelector("#btn-arr-assign"),o=e.querySelector("#arr-lockers-container"),i=e.querySelector("#arr-basics-explanation"),t=["Potion","Sword","Shield"],s=(r=-1)=>{o.innerHTML="";for(let n=0;n<t.length;n++){const a=document.createElement("div");a.className="char-cell",a.style.flex="1",a.style.height="65px",a.style.padding="0.3rem 0",a.style.justifyContent="space-between",n===r&&(a.className+=" highlighted",a.style.backgroundColor="var(--pastel-yellow)"),a.innerHTML=`
          <span class="char-val" style="font-size:0.75rem; font-weight:bold; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; width:90%; text-align:center;">${t[n]}</span>
          <span class="char-idx" style="font-size:0.7rem; border-top:1px solid #ccc; width:100%; text-align:center;">[${n}]</span>
        `,o.appendChild(a)}i.innerHTML=`<strong>Array State:</strong> <code>["${t[0]}", "${t[1]}", "${t[2]}"]</code><br>Length: <code>${t.length}</code>. Index 0: <code>"${t[0]}"</code>.`};l.addEventListener("click",()=>{const r=parseInt(d.value),n=p.value.trim();t[r]=n,s(r)}),s()}renderArrayAddRemove(){const e=document.createElement("div");e.className="array-addremove-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#addremove-belt"),p=e.querySelector("#addremove-return"),l=e.querySelector("#addremove-explanation"),o=["👾","🕹️","🎯"],i=()=>{if(d.innerHTML="",o.length===0){d.innerHTML='<span style="color:var(--text-muted); font-style:italic;">[ Empty Array ]</span>';return}for(let t=0;t<o.length;t++){const s=document.createElement("div");s.className="char-cell",s.style.width="35px",s.style.height="35px",s.style.padding="0",s.style.justifyContent="center",s.style.fontSize="1.1rem",s.textContent=o[t],d.appendChild(s)}};e.querySelectorAll(".method-btn").forEach(t=>{t.addEventListener("click",s=>{const r=s.target.getAttribute("data-method");let n;r==="push"?(n=o.push("🍄"),p.textContent=`Return Value (New Length): ${n}`,l.innerHTML=`<code>push("🍄")</code> appended the emoji at index <code>${o.length-1}</code> (End of array).`):r==="pop"?(n=o.pop(),p.textContent=`Return Value (Removed Item): ${n||"undefined"}`,l.innerHTML=`<code>pop()</code> removed the rightmost item <code>${n||"none"}</code> (End of array).`):r==="unshift"?(n=o.unshift("👑"),p.textContent=`Return Value (New Length): ${n}`,l.innerHTML='<code>unshift("👑")</code> inserted the emoji at index <code>0</code> (Start of array).'):r==="shift"&&(n=o.shift(),p.textContent=`Return Value (Removed Item): ${n||"undefined"}`,l.innerHTML=`<code>shift()</code> removed the leftmost item <code>${n||"none"}</code> (Start of array).`),i()})}),i()}renderArraySearching(){const e=document.createElement("div");e.className="array-searching-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#search-choice-sel"),p=e.querySelector("#btn-search-inc"),l=e.querySelector("#btn-search-idx"),o=e.querySelector("#search-squad-belt"),i=e.querySelector("#search-vis-result"),t=["Sonic","Tails","Knuckles","Shadow"],s=(n=-1)=>{o.innerHTML="";for(let a=0;a<t.length;a++){const c=document.createElement("div");c.className="char-cell",c.style.flex="1",c.style.height="48px",c.style.padding="0.2rem 0",c.style.justifyContent="space-between",a===n&&(c.className+=" highlighted",c.style.backgroundColor="var(--pastel-pink)"),c.innerHTML=`
          <span class="char-val" style="font-size:0.75rem; font-weight:bold;">${t[a]}</span>
          <span class="char-idx" style="font-size:0.65rem;">[${a}]</span>
        `,o.appendChild(c)}},r=n=>{const a=d.value;let c=0;p.disabled=!0,l.disabled=!0;const u=setInterval(()=>{if(c<t.length)if(s(c),i.textContent=`Scanning Index [${c}]... checking "${t[c]}"`,i.style.backgroundColor="#e5e5e5",t[c]===a){clearInterval(u),p.disabled=!1,l.disabled=!1;const m=n==="includes"?"true":c;i.textContent=`Match Found at index [${c}]! Returned: ${m}`,i.style.backgroundColor="var(--pastel-mint)"}else c++;else{clearInterval(u),p.disabled=!1,l.disabled=!1,s(-1);const m=n==="includes"?"false":"-1";i.textContent=`No Match Found! Returned: ${m}`,i.style.backgroundColor="var(--pastel-pink)"}},550)};p.addEventListener("click",()=>r("includes")),l.addEventListener("click",()=>r("indexOf")),s()}renderArrayMap(){const e=document.createElement("div");e.className="array-map-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#map-fn-sel"),p=e.querySelector("#btn-map-run"),l=e.querySelector("#map-in-grid"),o=e.querySelector("#map-out-grid"),i=e.querySelector("#map-center-fn"),t=[10,20,30],s=()=>{l.innerHTML="",t.forEach(r=>{const n=document.createElement("div");n.className="char-cell",n.style.flex="1",n.style.height="35px",n.style.padding="0",n.style.justifyContent="center",n.innerHTML=`<span class="char-val" style="font-size:0.8rem;">${r}</span>`,l.appendChild(n)})};d.addEventListener("change",()=>{i.textContent=d.value==="double"?"Applying function: x * 2":'Applying function: "$" + x + ".00"',o.innerHTML='<span style="color:var(--text-muted); font-style:italic; font-size:0.75rem;">Click Map Array to run...</span>'}),p.addEventListener("click",()=>{const r=d.value;o.innerHTML="",t.forEach((n,a)=>{const c=r==="double"?n*2:`$${n}.00`,u=document.createElement("div");u.className="char-cell highlighted",u.style.flex="1",u.style.height="35px",u.style.padding="0",u.style.justifyContent="center",u.style.backgroundColor="var(--pastel-mint)",u.innerHTML=`<span class="char-val" style="font-size:0.8rem;">${c}</span>`,setTimeout(()=>{o.appendChild(u)},a*300)})}),s()}renderArrayFilter(){const e=document.createElement("div");e.className="array-filter-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#filter-cond-sel"),p=e.querySelector("#btn-filter-run"),l=e.querySelector("#filter-in-grid"),o=e.querySelector("#filter-out-grid"),i=e.querySelector("#filter-gate-op"),t=[45,90,60,80,95,30],s=(r=-1)=>{l.innerHTML="",t.forEach((n,a)=>{const c=document.createElement("div");c.className="char-cell",c.style.flex="1",c.style.height="35px",c.style.padding="0",c.style.justifyContent="center",a===r&&(c.className+=" highlighted",c.style.backgroundColor="var(--pastel-yellow)"),c.innerHTML=`<span class="char-val" style="font-size:0.8rem;">${n}</span>`,l.appendChild(c)})};d.addEventListener("change",()=>{i.textContent=d.value==="passing"?"Filter Gate Condition: score >= 70":"Filter Gate Condition: score < 50",o.innerHTML='<span style="color:var(--text-muted); font-style:italic; font-size:0.75rem;">Click Filter Array to run...</span>'}),p.addEventListener("click",()=>{const r=d.value;o.innerHTML="",p.disabled=!0;let n=0;const a=()=>{if(n<t.length){const c=t[n];if(s(n),r==="passing"?c>=70:c<50){const m=document.createElement("div");m.className="char-cell highlighted",m.style.width="35px",m.style.height="35px",m.style.padding="0",m.style.justifyContent="center",m.style.backgroundColor="var(--pastel-mint)",m.innerHTML=`<span class="char-val" style="font-size:0.8rem;">${c}</span>`,o.appendChild(m)}n++,setTimeout(a,450)}else s(-1),p.disabled=!1};a()}),s()}renderArrayReduce(){const e=document.createElement("div");e.className="array-reduce-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#btn-reduce-step"),p=e.querySelector("#btn-reduce-reset"),l=e.querySelector("#reduce-grid"),o=e.querySelector("#reduce-acc-box"),i=e.querySelector("#reduce-explain"),t=[10,50,100,25];let s=0,r=0;const n=(a=-1)=>{l.innerHTML="",t.forEach((c,u)=>{const m=document.createElement("div");m.className="char-cell",m.style.flex="1",m.style.height="42px",m.style.padding="0.2rem 0",m.style.justifyContent="space-between",u===a?(m.className+=" highlighted",m.style.backgroundColor="var(--pastel-pink)"):u<a&&(m.style.backgroundColor="var(--pastel-mint)"),m.innerHTML=`
          <span class="char-val" style="font-size:0.8rem;">💰${c}</span>
          <span class="char-idx" style="font-size:0.65rem;">[${u}]</span>
        `,l.appendChild(m)})};d.addEventListener("click",()=>{if(r<t.length){const a=t[r];n(r);const c=s;s+=a,o.textContent=s,i.innerHTML=`
          <strong>Step ${r+1}:</strong> Current value = <code>${a}</code>.<br>
          Accumulation math: <code>acc (${c}) + current (${a}) ➔ ${s}</code>.
        `,r++,r===t.length&&(i.innerHTML+=`<br><strong>Finished! reduce() returned final accumulated value: ${s}</strong>.`,d.disabled=!0)}}),p.addEventListener("click",()=>{s=0,r=0,o.textContent="0",d.disabled=!1,i.innerHTML="Click <strong>Step Accumulator</strong> to start summation.",n(-1)}),n(-1)}renderObjects(){const e=document.createElement("div");e.className="objects-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#btn-obj-dmg"),p=e.querySelector("#btn-obj-weap"),l=e.querySelector("#btn-obj-add"),o=e.querySelector("#obj-val-hp"),i=e.querySelector("#obj-val-weapon"),t=e.querySelector("#obj-row-shield"),s=e.querySelector("#obj-val-shield"),r=e.querySelector("#obj-explanation");let n=100,a="Plasma Cannon",c=!1;const u=()=>{o.textContent=n,i.textContent=`"${a}"`,c?(t.style.display="flex",s.textContent="50"):t.style.display="none"};d.addEventListener("click",()=>{n=85,u(),o.style.color="var(--pastel-pink)",o.parentElement.style.fontWeight="bold",setTimeout(()=>{o.style.color="var(--text-dark)",o.parentElement.style.fontWeight="normal"},500),r.innerHTML="<code>hero.hp = 85;</code> updated the value of the <code>hp</code> property from <code>100</code> to <code>85</code>."}),p.addEventListener("click",()=>{a="Mega Buster",u(),i.style.color="var(--pastel-yellow)",i.parentElement.style.fontWeight="bold",setTimeout(()=>{i.style.color="var(--text-dark)",i.parentElement.style.fontWeight="normal"},500),r.innerHTML='<code>hero.weapon = "Mega Buster";</code> modified the value of the <code>weapon</code> property.'}),l.addEventListener("click",()=>{c=!0,u(),t.style.backgroundColor="rgba(100, 240, 150, 0.2)",setTimeout(()=>{t.style.backgroundColor="transparent"},800),r.innerHTML="<code>hero.shield = 50;</code> added a brand new key/property <code>shield</code> to the object dynamically!"}),u()}renderObjectsManipulation(){const e=document.createElement("div");e.className="objects-manipulation-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#btn-manip-keys"),p=e.querySelector("#btn-manip-vals"),l=e.querySelector("#btn-manip-del"),o=e.querySelector("#btn-manip-has"),i=e.querySelector("#btn-manip-reset"),t=e.querySelector("#manip-obj-fields"),s=e.querySelector("#manip-out-box"),r=e.querySelector("#manip-explanation");let n={id:"potion_1",name:"Red Potion",value:15};const a=(c=!1,u=!1)=>{t.innerHTML="";const m=Object.keys(n);if(m.length===0){t.innerHTML='<span style="color:var(--text-muted); font-style:italic;">[ Empty Object ]</span>';return}m.forEach(y=>{const v=document.createElement("div");v.style.display="flex",v.style.justifyContent="space-between",v.style.borderBottom="1px dashed #eee",v.style.padding="0.1rem 0";const f=document.createElement("span");f.textContent=`${y}:`,c&&(f.style.backgroundColor="var(--pastel-blue)");const w=document.createElement("strong");w.textContent=typeof n[y]=="string"?`"${n[y]}"`:n[y],u&&(w.style.backgroundColor="var(--pastel-mint)"),v.appendChild(f),v.appendChild(w),t.appendChild(v)})};d.addEventListener("click",()=>{a(!0,!1);const c=Object.keys(n);s.textContent=`["${c.join('", "')}"]`,r.innerHTML="<code>Object.keys(item)</code> returns a list array of all keys/properties present in the object."}),p.addEventListener("click",()=>{a(!1,!0);const c=Object.values(n).map(u=>typeof u=="string"?`"${u}"`:u);s.textContent=`[${c.join(", ")}]`,r.innerHTML="<code>Object.values(item)</code> returns a list array of all values corresponding to keys."}),l.addEventListener("click",()=>{"value"in n?(delete n.value,a(),s.textContent="true (deleted)",r.innerHTML="<code>delete item.value;</code> completely deletes the <code>value</code> property. It is no longer part of the object."):r.innerHTML="Property <code>value</code> is already deleted. Click <strong>Reset Object</strong> to restore."}),o.addEventListener("click",()=>{const c="name"in n;a(),s.textContent=String(c),r.innerHTML=`<code>"name" in item</code> checks if the property <code>"name"</code> is a key in the object. Returns <code>${c}</code>.`}),i.addEventListener("click",()=>{n={id:"potion_1",name:"Red Potion",value:15},a(),s.textContent="-",r.innerHTML="Object reset to original state."}),a()}renderDefaultParams(){const e=document.createElement("div");e.className="defaultparams-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#def-name-in"),p=e.querySelector("#def-role-sel"),l=e.querySelector("#def-lvl-in"),o=e.querySelector("#btn-def-generate"),i=e.querySelector("#def-out-name"),t=e.querySelector("#def-out-role"),s=e.querySelector("#def-out-lvl"),r=e.querySelector("#def-explain");o.addEventListener("click",()=>{const n=d.value.trim(),a=p.value,c=l.value,u=n===""?"Mystery Knight":n,m=a==="DEFAULT"?"Warrior":a,y=c===""?1:parseInt(c);i.textContent=`"${u}"`,t.textContent=`"${m}"`,s.textContent=y,i.style.color=n===""?"var(--pastel-pink)":"var(--text-dark)",t.style.color=a==="DEFAULT"?"var(--pastel-pink)":"var(--text-dark)",s.style.color=c===""?"var(--pastel-pink)":"var(--text-dark)";let v=[];n===""&&v.push('name fallback to "Mystery Knight"'),a==="DEFAULT"&&v.push('role fallback to "Warrior"'),c===""&&v.push("level fallback to 1"),r.innerHTML=v.length>0?`<strong>Fallback Triggered:</strong> ${v.join(", ")}`:"All parameters supplied manually. No defaults needed!"})}renderDestructuring(){const e=document.createElement("div");e.className="destructuring-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#btn-destruct-obj"),p=e.querySelector("#btn-destruct-arr"),l=e.querySelector("#destruct-vars-out"),o=e.querySelector("#destruct-explain");d.addEventListener("click",()=>{l.innerHTML=`
        <div style="color:var(--pastel-mint); font-weight:bold;">heroName: "Proto Man"</div>
        <div style="color:var(--pastel-mint); font-weight:bold;">hp: 90</div>
      `,o.innerHTML="Object properties <code>heroName</code> and <code>hp</code> were extracted matching their key names directly."}),p.addEventListener("click",()=>{l.innerHTML=`
        <div style="color:var(--pastel-yellow); font-weight:bold;">gold: 1000</div>
        <div style="color:var(--pastel-yellow); font-weight:bold;">silver: 500</div>
      `,o.innerHTML="Array index <code>0</code> and <code>1</code> items were extracted matching index order into variables <code>gold</code> and <code>silver</code>."})}renderEnhancedObjects(){const e=document.createElement("div");e.className="enhancedobjects-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#btn-enh-run"),p=e.querySelector("#enh-explain");d.addEventListener("click",()=>{p.innerHTML='<strong>Method Output:</strong> <code>warrior.slash() ➔ "Slashes Z-Saber! ⚔️"</code>'})}renderHelpers(){const e=document.createElement("div");e.className="helpers-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#btn-helper-some"),p=e.querySelector("#btn-helper-every"),l=e.querySelector("#helper-squad-belt"),o=e.querySelector("#helper-result"),i=[100,85,40,0],t=(s=-1)=>{l.innerHTML="",i.forEach((r,n)=>{const a=document.createElement("div");a.className="char-cell",a.style.flex="1",a.style.height="48px",a.style.padding="0.2rem 0",a.style.justifyContent="space-between",n===s&&(a.className+=" highlighted",a.style.backgroundColor="var(--pastel-pink)"),a.innerHTML=`
          <span class="char-val" style="font-size:0.75rem; font-weight:bold;">💖${r} HP</span>
          <span class="char-idx" style="font-size:0.65rem;">[${n}]</span>
        `,l.appendChild(a)})};d.addEventListener("click",()=>{let s=0;d.disabled=!0,p.disabled=!0;const r=setInterval(()=>{s<i.length&&(t(s),o.textContent=`Testing Index [${s}]: does ${i[s]} === 0?`,o.style.backgroundColor="#e5e5e5",i[s]===0?(clearInterval(r),d.disabled=!1,p.disabled=!1,o.textContent="Match Found! Returned: true (At least one HP is 0)",o.style.backgroundColor="var(--pastel-mint)"):s++)},500)}),p.addEventListener("click",()=>{let s=0;d.disabled=!0,p.disabled=!0;const r=setInterval(()=>{s<i.length&&(t(s),o.textContent=`Testing Index [${s}]: is ${i[s]} > 50?`,o.style.backgroundColor="#e5e5e5",i[s]<=50?(clearInterval(r),d.disabled=!1,p.disabled=!1,o.textContent=`Check Failed at Index [${s}]! Returned: false (Not all HP are > 50)`,o.style.backgroundColor="var(--pastel-pink)"):s++)},500)}),t()}renderMapAndSet(){const e=document.createElement("div");e.className="mapandset-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#set-num-in"),p=e.querySelector("#btn-set-add"),l=e.querySelector("#set-values"),o=e.querySelector("#map-key-in"),i=e.querySelector("#map-val-in"),t=e.querySelector("#btn-map-set"),s=e.querySelector("#map-values"),r=e.querySelector("#mapset-explain"),n=new Set([101,202]),a=new Map([["Player_1",9500],["Player_2",8200]]),c=()=>{const m=[];n.forEach(y=>m.push(y)),l.innerHTML=`<strong>Set Size:</strong> ${n.size}<br>Values: <code>{ ${m.join(", ")} }</code>`},u=()=>{const m=[];a.forEach((y,v)=>{m.push(`"${v}" ➔ ${y}`)}),s.innerHTML=`<strong>Map Size:</strong> ${a.size}<br>${m.join("<br>")}`};p.addEventListener("click",()=>{const m=parseInt(d.value);isNaN(m)||(n.has(m)?(r.innerHTML=`<span style="color:var(--pastel-pink); font-weight:bold;">Duplicate Ignored!</span> Set already contains <code>${m}</code>.`,d.style.borderColor="var(--pastel-pink)",setTimeout(()=>d.style.borderColor="var(--border-dark)",800)):(n.add(m),c(),r.innerHTML=`Added unique value <code>${m}</code> to Set successfully.`))}),t.addEventListener("click",()=>{const m=o.value.trim(),y=parseInt(i.value);m===""||isNaN(y)||(a.set(m,y),u(),r.innerHTML=`Associated key <code>"${m}"</code> with value <code>${y}</code> inside Map.`,o.value="",i.value="")}),c(),u()}renderRestOperator(){const e=document.createElement("div");e.className="restoperator-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#rest-times-in"),p=e.querySelector("#btn-rest-run"),l=e.querySelector("#rest-args-out"),o=e.querySelector("#rest-gather-out"),i=e.querySelector("#rest-explain");p.addEventListener("click",()=>{const t=d.value.split(",").map(r=>parseInt(r.trim())).filter(r=>!isNaN(r));l.textContent=`"Stage 1", ${t.join(", ")}`,o.textContent=`[${t.join(", ")}]`;const s=t.reduce((r,n)=>r+n,0);i.innerHTML=`Function executed successfully! Total times sum: <code>${s}s</code>.`})}renderSpreadOperator(){const e=document.createElement("div");e.className="spreadoperator-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#btn-spread-run"),p=e.querySelector("#spread-out-grid"),l=["Sword","Bow"],o=["Fire","Ice"];d.addEventListener("click",()=>{p.innerHTML="",[...l,...o,"Shield"].forEach((t,s)=>{const r=document.createElement("div");r.className="char-cell highlighted",r.style.flex="1",r.style.height="35px",r.style.padding="0",r.style.justifyContent="center",r.style.backgroundColor="var(--pastel-mint)",r.innerHTML=`<span class="char-val" style="font-size:0.75rem;">${t}</span>`,setTimeout(()=>{p.appendChild(r)},s*250)})})}renderSymbols(){const e=document.createElement("div");e.className="symbols-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#btn-sym-eq"),p=e.querySelector("#sym-eq-result");d.addEventListener("click",()=>{p.textContent="Returned value: false",p.style.backgroundColor="var(--pastel-pink)"})}renderTemplateStrings(){const e=document.createElement("div");e.className="templatestrings-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#temp-name-in"),p=e.querySelector("#temp-lvl-in"),l=e.querySelector("#btn-temp-render"),o=e.querySelector("#temp-out-pre"),i=()=>{const t=d.value.trim(),s=p.value;o.textContent=`--- STATUS CARD ---
Name: ${t}
Level: ${s}
Status: Poisoned 🧪
-------------------`};l.addEventListener("click",i),i()}renderTernaryOperator(){const e=document.createElement("div");e.className="ternaryoperator-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#ternary-score"),p=e.querySelector("#ternary-score-val"),l=e.querySelector("#tern-path-1"),o=e.querySelector("#tern-path-2"),i=e.querySelector("#tern-path-3"),t=e.querySelector("#ternary-out-box"),s=()=>{const r=parseInt(d.value);p.textContent=r,l.style.backgroundColor="transparent",o.style.backgroundColor="transparent",i.style.backgroundColor="transparent",r>=90?(l.style.backgroundColor="var(--pastel-yellow)",t.textContent="Result: Gold Medal 🥇",t.style.backgroundColor="var(--pastel-yellow)"):r>=70?(o.style.backgroundColor="var(--pastel-blue)",t.textContent="Result: Silver Medal 🥈",t.style.backgroundColor="var(--pastel-blue)"):(i.style.backgroundColor="var(--pastel-pink)",t.textContent="Result: Bronze Medal 🥉",t.style.backgroundColor="var(--pastel-pink)")};d.addEventListener("input",s),s()}renderAdvForLoops(){const e=document.createElement("div");e.className="advforloops-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#btn-loop-of"),p=e.querySelector("#btn-loop-in"),l=e.querySelector("#loop-trace-lbl"),o=e.querySelector("#loop-trace-box"),i=["Shield","Potion","Ring"],t={name:"Rogue",speed:95,defense:30};d.addEventListener("click",()=>{l.textContent="for...of ITERATION TRACE:",o.innerHTML="",i.forEach((s,r)=>{setTimeout(()=>{o.innerHTML+=`Iteration ${r+1} ➔ Item Value: <code>"${s}"</code><br>`},r*400)})}),p.addEventListener("click",()=>{l.textContent="for...in ITERATION TRACE:",o.innerHTML="",Object.keys(t).forEach((r,n)=>{setTimeout(()=>{o.innerHTML+=`Iteration ${n+1} ➔ Key: <code>"${r}"</code> | Value: <code>${t[r]}</code><br>`},n*400)})})}renderThisKeyword(){const e=document.createElement("div");e.className="thiskeyword-visualizer",e.innerHTML=`
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
    `,this.container.appendChild(e);const d=e.querySelector("#btn-this-std"),p=e.querySelector("#btn-this-arr"),l=e.querySelector("#this-box-warrior"),o=e.querySelector("#this-box-mage"),i=e.querySelector("#this-std-ptr"),t=e.querySelector("#this-arr-ptr"),s=e.querySelector("#this-vis-output"),r=e.querySelector("#this-vis-explain");d.addEventListener("click",()=>{l.style.borderColor="var(--pastel-mint)",o.style.borderColor="var(--border-dark)",i.style.backgroundColor="var(--pastel-mint)",i.style.fontWeight="bold",t.style.backgroundColor="transparent",t.style.fontWeight="normal",s.textContent='Returned value: "Zero has 150 HP. ⚔️"',s.style.backgroundColor="var(--pastel-mint)",r.innerHTML="<strong>Active Context:</strong> <code>this</code> bound to the calling object <code>warrior</code>. It can read properties <code>name</code> and <code>hp</code>."}),p.addEventListener("click",()=>{l.style.borderColor="var(--border-dark)",o.style.borderColor="var(--pastel-pink)",i.style.backgroundColor="transparent",i.style.fontWeight="normal",t.style.backgroundColor="var(--pastel-pink)",t.style.fontWeight="bold",s.textContent='Returned value: "undefined has undefined HP. 🪄"',s.style.backgroundColor="var(--pastel-pink)",r.innerHTML="<strong>Lexical Context:</strong> Arrow functions do not get their own <code>this</code>. It inherits from parent lexical scope (global context), yielding <code>undefined</code>."})}}document.addEventListener("DOMContentLoaded",()=>{const x=document.getElementById("code-editor"),e=document.getElementById("line-numbers"),d=document.getElementById("btn-run"),p=document.getElementById("btn-reset"),l=document.getElementById("btn-clear-console"),o=document.getElementById("current-topic-indicator"),i=document.getElementById("topic-list"),t=document.getElementById("sidebar-title"),s=document.getElementById("footer-time"),r=document.querySelectorAll(".tab-btn:not(.disabled)");let n="arithmetic";const a=new H("visualizer-body"),c={basics:{title:"Basics Topics",defaultTopic:"arithmetic",topics:[{id:"arithmetic",label:"Arithmetic"},{id:"boolean",label:"Boolean"},{id:"comparison",label:"Comparison operators"},{id:"typeconversion",label:"TypeConversion"},{id:"variables",label:"Variables"},{id:"strings",label:"Strings"},{id:"conditional",label:"Conditional (if)"},{id:"forloop",label:"ForLoop"},{id:"logicaloperators",label:"Logical Operators"},{id:"switch",label:"Switch"},{id:"whileanddowhile",label:"While & Do...While"},{id:"datetime",label:"Date & Time"},{id:"functions",label:"Functions"},{id:"objects",label:"Objects"},{id:"objectsmanipulation",label:"Object Manipulation"}]},arrays:{title:"Array Topics",defaultTopic:"arraybasics",topics:[{id:"arraybasics",label:"Array Basics"},{id:"arrayaddremove",label:"Add & Remove"},{id:"arraysearching",label:"Searching"},{id:"arraymap",label:"Map Method"},{id:"arrayfilter",label:"Filter Method"},{id:"arrayreduce",label:"Reduce Method"}]},advanced:{title:"Advanced Topics",defaultTopic:"defaultparams",topics:[{id:"defaultparams",label:"Default Parameters"},{id:"destructuring",label:"Destructuring"},{id:"enhancedobjects",label:"Enhanced Objects"},{id:"helpers",label:"Collection Helpers"},{id:"mapandset",label:"Map & Set"},{id:"restoperator",label:"Rest Operator"},{id:"spreadoperator",label:"Spread Operator"},{id:"symbols",label:"Symbols"},{id:"templatestrings",label:"Template Strings"},{id:"ternaryoperator",label:"Ternary Operator"},{id:"advforloops",label:"Advanced For Loops"},{id:"thiskeyword",label:"The 'this' Keyword"}]}},u=()=>{const g=x.value.split(`
`).length;e.innerHTML=Array(g).fill(0).map((h,b)=>`<div>${b+1}</div>`).join("")};x.addEventListener("input",u),x.addEventListener("scroll",()=>{e.scrollTop=x.scrollTop}),x.addEventListener("keydown",g=>{if(g.key==="Tab"){g.preventDefault();const h=x.selectionStart,b=x.selectionEnd;x.value=x.value.substring(0,h)+"  "+x.value.substring(b),x.selectionStart=x.selectionEnd=h+2,u()}});const m=g=>{n=g,i.querySelectorAll(".topic-btn").forEach(C=>{C.getAttribute("data-topic")===g?C.classList.add("active"):C.classList.remove("active")});let b=g;g==="typeconversion"?b="TypeConversion":g==="forloop"?b="ForLoop":g==="logicaloperators"?b="LogicalOperators":g==="whileanddowhile"?b="While & Do...While":g==="arraybasics"?b="Array Basics":g==="arrayaddremove"?b="Add & Remove":g==="arraysearching"?b="Searching":g==="arraymap"?b="Map Method":g==="arrayfilter"?b="Filter Method":g==="arrayreduce"?b="Reduce Method":g==="objectsmanipulation"?b="Object Manipulation":g==="defaultparams"?b="Default Parameters":g==="enhancedobjects"?b="Enhanced Objects":g==="mapandset"?b="Map & Set":g==="restoperator"?b="Rest Operator":g==="spreadoperator"?b="Spread Operator":g==="templatestrings"?b="Template Strings":g==="ternaryoperator"?b="Ternary Operator":g==="advforloops"?b="Advanced For Loops":g==="thiskeyword"?b="The 'this' Keyword":b=g.charAt(0).toUpperCase()+g.slice(1),o.textContent=b,x.value=A[g]||"",u(),S.clear(),S.system(`Switched to topic: ${b}`),a.initTopic(g)},y=g=>{const h=c[g];h&&(t.textContent=h.title,i.innerHTML=h.topics.map(b=>`<li><button class="topic-btn" data-topic="${b.id}">${b.label}</button></li>`).join(""),m(h.defaultTopic))};i.addEventListener("click",g=>{const h=g.target.closest(".topic-btn");if(h){const b=h.getAttribute("data-topic");m(b)}}),r.forEach(g=>{g.addEventListener("click",()=>{r.forEach(b=>{b.classList.remove("active"),b.setAttribute("aria-selected","false")}),g.classList.add("active"),g.setAttribute("aria-selected","true");const h=g.getAttribute("data-section");y(h)})});const v=g=>{const h={},b=/(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;let C;for(;(C=b.exec(g))!==null;){const z=C.index,T=g.substring(Math.max(0,z-10),z).trim();let L="var";T.endsWith("const")?L="const":T.endsWith("let")&&(L="let"),h[C[1]]=L}return h},f=()=>{const g=x.value;S.clear(),S.system("Executing JS Code...");const h=v(g),C=`
;if (typeof console.reportVariables === 'function') {
  const varsObj = {};
  ${Object.keys(h).map(k=>`
    try {
      varsObj['${k}'] = {
        value: typeof ${k} !== 'undefined' ? ${k} : undefined,
        type: typeof ${k}
      };
    } catch(e) {}
  `).join(`
`)}
  console.reportVariables(varsObj);
}
    `,z=g+`
`+C;let T=null;const L={log:(...k)=>S.log(...k),error:(...k)=>S.error(...k),warn:(...k)=>S.warn(...k),info:(...k)=>S.info(...k),reportVariables:k=>{T=k}};try{if(new Function("console",`
        try {
          ${z}
        } catch (err) {
          console.error(err);
        }
      `)(L),S.system("Execution complete."),n==="variables"&&T){const M={};Object.keys(T).forEach(E=>{M[E]={value:T[E].value,type:T[E].type,kind:h[E]||"var"}}),a.update("variables",{variables:M})}}catch(k){S.error(`Compile Error: ${k.message}`),S.system("Execution failed.")}};d.addEventListener("click",f),p.addEventListener("click",()=>{confirm("Are you sure you want to reset the code to the default template?")&&(x.value=A[n]||"",u(),S.clear(),S.system("Code reset to default template."),a.initTopic(n))}),l.addEventListener("click",()=>{S.clear()});const w=()=>{const g=new Date,h=b=>String(b).padStart(2,"0");s.textContent=`${h(g.getHours())}:${h(g.getMinutes())}:${h(g.getSeconds())}`};setInterval(w,1e3),w(),y("basics")});
