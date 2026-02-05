<%*

// Examples of adding external images to notes

-%>
%%
	- Image _without_ link inside a collapsed callout
		- (optional) `image`: alt text
		- (optional) `400x600`: image width and height — _keeps the aspect ratio by using the shorter value_
%%
> [!info]- Image
> ![image|400x600](https://obsidian.md/images/obsidian-logo-gradient.svg)

%%
	- Image _with_ link
		- (optional) `image`: alt text
		- (optional) `400`: image width — _keeps the aspect ratio_
%%
[![image|400](https://obsidian.md/images/obsidian-logo-gradient.svg)](https://obsidian.md)
