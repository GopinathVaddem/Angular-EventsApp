import { FormControl } from '@angular/forms';

export function restrictedWords(control: FormControl){
  var words: string[] = ['foo', 'bar'];

  if (!words){
    return null;
  } else {
    var invalidWords = words.map(w => control.value.includes(w) ? w: null).filter(w => w!= null);
    return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : null;
  }
}
