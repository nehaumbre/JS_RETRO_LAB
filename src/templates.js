export const templates = {
  arithmetic: `// --- Arithmetic Operators in JS ---
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
`,

  boolean: `// --- Booleans & Short Circuiting ---
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
`,

  comparison: `// --- Comparison Operators: == vs === ---
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
`,

  typeconversion: `// --- JavaScript Type Conversion (Casting & Coercion) ---

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
`,

  variables: `// --- Var vs Let vs Const: Scoping & Reassignment ---

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
`,

  strings: `// --- Strings and String Indexing ---
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
`,

  conditional: `// --- Conditionals (if / else if / else) ---
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
`,

  forloop: `// --- For Loops (Counting & Iterating) ---

console.log("1. Simple Counter:");
for (let i = 1; i <= 5; i++) {
  console.log("  Loop index i = " + i);
}

console.log("\\n2. Iterating through inventory:");
const items = ["Potion", "Sword", "Shield"];
for (let i = 0; i < items.length; i++) {
  console.log("  Item at index " + i + " is " + items[i]);
}
`,

  logicaloperators: `// --- Logical Operators (&&, ||, !) ---
let hasKey = true;
let coins = 10;
let isVIP = false;

// && (AND) - Both sides must be true
console.log("1. Has Key AND 5+ Coins?", hasKey && coins >= 5);

// || (OR) - At least one side must be true
console.log("2. Is VIP OR Has Coins?", isVIP || coins > 0);

// ! (NOT) - Inverts boolean
console.log("3. Is NOT a VIP?", !isVIP);
`,

  switch: `// --- Switch Statements (Multi-case branch) ---
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
`,

  whileanddowhile: `// --- While & Do...While Loops ---

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
`,

  datetime: `// --- JavaScript Date and Time ---

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
`,

  functions: `// --- JavaScript Functions ---

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
`,

  arraybasics: `// --- Array Basics: Creation & Indexing ---

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
`,

  arrayaddremove: `// --- Adding & Removing Elements from Arrays ---
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
`,

  arraysearching: `// --- Searching inside Arrays ---
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
`,

  arraymap: `// --- Array.prototype.map() ---
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
`,

  arrayfilter: `// --- Array.prototype.filter() ---
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
`,

  arrayreduce: `// --- Array.prototype.reduce() ---
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
`,

  objects: `// --- JavaScript Objects ---

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
`,

  objectsmanipulation: `// --- JavaScript Object Manipulation ---

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
`,

  defaultparams: `// --- Default Function Parameters ---

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
`,

  destructuring: `// --- Destructuring Assignment ---

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
`,

  enhancedobjects: `// --- Enhanced Object Literals ---

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
`,

  helpers: `// --- Collection Helpers: every() & some() ---
// Array helper methods that check conditions across all elements.

const squadHp = [100, 85, 40, 0];
console.log("Squad HP values:", squadHp);

// 1. some() - checks if AT LEAST ONE element passes
const isSomeoneFallen = squadHp.some(hp => hp === 0);
console.log("Is someone defeated (HP = 0)?", isSomeoneFallen);

// 2. every() - checks if ALL elements pass
const isEveryoneHealthy = squadHp.every(hp => hp > 50);
console.log("Is everyone healthy (HP > 50)?", isEveryoneHealthy);
`,

  mapandset: `// --- Map & Set Collections ---

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
`,

  restoperator: `// --- Rest Operator (...) ---
// Rest parameters gather multiple leftover arguments into a single array list.

// Accumulate any number of level completion times
function sumTimes(levelName, ...times) {
  console.log("Level:", levelName);
  console.log("Times array gathered:", times);
  const total = times.reduce((a, b) => a + b, 0);
  return "Total time: " + total + "s";
}

console.log(sumTimes("Stage 1", 45, 60, 55));
`,

  spreadoperator: `// --- Spread Operator (...) ---
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
`,

  symbols: `// --- Symbols ---
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
`,

  templatestrings: `// --- Template Strings (Template Literals) ---

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
`,

  ternaryoperator: `// --- Ternary Operator (Advanced Chaining) ---

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
`,

  advforloops: `// --- Advanced For Loops: for...of & for...in ---

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
`,

  thiskeyword: `// --- The 'this' Keyword in JS ---

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
`
};
