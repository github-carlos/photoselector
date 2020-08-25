import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';


@Injectable()
export class ToastService {
  constructor(private messageService: MessageService) {}

  showSuccessMessage(text: string) {
     this.messageService.add({severity: 'success', summary: 'Sucesso', detail: text});
  }

  showErrorMessage(text: string) {
     this.messageService.add({severity: 'error', summary: 'Erro', detail: text});
  }
}
