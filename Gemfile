# after any changes to the Gemfile, execute bundle update!
source "https://rubygems.org"

# Use the gemspec to install the Jekyll Agency theme
gemspec

# Pin ffi to an older version compatible with RubyGems 3.1.4
gem 'ffi', '1.16.0'

# Pin sass-embedded to a version compatible with RubyGems 3.1.4
gem 'sass-embedded', '< 1.63.0'  # Older version of sass-embedded

# Performance-booster for watching directories on Windows
gem "wdm", ">= 0.1.0" if Gem.win_platform?
