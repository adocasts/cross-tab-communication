# Cross-Tab Communication with JavaScript

The following repository will be used in the Jagr 3-part series covering different ways to conduct cross-tab communication.

## Lesson 1 - LocalStorage

**Status:** Completed | [View on YouTube](https://www.youtube.com/watch?v=zvYDJe52aCw) | [View on Jagr](https://jagr.co/posts/how-to-do-cross-tab-communication-in-javascript-with-localstorage) [MDN Doc](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

First, we'll be going over cross-tab communication with LocalStorage.
This method is best if you need to support older browsers, it has support back to IE8.
It's also the only method that has decent mobile browser support.

## Lesson 2 - SharedWorker

**Status:** In-Progress | [MDN Doc](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker)

Second, we'll cover using a SharedWorker.
This method is similar to using a WebWorker, except the worker is sharable across browser contexts (windows, tabs, frames).
Using this approach is great if you're doing some heavy lifting because all the worker's code will be run in the background by the browser.
Meaning, it's not running on the same thread as our application.

## Lesson 3 - BroadcastChannel

**Status:** NA | [MDN Doc](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel)

Last, we'll cover using a BroadcastChannel. This is a native browser API to achieve exactly what we want.
The down side is there's no Safari support.
