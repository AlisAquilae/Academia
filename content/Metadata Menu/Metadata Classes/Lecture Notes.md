---
fields:
  - name: Related Terminology
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass == 'Base, Concepts' || p.fileClass == 'Base, Theories' || p.fileClass == 'Base, Events')).map(p => p.file.link)
    path: ""
    id: 9equT8
  - name: Related Notes
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass == 'Base, Lecture Notes' || p.fileClass == 'Base, Literature Notes' || p.fileClass == 'Base, Summaries' || p.fileClass == 'Base, Meeting Notes' || p.fileClass == 'Base, Project Notes' || p.fileClass == 'Base, Writing Notes')).map(p => p.file.link)
    path: ""
    id: V7kZ7s
  - name: Related Courses
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => p.fileClass == 'Base, Courses').map(p => p.file.link)
    path: ""
    id: 0s9RFP
version: "2.5"
limit: 20
mapWithTag: false
icon: ear
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - V7kZ7s
  - 9equT8
  - 0s9RFP
---