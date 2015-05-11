Package.describe({
  summary: "Telescope Event Theme",
  version: '0.1.0',
  name: "telescope-theme-event"
});

Package.onUse(function (api) {

  api.use(['templating', 'fourseven:scss',  'telescope-base','telescope-theme-hubble'], ['client']);

  api.addFiles([
    'lib/client/stylesheets/screen.scss',
    'lib/client/templates/new_posts_list.html',
    'lib/client/templates/new_post_item.html',
    'lib/client/templates/new_tagline_banner.html',
    'lib/client/templates/new_nav.html',
    'lib/client/eventtheme.js',
    'lib/postfield.js',
  ], ['client']);

});
