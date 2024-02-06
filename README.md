# dashboard
Project Dashboard for the odin project
https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-admin-dashboard

## 

## Skills
- HTML
- CSS
    - grid
    - flexbox
    - responsive layout


## General steps
1. HTML: generate HTML from content
2. CSS: initialize default styling 
3. CSS: layout containers, starting from largest to smallest

- add sticky header transition w javascript
- responsive design w minmax
    - max size 1440
    - med size : aside + 2col cards
    - small size: aside shifts up + 1col cards

    * could use grid-template-columns(auto-fit, minmax()),
    but how will this behave when we want to move the aside?
    


## embed icons 
- https://fonts.google.com/icons
- using codecademy site as a reference 
![Alt text](image.png)


## accessibility
- when removing list style, add attribute type[list] for screenreaders


# Lessons

## make whole card clickable
- https://christianheilmann.com/2020/11/26/back-to-basics-creating-a-clickable-card-interface-in-plain-html-css-and-javascript/

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



