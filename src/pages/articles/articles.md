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

{% import "post-lister.njk" as PostLister %}
{{ PostLister.listPosts(posts) }}

{% import "paginator.njk" as paginator %}
{{ paginator.paginate(pagination) }}

<div id="auxiliary-content" class="hidden">
This is where footnotes and extra context would go.
</div>