# Firefox List View

I would deploy on the firefox extension store but it appears that the OTP is broken :/
To install either have nightly dev or esr firefox


## Turn off Signatures Required - REQUIRES Nightly or Dev Firefox

visit -> `about:config`<br/>
change to false -> `xpinstall.signatures.required`<br/>
zip folder `extension`<br/>
upload -> `about:addons`


## Notes

Bug: playlists view is pretty banged up from the CSS changes<br/>
Feature: Styles are injected Via JS and controlled via the popup (atm only a CSS injection)
