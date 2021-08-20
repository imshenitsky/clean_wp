module WiceGridHelper
  def wice_opts
    { show_filters:              :always,
      hide_csv_button:           true,
      html:                      { class: 'memseed-grid articles-grid' },
      header_tr_html:            { class: 'memseed-header' },
      allow_showing_all_records: false
    }
  end

  def authors_list
    Article.all.map { |u| [u.author, u.author] }.sort
  end
end
