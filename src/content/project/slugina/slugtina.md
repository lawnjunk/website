# Slugtina 

## Preface
  I work at a programming bootcamp as a full-stack javascript programming instructor. I was looking for a good "cross-patfrom" drawing tool that I could use during my lectures. Though I found some drawing apps that could have served my purpose, I decidted to build one for the browser. I knew it would be fun build and It would be a great demonstration for my students to see browser side javascript that wasnt backing a tradional website UI.

## Build
  I originaly made slugtina while teaching a beginner web development course, and wrote the entire program one afternoon in a single file. It had a minimal but working feature set, but was very hackey. After a few months when I decited to update UI and add features, I decited to iterate the codebase over reafctoring it. 

  After doing some research I found several great atricles on working with canvas, and builing paint apps (see references). I decited I wanted to build the UI using vanilla javascript as a fun exercise. I currenlty spend most of my time writing ReactJS and had been looking forward to applying some design patterns I picked up to vinilla JS. 

  One of the biggest shifts in my codeing style in the last year has been adopting functional programming (FP) over Object Oriented Programming (OOP). Adopting FP pushed me to write dryer (less repedative) more decarative code. In slugtina I built a redux "like" state management architecture that allowed me to represent all state changes via pure functions. Redux ensures all state mutations are abstracted away from the logic, greatly limiting the number of functions that have side effects. 

I quickly drew a napkin wirefame of the UI and then began to research and design the state. My goal was to have all state changes suport undo and redo. Undo and redo are implemented with a Stack, and the callenge became defining a represention for diffrent types of changes to the canvas that could be stacked. My solution was inspited by The Command Pattern "in which a object is used to encapsulate all information need to perform an action or trigger an event at a later time". Each canvas opeartion was represened as a object with an 'action' and some addoiciated 'data'.  

Examples of the undoable canvas mutation representations.
``` javascript
// brush, eraser, and roller strokes
{
  action: 'roller',
  data: [
   { color: '#000', size: 2, tool: 'roller, type: 'down', x: 10, y: 10},
   { color: '#000', size: 2, tool: 'roller, type: 'move', x: 12, y: 10},
   { color: '#000', size: 2, tool: 'roller, type: 'move', x: 14, y: 10},
   { color: '#000', size: 2, tool: 'roller, type: 'move', x: 15, y: 11},
   { color: '#000', size: 2, tool: 'roller, type: 'up', x: 15, y: 13},
  },
}

// cut
{
  action: 'cut',
  data: {x: 10, y: 10, width: 50, height: -100},
}

// paste
{
  action: 'paste',
  data: {image: imageData, x: 250, y: 200 },
}
```

Once I had a rough napkin plan hacked together, I wrote out my tooling boiler plate. I used webpack to bundle my code, run babel transpalation, sass preprocessing, and manage static assets.  Although I dont often write markup (HTML), and choose to generate my DOM tree from JS. I chose to hard code much of the view in the index.html. This had the benifit of allowing me to quickly jump into the core application code. However, the longterm downside to this is that It would take a substial refactor/rewrite to make slugtina a embedable component. 

The current feature set incudles a line brush, a blob brush, an eraser, a seven color pallet, a rectangle select/clone tool, undo, redo, and clear board. The brush and erasor have individual brush size settings. All tools, colors, and history commands can be selected either from an on screen toolbar, or by using keyboard shortcuts.
## References
