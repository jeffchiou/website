---
title: Articles
hideTitle: True
permalink: "/articles/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
pagination:
  data: collections.article
  size: 10 
  alias: posts
---

# Articles

{% for post in posts | reverse %}
[{{post.data.title}}]({{site.baseUrl}}{{post.url}})
{% endfor %}

{% import "paginator.njk" as paginator %}
{{ paginator.paginate(pagination) }}

<div id="auxiliary-content" class="hidden">
This is where footnotes and extra context would go.
</div>