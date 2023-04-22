import { Component } from '@angular/core';

interface AccordionItem {
  title: string;
  content: string;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent {
  activeIndex = -1;

  accordionItems: AccordionItem[] = [
    {
      title: 'Accordion Item 1',
      content: 'Content of Accordion Item 1'
    },
    {
      title: 'Accordion Item 2',
      content: 'Content of Accordion Item 2'
    },
    {
      title: 'Accordion Item 3',
      content: 'Content of Accordion Item 3'
    }
  ];

  toggleAccordion(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = -1;
    } else {
      this.activeIndex = index;
    }
  }
}

































