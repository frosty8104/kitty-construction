alert("Hello! Welcome to your web design course. I'm Frosty, a web designer and developer that created this course to help aspiring web designers, developers, and graphic designers to get started!");

// DESIGN //
const wireframe = document.querySelector(".wire");
const colour = document.querySelector(".colour");
const typography = document.querySelector(".type");
const whitespace = document.querySelector(".space");

wireframe.addEventListener("click", function() {
    alert("Wireframing is like drawing blueprints for you house. You can plan logo placement, along with images, headings, and paragraphs.");
});
colour.addEventListener("click", function() {
    alert("Colour theory tells you what colours invite or connect to what emotions. This will help you pick a colour scheme of two, maximum three colours to use for your website and visual brand. Colour theory resembles choosing paint colours for your house.");
});
typography.addEventListener("click", function() {
    alert("Typography is the pairing of fonts for the best visual presentation of your website, business card, and other promotional pieces that help your company stand out. Typography is like decorating your house, whether it be wallpaper or otherwise.");
});
whitespace.addEventListener("click", function() {
    alert("Whitespace gives elements breathing space. Whitespace resembles space between walls for living room, bathroom, bedroom, and any other room in your house or apartment.");
});

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
const article = document.querySelector(".article");
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

tags.addEventListener("click", function() {
    alert("HTML tags assist a browser in determining what to do with what's between the tags.");
});
doc.addEventListener("click", function() {
    alert("!Doctype HTML is an instruction set for browsers, telling them how to interpret and render an HTML document. It prevents browsers from using an incompatible rendering mode, ensures backward compatibility, facilitates validation, and specifies document type and version.");
});
html.addEventListener("click", function() {
    alert("HTML tags are your basic tags, telling your browser how to interpret and display what's between those tags. Without them, your other code like text etc. would not display properly.");
});
head.addEventListener("click", function() {
    alert("Head tags hold meta information, website title, and links to your stylesheet, JavaScript file(s), and other styling tidbits.");
});
title.addEventListener("click", function() {
    alert("Title tags denote a title, that goes in the browser at the top.");
});
meta.addEventListener("click", function() {
    alert("Meta tags go inside head tags, for example width=device width to tell the browser to prepare for responsiveness.");
});
link.addEventListener("click", function() {
    alert("Link tags also go inside head tags, telling the html document where to look for css stylesheet to get its styles from, JavaScript files for running scripts, where to find styles for responsive typography fonts, and other things.");
});
body.addEventListener("click", function() {
    alert("Body tags hold all the material that shows up in a website, like text and images.");
});
header.addEventListener("click", function() {
    alert("Semantic header tags denote what goes in the header space of a website, like logo, navigation, and anything else that should go in the header section.");
});
nav.addEventListener("click", function() {
    alert("Nav tags denote navigation, which is where all your links to website sections and/or other pages go.");
});
main.addEventListener("click", function() {
    alert("Semantic main tags tells the browser what goes in the main part of the website. This would include text and images.");
});
section.addEventListener("click", function() {
    alert("Section tags denotes a section of a website.");
});
div.addEventListener("click", function() {
    alert("Div tags denotes a block of content, for example an image with a description.");
});
article.addEventListener("click", function() {
    alert("Semantic article tags denote an article of interest.");
});
figure.addEventListener("click", function() {
    alert("Figure tags can wrap an image tag for better control of size.");
});
aside.addEventListener("click", function() {
    alert("Aside tags denote a sidebar, like in a blog where you can navigate to a certain blog post.");
});
footer.addEventListener("click", function() {
    alert("Semantic footer tags tell the browser what goes in the footer section of a website. This would include a secondary navigaion, and anythig else that you would like to put there.");
});
ul.addEventListener("click", function() {
    alert("Ul tags build an unordered list, with bullets next to each item.");
});
ol.addEventListener("click", function() {
    alert("Ol tage build an ordered list, with numbers next to each item.");
});
li.addEventListener("click", function() {
    alert("Li tags denotes a list item either within an unordered or ordered list.");
});
h1.addEventListener("click", function() {
    alert("H1 tags denote the largest header tag for text. Normally goes in the header section.");
});
h2.addEventListener("click", function() {
    alert("H2 tags denote the next size of header text. Normally goes as a header on top of a section in the main section.");
});
h3.addEventListener("click", function() {
    alert("H3 tags denote the next size of header text. Not entirely sure where this one normally goes, but it would denote something important, I think.");
});
h4.addEventListener("click", function() {
    alert("H4 tags denote the next size of header text. Not entirely sure where this one normally goes, but it would denote something important, I think.");
});
h5.addEventListener("click", function() {
    alert("H5 tags denote the next size of header text. Not entirely sure where this one normally goes, but it would denote something important, I think.");
});
h6.addEventListener("click", function() {
    alert("H6 tags denote the next size of header text. Not entirely sure where this one normally goes, but it would denote something important, I think.");
});
p.addEventListener("click", function() {
    alert("P tags denote a paragraph, so a block of text.");
});
strong.addEventListener("click", function() {
    alert("Strong tags denote something of importance by making it bold.");
});
em.addEventListener("click", function() {
    alert("Em tags denote something of importance by making it italic.");
});
br.addEventListener("click", function() {
    alert("Br tags denote a page break in text, forcing any text after it to the next line.");
});
img.addEventListener("click", function() {
    alert("Img tags enclose a path to an image to make it display on your web page.");
});
span.addEventListener("click", function() {
    alert("Span tags can isolate a word or block of text to make it a different colour, or some other style effect.");
});
a.addEventListener("click", function() {
    alert("The a tag is used for links, like linking to a stylesheet or image.");
});

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

