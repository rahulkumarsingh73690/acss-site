## Features

## TL;DR: the style sheet of this web site is less than 4KB

## Atomic CSS is not opinionated

Atomic CSS does not contain UI components nor a grid system. It is a solution that allows you to to create **your own UI** while preventing bloat.

## Atomic CSS has no footprint

Atomic CSS's "footprint" is limited to what a project uses - meaning there is no "entry cost". Simply installing [Atomizer](atomizer.html) in your project does not add any bytes to your pages.

## Atomic CSS is Gzip-friendly

Atomic CSS creates more redundancy in the markup than "semantic" classes; and more repetition means better compression ratio. From a few tests we ran, it’s about 35% for semantic classes versus 48% for Atomic classes.

## Atomic CSS is libraries best-friend

Atomic CSS is the perfect solution for common template and component libraries such as:

<div class="SpaceBetween">
    <img src="//l.yimg.com/os/acss/images/react.0db208c6.svg" alt="React" width="100" />
    <img src="//l.yimg.com/os/acss/images/ember.d3987566.svg" alt="Ember" width="100" />
    <img src="//l.yimg.com/os/acss/images/handlebars.462656ed.svg" alt="Handlebars" width="100" />
    <img src="//l.yimg.com/os/acss/images/dust.7a19cae5.svg" alt="Dust" width="100" />
</div>

## Colors

<div class="Row">
    <div class="Fl(start) W(60%) Fl(n)--xs W(a)--xs">
        Colors are set using hexadecimal values. Alpha transparency is created by appending the opacity value to the `hex` color.
    </div>
    <div class="Fl(start) W(60%) Cl(b) Fl(n)--xs W(a)--xs">
<pre><code>&lt;div class=" Bgc(#000.5) C(#fff) P(20px)">
      Lorem ipsum
&lt;/div>
</code></pre>
    </div>
    <div class="Fl(end) W(30%) My(1em) Fl(n)--xs W(a)--xs">
        <div class="Bgc(#000.5) C(#fff) P(20px)">
            Lorem ipsum
        </div>
    </div>
</div>

## Variables

<div class="Row">
    <div class="Fl(start) W(60%) Fl(n)--xs W(a)--xs">
        <p>&quot;Variables&quot; are usefull for theming and the like but they can also be used to share a common value across properties.</p>
        <p>In this example, `$brandColor` is responsible for setting the text color, the background color, and the border color while `$columnWidth` dictates the width of the 1st box and the left offset of its sibling.</p>
    </div>
    <div class="Fl(start) W(60%) Cl(b) Fl(n)--xs W(a)--xs">
<pre><code>// config object
'custom': {
    '$brandColor': '#0280ae',
    '$columnWidth': '20px'
}
</code></pre>

<pre><code>&lt;div class="Pos(a) Bgc($brandColor) W($columnWidth) H(100px)">&lt;/div>
&lt;div class="C($brandColor) BdB Bdc($brandColor) Mstart($columnWidth) P(10px)">
     Lorem ipsum
&lt;/div>
</code></pre>
    </div>
    <div class="Fl(end) W(30%) My(1em) Fl(n)--xs W(a)--xs">
        <div class="Pos(a) Bgc($brandColor) W($columnWidth) H(100px)"></div>
        <div class="C($brandColor) BdB Bdc($brandColor) Mstart($columnWidth) P(10px)">
            Lorem ipsum
        </div>
    </div>
</div>

## Contextual selectors

<div class="Row">
    <div class="Fl(start) W(60%) Fl(n)--xs W(a)--xs">
        <p>Atomic syntax allows to style elements depending on their ancestors. The same way you'd create styles based on descendant or child combinators.</p>
        <p>In this example, the same 2 boxes (same markup) are styled differently depending on which element they are nested into. They show side by side unless they are nested in an element with the class `foo` applied to it.</p>
    </div>
    <div class="Fl(start) W(60%) Cl(b) Fl(n)--xs W(a)--xs">
