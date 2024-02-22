---
fields:
  - name: Related Courses
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => p.fileClass == 'Base, Courses').map(p => p.file.link)
    path: ""
    id: 6jT9gB
  - name: Related Terminology
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass == 'Base, Concepts' || p.fileClass == 'Base, Theories' || p.fileClass == 'Base, Events')).map(p => p.file.link)
    path: ""
    id: g9co6B
  - name: Related Notes
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass == 'Base, Lecture Notes' || p.fileClass == 'Base, Literature Notes' || p.fileClass == 'Base, Summaries' || p.fileClass == 'Base, Meeting Notes' || p.fileClass == 'Base, Project Notes' || p.fileClass == 'Base, Writing Notes')).map(p => p.file.link)
    path: ""
    id: zmx7dq
  - name: Event Date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: VAxTmi
  - name: aliases
    type: Input
    options: {}
    path: ""
    id: ZVf1JZ
version: "2.9"
limit: 20
mapWithTag: false
icon: calendar
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - ZVf1JZ
  - VAxTmi
  - zmx7dq
  - g9co6B
  - 6jT9gB
---