# Frequently Asked Questions

This section is intended to answer common questions related to Atomic CSS, its unorthodox way to write CSS, its stance in regard to what is considered best practice, and more.

<ul class="ul-list">
   <li><a href="#">What is Atomic CSS?</a></li>
   <li><a href="#">What is Atomizer?</a></li>
   <li><a href="#">Should I &quot;<em>atomize</em>&quot; everything?</a></li>
   <li><a href="#">Do I need to specify a namespace? And if yes, what should I use?</a></li>
   <li><a href="#">What are the benefits of Atomic CSS?</a></li>
   <li><a href="#">I was always told to use semantic classes and not use classes related to presentation; isn't Atomic CSS promoting bad practice?</a></li>
   <li><a href="#">What's the difference between inline styles and Atomic CSS??</a></li>
   <li><a href="#">How can one remember these cryptic class names?</a></li>
   <li><a href="#">Aren't you bloating the markup?</a></li>
   <li><a href="#">How can you distribute presentation changes without asking everyone to change their markup? (How do you make changes across the board?)</a></li>
   <li><a href="#">How does Atomic CSS work with <abbr title="Responsive Web Design">RWD</abbr>?</a></li>
</ul>

## What is Atomic CSS

Atomic CSS is a Front-End (FE) framework that has the ambition to solve common FE challenges seen at the scale of Yahoo!. Problems that become more evident and more complex as the size and diversity of a web site increases.

To achieve this goal, Atomic CSS uses granular CSS rules that include one or more (but few) declarations, relying on component rules only when they make more sense than using generic classes. Atomic CSS also contains "helpers" that provide much more than basic styling (i.e. media blocks).

## Should I &quot;atomize&quot; everything?

We also heavily rely on helper classes. We have many of these. And notice here that even if we could style the “stretched” box using atomic classes alone, we still offer a component rule for this.
That’s because many developers are not sure about how all patterns work (the padding trick in this case) so less granularity helps here.

## What's the difference between inline styling and Atomic CSS?

Inline styling, the good parts: Scope is limited to the element onto which we apply the classes and that styling is <strong>portable</strong> because the styling <em>&quot;follows&quot; the markup</em>.

Inline styling, the bad parts: The high specificity, the verbosity, the fact that those bytes are not cached, and also the fact that browsers have to assess those styles once they get to them in the markup.

<img className="Va-m Pos-r" alt="Venn diagram showing the difference between Atomic CSS and inline styling" height="400" src="/public/images/atomic-vs-style.gif" />

