# HoverExpand
_a jQuery plugin that lets you see through the clutter_
 
**The problem:**  You've got a piece of content (i.e. a comment on a webpage) that is very long and is breaking up the layout of your page.

**The solution:** Use the HoverExpand jQuery plugin to keep the content in check, until a user hovers over it.  Then the content fluidly expands so it can be read without clicking through to another page.

**Teh codez:** 

    $('div').hoverexpand();
This code will give all divs on the page a height of 100px.  When you hover over a div, it will expand to its full height.

Make sure you include the plugin on your web page:

    <script type="text/javascript" src="path/to/jquery.hoverexpand.js"></script>
    
**The options:** You can pass an object to override the default options of hoverexpand().

    $('div').hoverexpand({
      minHeight: '100px',           // If an element has a height greater than minHeight, it will become 'expandable'
      collapsedClass: 'expand-me',  // Class to be added to 'expandable' elements. The class is removed at the end of the expand event
      hoverTime: 500                // Time (in ms) that a user must hover over an element before it expands
    });

**The License:**

Copyright (c) 2011 John M Mertens

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.