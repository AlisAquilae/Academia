---
fields:
  - name: Project Type
    type: Multi
    options:
      sourceType: ValuesList
      valuesList:
        "1": Paper
        "2": Presentation
        "3": Experiment
    path: ""
    id: p9GAcW
  - name: People Involved
    type: Input
    options: {}
    path: ""
    id: 9o6Mbp
  - name: Related Notes
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass == 'Base, Lecture Notes' || p.fileClass == 'Base, Literature Notes' || p.fileClass == 'Base, Summaries' || p.fileClass == 'Base, Meeting Notes' || p.fileClass == 'Base, Project Notes' || p.fileClass == 'Base, Writing Notes')).map(p => p.file.link)
    path: ""
    id: e7I93k
  - name: Related Courses
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => p.fileClass == 'Base, Courses').map(p => p.file.link)
    path: ""
    id: jsv3JU
version: "2.10"
limit: 20
mapWithTag: false
icon: target
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - p9GAcW
  - 9o6Mbp
  - e7I93k
  - jsv3JU
---