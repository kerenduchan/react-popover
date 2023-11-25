# react-popover

Uses react-popper (popper.js).

Demonstrates how to create a popover menu that behaves as follows:

- Clicking on the button that opens the menu toggles open/close of the menu.
- Clicking anywhere outside the menu closes the menu.
- Menu has a title and a close button so that all menus can have the same structure.
- Can trigger closing the menu from the menu's custom contents (children).
- React state flows well into and out of the popover menu.
- No need for global store or any app-level changes.
- Popover element is created in a portal (at the document body).
- Can also use the popover directly without the popover menu structure.
- Plus you get all of react-popper's (popper.js's) strong capabilities:
  preventing overflow outside the screen, popover placement and offset, etc.