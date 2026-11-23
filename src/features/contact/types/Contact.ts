export interface ContactItem {
  image: string;
  link: string;
  text: string;
}

export type ContactSubmitStatus = 'error' | 'idle' | 'sending' | 'success';
