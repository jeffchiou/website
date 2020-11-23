---
title: Home
hideTitle: True
permalink: "{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
pagination:
  data: collections.blog
  size: 10
  alias: posts
---
# Hi!
I'm Jeff Chiou, a generalist with interests in artificial intelligence, neuroscience, and philosophy.


#### <span class="xl:hidden">With a wider window, you'd be seeing double!</span>
#### <span class="hidden xl:inline">Yes, you're seeing double!</span>
I use synchronization to enable a better reading experience on wide screens. On long webpages, the columns are synchronized one page apart from each other. You can learn more about [CoordiScroll](https://jeffchiou.github.io/coordiscroll/), the synchronization tool I wrote, [here](https://github.com/jeffchiou/coordiscroll/).

I separate my writing into two categories: articles and blog posts. Articles are considered constant works in progress and are more researched, deeply considered, and reflective of my true thoughts. Blog posts are typically rougher and shorter, encompassing notes, tutorials, and random ideas.

## Articles

{% for article in collections.article | reverse %}
[{{article.data.title}}]({{site.baseUrl}}{{article.url}})
{% endfor %}

## Blog Posts

{% for post in posts | reverse %}
[{{post.data.title}}]({{site.baseUrl}}{{post.url}})
{% endfor %}

{% import "paginator.njk" as paginator %}
{{ paginator.paginate(pagination) }}

<div id="auxiliary-content" class="hidden">

## The 3rd Column

This is a space for footnotes and extra content. 

For long articles it may be used as a 3rd reading column.

</div>