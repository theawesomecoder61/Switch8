Switch8
=======

Beautiful switches that look like iOS 7 and iOS 8 switches.

### Version 2.7 (current version)
- the js file contains what's new for that version
- makes your `<input>` a checkbox if it's not one already
- new option! htmlAttr (boolean) will allow you to use HTML attributes to customize your Switch8

### Version 3.0 (coming out 11/10/2014 or earlier)
- rewritten JS file, now with a real `var awesomeness = new Switch8("#elem")` instead of the existing fake one
- HTML attributes were nice while they lasted (they're going away, so don't worry you can still get version 2.7)
- a kinder message (in the console) when an element already has *.switch8*

## What do they look like?
| Switch8        | iOS 8           |
| ------------- |:-------------:|
| ![switch8](http://i.imgur.com/8WNMXgG.png) | ![ios8](http://i.imgur.com/OA7HW81.jpg) |

They are not the same picture. There is a difference between the two pictures. I wanted to make that extremely clear.

## Getting started
Getting started is super easy: pick a method that you like and copy the code!

### Method 1: CDN (we host it for you)

```
<link rel="stylesheet" href="http://theawesomecoder61.github.io/Switch8/switch8.css">
<script src="http://theawesomecoder61.github.io/Switch8/switch8.js"></script>
```

**Note!** The links above are hosted on this website, so sometimes they may be slow.

### Method 2: Locally (it's on your computer or website)

```
<link rel="stylesheet" href="path/to/switch8.css">
<script src="path/to/switch8.js"></script>
```

Obviously, replace *path/to/* with the path to the files. Rember *../** allows you to go back a folder.

## Demos
Check out the [official pen](http://codepen.io/theawesomecoder61/pen/ueAgK) for the demos.

## Options

### Basic 
#### elem - string
Defines the element

#### htmlAttr - boolean
If it's true, you can use HTML attributes to customize the switch

#### checked - boolean
Sets the switch's state

#### disabled - boolean
Prevents user from toggling the switch

### HTML customizations (going away in version 3.0)

#### data-checkedColor="" - string (hex, rgba)

Changes the color of the checked state

#### data-uncheckedColor="" - string (hex, rgba)
Changes the color of the unchecked state

### Javascript customizations

#### checkedColor - string (hex, rgba)
Changes the color of the checked state

#### uncheckedColor - string (hex, rgba)
Changes the color of the unchecked state

## Credits
Based off of [this article](http://wd.dizaina.net/en/experiments/ios7-style-switch/).

## Copyright stuff
iOS is a registered trademark of Apple Inc. All rights reserved. Switch8 or theawesomecoder61 are not affiliated with iOS or Apple Inc.
