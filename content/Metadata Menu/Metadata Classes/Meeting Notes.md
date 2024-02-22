---
fields:
  - name: Meeting Date
    type: Date
    options:
      dateShiftInterval: 1 day
      dateFormat: YYYY-MM-DD
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: Xsr75j
  - name: People Involved
    type: Input
    options: {}
    path: ""
    id: uKMBoC
  - name: Related Projects
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => p.fileClass == 'Base, Project Notes').map(p => p.file.link)
    path: ""
    id: 25kT8y
  - name: Related Courses
    type: MultiFile
    options:
      dvQueryString: dv.pages().where(p => p.fileClass == 'Base, Courses').map(p => p.file.link)
    path: ""
    id: QU5Xxg
version: "2.10"
limit: 20
mapWithTag: false
icon: users
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - Xsr75j
  - uKMBoC
  - 25kT8y
  - QU5Xxg
---