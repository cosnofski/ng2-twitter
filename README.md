# ng2-tweet

## Angular2 Tweet Component

Easily embed Twitter widgets into your Angular2 application! No more having to kludge together a Twitter script loader, or manage embed state on visibility change.

ng2-tweet is sourced from arusahni's ngTweet app (https://github.com/arusahni/ngtweet).

## Installation

`npm install ng2-tweet --save`

## Usage

Import in `app.module.ts`

```javascript
import { Ng2TweetModule } from 'ng2-tweet/lib/index';

imports: [
  Ng2TweetModule
],
```

Add to your desired component, in this case `home.component.ts` (Don't forget to add it to your constructor)

```javascript
import { Ng2TweetService } from 'ng2-tweet/lib/index';

constructor(private ng2TweetService: Ng2TweetService) {

}
```

Finally, place in your template, in this case `home.component.html`

```javascript
<ng2-tweet tweetId="824004497055907844"></ng2-tweet>
```

The `tweetId` is the number at the end of the tweet url that you want to embed, for example,

https://twitter.com/tommygaessler/status/824004497055907844

And voila! Happy Tweeting!
