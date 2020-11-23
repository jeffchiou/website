---
title: About
datePosted: 2019-09-12T11:23
published: true
---
[toc]
## Me

### Summary

I’m a generalist interested in many topics. I have an M.S. in Neurobiology from the University of Pittsburgh, and researched neural dynamics and sensory feedback through brain-computer interfaces.

My current top 5 interests are:

* AI and Machine Learning
* Philosophy
* Dynamical systems
* Bayesian modeling
* Rock climbing [^climbing]

Other ongoing interests include:

* 3D printing and modeling [^3dprint]
* Home automation [^homeauto]
* Web design and development
* Psychology, esp. cognitive, educational, neuro, moral, and abnormal psychology
* Foreign languages
  - Namely Chinese, Japanese, Russian, Spanish
* Technology (in general)
* Math (in general)

### Contact

Email: jeffchiou at gmail
Github: [github.com/jeffchiou](https://github.com/jeffchiou)

## This Site

Thanks to [lawler.io](https://lawler.io) and [gwern.net](https://gwern.net) for inspiring my site design.

### Tech

This website uses [Eleventy / 11ty](https://www.11ty.dev/), [tailwindcss](https://tailwindcss.com/), [augmented-ui](https://augmented-ui.com/), and my own project [CoordiScroll](https://jeffchiou.github.io/coordiscroll/). The previous version of my website used [Gatsby](https://www.gatsbyjs.com/) but I decided to switch to 11ty for simplicity.

For markdown rendering I'm using [KaTeX](https://katex.org/) for math, [Prism](https://prismjs.com/) for syntax highlighting, and [mermaid](https://mermaid-js.github.io/mermaid/#/) for diagrams, although mermaid is somewhat hefty.

### Work in Progress

In addition to writing more, there's a lot of programming work to be done.

Highest priority would be incorporating sync controls, so the reader could change column content, synchronize, and desynchronize. A use case would be viewing a figure in the 3rd column while reading context in the 1st and second. In addition, readers should be able to add and remove columns.

There are some issues with how the sync interacts with header anchors.

I still need to work on incorporating side notes properly in my multi-column format. At the moment I'm thinking of making an invisible copy of the page using `visibility: hidden` in order to get the correct page length. Then I could write some JS to create correctly positioned sidenotes.

I have some ideas around large figure display. I'd like to be able to quickly show figures at a 2-column and 3-column width. This is lower priority for now.


[^climbing]: Favorite crags: Red River Gorge, Jackson Falls. Ironically, I am quite scared of heights.
[^3dprint]: I currently have a modded Ender 3 with Octoprint on an RPi
[^homeauto]: Using Hass.io with lots of plugins and reprogrammed Amazon Dash buttons


<div id="auxiliary-content" class="hidden">

Sidenotes are a medium-priority work in progress.

</div>
