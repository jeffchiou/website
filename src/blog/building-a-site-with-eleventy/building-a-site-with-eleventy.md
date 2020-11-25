---
title: Building a Site with Eleventy
tags: blog
datePosted: "2012-11-22"
---

[toc]

I recently rebuilt my website with [Eleventy](https://11ty.dev). While there's a lot of blog posts about Eleventy, I'll try to provide less common tips tricks, and resources.



## Markdown-it plugins

I wanted to install multiple markdown-it plugins, but couldn't find good instructions on how to do it. When a simple Google search doesn't work, the next best thing is to read some source code. I looked in the markdown-it documentation but it wasn't obvious, so I looked through a few starter projects on [https://www.11ty.dev/docs/starter/](https://www.11ty.dev/docs/starter/) until I found one that used multiple markdown-it plugins.

I wasn't sure whether you use a list of plugins, repeated function calls, or something else. It turns out that you just write multiple `.use()` calls like this:

> `eleventy.js`
>
> ```javascript
> module.exports = function (eleventyConfig) {
>   ...
>   let markdownIt = require("markdown-it");
>   let markdownLibrary = markdownIt({
>     html: true,
>     breaks: true,
>     linkify: true,
>     typographer: true,
>   })
>   markdownLibrary.use(require("markdown-it-footnote"));
>   markdownLibrary.use(require("@iktakahiro/markdown-it-katex"));
>   markdownLibrary.use(require("markdown-it-anchor"));
> ```
>
>

For brevity, I haven't listed all the plugins installed. I do want to note that if you want KaTeX support, you shouldn't use markdown-it-katex. There's a security vulnerability and it hasn't been updated in a long time. You can use [@iktakahiro/markdown-it-katex](https://www.npmjs.com/package/@iktakahiro/markdown-it-katex) as shown above.

[Mermaid](https://mermaid-js.github.io/mermaid/#/) is a nice library for diagrams (just keep in mind that it the minified JS is nearing 1 megabyte). I tried markdown-it-mermaid, but it didn't work, so I ended up using [markdown-it-textual-uml](https://www.npmjs.com/package/markdown-it-textual-uml). Since I was minifying my HTML (as per the [docs](https://www.11ty.dev/docs/config/#transforms-example-minify-html-output)), it broke the mermaid rendering, but removing collapseWhitespace fixed it.





## Project Layout

First, I wanted my project to live within a `src` folder. I added this to `eleventy.js`

```javascript
module.exports = function (eleventyConfig) {
  ...
  return {
    dir: {
      input: 'src',
    },
  }
}
```

I wanted my main web pages inside a `pages` folder, including the root `index.md`. To do this I added a `pages.11tydata.js` file inside the pages folder:

```javascript
module.exports = {
  layout: "layout.njk",
  tags: "pages",
  permalink: "{{ page.fileSlug }}/index.html"
}
```





## NPM

You can install all your npm packages as dev dependencies since they are only used in your build step.



### Useful scripts

My scripts look like this:

> `package.json`
>
> ```json
> "scripts": {
>     "clean": "rm -rf _site",
>     "dev:postcss": "postcss src/assets/styles/*.css --dir _site/assets/styles/ --watch",
>     "dev:11ty": "cross-env ELEVENTY_ENV=development npx @11ty/eleventy --serve --watch",
>     "dev": "npm-run-all clean --parallel dev:*",
>     "build:postcss": "postcss src/assets/styles/*.css --dir _site/assets/styles/",
>     "build:11ty": "cross-env ELEVENTY_ENV=production npx @11ty/eleventy",
>     "build": "npm-run-all clean --parallel build:*"
> },
> ```

Since I'm using Windows I installed the [cross-env](https://www.npmjs.com/package/cross-env) npm package. In addition, the `rm` command has to be installed. To get it and other useful utilities, I installed [GNU on Windows](https://github.com/bmatzelle/gow/wiki), using [Scoop](https://scoop.sh/)

I use [npm-run-all](https://www.npmjs.com/package/npm-run-all) instead of the `&` operator since the `&` operator's intended parallel execution doesn't work on Windows.

## Installing Tailwind CSS

As this is not a Tailwind tutorial, I'll keep this part light. Tailwind 2.0 came out after I originally wrote these instructions, so proceed with caution. I followed the directions in this video: https://tailwindcss.com/course/setting-up-tailwind-and-postcss with some modifications to get autoprefixer installed:

```shell
npm install --save-dev tailwindcss postcss postcss-cli autoprefixer
npx tailwind init
touch postcss.config.js
```

If you're using VS Code, [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) is useful.

`npx tailwind init ` creates a tailwind.config.js file

You should also create a `postcss.config.js`. Looking around other projects, I added the plugin postcss-100vh-fix to it:

> `postcss.config.js`
>
> ```javascript
> module.exports = {
>   plugins: [
>     require('tailwindcss'),
>     require('postcss-100vh-fix'),
>     require('autoprefixer'),
>   ]
> }
> ```

I made a folder `styles` where I put a new `index.css` . Then I added postcss commands to my scripts in `package.json` (see [above](#useful-scripts))



To prevent your CSS file from becoming too large in production, make sure to enable purging. For 11ty, your purge config in `tailwind.config.js` might be something like this:

```javascript
module.exports = {
  ...
  purge: {
    enabled: true,
    content: [
      './src/**/*.js',
      './src/**/*.11ty.js',
      './src/**/*.html',
      './src/**/*.md',
      './src/**/*.njk',
    ],
  },
  ...
```





## URLs and Pages

For absolute links, I created a `_data` folder with a `site.js` file containing:

```javascript
module.exports = {
  baseUrl: process.env.ELEVENTY_ENV === 'development' ? 'http://localhost:8080' : 'https://www.jeffchiou.com',
  title: "Jeff Chiou",
};
```

This interacts with the `package.json` scripts to provide the correct URL. This way I can use `{{ site.baseUrl }}` in my templates and URLs.



### Pagination

Things got more complicated with `index.md` because I was using pagination. At first I used `permalink: "index.html"`, but I started getting the error `Output conflict: multiple input files are writing to _site/index/index.html. Use distinct permalink values to resolve this conflict.`

To resolve this,  I read the documentation some more and found that you could add, to `index.md`'s frontmatter,

```yaml
permalink: "{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}/{% endif %}index.html
```

Here I ran into another problem. I was using Nunjucks syntax in my markdown, but it wasn't working correctly. For example `{{1+1}}` was returning 1. This is because Eleventy uses Liquid syntax by default.  To fix this I extended my `eleventy.js` file:

```javascript
  ...
  return {
    dir: {
      input: 'src',
    },
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  }
}
```



I wanted to make a nice interface for navigating pages, but it was somewhat difficult. I found this [issue](https://github.com/11ty/eleventy/issues/455) and commented on it with my solution. Here it is:

{% raw %}
```jinja2
{%- for pageUrl in pagination.hrefs %}
  {%- set isCurrentPage = pagination.pageNumber == loop.index0 -%}
  {%- if isCurrentPage %}<strong>{%- endif %}

  {%- if isCurrentPage
  or loop.first
  or loop.last
  or pagination.pageNumber in [loop.index0-1, loop.index0+1] -%}

    {%- if loop.last and pagination.pageNumber < (loop.length - 3) -%}
      ...
    {%- endif -%}

    <a href="{{ pageUrl }}">{{ loop.index }}</a>

    {%- if loop.first and pagination.pageNumber > 2 -%}
      ...
    {%- endif -%}

  {%- endif -%}

  {%- if isCurrentPage %}</strong>{%- endif %}
{%- endfor %}
```
{% endraw %}

I don't have many posts yet so the navigation window is only 3 pages wide. To make it 5 pages wide, change

- `[loop.index0-1, loop.index0+1]` to `[loop.index0-2, loop.index0-1, loop.index0+1, loop.index0+2]`
- `pagination.pageNumber < (loop.length - 3)` to `pagination.pageNumber < (loop.length - 4)`
- `pagination.pageNumber > 2` to `pagination.pageNumber > 3`

To use pagination on multiple pages, I created a nunjucks template macro where I stored the code above.

{% raw %}
```jinja2
{% macro paginate(pagination) %}
...
{% endmacro %}
```
{% endraw %}

Then I import it like so

{% raw %}
```jinja2
{% import "paginator.njk" as paginator %}
{{ paginator.paginate(pagination) }}
```
{% endraw %}



Hopefully this page of tips, tricks, and resources was useful!