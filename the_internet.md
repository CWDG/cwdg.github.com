# Detailed Look into the Internet
### Behind the Scenes of Your Browser

---

# Your Browser
*insert screenshot of empty chrome tab*

---

# How Does It Work?
*browser w/ Facebook ==? magnets*

---

# Spiraling Plan
- What You Need to Know as a Web Developer
- Vocabulary:
    - Page Markup
    - Clients and Servers
    - Requests and Responses
- Browser:
    - Content
    - Presentation
    - Interaction
- Server:
    - Routing
    - Controllers
    - Databases
    - Templates

---

# Vocabulary

- Not sure what shoudl go here

---

# What You Need to Know as a Web Developer
- Page Markup
- Client-Server
- Request-Response

---

# Page Markup

- Content: HTML
    - Page structure and content.

- Presentation: CSS
    - How it looks

- Interaction: Javascript
    - Change things!

- "Front End"

---

# Clients and Servers
- Website with many users
- 1 server - many clients
- Content can change per client

---

# Requests and Responses
- How does your browser (client) communicate with the website (server)?
- Browser asks for a resource from the server
  - http://www.example.com/about.html
    Host: www.example.com
    GET /about.html HTTP/1.1
- Server sends a response
  - 200 OK
  - 304 Not Modified
  - 404 Not Found
  - 500 Server Error
  - HTML/image/whatever
- Browser then sends more requests for images, stylesheets, javascript, etc.

---

# Browser Specifics

- Diving Deeper, this time on your machine.

- I want to visit. Where do I begin?

---

# What, Not How
- Declarative, not Instructive
- Java/C/etc. says "do this, then this"
    document.drawString("Welcome to Example.com", myfont, size, ...)
- HTML says "this needs to be displayed, the browser can work it out"
    <h1>Welcome to Example.com</h1>
- Takes the "plan" and figures out which pixels to turn on.

---

# Structure of the Page: HTML
- Hypertext Markup Language
- Tags with content and attributes
    <h1 id="logo">CWDG</h1>

---

# Turtles All The Way Down
- Tags Nested within Tags
    <div id="container">
      <div id="content">
        <div class="section about">
          <h2>What is CWDG?</h2>
          <div class="content">
            <p>
              We are a collection of students, graduates and alumni at the Ohio
              State University who are making an effort to improve the web. We
              work hard to make ourselves, and others, better developers.
            </p>
          </div>
        </div>
      </div>
    </div>

---

# Style of the Page: CSS
- Cascading Style Sheets
- Assign visual properties to elements.
  - Browser still decides *how* to display it.
- Syntax tied to the "id" and "class" attributes.
    #container { width: 960px; background-color: white; }
    .section { border: 1px solid #ccc; background-color: #eee; }
    p { font-size: 16px; color: #224; }
- Number/Hash/Pound is for "id"
- Dot/Period is for "class"
- Unprefixed for Tag names

---

# More Turtles
- Assign properties to elements nested within others.
    .section h2 { 
      font-weight: bold;
    }

---

# Interaction on the Page: Javascript
- Normal language that interacts with the HTML and CSS.
- Runs "in the browser"
- Similar to Java, but really more like Scheme
    footer = document.findElementById("footer");

    footer.textContent;
    => "Email cwdgosu@gmail.com for more information."

    footer.onclick = function(){ alert("Clicked the footer!"); };

---

# Servers
- Diving Deeper, this time on the Server!
- Recieved a request. What now?

---

# Routing

---

# Controllers

---

# Databases

---

# Templates

---

