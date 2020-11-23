---
title: Blog
hideTitle: True
permalink: "/blog/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
pagination:
  data: collections.blog
  size: 10 
  alias: posts
---

# Blog Posts

{% for post in posts | reverse %}
[{{post.data.title}}]({{site.baseUrl}}{{post.url}})
{% endfor %}

{% import "paginator.njk" as paginator %}
{{ paginator.paginate(pagination) }}

<div id="auxiliary-content" class="hidden">
See <a href="articles">articles</a> for more in-depth content.
</div>