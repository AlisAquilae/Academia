---
fields:
  - name: aliases
    type: Input
    options: {}
    path: ""
    id: 5AAtiU
  - name: Related Terminology
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass == 'Base, Concepts' || p.fileClass == 'Base, Theories' || p.fileClass == 'Base, Events')).map(p => p.file.link)
    path: ""
    id: sASyx3
  - name: Related Notes
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass == 'Base, Lecture Notes' || p.fileClass == 'Base, Literature Notes' || p.fileClass == 'Base, Summaries' || p.fileClass == 'Base, Meeting Notes' || p.fileClass == 'Base, Project Notes' || p.fileClass == 'Base, Writing Notes')).map(p => p.file.link)
    path: ""
    id: 95aA3g
  - name: Related Courses
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => p.fileClass == 'Base, Courses').map(p => p.file.link)
    path: ""
    id: PIKyMJ
version: "2.9"
limit: 20
mapWithTag: false
icon: lightbulb
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - 5AAtiU
  - 95aA3g
  - sASyx3
  - PIKyMJ
---