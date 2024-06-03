# Personal Project Dashboard
Responsive webpage showcasing github projects

Live Demo:  
https://jj-jinosko.github.io/dashboard/

PC View:  
![Project Screenshot]()

Mobile View:  
![Project Screenshot]()

### Skills
- HTML
- CSS
    - grid
    - flexbox
    - responsive layout
- vanilla JavaScript

### Inputs 
* Project Design File: [dashboard-project.png]()
* SVG Icon Library: [Material Design Icons](https://materialdesignicons.com/)

## Features
1. Responsive webpage with links to github pages

## Future Features and Fixes

### Macrophotography Page
- showcase macrophotography and make large images available for download

### Volunteer 'page' with links to organizations that I'm involved involved
- Citizens Climate Lobby
https://citizensclimatelobby.org/
- Wild Ones
- Huron River Watershed Council

What I'm up to:
Chronilogical order of events
Reference my obsidian (Environmental Volunteer Groups)

### make whole card clickable
- https://christianheilmann.com/2020/11/26/back-to-basics-creating-a-clickable-card-interface-in-plain-html-css-and-javascript/

### fix card has padding and link is inside padding
- tried to move padding to inside container, but messed up during hover
- create a negative padding ? not sure


## accessibility
- when removing list style, add attribute type[list] for screenreaders
# FIXED

## Bugs
## fix glitchy card hover on scroll
- hover over cards is glitchy when hovering at the edge
- (goes back and forth between hover/not hover state on edges during scroll)

### Problem Cause 
- position of element moves back and forth triggering hover on/off

Info
- https://www.sitepoint.com/community/t/glitchy-hover-animation-and-animations-running-on-load/325015/2 
- "Of course it will be glitchy because as soon as you hover over the element you move it out of the way which means its no longer hovered and the animation stops. The cycle is then repeated ad infinitum "
-  Also avoid using position to move things as that causes a reflow. 
- It’s much better to use translate where possible.

### Problem Solution
- use transform: translate() instead of position
- this works bc transform doesn't change the flow of the element



