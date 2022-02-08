File Structure
Rulesets should be grouped into logical files that enforce the separation of concerns within the CSS, that can be aggregated efficiently and that can be easily overridden by themers.

Drupal 8 follows a SMACSS-style categorization of its CSS rules:

Base — CSS reset/normalize plus HTML element styling.
Layout — macro arrangement of a web page, including any grid systems.
Component — discrete, reusable UI elements.
State — styles that deal with client-side changes to components.
Theme — purely visual styling (“look-and-feel”) for a component.