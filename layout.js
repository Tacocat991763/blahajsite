// initLayout() is called once the DOM (the HTML content of your website) has been loaded.
document.addEventListener("DOMContentLoaded", function () {
  // The layout will be loaded on all pages that do NOT have the "no-layout" class in the <body> element.
  if (!document.body.classList.contains("no-layout")) {
    // Inserting your header and footer:
    document.body.insertAdjacentHTML("afterbegin", headerEl);
    document.body.insertAdjacentHTML("beforeend", footerEl);
    document.body.insertAdjacentHTML("afterbegin", artEl1);

    // Inserting sidebars:
    const wrapperElement = document.querySelector("body"); // you might have to change this selector to something like .my-wrapper
    if (wrapperElement) {
      wrapperElement.insertAdjacentHTML("afterbegin", sidebarEl1);
      wrapperElement.insertAdjacentHTML("beforeend", sidebarEl2);
    }

    initActiveLinks();
  }

  // add your own javascript code here...
});

/* ********************************* */

/**
 *  F U N C T I O N S
 */

function initActiveLinks() {
  // This function adds the class "active" to any link that links to the current page.
  // This is helpful for styling the active menu item.

  const pathname = window.location.pathname;
  [...document.querySelectorAll("a")].forEach((el) => {
    const elHref = el
      .getAttribute("href")
      .replace(".html", "")
      .replace("/public", "");

    if (pathname == "/") {
      // homepage
      if (elHref == "/" || elHref == "/index.html") el.classList.add("active");
    } else {
      // other pages
      if (window.location.href.includes(elHref)) el.classList.add("active");
    }
  });
}

function getNestingString() {
  // This function prepares the "nesting" variable for your header and footer (see below).
  // Only change this function if you know what you're doing.
  const currentUrl = window.location.href
    .replace("http://", "")
    .replace("https://", "")
    .replace("/public/", "/");
  const numberOfSlahes = currentUrl.split("/").length - 1;
  if (numberOfSlahes == 1) return ".";
  if (numberOfSlahes == 2) return "..";
  return ".." + "/..".repeat(numberOfSlahes - 2);
}

/* ********************************* */

/**
 *  H T M L
 */

const nesting = getNestingString();

/**
  Use ${nesting} to output a . or .. or ../.. etc according to the current page's folder depth.
  Example:
    <img src="${nesting}/images/example.jpg" />
  will output
  	 <img src="./images/example.jpg" /> on a page that isn't in any folder.
    <img src="../images/example.jpg" /> on a page that is in a folder.
    <img src="../../images/example.jpg" /> on a page that is in a sub-folder.
    etc.
 */

// Insert your header HTML inside these ``. You can use HTML as usual.
const headerEl = `
	<header>
		<h1>The Blahaj Site</h1>
	</header>
`;

// Insert your footer HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a footer.
const footerEl = `
`;
const artEl1 = `
    <art1>
        <img src="blahaj.png" alt="Blahaj Logo" class="logo"></img>
    </art1>
`;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const sidebarEl1 = `
    <leftsidebar>
        <h2>Navigation</h2>    
            <nav class="sidebar-menu">
                <details class="menu-group">
                    <summary>main</summary>
                    <a href="index.html">home</a>
                    <a href="aboutsite.html">about site</a>
                    <a href="history.html">history</a>
                    <a href="credits.html">credits</a>
                </details>

                <details class="menu-group">
                    <summary>BLAHAJ!!!</summary>
                    <a href="games.html">games</a>
                    <a href="art.html">art</a>
                    <a href="whereto.html">where to buy blahajs</a>
                </details>
                <details class="menu-group">
                    <summary>me</summary>
                    <a href="about.html">about me</a>
                    <a href="contact.html">contact</a>
                    <details class="nested-group">
                        <summary>media recs</summary>
                        <a href="tvshows.html">tv shows</a>
                        <a href="movies.html">movies</a>
                        <a href="books.html">books</a>
                    </details>
                </details>
            </nav>
    </leftsidebar>
`;

// Insert your sidebar HTML inside these ``. You can use HTML as usual.
// Remove all the content inside the `` if you don't have a sidebar.
const sidebarEl2 = `
    <rightsidebar>
        <h2>Random Stuff</h2>
        <p>Poem:</p>
        <p>Roses are red,</p>
        <p>Violets are blue,</p>
        <p>Blahajs are cute,</p>
        <p>and they will attac u</p>
        <p>Wasn't that a beautiful poem.</p>
        <br>
        <p>Other poem:</p>
        <p>No Sense, A Haiku</p>
        <p>The title is right</p>
        <p>I have not been named Dave</p>
        <p>Am i microwave?</p>
        
    </rightsidebar>
`;