selectors.addEventListener("click", function() {
    alert("CSS selectors help you style and organize your content.");
});
color.addEventListener("click", function() {
    alert("The color selector changes your text to the color of your choice. (Note: I have a beef with this spelling as I am Canadian, and every time I have to type this selector out, I'm annoyed that it forces me not to spell it coloUr.)");
});
background.addEventListener("click", function() {
    alert("The background selector changes a background colour, or applies an image as a background");
});
width.addEventListener("click", function() {
    alert("The width selector sets a width for an image, or div (whether it be header, main, footer, section, etc.) to assist with layout, making it more conducive to site visitors staying on your site.");
});
height.addEventListener("click", function() {
    alert("The height selector sets a height for an image or div.");
});
padding.addEventListener("click", function() {
    alert("The padding selector sets how much padding is between an element - say an image or text block - and it's outer container, for example a div.");
});
margin.addEventListener("click", function() {
    alert("The margin selector sets how much margin is between your div and the outer edge of the webpage... or between two elements.");
});
fontFamily.addEventListener("click", function() {
    alert("Font-family sets what family the font comes from, so Open Sans is a sans-serif font. To properly call the font, you would set your selector as font-family { 'Open Sans', sans serif; }");
});
fontSize.addEventListener("click", function() {
    alert("Font-size sets a size for your text. So, your h1 header could be 32px, and your paragraph text could be 16 px.");
});
fontWeight.addEventListener("click", function() {
    alert("Font weight sets your font weight. You can set it to bold, semi-bold, or normal.");
});
lineHeight.addEventListener("click", function() {
    alert("Line height sets a fixed height for a line of text.");
});
textAlign.addEventListener("click", function() {
    alert("Text-align aligns your text to left, center, or right.");
});
textDecoration.addEventListener("click", function() {
    alert("Text-decoration sets your text as underline or not, depending on what you put in.");
})
textTransform.addEventListener("click", function() {
    alert("Text-transform sets your text as all uppercase, all lowercase, or normal.");
});
border.addEventListener("click", function() {
    alert("Border sets a border around your divs, or text, or images, or anything else you want to put a border on. You can set border-left, border-right, border-top, border-bottom, or just border to have it go all the way around.");
});
borderRadius.addEventListener("click", function() {
    alert("Border radius sets your border radius, so 50% can make it a circular border. You can also set it anywhere in between 0 and 100 to make your border as round or sharp and pointy as you desire.");
});
boxSizing.addEventListener("click", function() {
    alert("Box sizing offers two options: content box gives you default css box sizing behaviour, which means if you set a box to 150px, the element itself will be 150px, plus the padding and margin you add to it. Border box, by contrast, accounts for element width plus any padding and margin added.");
})
display.addEventListener("click", function() {
    alert("Display selector offer the following options: block, inline-block, none, flex, and grid. Block gives you a, well, block, of text, inline block, which means they stack side by side, none - obviously no change, flex is part of flexbox, and grid (which I think is relatively new) makes elements display as a grid.");
});

