# Responsive Web Design

<p>You can set your **own** breakpoints in the config object and then use Atomic classes scoped to media queries tied to those breakpoints.</p>

<p class="noteBox info">Classes bound to media queries contain 2 dashes (`--`) followed by the breakpoint &quot;name&quot; (i.e. `sm`).</p>

## Setting up Breakpoints

<p>Pick the names and media queries you want:</p>

```json
'breakPoints': {
    'sm': '@media screen and (min-width: 380px)',
    'md': '@media screen and (min-width: 600px)',
    'lg': '@media screen and (min-width: 900px)'
}
```

<h3>Atomic classes and Breakpoints</h3>

<p>Appending `--<breakpoint name>` to **any** Atomic class will associate that styling to the breakpoint. For example, `D-b--sm` and `C-#0b0--md` will create rules in the related media queries:</p>

```css
@media screen and (min-width:380px) {
    #atomic .D-b--sm {
        display: block;
    }
}

@media screen and (min-width:680px) {
    #atomic .C-\#0b0--md {
        color: #0b0;
    }
}
```

## Usage

<p>You may apply different styles to apply in the context of various breakpoints. For example:</p>

```html
   <div class="D-ib--sm W-50%--sm W-25%--lg P-20px Bgc-#CCC">1</div><!--
--><div class="D-ib--sm W-50%--sm W-25%--lg P-20px Bgc-#999">2</div><!--
--><div class="D-ib--sm W-50%--sm W-25%--lg P-20px Bgc-#777">3</div><!--
--><div class="D-ib--sm W-50%--sm W-25%--lg P-20px Bgc-#555">4</div>
```

<ul class="ul-list">
    <li>Below 380px, the boxes are displayed on top of each other (`div` are block-level elements)</li>
    <li>Above 380px, the boxes are displayed on 2 rows, 2 by 2 (`D-ib--sm` + `W-50%--sm`)</li>
    <li>Above 900px, the boxes are displayed side-by-side, on a single row (`D-ib--sm` + `W-25%--lg`)</li>
</ul>

<p class="noteBox info">The breakpoints for the Pen below have been chosen so you can see the changes within this page. <strong>Give it a try, resize your viewport!</strong></p>

<h3 class="penResult">Result</h3>

<p data-height="265" data-theme-id="12469" data-slug-hash="jExMYr" data-default-tab="result" data-user="thierry" class='codepen'>See the Pen <a href='http://codepen.io/thierry/pen/jExMYr/'>jExMYr</a> by Thierry (<a href='http://codepen.io/thierry'>@thierry</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
