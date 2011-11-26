module Jekyll
  class WikiTermTag < Liquid::Tag

    def initialize(tag_name, args, tokens)
      super
      @name, @url = args.split(/\//)
    end

    def render(context)
      %Q{<a class="wikiterm" target="_blank" href="http://en.wikipedia.com/wiki/#{@url ? @url : @name}">#{@name.strip}</a>}
    end
  end
end

Liquid::Template.register_tag('wikiterm', Jekyll::WikiTermTag)