class ArticlesController < ApplicationController
  def index
    @grid = initialize_grid Article, order: 'id', per_page: 2
  end
end
