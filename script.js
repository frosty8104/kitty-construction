// DESIGN //
const wireframe = document.querySelector(".wire");
const colour = document.querySelector(".colour");
const typography = document.querySelector(".type");
const whitespace = document.querySelector(".space");

alert("Wireframing is like drawing blueprints for you house. You can plan logo placement, along with images, headings, and paragraphs.");
alert("Colour theory tells you what colours invite or connect to what emotions. This will help you pick a colour scheme of two, maximum three colours to use for your website and visual brand. Colour theory resembles choosing paint colours for your house.");
alert("Typography is the pairing of fonts for the best visual presentation of your website, business card, and other promotional pieces that help your company stand out. Typography is like decorating your house, whether it be wallpaper or otherwise.");
alert("Whitespace gives elements breathing space. Whitespace resembles space between walls for living room, bathroom, bedroom, and any other room where you have to put furniture and appliances and also space between said furniture and appliances so there's room for you to move between them.");

// HTML //
const tags = document.querySelector(".tags");
const doc = document.querySelector(".doc");
const html = document.querySelector(".html");
const head = document.querySelector(".head");
const title = document.querySelector(".title");
const meta = document.querySelector(".meta");
const link = document.querySelector(".link");
const body = document.querySelector(".body");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const main = document.querySelector(".main");
const section = document.querySelector(".section");
const div = document.querySelector(".div");
const article = document.querySelector(".articla");
const figure = document.querySelector(".figure");
const aside = document.querySelector(".aside");
const footer = document.querySelector(".footer");
const ul = document.querySelector(".ul");
const ol = document.querySelector(".ol");
const li = document.querySelector(".li");
const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const h3 = document.querySelector(".h3");
const h4 = document.querySelector(".h4");
const h5 = document.querySelector(".h5");
const h6 = document.querySelector(".h6");
const p = document.querySelector(".p");
const strong = document.querySelector(".strong");
const em = document.querySelector(".em");
const br = document.querySelector(".br");
const img = document.querySelector(".img");
const span = document.querySelector(".span");
const a = document.querySelector(".a");

alert("HTML tags assist a browser in determining what to do with what's between the tags.");
alert("!Doctype HTML is an instruction set for browsers, telling them how to interpret and render an HTML document. It prevents browsers from using an incompatible rendering mode, ensures backward compatibility, facilitates validation, and specifies document type and version.");
alert("HTML tags are your basic tags, telling your browser how to interpret and display what's between those tags. Without them, your other code like text etc. would not display properly.");
alert("Head tags hold meta information, website title, and links to your stylesheet, JavaScript file(s), and other styling tidbits.");
alert("Title tags denote a title, that goes in the browser at the top.");
alert("Meta tags go inside head tags, for example width=device width to tell the browser to prepare for responsiveness.");
alert("Link tags also go inside head tags, telling the html document where to look for css stylesheet to get its styles from, JavaScript files for running scripts, where to find styles for responsive typography fonts, and other things.");
alert("Body tags hold all the material that shows up in a website, like text and images.");
alert("Semantic header tags denote what goes in the header space of a website, like logo, navigation, and anything else that should go in the header section.");
alert("Nav tags denote navigation, which is where all your links to website sections and/or other pages go.");
alert("Semantic main tags tells the browser what goes in the main part of the website. This would include text and images.");
alert("Section tags denotes a section of a website.");
alert("Div tags denotes a block of content, for example an image with a description.");
alert("Semantic article tags denote an article of interest.");
alert("Figure tags can wrap an image tag for better control of size.");
alert("Aside tags denote a sidebar, like in a blog where you can navigate to a certain blog post.");
alert("Semantic footer tags tell the browser what goes in the footer section of a website. This would include a secondary navigaion, and anythig else that you would like to put there.");
alert("Ul tags build an unordered list, with bullets next to each item.");
alert("Ol tage build an ordered list, with numbers next to each item.");
alert("Li tags denotes a list item either within an unordered or ordered list.");
alert("H1 tags denote the largest header tag for text. Normally goes in the header section.");
alert("H2 tags denote the next size of header text. Normally goes as a header on top of a section in the main section.");
alert("H3 tags denote the next size of header text. Not entirely sure where this one normally goes, but it would denote something important, I think.");
alert("H4 tags denote the next size of header text. Not entirely sure where this one normally goes, but it would denote something important, I think.");
alert("H5 tags denote the next size of header text. Not entirely sure where this one normally goes, but it would denote something important, I think.");
alert("H6 tags denote the next size of header text. Not entirely sure where this one normally goes, but it would denote something important, I think.");
alert("P tags denote a paragraph, so a block of text.");
alert("Strong tags denote something of importance by making it bold.");
alert("Em tags denote something of importance by making it italic.");
alert("Br tags denote a page break in text, forcing any text after it to the next line.");
alert("Img tags enclose a path to an image to make it display on your web page.");
alert("Span tags can isolate a word or block of text to make it a different colour, or some other style effect.");
alert("The a tag is used for links, like linking to a stylesheet or image.");

