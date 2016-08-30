# Sticky header, smooth scroll and menu item highlighter

The plugin combains three specific components for single page front-end:
- sticky element after scroll
- smooth scroll
- menu item highlighter on scroll.

Every from these tasks  are independent. They can be used separate from each other on the page, together or in combination in two. Here you can see what they actually do together. You can choose which of the features suits to you.

Gif

## Demo

[Link](https://github.com/nadezhda-devlabs/jquery-stoocky-page)

## Start the demo locally

1. Clone the repo `git@gitlab.com:...` or [download](link)
2. Run `npm install`
3. Run `gulp`
4. Open `index.html` file in the browser and scroll
5. Smile `=)`

## Basic Usage

##### 1. HTML Structure

Add data attributes `data-item` to your menu items, with the name of the menu item.
Example: `data-item="about"`

```
<nav>
    <ul class="main-menu">
        <li><a href="javascript:;" data-item="home">Home</a></li>
        <li><a href="javascript:;" data-item="about">About</a></li>
        <li><a href="javascript:;" data-item="team">Team</a></li>
        <li><a href="javascript:;" data-item="pricing">Pricing</a></li>
        <li><a href="javascript:;" data-item="gallery">Gallery</a></li>
        <li><a href="javascript:;" data-item="blog">Blog</a></li>
        <li><a href="javascript:;" data-item="contacts">Contacts</a></li>
    </ul>
</nav>
```

Add `id` to every section, which will be linked.
```
<section id="about">
    <h1>About</h1>
    <p>Lorem ipsum dolor sit amet</p>
</section>
```

Now every menu item matches its section.

##### 2. CSS - Include the stylesheet

Element to be fixed

```
.header {
    position: absolute;
}
.header.header--fixed {
    position: fixed;
    top: 0;
}
```

##### 3. Include jQuery

Include the js-files which you can find in the assets folder.

```
<script src="path-to-your-file/jquery.min.js"></script>
```

##### 4. Include plugin - link

```
<script src="path-to-your-file/jquery.stoocky-page.min.js"></script>
```

##### 5. Initialize

At the end of your page you need to initialize ..... by running the following code. Note that all config values are optional and will default as specified below.

```
$('body').stoockyPage();
```

##### 6. Default settings configuration

```
var settings = {
    stickyElem   : {
        active            : true,
        elToFix           : 'header',
        classToFix        : 'header--fixed'
    },
    scrollToElem    : {
        active            : true,
        item              : '.main-menu > li > a',
        animDuration      : 1000,
    },
    itemHighlighter : {
        active            : true,
        item              : '.main-menu > li > a',
        lastItem          : '.main-menu > li:last-child > a',
        classToHighlight  : 'active'
    }
};
```

##### 7.Options


| Attribute                    | Type       | Default Value                   | Description                                                     |
| :--------------------------- | :--------- | :------------------------------ | :-------------------------------------------------------------- |
| **stickyElem:**              |            |                                 |                                                                 |
| - active                     | *boolean*  | true                            | Activate function  **stickyElem**.                              |
| - elToFix                    | *string*   | header                          | Show which element to be fixed.                                 |
| - classToFix                 | *string*   | header--fixed                   | The class, which is added to the element to make it fixed.      |
| **scrollToElem:**            |            |                                 |                                                                 |
| - active                     | *boolean*  | true                            | Activate function  **scrollToElem**.                            |
| - item                       | *string*   | .main-menu > li > a             | Menu item selector                                              |
| - animDuration               | *number*   | 1000                            | A string or number determining how long the animation will run. |
| **itemHighlighter:**         |            |                                 |                                                                 |
| - active                     | *boolean*  | true                            | Activate function  **itemHighlighter**.                         |
| - item                       | *string*   | .main-menu > li > a             | Menu item selector.                                             |
| - lastItem                   | *string*   | .main-menu > li:last-child > a  | Last menu item.                                                 |
| - classToHighlight           | *string*   | active                          | Highlight class to be added to the active item.                 |


If you want to change some of the default values you need to add it to the initilisation, like this:

```
$('body').stoockyPage({
    stickyElem   : {
        active            : true,
        elToFix           : 'header',
        classToFix        : 'header--fixed'
    },
    scrollToElem    : {
        active            : true,
        item              : '.top-menu > li > a',
        animDuration      : 2000,
    },
    itemHighlighter : {
        active            : false
    }
});
```

## FAQ

## Browser Support