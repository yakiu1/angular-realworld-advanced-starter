import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ValidationErrors, FormControl } from '@angular/forms';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  form;

  ngOnInit() {
    this.form = this.fb.group(
      {
        title: this.fb.control('新增文章', [customVaildOne]),
        context: this.fb.control('寫入文章內容'),
        tags: this.fb.array([this.fb.control('HTML'), this.fb.control('Angular')])
      }
    );
  }


  public get tags(): FormArray {
    return this.form.get('tags');
  }


  doAddTags(tagName: string) {
    console.log(tagName);
    (this.tags as FormArray)
      .push(this.fb.control(tagName));
  }

  doRemove(index: number) {
    this.tags.removeAt(index);
  }

}

export function customVaildOne(control: FormControl) {
  console.log(control);
  return control.value === '' ? {
    twoAtError: true
  } : null;
}
