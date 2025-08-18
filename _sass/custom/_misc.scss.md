/* Smooth in-page anchor scroll */
html { scroll-behavior: smooth; }

/* Keep anchored headings visible below fixed header */
:target { scroll-margin-top: calc(var(--mm-header-height, 60px) + 16px); }
