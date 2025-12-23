// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Tribes',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/ShariqT/tribes-python-server' }],
			sidebar: [
        {
          label: 'Manifesto',
          items: [
            { label: 'Why Tribes is needed', slug: 'manifesto'}
          ]
        },
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Launching a Tribes server', slug: 'guides/vps-instructions' },
            { label: 'Environment variables', slug: 'guides/environment-variables' },

					],
				},
        
				{
					label: 'Protocol',
          items: [
            { label: 'Learn the Tribes Protocol', slug: 'protocol'}
          ]
				},
			],
		}),
	],
});
