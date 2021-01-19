const kitContentData = [
	{
		type: 'templates',
		data: {
			title: __( 'Templates', 'elementor' ),
			features: {
				open: [
					__( 'Landing Pages', 'elementor' ),
					__( 'Saved Templates (Sections, Page)', 'elementor' ),
				],
				locked: [
					__( 'Popups', 'elementor' ),
				],
			},
			notice: __( 'Site Parts, Global widgets and Popups will are available only when Elementor Pro license is Connected', 'elementor' ),
		},
	},
	{
		type: 'theme-builder',
		data: {
			title: __( 'Theme builder', 'elementor' ),
			features: {
				open: [],
				locked: [
					__( 'Headers', 'elementor' ),
					__( 'Footers', 'elementor' ),
					__( 'Archives', 'elementor' ),
					__( 'Single Posts', 'elementor' ),
					__( 'Single Pages', 'elementor' ),
					__( 'Search Results', 'elementor' ),
					__( '404 Error Page', 'elementor' ),
				],
			},
			notice: __( 'Site Parts, Global widgets and Popups will are available only when Elementor Pro license is Connected', 'elementor' ),
		},
	},
	{
		type: 'content',
		data: {
			title: __( 'Content', 'elementor' ),
			description: __( 'Elementor Pages, Custom Post Type', 'elementor' ),
		},
	},
	{
		type: 'settings',
		data: {
			title: __( 'Site Settings', 'elementor' ),
			description: __( 'Global Colors, Global  Typography, Theme Style settings, Layout Settings, Lightbox Settings, Background Settings', 'elementor' ),
		},
	},
];

export default kitContentData;