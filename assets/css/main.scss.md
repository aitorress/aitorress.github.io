---
# Only the main Sass file needs front matter
---

@import "minimal-mistakes/skins/{{ site.minimal_mistakes_skin | default: 'default' }}";
@import "minimal-mistakes";

/* Load any custom partials placed in _sass/custom/ */
@import "custom/toc";
@import "custom/misc";
