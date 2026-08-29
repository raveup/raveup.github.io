# Windows 11 Setup
# OpenSource Blogging with Jekyll GitHub VSCode
# https://jloudon.com/blogging/OpenSource-Blogging-with-Jekyll-GitHub-VSCode/
source 'https://rubygems.org'
gem 'jekyll'
group :jekyll_plugins do
  gem 'github-pages'
end
#gem 'jekyll-coffeescript'
gem 'webrick'
gem 'faraday-retry'
gem 'tzinfo-data', platforms: [:windows]
# Require before:
# gem install wdm:0.1.1 -- --with-cflags=-Wno-implicit-function-declaration
# Then: bundle install
# https://github.com/rubygems/rubygems/issues/7742#issuecomment-2461639147
gem 'wdm', '~> 0.1.1', :install_if => Gem.win_platform?

# Run with:
# bundle exec jekyll serve --watch --livereload