// BOX MODEL-FLEXBOX //
const properties = document.querySelector(".properties");
const float = document.querySelector(".float");
const clear = document.querySelector(".clear");
const paddingBox = document.querySelector(".padding-box");
const marginBox = document.querySelector(".margin-box");
const alignItems = document.querySelector(".align-items");
const justifyContent = document.querySelector(".justify-content");
const flexDirection = document.querySelector(".flex-direction");
const flexWrap = document.querySelector(".flex-wrap");
const flexFlow = document.querySelector(".flex-flow");

properties.addEventListener("click", function() {
    alert("Properties are certain selectors in css that determine - at least in box model - your content placement and spacing.");
});
float.addEventListener("click", function() {
    alert("Float allows you to move elements around in box model websites. You can float left or right.");
});
clear.addEventListener("click", function() {
    alert("Clear makes elements stack properly if float does not do the job.");
});
paddingBox.addEventListener("click", function() {
    alert("Padding is fairly important in box model as it determines how much space is between elements.");
});
marginBox.addEventListener("click", function() {
    alert("Margin is fairly important in box model as it determines how much space is between your elements and the outer edges of the browser.");
});
alignItems.addEventListener("click", function() {
    alert("Align-items is a flexbox property that makes elements align along a horizontal axis. You can align-items at flex-start, center, and flex-end.");
})
justifyContent.addEventListener("click", function() {
    alert("Justify content is a flexbox property that makes elements align along a vertical axis. You can justify-content at flex-start,center, space-between, space-around and flex-end.");
});
flexDirection.addEventListener("click", function() {
    alert("Flex-direction is a flexbox property for aligning and stacking elements.");
});
flexWrap.addEventListener("click", function() {
    alert("Flex wrap is a flexbox property that, depending on which property you use, will either force items onto one line or wrap to multiple lines. Nowrap would mean it can wrap to multiple lines (to my thinking), wrap means wrap to one line... wrap reverse, I'm not sure.");
});
flexFlow.addEventListener("click", function() {
    alert("Flex flow is a combination of flex-direction and flex-wrap, which gives you the options of row wrap, row wrap reverse, column wrap, and column wrap reverse.");
});

// JAVASCRIPT //

// need: array, map, else/if conditional statements for opening up next module when complete button is clicked

//const designArray = [ "wireframe", "color", "typography", "whitespace" ];
//const htmlArray = [ "tags", "doc", "html", "head", "title", "meta", "link", "body", "header", "nav", "main", "section", "div", "article", "figure", "aside", "footer", "ul", 
//                    "ol", "li", "h1", "h2", "h3", "h4", "h5", "h6", "p", "strong", "em", "br", "img", "span", "a" ];
//const cssArray = [ "selectors", "color", "background", "width", "height", "padding", "margin", "fontFamily", "fontSize", "fontWeight", "lineHeight", "textAlign", 
//                    "textDecoration", "textTransofrm", "border", "borderRadius", "boxSizing", "display" ]
//const boxFlexBoxArray = [ "properties", "float", "clear", "paddingBox", "marginBox", "alignItems", "justifyContent", "flexDirection", "flexWrap", "flexFlow" ]
