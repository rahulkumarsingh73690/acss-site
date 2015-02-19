# Grid

<p class="Fz-20">Build your own grid system with Atomic.css.</p>

Atomic.css is not an opinionated framework, hence it does not come with a _out-of-the-box_ grid system. Instead, you can use any property you want to build things the way **you** want/choose/see fit (?).

## Widths

Either you are used to use a unit-base (fractions) system or prefer to use percentages &mdash; it's up to you!

### Units

`W-1/12`, `W-2/12`, `W-3/12`, `W-4/12`, `W-5/12`, `W-6/12`, `W-7/12`, etc.

How to create these classes via config.js?

```js
// pattern
'width': {
    fraction: {
        denominator: 12
    }
}
```

### Percentages

`W-25%`, `W-50%`

How to create these classes via config.js?

```js
// pattern
'width': {
    'custom': [{
        suffix: '25%',
        values: ['25%']
    }, {
        suffix: '50%',
        values: ['50%']
    }]
},
```
## Layouts

There are many ways to create columns... Your pick:

### `inline-block`

This styling has great [browser support] [1] and it is direction-friendly (i.e. `dir="rtl"`).

`D-ib`

How to create this class via config.js?

```js
// pattern
'display': {
    'ib': true
}
```

### `float`

`Fl-start`

How to create this class via config.js?

```js
// pattern
'float': {
    'start': true
}
```

### `table` and `table-cell`

`D-tb`, `D-tbc`

How to create these classes via config.js?

```js
// pattern
'display': {
    'tb': true,
    'tbc': true
}
```

### `flexbox`

How to create this class via config.js?

```js
// pattern
'display': {
    'f': true
}
```

## Responsive layout

You can leverage the flexibility of Atomic.css by setting your **own** breakpoints and sandbox styles within those breakpoints.

Following a "mobile first" approach, you'd use classes meant to be applied in any context and then add "modifier" classes to overwrite such styling. Let's consider this simple example:






How to create these classes via config.js?



[1]: http://google.com/ "Atomic.css provides a patch for oldIE"
