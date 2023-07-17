console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--

for (const lang in languages) {
  const opt = document.createElement("option");
  opt.textContent = languages[lang];
  opt.value = languages[lang];
  select.append(opt);
}

// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

for (const navIt in nav) {
  console.log(navIt);
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = nav[navIt].href;
  a.textContent = nav[navIt].text;
  li.append(a);
  ul.append(li);
}

// --^-- write/change code here --^--
