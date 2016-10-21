###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers do
  def mega_octicon(code)
    content_tag :span, '', :class => "mega-octicon octicon-#{code.to_s.dasherize}"
  end

  def octicon(code)
    content_tag :span, '', :class => "octicon octicon-#{code.to_s.dasherize}"
  end

  def geo_pattern_image(text, options={})
    GeoPattern.generate(text, options).to_data_uri
  end

  def formatted_date(date)
    date.strftime("%A, %B #{date.day.ordinalize}, %Y")
  end
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end
