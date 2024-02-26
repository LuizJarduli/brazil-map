import { LitElement, TemplateResult, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('brazil-component')
export class BrazilComponent extends LitElement {
  public static override styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  public override render(): TemplateResult {
    return html`<h1>Oi</h1>`;
  }
}
