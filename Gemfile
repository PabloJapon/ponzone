# after any changes to the Gemfile, execute bundle update!
source "https://rubygems.org"

# Use the gemspec to install the Jekyll Agency theme
gemspec

# Specify a compatible version of ffi that works with RubyGems 3.1.4 (since Netlify has an older version)
gem 'ffi', '< 1.17.1'  # Older version of ffi to avoid RubyGems compatibility issues

# Performance-booster for watching directories on Windows
gem "wdm", ">= 0.1.0" if Gem.win_platform?
