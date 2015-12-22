# date-unit-ms [![Support this project][donate-now]][paypal-donations]

Millisecond conversions for common date units (seconds, minutes, hours etc).

## Installation

```sh
$ npm i --save date-unit-ms
```

## Example

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

## Documentation

The library exports an object containing the number of milliseconds for the following date units:

 - `ms`
 - `second`
 - `minute`
 - `hour`
 - `day`
 - `week`

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md