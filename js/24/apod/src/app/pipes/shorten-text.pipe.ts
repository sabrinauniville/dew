import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText',
  standalone: true,
})
export class ShortenTextPipe implements PipeTransform {
  transform(value: string | null | undefined, limit = 120): string {
    if (!value) {
      return '';
    }

    if (value.length <= limit) {
      return value;
    }

    return `${value.slice(0, limit).trimEnd()}...`;
  }
}
