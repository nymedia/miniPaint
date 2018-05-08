//main config file

var config = {};

config.TRANSPARENCY = false;
config.TRANSPARENCY_TYPE = 'squares'; //squares, green, grey
config.LANG = 'en';
config.WIDTH = null;
config.HEIGHT = null;
config.visible_width = null;
config.visible_height = null;
config.COLOR = '#008000';
config.ALPHA = 255;
config.ZOOM = 1;
config.pixabay_key = '3ca2cd8af3fde33af218bea02-9021417';
config.layers = [];
config.layer = null;
config.need_render = false;
config.mouse = {};

config.TOOLS = [
	{
		name: 'select',
		title: 'Select object tool',
		attributes: {
			auto_select: true,
		},
	},
	{
		name: 'selection',
		title: 'Selection',
		attributes: {},
		on_leave: 'on_leave',
	},
	{
		name: 'brush',
		title: 'Brush',
		attributes: {
			size: 4,
			smart_brush: true,
		},
	},
	{
		name: 'pencil',
		title: 'Pencil',
		on_update: 'on_params_update',
		attributes: {
			antialiasing: true,
			size: 2,
		},
	},
	{
		name: 'pick_color',
		title: 'Pick Color',
		attributes: {
			global: false,
		},
	},
	{
		name: 'erase',
		title: 'Erase',
		on_update: 'on_params_update',
		attributes: {
			size: 30,
			circle: true,
			strict: true,
		},
	},
	{
		name: 'magic_wand',
		title: 'Magic Wand Tool',
		attributes: {
			power: 15,
			anti_aliasing: true,
			contiguous: false,
		},
	},
	{
		name: 'fill',
		title: 'Fill',
		attributes: {
			power: 5,
			anti_aliasing: false,
			contiguous: false,
		},
	},
	{
		name: 'line',
		title: 'Line',
		attributes: {
			size: 1,
			type: {
				value: 'Simple',
				values: ['Simple', 'Arrow'],
			},
		},
	},
	{
		name: 'rectangle',
		title: 'Rectangle',
		attributes: {
			size: 1,
			fill: true,
			square: false,
		},
	},
	{
		name: 'circle',
		title: 'Circle',
		attributes: {
			size: 1,
			fill: true,
			circle: false,
		},
	},
	{
		name: 'text',
		title: 'Text',
		attributes: {
			size: 40,
			bold: false,
			italic: false,
			stroke: false,
			align: {
				value: 'Left',
				values: ["Left", "Center", "Right"],
			},
			family: {
				value: 'Arial',
				values: ["Arial", "Courier", "Impact", "Helvetica", "monospace", "Times New Roman", "Verdana"],
			},
			stroke_size: 1,
		},
	},
	{
		name: 'crop',
		title: 'Crop',
		on_update: 'on_params_update',
		on_leave: 'on_leave',
		attributes: {
			crop: true,
		},
	},
	{
		name: 'blur',
		title: 'Blur tool',
		attributes: {
			size: 30,
			strength: 1,
		},
	}
];

//link to active tool
config.TOOL = config.TOOLS[2];

	
export default config;