export type Question = {
  question: string;
  prompt: string | string[] | YesNo[];
  answer: string;
  condition: (questions: QuestionBlock) => boolean;
};
export enum YesNo {
  yes = "Yes",
  no = "No",
}
export type QuestionBlock = Record<string, Question>;
export const checkForValue = (
  questions: QuestionBlock,
  key: string,
  value: string
) => {
  return questions.hasOwnProperty(key) && questions[key].answer === value;
};
const generalQuestions: QuestionBlock = {
  USERNAME: {
    question: "What is your name / handle",
    prompt: "Your Awesome board",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  SPLIT: {
    question: "Are we making a guide for a split keyboard?",
    prompt: [YesNo.yes, YesNo.no],
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  OLED: {
    question: "Can this keyboard take OLED Screens?",
    prompt: [YesNo.yes, YesNo.no],
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  ENCODERS: {
    question: "Can this keyboard take encoders?",
    prompt: [YesNo.yes, YesNo.no],
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  LED: {
    question: "Can this keyboard take LEDs?",
    prompt: [YesNo.yes, YesNo.no],
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  PERKEY: {
    question: "Can this keyboard take perkey LEDs?",
    prompt: [YesNo.yes, YesNo.no],
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "LED", YesNo.yes),
  },
  UNDERGLOW: {
    question: "Can this keyboard take underglow LEDs?",
    prompt: [YesNo.yes, YesNo.no],
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "LED", YesNo.yes),
  },
};
const questions: QuestionBlock = {
  KEYBOARDNAME: {
    question: "Name of Keyboard?",
    prompt: "Your Awesome board",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  QMKKEYBOARDNAME: {
    question: "Qmk Path?",
    prompt: "keyboard path in qmk",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  KMKKEYBOARDNAME: {
    question: "Kmk Path",
    prompt: "keyboard path in Kmk",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  SWITCHSTYLE: {
    question: "What kind of switches?",
    prompt: ["MX", "Choc", "MX or Choc"],
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  DIODESTYLE: {
    question: "What kind of diodes?",
    prompt: ["SMD", "Through hole", "SMT or TH"],
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  CONTROLLERSTYLE: {
    question: "Controller footprint",
    prompt: ["Pro-Micro", "Seeed xiao", "Pico"],
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  CONTROLLERPLACEMENT: {
    question: "How does the controller mount?",
    prompt: [
      "face up",
      "face down",
      "right side face up & left side face down",
      "right side face down & left side face up",
    ],
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  PCBCOUNT: {
    question: "How many PCB's do you need?",
    prompt: ["1", "2"],
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  SWITCHCOUNT: {
    question: "How many switches does it have?",
    prompt: "this is the number of switches ",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  CONTROLLERCOUNT: {
    question: "How many controllers does it take?",
    prompt: "eg 1,2",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
};
const images: QuestionBlock = {
  NULLEDCOMPONETSIMAGE: {
    question: "",
    prompt: "all components layed out / nulled",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  DIODECLOSEUPIMG1: {
    question: "",
    prompt: "close up of diode orientation",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  DIODECLOSEUPIMG2: {
    question: "",
    prompt: "close up of diode half soldered",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  DIODECLOSEUPIMG3: {
    question: "",
    prompt: "diode finished",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  LEDORDERIMG: {
    question: "",
    prompt: "order of leds on pcb",
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "LED", YesNo.yes),
  },
  LEDORIENTATIONIMG1: {
    question: "",
    prompt: "perkey led correct orientation",
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "PERKEY", YesNo.yes),
  },
  LEDORIENTATIONIMG2: {
    question: "",
    prompt: "underglow led correct orientation",
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "UNDERGLOW", YesNo.yes),
  },
  LEDCLOSEUPIMG1: {
    question: "",
    prompt: "perkey pads soldered",
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "PERKEY", YesNo.yes),
  },
  LEDCLOSEUPIMG2: {
    question: "",
    prompt: "underglow pads soldered",
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "UNDERGLOW", YesNo.yes),
  },
  LEDCLOSEUPIMG3: {
    question: "",
    prompt: "perkey placed",
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "PERKEY", YesNo.yes),
  },
  LEDCLOSEUPIMG4: {
    question: "",
    prompt: "underglow placed",
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "UNDERGLOW", YesNo.yes),
  },
  LEDCLOSEUPIMG5: {
    question: "",
    prompt: "perkey finished",
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "PERKEY", YesNo.yes),
  },
  CONTROLLERCLOSEUPIMG1: {
    question: "",
    prompt: "header pins installed",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  CONTROLLERCLOSEUPIMG2: {
    question: "",
    prompt: "controller placed on pins",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  CONTROLLERCLOSEUPIMG3: {
    question: "",
    prompt: "controller finished",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  OLEDCLOSEUPIMG1: {
    question: "",
    prompt: "oled placed",
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "OLED", YesNo.yes),
  },
  OLEDCLOSEUPIMG2: {
    question: "",
    prompt: "one pin soldered of oled",
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "OLED", YesNo.yes),
  },
  OLEDCLOSEUPIMG3: {
    question: "",
    prompt: "oled finished",
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "OLED", YesNo.yes),
  },
  TRRSCLOSEUPIMG1: {
    question: "",
    prompt: "trrs placed on pcb",
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "SPLIT", YesNo.yes),
  },
  TRRSCLOSEUPIMG2: {
    question: "",
    prompt: "trrs finished",
    answer: "",
    condition: (questions: QuestionBlock) =>
      checkForValue(questions, "SPLIT", YesNo.yes),
  },
  RESETCLOSEUPIMG1: {
    question: "",
    prompt: "one pin soldered or reset switch",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  RESETCLOSEUPIMG2: {
    question: "",
    prompt: "reset finished",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  SOCKETCLOSEUPIMG1: {
    question: "",
    prompt: "one pad solder of hotswap foot print",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  SOCKETCLOSEUPIMG2: {
    question: "",
    prompt: "hotswap placed and reflowed",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
  SOCKETCLOSEUPIMG3: {
    question: "",
    prompt: "hot swap finished",
    answer: "",
    condition: (questions: QuestionBlock) => true,
  },
};

export const allQuestions: QuestionBlock = {
  ...generalQuestions,
  ...questions,
  ...images,
};
