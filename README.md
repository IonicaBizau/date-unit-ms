
# date-unit-ms

 [![Patreon](https://img.shields.io/badge/Support%20me%20on-Patreon-%23e6461a.svg)][patreon] [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/date-unit-ms.svg)](https://www.npmjs.com/package/date-unit-ms) [![Downloads](https://img.shields.io/npm/dt/date-unit-ms.svg)](https://www.npmjs.com/package/date-unit-ms) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Millisecond conversions for common date units (seconds, minutes, hours etc).

## :cloud: Installation

```sh
$ npm i --save date-unit-ms
```


## :clipboard: Example



```js
const dateUnitMs = require("date-unit-ms");

console.log(dateUnitMs.ms);
// => 1

console.log(dateUnitMs.second);
// => 1000

console.log(dateUnitMs.minute);
// => 60000

console.log(dateUnitMs.hour);
// => 360000

console.log(dateUnitMs.day);
// => 86400000

console.log(dateUnitMs.week);
// => 604800000
```

## :memo: Documentation


### exports




The library exports an object containing the number of milliseconds for the following date units:


 - `ms`
 - `second`
 - `minute`
 - `hour`
 - `day`
 - `week`


## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :moneybag: Donations

Another way to support the development of my open-source modules is
to [set up a recurring donation, via Patreon][patreon]. :rocket:

[PayPal donations][paypal-donations] are appreciated too! Each dollar helps.

Thanks! :heart:

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`daty`](https://github.com/IonicaBizau/daty#readme)—A tiny library to manage date objects.
 - [`diff-dates`](https://github.com/IonicaBizau/diff-dates#readme)—Make date differences.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[patreon]: https://www.patreon.com/ionicabizau
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