<pre><code>&lt;div>
   &lt;div class="Bgc(#080) H(100px) IbBox W(50%) foo_W(100%)">&lt;/div>&lt;!--
-->&lt;div class="Bgc(#f70) H(100px) IbBox W(50%) foo_W(100%)">&lt;/div>
&lt;/div>
&lt;hr>
&lt;div class="foo">
   &lt;div class="Bgc(#080) H(100px) IbBox W(50%) foo_W(100%)">&lt;/div>&lt;!--
-->&lt;div class="Bgc(#f70) H(100px) IbBox W(50%) foo_W(100%)">&lt;/div>
&lt;/div>
</code></pre>
    </div>
    <div class="Fl(end) W(30%) My(1em) Fl(n)--xs W(a)--xs">
        <div>
            <div class="Bgc(#080) H(100px) IbBox W(50%) foo_W(100%)"></div><!--
         --><div class="Bgc(#f70) H(100px) IbBox W(50%) foo_W(100%)"></div>
        </div>
        <hr>
        <div class="foo">
            <div class="Bgc(#080) H(100px) IbBox W(50%) foo_W(100%)"></div><!--
         --><div class="Bgc(#f70) H(100px) IbBox W(50%) foo_W(100%)"></div>
        </div>
    </div>
</div>

## Pseudo-classes

<div class="Row">
    <div class="Fl(start) W(60%) Fl(n)--xs W(a)--xs">
        <p>Create styles that rely on pseudo-classes.</p>
        <p>In this example, the foreground and background color change when users hover over the box.</p>
    </div>
    <div class="Fl(start) W(60%) Cl(b) Fl(n)--xs W(a)--xs">
<pre><code>&lt;div class="Bd Bgc($brandColor):h C(#fff):h P(20px)">
    Lorem ipsum
&lt;/div>
</code></pre>
    </div>
    <div class="Fl(end) W(30%) My(1em) Fl(n)--xs W(a)--xs">
        <div class="Bd Bgc($brandColor):h C(#fff):h P(20px)">
            Lorem ipsum
        </div>
    </div>
    <p class="Cl(b) W(60%) Fl(n)--xs W(a)--xs">You can also combine descendant selectors with pseudo-classes. In this example, we reveal the nested box when a user hovers over **its parent**:</p>
        <div class="Fl(start) W(60%) Cl(b) Fl(n)--xs W(a)--xs">
<pre><code>&lt;div class="foo Bd Ta(c)">
    &lt;p class="Op(0) foo:h>Op(1)">Lorem ipsum&lt;/p>
&lt;/div></code></pre>
        </div>
        <div class="Fl(end) W(30%) My(1em) Fl(n)--xs W(a)--xs">
            <div class="foo Bd Ta(c)">
                <p class="Op(0) foo:h>Op(1)">Lorem ipsum</p>
            </div>
        </div>
        <p class="Cl(b) W(60%) Fl(n)--xs W(a)--xs Bxz(bb) noteBox info">Remember to never reveal content via mouseover alone.</p>
</div>

## Grids

<div class="Row">
    <div class="Fl(start) W(60%) Fl(n)--xs W(a)--xs">
        <p>What do you fancy? Floats? Inline-block? Flexbox? We have it all, and you can use any width you want (fraction, percentage, em, rem, px, whatever).</p>
    </div>

    <div class="Fl(start) W(60%) Cl(b) Fl(n)--xs W(a)--xs">
        <pre><code>&lt;div class="Bgc(#000.5) C(#fff) P(20px)">&lt;/div></code></pre>
    </div>

    <div class="Fl(end) W(30%) My(1em) Fl(n)--xs W(a)--xs">
        <div class="Fl(start) W(1/2) Bgc(#080) H(100px)"></div>
        <div class="Fl(start) W(1/2) Bgc(#f70) H(100px)"></div>
        <div class="D(ib) W(50%) Bgc(#f70) H(100px)"></div><!--
     --><div class="D(ib) W(50%) Bgc(#080) H(100px)"></div>
    </div>

</div>
