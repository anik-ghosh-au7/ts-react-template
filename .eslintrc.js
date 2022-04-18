module.exports = {
	parser: 'babel-eslint',
	extends: [
		'airbnb-typescript',
		'airbnb/hooks',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:prettier/recommended',
		'prettier/react',
		'prettier/standard',
		'plugin:jest/recommended',
	],
	plugins: ['prettier', 'jest'],
	env: {
		browser: true,
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	rules: {
		'react/jsx-filename-extension': [
			1,
			{ extensions: ['.js', '.jsx', '.tsx'] },
		],
		'react/forbid-prop-types': 0,
		'react/destructuring-assignment': 0,
		'react/require-default-props': 0,
		'prettier/prettier': 'error',
		'no-underscore-dangle': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'import/extensions': 0,
		'spaced-comment': 0,
		camelcase: 0,
		'import/no-extraneous-dependencies': 0,
		'react/jsx-props-no-spreading': 0,
	},
};
