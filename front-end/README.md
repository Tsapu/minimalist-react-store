# v1.2
## Combating clarity and maintainability issues
* Implemented object destructuring where possible (no more incomprehensible chains)
* Slimmer render methods; most logic transferred to class fields
* Created a shared ItemList component for Cart & CartMenu
* Heavily modified the previous blob that was /components/PLP/Products

Did not do much splitting, if there is a place where it is glaringly necessary, let me know. Currently I did not see where I could squeeze in more components that would not cause more prop drilling and diffusion of control.


---
# v1.1

### New:
1. Fixed all issues detected and implemented the required features
2. 404 Routes, sliders on PDP gallery
---

### Comments about implementations
> 5) If you open the product page and reload it, you get TypeError: Cannot read property 'attributes' of undefined.
- Since there was no option to query for a specific product, I queried the specific category and just filtered to see if it's there

> 9) It would be nice to navigate to the product page from the cart overlay and cart page, and see the totals on the cart page.
- Clickable links available on the product name in Cart page/Menu + also links on Menu images

> 16) Try not to use dangerouslySetInnerHTML. It has this name for a reason.
- While the React prop remains, the Html strings are now cleaned with DOMPurify library before insertion

