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

## Features
1. Responsive webpage with links to github pages
2. Clickable cards

## Future Features

### Macrophotography Page
- showcase macrophotography and make large images available for download

### Volunteer 'page' with links to organizations that I'm involved involved
- Citizens Climate Lobby
https://citizensclimatelobby.org/
- Wild Ones
- Huron River Watershed Council

What I'm up to:
Chronological order of events
Reference my obsidian (Environmental Volunteer Groups)

## Bugs
### fix glitchy card hover on scroll
- hover over cards is glitchy when hovering at the edge
- position of element moves back and forth triggering hover on/off

Potential Causes:

Info
- https://www.sitepoint.com/community/t/glitchy-hover-animation-and-animations-running-on-load/325015/2 
- "Of course it will be glitchy because as soon as you hover over the element you move it out of the way which means its no longer hovered and the animation stops. The cycle is then repeated ad infinitum "
-  Also avoid using position to move things as that causes a reflow. 
- It’s much better to use translate where possible.

Solution:
- use transform: translate() instead of position
- this works bc transform doesn't change the flow of the element
