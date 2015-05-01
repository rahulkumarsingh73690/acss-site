# Quick Start

For a quick example of Atomic, clone the [atomizer-examples](https://github.com/yahoo/atomizer-examples) repo:

```bash
git clone git@github.com:yahoo/atomizer-examples.git
```

then start:

```bash
cd atomizer-examples
npm install
npm start
```

This should open a page in your browser at [http://localhost:3000](http://localhost:3000)

Now try this:

<ul class="ul-list">
    <li>Open the index page in a text editor</li>
    <li>Edit/add/remove Atomic classes in the markup (get help from the [reference page](/reference))</li>
    <li>Save the file</li>
</ul>

The browser should reload the page, displaying all your changes. Check the [atomic.css](http://localhost:3000/css/atomic.css) file to see that it only contains the rules for the classes that are being used in the project.

If needed, edit `Gruntfile.js` (in the root of &quot;atomizer-examples&quot;) to set the files to watch:

```javascript
// watch for changes and run tasks
watch: {
    dev: {
        options: {
            livereload: true
        },
        files: [
            './examples/**/*.html'
        ],
        tasks: ['atomizer']
    }
}
```

From here, we recommend learning about [Atomic CSS Architecture](/thinking-in-atomic.html), reading our [FAQ](http://localhost:3000/frequently-asked-questions.html), checking [Atomic classes](/guides/atomic-classes.html) and their [syntax](/guides/syntax.html).

Please visit the [Atomizer](https://github.com/yahoo/atomizer) and [grunt-atomizer](https://github.com/yahoo/grunt-atomizer) repositories for more information.
