# Web Audio Issues

It's a good thing browsers don't allow sites to autoplay audio or videos on load.

Before a site can play audio, a user needs to have interacted with it for example, [clicking on a play button](http://jagreehal.github.io/web-audio-issues/play-audio).

However, if in between clicking the button and playing audio, an async operation occurs then the behaviour of browsers differ.

For example, [clicking on the 'play' button after a promise is resolved](http://jagreehal.github.io/web-audio-issues/play-audio-after-promise) in Chrome plays the audio, whereas, in Safari, you'll see an error such as:

> The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.

The workaround is to load the audio then have the user interact with the site. Now you can run as many promises as you want, the browser won't error.

You can try it for yourself here by [loading the audio before clicking the play button](http://jagreehal.github.io/web-audio-issues/play-audio-after-promise-workaround).
