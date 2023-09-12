export enum QuestionTypes {
  Simple = 1,
  MultipleChoice,
  MultipleCorrect,
  TrueFalse,
}

export const QuestionTypeLabels = {
  1: "Simple",
  2: "Multiple Choice",
  3: "Multiple Correct Answers",
  4: "True or False",
};

export enum EventStatuses {
  Draft = 1,
  Published,
  Completed,
}

export enum LocationTypes {
  PlusCode = 1,
  Coordinates,
  MapsLink,
  Address,
}