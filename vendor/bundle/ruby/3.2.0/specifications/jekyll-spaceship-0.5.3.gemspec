# -*- encoding: utf-8 -*-
# stub: jekyll-spaceship 0.5.3 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-spaceship".freeze
  s.version = "0.5.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["jeffreytse".freeze]
  s.date = "2020-05-19"
  s.email = ["jeffreytse.mail@gmail.com".freeze]
  s.homepage = "https://github.com/jeffreytse/jekyll-spaceship".freeze
  s.licenses = ["MIT".freeze]
  s.required_ruby_version = Gem::Requirement.new(">= 2.3.0".freeze)
  s.rubygems_version = "3.4.1".freeze
  s.summary = "A Jekyll plugin to provide powerful supports for table, mathjax, plantuml, emoji, youtube, vimeo, dailymotion, etc.".freeze

  s.installed_by_version = "3.4.1" if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.6", "< 5.0"])
  s.add_runtime_dependency(%q<nokogiri>.freeze, ["~> 1.6"])
  s.add_runtime_dependency(%q<rainbow>.freeze, ["~> 3.0"])
  s.add_development_dependency(%q<bundler>.freeze, [">= 0"])
  s.add_development_dependency(%q<rake>.freeze, ["~> 12.0"])
  s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
end
