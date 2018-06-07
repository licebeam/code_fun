const bones = ['femur','tibula','skull'];
const bodypart = ['leg','arm','head'];

const human = [...bones, ...bodypart];

console.log(human.join(', '));
