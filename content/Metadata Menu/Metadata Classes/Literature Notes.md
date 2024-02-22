---
fields:
  - name: Year of Publication
    type: Date
    options:
      dateShiftInterval: 1 year
      dateFormat: YYYY
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: xrSHFB
  - name: Authors
    type: Input
    options: {}
    path: ""
    id: Sn42MH
  - name: Related Notes
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass == 'Base, Lecture Notes' || p.fileClass == 'Base, Literature Notes' || p.fileClass == 'Base, Summaries' || p.fileClass == 'Base, Meeting Notes' || p.fileClass == 'Base, Project Notes' || p.fileClass == 'Base, Writing Notes')).map(p => p.file.link)
    path: ""
    id: OMFn4U
  - name: Related Terminology
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => (p.fileClass == 'Base, Concepts' || p.fileClass == 'Base, Theories' || p.fileClass == 'Base, Events')).map(p => p.file.link)
    path: ""
    id: Uh1LKa
  - name: Related Courses
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => p.fileClass == 'Base, Courses').map(p => p.file.link)
    path: ""
    id: TKeo4f
version: "2.17"
limit: 20
mapWithTag: false
icon: book-open-text
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - Sn42MH
  - xrSHFB
  - OMFn4U
  - Uh1LKa
  - TKeo4f
---