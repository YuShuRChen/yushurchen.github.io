module Jekyll
  module ProjectSort
    def sort_projects(projects)
      projects.sort_by do |project|
        data = project.data
        date = data["project_date"].to_s.match(/\A(\d{4})-(\d{2})(?:-(\d{2}))?/)
        month = date ? date[1].to_i * 100 + date[2].to_i : 0
        day = date ? date[3].to_i : 0

        [
          data["pin"] == true ? 0 : 1,
          -month,
          data["importance"] || Float::INFINITY,
          -day,
          data["title"].to_s,
        ]
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::ProjectSort)
