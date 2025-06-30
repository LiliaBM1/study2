/*************************** 
 * Deptemotion_Rating *
 ***************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'DEPTemotion_rating';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: false,
  color: new util.Color([1, 1, 1]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });
  
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var instructionsClock;
var instrtxt;
var continue_button_3;
var start_mouse;
var emotion_selectionClock;
var happy;
var anger;
var fear;
var sadness;
var neutral;
var disgust;
var surprise;
var mouse;
var continue_button;
var emotionq;
var image;
var response_highlight;
var thanksClock;
var thankstxt;
var continue_button_4;
var end_mouse;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instrtxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'instrtxt',
    text: 'مَرْحَبًا!\n\nفِي هٰذَا الِاخْتِبَارِ، سَوْفَ تَقْرَأُ نَصًّا قَصِيرًا.\nسَيُطْلَبُ مِنْكَ اخْتِيَارُ الْكَلِمَةِ الَّتِي تَصِفُهُ عَلَى أَفْضَلِ وَجْهٍ.\n\n\n\nانْقُرْ أَدْنَاهُ لِلْبَدْءِ.\n',
    placeholder: 'Type here...',
    font: 'Tahoma',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'Arabic',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  continue_button_3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue_button_3',
    text: 'التَّالِي',
    placeholder: 'Type here...',
    font: 'Tahoma',
    pos: [0, (- 0.42)], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.5, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: [(- 0.6314), (- 0.3804), (- 0.3804)], borderColor: undefined,
    languageStyle: 'Arabic',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  start_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  start_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "emotion_selection"
  emotion_selectionClock = new util.Clock();
  happy = new visual.TextBox({
    win: psychoJS.window,
    name: 'happy',
    text: 'سَعِيدٌ',
    placeholder: 'Type here...',
    font: 'Tahoma',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: [0.0588, 0.6157, 0.8431], borderColor: 'black',
    languageStyle: 'Arabic',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -2.0 
  });
  
  anger = new visual.TextBox({
    win: psychoJS.window,
    name: 'anger',
    text: 'غَاضِبٌ',
    placeholder: 'Type here...',
    font: 'Tahoma',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: [0.0588, 0.6157, 0.8431], borderColor: 'black',
    languageStyle: 'Arabic',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -3.0 
  });
  
  fear = new visual.TextBox({
    win: psychoJS.window,
    name: 'fear',
    text: 'خَائِفٌ',
    placeholder: 'Type here...',
    font: 'Tahoma',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: [0.0588, 0.6157, 0.8431], borderColor: 'black',
    languageStyle: 'Arabic',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  sadness = new visual.TextBox({
    win: psychoJS.window,
    name: 'sadness',
    text: 'حَزِينٌ',
    placeholder: 'Type here...',
    font: 'Tahoma',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: [0.0588, 0.6157, 0.8431], borderColor: 'black',
    languageStyle: 'Arabic',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  neutral = new visual.TextBox({
    win: psychoJS.window,
    name: 'neutral',
    text: 'حِيَادِي',
    placeholder: 'Type here...',
    font: 'Tahoma',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: [0.0588, 0.6157, 0.8431], borderColor: 'black',
    languageStyle: 'Arabic',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  disgust = new visual.TextBox({
    win: psychoJS.window,
    name: 'disgust',
    text: 'مُشمَئِزٌّ',
    placeholder: 'Type here...',
    font: 'Tahoma',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: [0.0588, 0.6157, 0.8431], borderColor: 'black',
    languageStyle: 'Arabic',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -7.0 
  });
  
  surprise = new visual.TextBox({
    win: psychoJS.window,
    name: 'surprise',
    text: 'مُنْدَهِشٌ',
    placeholder: 'Type here...',
    font: 'Tahoma',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.2, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: [0.0588, 0.6157, 0.8431], borderColor: 'black',
    languageStyle: 'Arabic',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -8.0 
  });
  
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  continue_button = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue_button',
    text: 'التَّالِي',
    placeholder: 'Type here...',
    font: 'Tahoma',
    pos: [0, (- 0.42)], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.5, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: [(- 0.6314), (- 0.3804), (- 0.3804)], borderColor: undefined,
    languageStyle: 'Arabic',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -10.0 
  });
  
  emotionq = new visual.TextBox({
    win: psychoJS.window,
    name: 'emotionq',
    text: 'مَا هُوَ أَفْضَلُ وَصْفٍ لِهٰذَا النص؟\n\n',
    placeholder: 'Type here...',
    font: 'Tahoma',
    pos: [0, (- 0.25)], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [1.5, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'Arabic',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -11.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0.2], 
    draggable: false,
    size : [1.24, 0.7],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  response_highlight = new visual.Rect ({
    win: psychoJS.window, name: 'response_highlight', 
    width: [0.2, 0.1][0], height: [0.2, 0.1][1],
    ori: 0.0, 
    pos: [0, 0], 
    draggable: false, 
    anchor: 'center', 
    lineWidth: 6.0, 
    lineColor: new util.Color([(- 0.6314), (- 0.3804), (- 0.3804)]), 
    fillColor: undefined, 
    colorSpace: 'rgb', 
    opacity: undefined, 
    depth: -13, 
    interpolate: true, 
  });
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  thankstxt = new visual.TextBox({
    win: psychoJS.window,
    name: 'thankstxt',
    text: '\nشُكْرًا لِمُشَارَكَتِكَ!\n\n\nاِنْقُرْ أَدْنَاهُ لِإنْهَاءِ الِاخْتِبَارِ.',
    placeholder: 'Type here...',
    font: 'Tahoma',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'black', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'Arabic',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  continue_button_4 = new visual.TextBox({
    win: psychoJS.window,
    name: 'continue_button_4',
    text: '\nإِنْهَاءُ الِاخْتِبَارِ\n\n',
    placeholder: 'Type here...',
    font: 'Tahoma',
    pos: [0, (- 0.45)], 
    draggable: false,
    letterHeight: 0.04,
    lineSpacing: 1.0,
    size: [0.5, 0.1],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: [(- 0.6314), (- 0.3804), (- 0.3804)], borderColor: undefined,
    languageStyle: 'Arabic',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: -1.0 
  });
  
  end_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  end_mouse.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var instructionsMaxDurationReached;
var gotValidClick;
var instructionsMaxDuration;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'instructions' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    instructionsClock.reset();
    routineTimer.reset();
    instructionsMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the start_mouse
    // current position of the mouse:
    start_mouse.x = [];
    start_mouse.y = [];
    start_mouse.leftButton = [];
    start_mouse.midButton = [];
    start_mouse.rightButton = [];
    start_mouse.time = [];
    start_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('instructions.started', globalClock.getTime());
    instructionsMaxDuration = null
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instrtxt);
    instructionsComponents.push(continue_button_3);
    instructionsComponents.push(start_mouse);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function instructionsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'instructions' ---
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrtxt* updates
    if (t >= 0.0 && instrtxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrtxt.tStart = t;  // (not accounting for frame time here)
      instrtxt.frameNStart = frameN;  // exact frame index
      
      instrtxt.setAutoDraw(true);
    }
    
    
    // *continue_button_3* updates
    if (t >= 0.0 && continue_button_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_button_3.tStart = t;  // (not accounting for frame time here)
      continue_button_3.frameNStart = frameN;  // exact frame index
      
      continue_button_3.setAutoDraw(true);
    }
    
    // *start_mouse* updates
    if (t >= 0.0 && start_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      start_mouse.tStart = t;  // (not accounting for frame time here)
      start_mouse.frameNStart = frameN;  // exact frame index
      
      start_mouse.status = PsychoJS.Status.STARTED;
      start_mouse.mouseClock.reset();
      prevButtonState = start_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (start_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = start_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          start_mouse.clickableObjects = eval(continue_button_3)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(start_mouse.clickableObjects)) {
              start_mouse.clickableObjects = [start_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of start_mouse.clickableObjects) {
              if (obj.contains(start_mouse)) {
                  gotValidClick = true;
                  start_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              start_mouse.clicked_name.push(null);
          }
          _mouseXYs = start_mouse.getPos();
          start_mouse.x.push(_mouseXYs[0]);
          start_mouse.y.push(_mouseXYs[1]);
          start_mouse.leftButton.push(_mouseButtons[0]);
          start_mouse.midButton.push(_mouseButtons[1]);
          start_mouse.rightButton.push(_mouseButtons[2]);
          start_mouse.time.push(start_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'instructions' ---
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('start_mouse.x', start_mouse.x);
    psychoJS.experiment.addData('start_mouse.y', start_mouse.y);
    psychoJS.experiment.addData('start_mouse.leftButton', start_mouse.leftButton);
    psychoJS.experiment.addData('start_mouse.midButton', start_mouse.midButton);
    psychoJS.experiment.addData('start_mouse.rightButton', start_mouse.rightButton);
    psychoJS.experiment.addData('start_mouse.time', start_mouse.time);
    psychoJS.experiment.addData('start_mouse.clicked_name', start_mouse.clicked_name);
    
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'images/MetadataDEPT - image_metadata - image_metadata.csv.csv',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(emotion_selectionRoutineBegin(snapshot));
      trialsLoopScheduler.add(emotion_selectionRoutineEachFrame());
      trialsLoopScheduler.add(emotion_selectionRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var emotion_selectionMaxDurationReached;
var answer;
var response_time;
var responses;
var response_x_positions;
var emotion_selectionMaxDuration;
var emotion_selectionComponents;
function emotion_selectionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'emotion_selection' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    emotion_selectionClock.reset();
    routineTimer.reset();
    emotion_selectionMaxDurationReached = false;
    // update component parameters for each repeat
    // Run 'Begin Routine' code from show_response
    answer = null;
    response_time = null;
    responses = [happy, anger, fear, sadness, neutral, disgust, surprise];
    
    // Run 'Begin Routine' code from rand_locations
    response_x_positions = [(- 0.6), (- 0.4), (- 0.2), 0, 0.2, 0.4, 0.6];
    util.shuffle(response_x_positions);
    
    happy.setPos([response_x_positions[0], (- 0.3)]);
    anger.setPos([response_x_positions[1], (- 0.3)]);
    fear.setPos([response_x_positions[2], (- 0.3)]);
    sadness.setPos([response_x_positions[3], (- 0.3)]);
    neutral.setPos([response_x_positions[4], (- 0.3)]);
    disgust.setPos([response_x_positions[5], (- 0.3)]);
    surprise.setPos([response_x_positions[6], (- 0.3)]);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.corr = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    image.setImage(("images/" + Image_Name));
    response_highlight.setPos([(- 500), 0]);
    psychoJS.experiment.addData('emotion_selection.started', globalClock.getTime());
    emotion_selectionMaxDuration = null
    // keep track of which components have finished
    emotion_selectionComponents = [];
    emotion_selectionComponents.push(happy);
    emotion_selectionComponents.push(anger);
    emotion_selectionComponents.push(fear);
    emotion_selectionComponents.push(sadness);
    emotion_selectionComponents.push(neutral);
    emotion_selectionComponents.push(disgust);
    emotion_selectionComponents.push(surprise);
    emotion_selectionComponents.push(mouse);
    emotion_selectionComponents.push(continue_button);
    emotion_selectionComponents.push(emotionq);
    emotion_selectionComponents.push(image);
    emotion_selectionComponents.push(response_highlight);
    
    for (const thisComponent of emotion_selectionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var corr;
var corrAns;
function emotion_selectionRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'emotion_selection' ---
    // get current time
    t = emotion_selectionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from show_response
    if (mouse.clicked_name) {
        for (var this_response, _pj_c = 0, _pj_a = responses, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
            this_response = _pj_a[_pj_c];
            if ((mouse.clicked_name.slice((- 1))[0] === this_response.name)) {
                response_highlight.setPos([this_response.pos[0], this_response.pos[1]]);
                answer = this_response;
                response_time = mouse.time.slice((- 1))[0];
            }
        }
    }
    if (answer) {
        if (mouse.isPressedIn(continue_button)) {
            continueRoutine = false;
        }
    }
    
    
    // *happy* updates
    if (t >= 0.0 && happy.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      happy.tStart = t;  // (not accounting for frame time here)
      happy.frameNStart = frameN;  // exact frame index
      
      happy.setAutoDraw(true);
    }
    
    
    // *anger* updates
    if (t >= 0.0 && anger.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      anger.tStart = t;  // (not accounting for frame time here)
      anger.frameNStart = frameN;  // exact frame index
      
      anger.setAutoDraw(true);
    }
    
    
    // *fear* updates
    if (t >= 0.0 && fear.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fear.tStart = t;  // (not accounting for frame time here)
      fear.frameNStart = frameN;  // exact frame index
      
      fear.setAutoDraw(true);
    }
    
    
    // *sadness* updates
    if (t >= 0.0 && sadness.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sadness.tStart = t;  // (not accounting for frame time here)
      sadness.frameNStart = frameN;  // exact frame index
      
      sadness.setAutoDraw(true);
    }
    
    
    // *neutral* updates
    if (t >= 0.0 && neutral.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      neutral.tStart = t;  // (not accounting for frame time here)
      neutral.frameNStart = frameN;  // exact frame index
      
      neutral.setAutoDraw(true);
    }
    
    
    // *disgust* updates
    if (t >= 0.0 && disgust.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      disgust.tStart = t;  // (not accounting for frame time here)
      disgust.frameNStart = frameN;  // exact frame index
      
      disgust.setAutoDraw(true);
    }
    
    
    // *surprise* updates
    if (t >= 0.0 && surprise.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      surprise.tStart = t;  // (not accounting for frame time here)
      surprise.frameNStart = frameN;  // exact frame index
      
      surprise.setAutoDraw(true);
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([happy, anger, sadness, fear, neutral, disgust, surprise])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([happy, anger, sadness, fear, neutral, disgust, surprise])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          // check whether click was in correct object
          if (gotValidClick) {
              corr = 0;
              corrAns = eval( Emotion);
              for (let obj of [corrAns]) {
                  if (obj.contains(mouse)) {
                      corr = 1;
                  };
              };
              mouse.corr.push(corr);
          };
          if (gotValidClick === true) { 
            _mouseXYs = mouse.getPos();
            mouse.x.push(_mouseXYs[0]);
            mouse.y.push(_mouseXYs[1]);
            mouse.leftButton.push(_mouseButtons[0]);
            mouse.midButton.push(_mouseButtons[1]);
            mouse.rightButton.push(_mouseButtons[2]);
            mouse.time.push(mouse.mouseClock.getTime());
          }
        }
      }
    }
    
    // *continue_button* updates
    if (t >= 0.0 && continue_button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_button.tStart = t;  // (not accounting for frame time here)
      continue_button.frameNStart = frameN;  // exact frame index
      
      continue_button.setAutoDraw(true);
    }
    
    
    // *emotionq* updates
    if (t >= 0.0 && emotionq.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      emotionq.tStart = t;  // (not accounting for frame time here)
      emotionq.frameNStart = frameN;  // exact frame index
      
      emotionq.setAutoDraw(true);
    }
    
    
    // *image* updates
    if (t >= 0.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }
    
    
    // *response_highlight* updates
    if (t >= 0.0 && response_highlight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_highlight.tStart = t;  // (not accounting for frame time here)
      response_highlight.frameNStart = frameN;  // exact frame index
      
      response_highlight.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of emotion_selectionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function emotion_selectionRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'emotion_selection' ---
    for (const thisComponent of emotion_selectionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('emotion_selection.stopped', globalClock.getTime());
    // Run 'End Routine' code from show_response
    psychoJS.experiment.addData("answer", answer);
    psychoJS.experiment.addData("response_time", response_time);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.corr', mouse.corr);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // the Routine "emotion_selection" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var thanksMaxDurationReached;
var thanksMaxDuration;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'thanks' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    thanksClock.reset();
    routineTimer.reset();
    thanksMaxDurationReached = false;
    // update component parameters for each repeat
    // setup some python lists for storing info about the end_mouse
    // current position of the mouse:
    end_mouse.x = [];
    end_mouse.y = [];
    end_mouse.leftButton = [];
    end_mouse.midButton = [];
    end_mouse.rightButton = [];
    end_mouse.time = [];
    end_mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('thanks.started', globalClock.getTime());
    thanksMaxDuration = null
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(thankstxt);
    thanksComponents.push(continue_button_4);
    thanksComponents.push(end_mouse);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'thanks' ---
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *thankstxt* updates
    if (t >= 0.0 && thankstxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thankstxt.tStart = t;  // (not accounting for frame time here)
      thankstxt.frameNStart = frameN;  // exact frame index
      
      thankstxt.setAutoDraw(true);
    }
    
    
    // *continue_button_4* updates
    if (t >= 0.0 && continue_button_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      continue_button_4.tStart = t;  // (not accounting for frame time here)
      continue_button_4.frameNStart = frameN;  // exact frame index
      
      continue_button_4.setAutoDraw(true);
    }
    
    // *end_mouse* updates
    if (t >= 0.0 && end_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      end_mouse.tStart = t;  // (not accounting for frame time here)
      end_mouse.frameNStart = frameN;  // exact frame index
      
      end_mouse.status = PsychoJS.Status.STARTED;
      end_mouse.mouseClock.reset();
      prevButtonState = end_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (end_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = end_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          end_mouse.clickableObjects = eval(continue_button_4)
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(end_mouse.clickableObjects)) {
              end_mouse.clickableObjects = [end_mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of end_mouse.clickableObjects) {
              if (obj.contains(end_mouse)) {
                  gotValidClick = true;
                  end_mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              end_mouse.clicked_name.push(null);
          }
          _mouseXYs = end_mouse.getPos();
          end_mouse.x.push(_mouseXYs[0]);
          end_mouse.y.push(_mouseXYs[1]);
          end_mouse.leftButton.push(_mouseButtons[0]);
          end_mouse.midButton.push(_mouseButtons[1]);
          end_mouse.rightButton.push(_mouseButtons[2]);
          end_mouse.time.push(end_mouse.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'thanks' ---
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('thanks.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('end_mouse.x', end_mouse.x);
    psychoJS.experiment.addData('end_mouse.y', end_mouse.y);
    psychoJS.experiment.addData('end_mouse.leftButton', end_mouse.leftButton);
    psychoJS.experiment.addData('end_mouse.midButton', end_mouse.midButton);
    psychoJS.experiment.addData('end_mouse.rightButton', end_mouse.rightButton);
    psychoJS.experiment.addData('end_mouse.time', end_mouse.time);
    psychoJS.experiment.addData('end_mouse.clicked_name', end_mouse.clicked_name);
    
    // the Routine "thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
