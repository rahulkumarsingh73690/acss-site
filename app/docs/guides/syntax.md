# Atomic classes

Atomic CSS classes ultimately increase the speed of development as they follow a consistent and easy to remember syntax. The inspiration comes from [Emmet](http://emmet.io/), a plugin for many popular text editors which greatly improves HTML & CSS workflow.

It might take you a short time to get familiar with these class names but as soon as you start using them you'll be at full speed in no time.

Make sure to check the [reference page](/reference) which lets you quickly search for properties, values, or class names.

## Syntax

<pre>
.[ancestor][:pseudo-class][_][>]<strong>Property</strong>-[neg]<strong>value_identifier</strong><em>[:pseudo-class][::pseudo-element][--breakpoint_identifier]</em>
</pre>

Where:

<dl class="dl-list">
    <dt>[ancestor]</dt>
    <dd>An optional *class* that is applied to an ancestor of the node.</dd>
    <dt>[:pseudo-class]</dt>
    <dd>optional suffix indicating that this class applies to a [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) only. List of abbreviations to use for pseudo-classes:
    <ul>
        <li>`:h` for `:hover`</li>
        <li>`:f` for `:focus`</li>
        <li>TODO: add others here</li>
    </ul>
    </dd>
    <dt>[\_]</dt>
    <dd>Optional underscore character (`_`) to create a contextual style based on the [descendant combinator](http://www.w3.org/wiki/CSS/Selectors/combinators/descendant).</dd>
    <dt>[&gt;]</dt>
    <dd>Optional right angle bracket character (`>`) to create a contextual style based on the [child combinator](http://www.w3.org/wiki/CSS/Selectors/combinators/child).</dd>
    <dt>Property-</dt>
    <dd>[capitalized](http://en.wikipedia.org/wiki/Capitalization) following [Emmet](http://docs.emmet.io/cheat-sheet/) syntax with no separator between words such as dashes or new capitals. For any occurrences of `left` and `right` keywords or its abbreviated form in [Emmet](http://docs.emmet.io/cheat-sheet/) `l` and `r`, the `start` and `end` keywords should be used respectively. e.g. `Mend`, `Bdstart`, etc.</dd>
    <dt>[neg]</dt>
    <dd>To denote a negative value, for example `M-neg10px`.</dd>
    <dt>value\_identifier</dt>
    <dd>Value identifier should be written in lowercase following [Emmet](http://docs.emmet.io/cheat-sheet/) syntax. For any occurrences of `left` and `right` keywords, `start` and `end` should be used respectively. **Values that are not present in Emmet** should be named using the rules below:
    <ul class="ul-list">
        <li>Value should be abbreviated with the first letter of the value.</li>
        <li>If two values share the same initial letter then the next value in alphabetical order is [abbreviated](http://en.wikipedia.org/wiki/Abbreviation), sometimes in [contracted](http://en.wikipedia.org/wiki/Contraction_%28grammar%29) form with no general rule for when it is in this form, it should just follow the same [Emmet CSS Syntax style guide](http://docs.emmet.io/css-abbreviations/).</li>
        <li>If **one value** is composed by two or more words (e.g. "inline-block") then the first letter of each word should be used with no separator between them (e.g. `inline-block` becomes `ib`, `space-between` becomes `sb`).</li>
        <li>If **two or more values** need to be specified, they should be separated by underscore (e.g. `start_t` for `start top` values in `background-position: left top` in a LTR context).</li>
        <li>Valid CSS **number values** should always be followed by its unit if any (e.g. `100%` and `100px`). These numbers can also be represented as keywords such as `top` and `bottom` if it makes sense in the context of the property.  Negative values should be prefixed with the word `neg` before the number as in `neg30px` for `-30px`. Fraction values should be represented with a forward-slash between the numbers as in `1/12` (the forward slash is escaped in CSS).</li>
        <li>Custom  values should use arbitrary keywords such as `.Bxs-heading` or `.Fz-xl`. These keywords are arbitrary and are defined by the consumer of atomic.css.</li>
        <li>The `inherit` value should always use the keyword `inh` as a special exception because it is available almost globally.</li>
    </ul>
    </dd>
    <dt>[:pseudo-class]</dt>
    <dd>optional suffix indicating that this class applies to a [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) only. This should be all lower-case with no abbreviations. Words should be separated by one dash, exactly like the original pseudo class (e.g. `Td-u:h`, `Td-u:only-child`).</dd>
    <dt>[::pseudo-element]</dt>
    <dd>optional suffix indicating that this class applies to [pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) only. This should be all lower-case with no abbreviations. Words should be separated by one dash, exactly like the original pseudo element (e.g. `Td-u::before`).</dd>
    <dt>[--breakpoint_identifier]</dt>
    <dd>optional property suffix that adds the breakpoint context to the rule. A breakpoint indicates that this rule will only take effect within a CSS media query breakpoint. Valid values are `sm` for small, `md` for medium and `lg` for large. The length values of each breakpoint are defined in the config object.</dd>
</dl>

### Examples:

<table class="Ta-start W-100%">
    <caption class="hidden">Atomic class Examples</caption>
    <thead>
        <tr>
            <th scope="col" class="P-10px">HTML classes</th>
            <th scope="col" class="P-10px">What it does</th>
        </tr>
    </thead>
    <tbody>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">D-n</th>
            <td class="Va-t P-10px">This is mapped to `display: none`</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">D-n!</th>
            <td class="Va-t P-10px">This is mapped to `display: none !important`</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Fz-s</th>
            <td class="Va-t P-10px">This is mapped to `font-size: small`</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Fz-18px</th>
            <td class="Va-t P-10px">This is mapped to `font-size: 18px`</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Td-u:h</th>
            <td class="Va-t P-10px">Underlines text on mouseover [\[1\]](#footnote)<a id="footnote-1" class="D-ib"></a></td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Td-u:dir(rtl)</th>
            <td class="Va-t P-10px">Underlines text within a RTL context</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Td-u::first-letter</th>
            <td class="Va-t P-10px">Underlines the first letter</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Td-u::first-line</th>
            <td class="Va-t P-10px">Underlines the first line</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Td-u::selection</th>
            <td class="Va-t P-10px">Underlines selected text</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Rot-neg90deg</th>
            <td class="Va-t P-10px">This is mapped to `transform: rotate(-90deg)`</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Bxs-n</th>
            <td class="Va-t P-10px">This is mapped to `box-shadow: none`</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Bxs-foo--lg</th>
            <td class="Va-t P-10px">Applies a custom box-shadow inside a "lg" breakpoint</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Bxs-foo:h--sm</th>
            <td class="Va-t P-10px">Same styling as above but on mouseover and inside a "sm" breakpoint [\[1\]](#footnote)<a id="footnote-1" class="D-ib"></a> inside a "lg" breakpoint</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Mend-0</th>
            <td class="Va-t P-10px">This is mapped to `margin-right: 0` in a LTR context [\[2\]](#footnote)<a id="footnote-3" class="D-ib"></a></td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Bgp-start_t</th>
            <td class="Va-t P-10px">This is mapped to `background-position: left top` in a LTR context [\[2\]](#footnote)<a id="footnote-2" class="D-ib"></a></td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Ta-start</th>
            <td class="Va-t P-10px">This is mapped to `text-align: left` in a LTR context [\[2\]](#footnote)<a id="footnote-2" class="D-ib"></a></td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Cl-start</th>
            <td class="Va-t P-10px">This is mapped to `clear: left` in a LTR context [\[2\]](#footnote)<a id="footnote-2" class="D-ib"></a></td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">Bdstartw-0</th>
            <td class="Va-t P-10px">This is mapped to `border-left-width: 0` in a LTR context [\[2\]](#footnote)<a id="footnote-2" class="D-ib"></a></td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">list_D-ib</th>
            <td class="Va-t P-10px">This element is styled with `display: inline-block` when it is a descendant of a node to which the class`list` is applied.</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">list>D-ib</th>
            <td class="Va-t P-10px">This element is styled with `display: inline-block` when it is a direct child of a node to which the class`list` is applied to.</td>
        </tr>
        <tr class="Bdt-1">
            <th scope="row" class="Va-t Whs-nw P-10px">box:h_D-n</th>
            <td class="Va-t P-10px">Hides the element when users hover over its ancestor with the class `.box`.</td>
        </tr>
    </tbody>
</table>

<p class="noteBox info">CSS class selectors contain proper escape character where needed (i.e. `.Td-u\:h`).</p>

<hr class="Mt-50px">

<ul id="footnote" class="ul-list">
    <li>[\[1\]](#footnote-1) classes containing the string `:h` are associated with both `:hover` and `:focus` pseudo-classes; meaning the styling will apply on mouseover <em>and on focus as well</em>.</li>
    <li>[\[2\]](#footnote-2) `start` is mapped to either "left" or "right" depending on the config file.</li>
</ul>