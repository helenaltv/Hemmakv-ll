const register = require("@babel/register");
const SitemapBuilder = require("react-router-sitemap").default;
const routes = require("./sitemap-routes").default;

register({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

function generateSitemap() {
  const sitemap = new SitemapBuilder(routes)
    .applyParams({})
    .build("https://example.com")
    .save("./public/sitemap.xml"); // Korrigerat till .xml
  return sitemap;
}

generateSitemap();
