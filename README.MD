A simple jQuery plugin for making event binding to the render event easier.

installation:

     npm install @tschallacka/jquery.render

# $('#').render( callback )

**callback**  

A function to call when the render event is triggered on the document.

# Example:

     var $ = require('jquery');
     require('@tschallacka/jquery.render');
     
     $(document).render(function(){ 
         console.log('Have you heard of the tragedy of Darth Plageuis the wise?');
     });
