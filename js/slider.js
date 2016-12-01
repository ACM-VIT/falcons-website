/* ==============================================
		Revolution Slider
	=============================================== */
	revapi = jQuery('.tp-banner-2').revolution(
		{
			delay:9000,
			startwidth:1170,
			startheight:580,
			hideThumbs:10,
			fullWidth:"on",
			forceFullWidth:"on",
			thumbWidth:100,
			thumbHeight:50,
			thumbAmount:4,
						
			navigationType:"none",
			navigationArrows:"solo",
			navigationStyle:"preview4",
			
			parallax:"mouse",
			parallaxBgFreeze:"on",
			parallaxLevels:[10,7,4,3,2,5,4,3,2,1],
		});