// CSS //
const selectors = document.querySelector(".selectors");
const color = document.querySelector(".color");
const background = document.querySelector(".background");
const width = document.querySelector(".width");
const height = document.querySelector(".height");
const padding = document.querySelector(".padding");
const margin = document.querySelector(".margin");
const fontFamily = document.querySelector(".font-family");
const fontSize = document.querySelector(".font-size");
const fontWeight = document.querySelector(".font-weight");
const lineHeight = document.querySelector(".line-height");
const textAlign = document.querySelector(".text-align");
const textDecoration = document.querySelector(".text-decoration");
const textTransform = document.querySelector(".text-transform");
const border = document.querySelector(".border");
const borderRadius = document.querySelector(".border-radius");
const boxSizing = document.querySelector(".box-sizing");
const display = document.querySelector(".display");

alert("CSS selectors help you style and organize your content.");
alert("The color selector changes your text to the color of your choice. (Note: I have a beef with this spelling as I am Canadian, and every time I have to type this selector out, I'm annoyed that it forces me not to spell it coloUr.)");
alert("The background selector changes a background colour, or applies an image as a background");
alert("The width selector sets a width for an image, or div (whether it be header, main, footer, section, etc.) to assist with layout, making it more conducive to site visitors staying on your site.");
alert("The height selector sets a height for an image");
alert("The padding selector sets how much padding is between an element - say an image or text block - and it's outer container, for example a div.");
alert("The margin selector sets how much margin is between your div and the outer edge of the webpage... or between two elements.");
alert("Font-family sets what family the font comes from, so Open Sans is a sans-serif font. To properly call the font, you would set your selector as font-family { 'Open Sans', sans serif; }");
alert("Font-size sets a size for your text. So, your h1 header could be 32px, and your paragraph text could be 16 px.");
alert("Font weight sets your font weight. You can set it to bold, semi-bold, or normal.");
alert("Line height sets a fixed height for a line of text.");
alert("Text-align aligns your text to left, center, or right.");
alert("Text-decoration sets your text as underline or not, depending on what you put in.");
alert("Text-transform sets your text as all uppercase, all lowercase, or normal.");
alert("Border sets a border around your divs, or text, or images, or anything else you want to put a border on. You can set border-left, border-right, border-top, border-bottom, or just border to have it go all the way around.");
alert("Border radius sets your border radius, so 50% can make it a circular border. You can also set it anywhere in between 0 and 100 to make your border as round or sharp and pointy as you desire.");
alert("Box sizing offers two options: content box gives you default css box sizing behaviour, which means if you set a box to 150px, the element itself will be 150px, plus the padding and margin you add to it. Border box, by contrast, accounts for element width plus any padding and margin added.");
alert("Display selector offer the following options: block, inline-block, none, flex, and grid. Block gives you a, well, block, of text, inline block, which means they stack side by side, none - obviously no change, flex is part of flexbox, and grid (which I think is relatively new) makes elements display as a grid.");

//  //


