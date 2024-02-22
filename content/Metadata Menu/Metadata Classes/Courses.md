---
fields:
  - name: Course Code
    type: Input
    options: {}
    path: ""
    id: HNUOI9
  - name: Period
    type: Number
    options:
      min: 1
      max: 6
      step: 1
    path: ""
    id: WL5QkW
  - name: Duration
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": Whole Period
        "2": First Half
        "3": Second Half
    path: ""
    id: QjoykD
  - name: Timeslot
    type: Select
    options:
      sourceType: ValuesList
      valuesList:
        "1": Whole Day
        "2": Morning
        "3": Afternoon
    path: ""
    id: bWIbht
  - name: Year
    type: Date
    options:
      dateShiftInterval: 1 year
      dateFormat: YYYY
      defaultInsertAsLink: false
      linkPath: ""
    path: ""
    id: GVJpTC
version: "2.17"
limit: 20
mapWithTag: false
icon: school-2
tagNames: 
filesPaths: 
bookmarksGroups: 
excludes: 
extends: 
savedViews: []
favoriteView: 
fieldsOrder:
  - HNUOI9
  - WL5QkW
  - QjoykD
  - bWIbht
  - GVJpTC
---