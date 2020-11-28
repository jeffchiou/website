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
<div class="flex justify-between items-center">

[{{post.data.title}}]({{site.baseUrl}}{{post.url}})

  <div class="text-sm text-gray-600 flex flex-col items-end">
  <div>Posted {{post.data.datePosted | formatDate}}</div>
  <div>Modified {{post.date.toUTCString() | formatDate}}</div>
  </div>
</div>
{% endfor %}

{% import "paginator.njk" as paginator %}
{{ paginator.paginate(pagination) }}

<div id="auxiliary-content" class="hidden">
This is where footnotes and extra context would go.
</div>