import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {
  AlertController,
  IonicModule,
  IonModal,
  ModalController,
} from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Note, NoteService } from 'src/app/services/note/note.service';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class Tab3Page implements OnDestroy, OnInit {
  @ViewChild(IonModal) modal!: IonModal;
  noteSub!: Subscription;
  model: any = {};
  notes: Note[] = [];
  isOpen: boolean = true;
  constructor(
    private note: NoteService,
    private alertCtrl: AlertController,
    private modelCtrl: ModalController,
    private firestorage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.note.getNotes();
    this.noteSub = this.note.notes.subscribe({
      next: (notes) => {
        this.notes = notes;
      },
      error: (e) => {
        console.log(e);
      },
    });
  }

  ngOnDestroy(): void {
    if (this.noteSub) {
      this.noteSub.unsubscribe();
    }
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    this.model = {};
    this.isOpen = false;
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  async save(form: NgForm) {
    try {
      if (!form.valid) {
        return;
      }
      console.log(form.value);
      if (this.model?.id) await this.note.updateNote(this.model.id, form.value);
      else await this.note.addNote(form.value);
      this.modal.dismiss();
    } catch (e) {
      console.log(e);
    }
  }

  async deleteNote(note: Note) {
    try {
      await this.note.deleteNote(note?.id!);
    } catch (e) {
      console.log();
    }
  }

  async editNote(note: Note) {
    try {
      this.isOpen = true;
      this.model = { ...note };
      // const data: Note = await this.note.getNoteById(note?.id!);
      // console.log('data: ', data);
      // this.model = { ...data };
    } catch (e) {
      console.log(e);
    }
  }

  async onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const path = `lapor/${file.name}`;
      const uploadTask = await this.firestorage.upload(path, file);
      const url = await uploadTask.ref.getDownloadURL();
      console.log(url);
    }
  }
}