<table cellspacing="0" class="W-100% Ta-start">
    <caption class="hidden">The difference between inline styling and Atomic CSS</caption>
    <thead>
      <tr>
          <th scope="col" class="P-10px"></th>
          <th scope="col" class="P-10px Whs-nw ">Inline styling</th>
          <th scope="col" class="P-10px">Atomic CSS</th>
      </tr>
    </thead>
    <tbody>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t P-10px">Specificity</th>
            <td class="Va-t P-10px">1.0.0.0</td>
            <td class="Va-t P-10px">0.0.1.0 [\[1\]](#footnote)<a id="footnote-1" class="D-ib"></a></td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t P-10px">Verbosity</th>
            <td class="Va-t P-10px">High</td>
            <td class="Va-t P-10px">Minimal</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t P-10px">Abstraction</th>
            <td class="Va-t P-10px">None</td>
            <td class="Va-t P-10px">Fallbacks, tweaks, LTR/RTL support, etc.</td>
        </tr>
    </tbody>
</table>

## Do I need to specify a namespace? And if yes, what should I use?

Also, note that all atomic rules use an ID so we can easily overwrite a style from a component rule like the one below.
A atomic class can overwrite any rule based on class selectors - regardless of how many are being used.

```css
.hero-module .button {
    font-size: 1.6em;
    font-weight: bold;
}
...
#atomic .Fw-n {
    font-weight: normal;
}
```

```html
<div class="hero-module">
    <button class="button Fw-n">...</button>
</div>
```


## What are Atomic CSS's benefits?

By dramatically reducing redundancy, Atomic CSS reduces bloat.
It does "self-cleaning".
reduce bloat help re-use stuff
presentational classes can be use anywhere
less redundancy

Maximum re-use of rules because they are content agnostic.
Single responsibility rules are easier to manage (add/update/delete). Deleting a module is enough to delete all the styles associated with it.

```css
.headline,
.cta-button,
.icon-large,
.title,
.intro {
    font-size: 1.8em;
}
```

versus:

```css
.Fz-1\.8em {
    font-size: 1.8em;
}
```

Atomic CSS reduces the size of style sheets because it produces less of everything.

<table cellspacing="0" class="W-100% Ta-c">
    <caption class="hidden">Table comparing yahoo.com against other web sites</caption>
    <thead>
      <tr>
          <th scope="col" class="P-10px"></th>
          <th scope="col" class="P-10px Whs-nw ">rules</th>
          <th scope="col" class="P-10px">selectors</th>
          <th scope="col" class="P-10px">declarations</th>
          <th scope="col" class="P-10px">properties</th>
          <th scope="col" class="P-10px">font-size</th>
          <th scope="col" class="P-10px"><abbr title="Kilobyte">KB</abbr></th>
      </tr>
    </thead>
    <tbody>
        <tr class="Bdt-1">
            <th scope="row" class="Ta-start P-10px">twitter.com</th>
            <td class="P-10px">6,372 [\[2\]](#footnote)<a id="footnote-2" class="D-ib"></a></td>
            <td class="P-10px">9,104</td>
            <td class="P-10px">15,000</td>
            <td class="P-10px">135</td>
            <td class="P-10px">755</td>
            <td class="P-10px">585</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Ta-start P-10px">facebook.com</th>
            <td class="P-10px">3,316</td>
            <td class="P-10px">4,018</td>
            <td class="P-10px">7,947</td>
            <td class="P-10px">103</td>
            <td class="P-10px">157</td>
            <td class="P-10px">281</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Ta-start P-10px">medium.com</th>
            <td class="P-10px">3,090</td>
            <td class="P-10px">4,030</td>
            <td class="P-10px">7,321</td>
            <td class="P-10px">150</td>
            <td class="P-10px">432</td>
            <td class="P-10px">282</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Ta-start P-10px">youtube.com</th>
            <td class="P-10px">3,530</td>
            <td class="P-10px">4,684</td>
            <td class="P-10px">9,005</td>
            <td class="P-10px">136</td>
            <td class="P-10px">336</td>
            <td class="P-10px">352</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Ta-start P-10px">tumblr.com</th>
            <td class="P-10px">5,647 [\[3\]](#footnote)<a id="footnote-3" class="D-ib"></a></td>
            <td class="P-10px">7,616</td>
            <td class="P-10px">18,100</td>
            <td class="P-10px">253</td>
            <td class="P-10px">499</td>
            <td class="P-10px">733</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Ta-start P-10px">yahoo.com</th>
            <td class="P-10px Fw-b">1,891</td>
            <td class="P-10px Fw-b">2,311</td>
            <td class="P-10px Fw-b">4,579</td>
            <td class="P-10px Fw-b">124</td>
            <td class="P-10px Fw-b">71</td>
            <td class="P-10px Fw-b">189</td>
        </tr>
    </tbody>
    <tfoot>
      <tr>
          <th scope="col" class="P-10px"></th>
          <th scope="col" class="P-10px Whs-nw ">rules</th>
          <th scope="col" class="P-10px">selectors</th>
          <th scope="col" class="P-10px">declarations</th>
          <th scope="col" class="P-10px">properties</th>
          <th scope="col" class="P-10px">font-size</th>
          <th scope="col" class="P-10px"><abbr title="Kilobyte">KB</abbr></th>
      </tr>
    </tfoot>
</table>

<small>Source: <a href="http://cssstats.com">cssstats.com</a></small>

The table above uses yahoo.com for reference as this site uses an early version of Atomic CSS.

## I was always told to use semantic classes and not use declarative CSS classes. Isn't Atomic CSS using a bad practice?

classes are for developers, they don’t make a document more “semantic” (microformats is a different story though).
The main goal here is to reduce bloat, so to better achieve this we must ignore content and context as much as possible.

Look at this snippet for example (a carousel without a `.carousel`). It creates a working carousel.
We put things together in the markup, there is no need for “carousel” rules in the style sheet.
If we wanted to show only 2 items per view, we would simply replace W-20% with W-50% - that’s it.

```html
<div data-plugin="carousel">
    <div class="Ov-h Pos-r">
        <ul class="Row Reset Wh-snw">
            <li class="D-ib W-20%">...</li><!--
         --><li class="D-ib W-20%">...</li><!--
         --><li class="D-ib W-20%">...</li><!--
         --><li class="D-ib W-20%">...</li><!--
            ...
        </ul>
    </div>
</div>
```

## How do you make changes across the board?

Use Atomic classes where it makes sense; for example:

```js
return (
    <div key={'id-' + recipe.id} className={displayclassDefinitions}>
        <h3 className="M-0 Mt-10px P-10px">{recipe.name}</h3>
        <dl className="M-0 P-10px Pt-0 Pend-50px--sm Ff-m">{classDefinitions}</dl>
    </div>
);
```

## How can one remember these cryptic class names?

The syntax comes from <a href="http://emmet.io">Emmet</a>, which is a plugin for many IDEs. It allows you to type a few characters and get property/value pairs.
Atomic classes are for the most part simple abbreviations.

Also, note that we do not use “left” and “right” but instead “start” and “end”. So we can easily output a RTL style sheet using a pre-processor.

## Aren't you bloating the markup?

Is Atomic CSS moving bloat from the style sheet to the markup?

And this represents the average number of characters per class attribute on the page.
Note that Facebook appears to uglify some classes.

<table cellspacing="0" class="Ta-c">
    <caption class="hidden">Number of characters per class attributes between web sites</caption>
    <thead>
      <tr>
          <th scope="col" class="P-10px"></th>
          <th scope="col" class="P-10px Whs-nw ">Number of characters per `@class`</th>
      </tr>
    </thead>
    <tbody>
        <tr class="Bdt-1">
            <th scope="row" class="Ta-start P-10px">twitter.com</th>
            <td class="P-10px">28</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Ta-start P-10px">facebook.com</th>
            <td class="P-10px">17 [\[4\]](#footnote)<a id="footnote-4" class="D-ib"></a></td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Ta-start P-10px">usatoday.com</th>
            <td class="Va-t P-10px">38</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Ta-start Va-t P-10px">theguardian.com</th>
            <td class="P-10px">36</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Ta-start P-10px">yahoo.com</th>
            <td class="P-10px Fw-b">22</td>
        </tr>
    </tbody>
</table>

### Gzip loves Atomic CSS

If we put Gzip into the picture, then things look even better. That’s because a lot of repetitions means a better compression ratio.
From a few tests we ran, it’s about 35% for semantic classes versus 48% for Atomic classes.

## How can you distribute presentation changes without asking everyone to change their markup?

<hr class="Mt-50px">

<ul id="footnote" class="ul-list">
    <li>[\[1\]](#footnote-1) Specificity of Atomic rules can be increased via namespace. You'd use a type selector for `0.0.1.1`, a class for `0.0.2.0`, and an id for `0.1.1.0`.</li>
    <li>[\[2\]](#footnote-2)[\[3\]](#footnote-3) Maximum number of rules for IE9: 4,095 (65,534 for IE10+).</li>
    <li>[\[4\]](#footnote-4) Thanks to some uglification.</li>
</ul>
