---
fields:
  - name: Related Courses
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => p.fileClass == 'Base, Courses').map(p => p.file.link)
    path: ""
    id: NjnnVh
  - name: Related Terminology
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass == 'Base, Concepts' || p.fileClass == 'Base, Theories' || p.fileClass == 'Base, Events')).map(p => p.file.link)
    path: ""
    id: hfE5Hb
  - name: Related Notes
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass == 'Base, Lecture Notes' || p.fileClass == 'Base, Literature Notes' || p.fileClass == 'Base, Summaries' || p.fileClass == 'Base, Meeting Notes' || p.fileClass == 'Base, Project Notes' || p.fileClass == 'Base, Writing Notes')).map(p => p.file.link)
    path: ""
    id: Mlp4nR
version: "2.3"
limit: 20
mapWithTag: false
icon: crown
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - Mlp4nR
  - hfE5Hb
  - NjnnVh
---