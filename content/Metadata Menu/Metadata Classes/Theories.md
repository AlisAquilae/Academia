---
fields:
  - name: aliases
    type: Input
    options: {}
    path: ""
    id: IDBzjf
  - name: Authors
    type: Input
    options: {}
    path: ""
    id: qlw0AE
  - name: Related Courses
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => p.fileClass == 'Base, Courses').map(p => p.file.link)
    path: ""
    id: BXfvQD
  - name: Related Notes
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass == 'Base, Lecture Notes' || p.fileClass == 'Base, Literature Notes' || p.fileClass == 'Base, Summaries' || p.fileClass == 'Base, Meeting Notes' || p.fileClass == 'Base, Project Notes' || p.fileClass == 'Base, Writing Notes')).map(p => p.file.link)
    path: ""
    id: TrsUQr
  - name: Related Terminology
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass == 'Base, Concepts' || p.fileClass == 'Base, Theories' || p.fileClass == 'Base, Events')).map(p => p.file.link)
    path: ""
    id: DFBY2w
version: "2.14"
limit: 20
mapWithTag: false
icon: flask-conical
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - IDBzjf
  - qlw0AE
  - TrsUQr
  - DFBY2w
  - BXfvQD
---