async function newNote() {
    // Load Templater API
    const templater = app.plugins.plugins["templater-obsidian"].templater;
    const tp = templater.current_functions_object;

    let course;
    let noteType;
    let noteSubType;

    // Clear file path
    await tp.file.move("/" + tp.file.title);

    // Filter out media files and send them to their own folder
    if (tp.file.path(true).includes(".jpg") || tp.file.path(true).includes(".png")) {
        (await tp.file.move("/Media/" + tp.file.title));
    } else {
        // Suggester for course selection
        course = await tp.system.suggester(["Water 1", "Water 2", "Mathematics 2", "Mathematics 3", "General Physics", "Water Quantity and Quality"], ["Water 1", "Water 2", "Mathematics 2", "Mathematics 3", "General Physics", "Water Quantity and Quality"], true);

        // Find note type base
        noteType = await tp.system.suggester(["Courses", "Notes", "Terminology", "Questions"], ["Courses", "Notes", "Terminology", "Questions"], true);

        // Start conditional based on noteType
        if (noteType == 'Courses') {
            await tp.file.move("/" + noteType + "/" + tp.file.title);
        } else if (noteType == 'Terminology') {
            noteSubType = await tp.system.suggester(["Concepts", "Events", "Theories"], ["Concepts", "Events", "Theories"], true);
            await tp.file.move("/" + noteType + "/" + noteSubType + "/" + course + "/" + tp.file.title);
        } else if (noteType == 'Questions') {
            noteSubType = await tp.system.suggester(["Practice Questions", "Questions of Understanding"], ["Practice Questions", "Questions of Understanding"], true);
            await tp.file.move("/" + noteType + "/" + noteSubType + "/" + course + "/" + tp.file.title);
        } else if (noteType == 'Notes') {
            noteSubType = await tp.system.suggester(["Lecture Notes", "Literature Notes", "Summaries", "Project Notes", "Meeting Notes", "Writing Notes"], ["Lecture Notes", "Literature Notes", "Summaries", "Project Notes", "Meeting Notes", "Writing Notes"], true);
            await tp.file.move("/" + noteType + "/" + noteSubType + "/" + course + "/" + tp.file.title);
        } else { window.alert("Error: Something went wrong in the note type selection"); };
    };

    // Update noteType based on whether noteSubType was defined
    if (noteSubType != undefined && noteSubType !== null) {
        noteType = noteSubType;
    };

    // Define frontmatter based on noteType
    switch (noteType) {
        case 'Courses':
            Frontmatter = `
---
fileClass: Base, ${noteType}
title: 
Parents: 
Draft: 
Status: 
Course Code: 
Period: 
Duration: 
Timeslot: 
Year: 
---`;
            break;
        case 'Concepts':
            Frontmatter = `
---
fileClass: Base, ${noteType}
title: 
Parents: 
Draft: 
Status: 
aliases: 
Related Notes: 
Related Terminology: 
Related Courses: 
---`;
            break;
        case 'Events':
            Frontmatter = `
---
fileClass: Base, ${noteType}
title: 
Parents: 
Draft: 
Status: 
aliases: 
Event Date: 
Related Notes: 
Related Terminology: 
Related Courses: 
---`;
            break;
        case 'Theories':
            Frontmatter = `
---
fileClass: Base, ${noteType}
title: 
Parents: 
Draft: 
Status: 
aliases: 
Authors: 
Related Notes: 
Related Terminology: 
Related Courses: 
---`;
            break;
        case 'Practice Questions':
        case 'Questions of Understanding':
        case 'Lecture Notes':
        case 'Summaries':
            Frontmatter = `
---
fileClass: Base, ${noteType}
title: 
Parents: 
Draft: 
Status: 
Related Notes: 
Related Terminology: 
Related Courses: 
---`;
            break;
        case 'Literature Notes':
            Frontmatter = `
---
fileClass: Base, ${noteType}
title: 
Parents: 
Draft: 
Status: 
Authors: 
Year of Publication: 
Related Notes: 
Related Terminology: 
Related Courses: 
---`;
            break;
        case 'Meeting Notes':
            Frontmatter = `
---
fileClass: Base, ${noteType}
title: 
Parents: 
Draft: 
Status: 
Meeting Date: 
People Involved: 
Related Projects:
Related Courses:
---`;
            break;
        case 'Project Notes':
            Frontmatter = `
---
fileClass: Base, ${noteType}
title: 
Parents: 
Draft: 
Status: 
Project Type: 
People Involved: 
Related Notes: 
Related Courses: 
---`;
            break;
        case 'Writing Notes':
            Frontmatter = `
---
fileClass: Base, ${noteType}
title: 
Parents: 
Draft: 
Status:
People Involved: 
Related Projects:  
Related Notes: 
Related Terminology: 
Related Courses: 
---`;
            break;
        default:
            window.alert("Error: Seomthing failed in the metadata selection");
    }

    Frontmatter = Frontmatter.trim();
    return Frontmatter;
};

module.exports = newNote;