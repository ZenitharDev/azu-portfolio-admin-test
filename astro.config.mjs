// @ts-check
import { defineConfig } from 'astro/config';

// When this builds inside GitHub Actions, GITHUB_REPOSITORY tells us the
// "owner/repo" name. A project page (anything but <user>.github.io) is
// served from https://<user>.github.io/<repo>/, so it needs that `/<repo>`
// base path. A user/org page (named <user>.github.io) is served from the
// domain root and needs none. This makes the build work automatically no
// matter what the repo ends up being named — nothing to edit by hand.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isUserOrgPage = repository?.toLowerCase().endsWith('.github.io');
const base = repository && !isUserOrgPage ? `/${repository}/` : '/';

// https://astro.build/config
export default defineConfig({
  base,
});
