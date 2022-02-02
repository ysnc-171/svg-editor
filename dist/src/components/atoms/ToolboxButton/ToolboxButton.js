import { __decorate } from "tslib";
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { iconStyles, toolBoxButtonStyles, } from './ToolboxButton.styles';
let ToolboxButton = class ToolboxButton extends LitElement {
    constructor(props) {
        super();
        if (props) {
            this.buttonId = props.buttonId;
            this.onClick = props.onClick;
            this.toolName = props.toolName;
            this.icon = props.icon;
            this.disabled = props.disabled;
        }
    }
    firstUpdated() {
        var _a;
        const tooltip = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('button-tooltip');
        if (tooltip) {
            const toolTipText = tooltip.querySelector('#tooltiptext');
            tooltip === null || tooltip === void 0 ? void 0 : tooltip.addEventListener('mousemove', (event) => {
                if (tooltip.matches(':hover')) {
                    const x = event.clientX;
                    const y = event.clientY;
                    if (toolTipText) {
                        toolTipText.style.top = y + 20 + 'px';
                        toolTipText.style.left = x + 15 + 'px';
                    }
                }
            });
        }
    }
    render() {
        var _a, _b;
        return html ` <div class="tooltip" id="button-tooltip">
      <label>
        ${this.icon
            ? html ` <div class=${this.icon + ' icon'}></div>`
            : this.toolName}
        <button
          id=${(_a = this.buttonId) !== null && _a !== void 0 ? _a : this.toolName + Date.now().toString()}
          @click=${() => { var _a; return this.buttonId && ((_a = this.onClick) === null || _a === void 0 ? void 0 : _a.call(this, this.buttonId)); }}
          .disabled=${(_b = this.disabled) !== null && _b !== void 0 ? _b : false}
        ></button>
      </label>
      <span id="tooltiptext"> ${this.toolName} </span>
    </div>`;
    }
};
ToolboxButton.styles = [toolBoxButtonStyles, ...iconStyles];
__decorate([
    property({ type: String })
], ToolboxButton.prototype, "buttonId", void 0);
__decorate([
    property()
], ToolboxButton.prototype, "onClick", void 0);
__decorate([
    property({ type: String })
], ToolboxButton.prototype, "toolName", void 0);
__decorate([
    property({ type: String })
], ToolboxButton.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], ToolboxButton.prototype, "disabled", void 0);
ToolboxButton = __decorate([
    customElement('toolbox-button')
], ToolboxButton);
export { ToolboxButton };
//# sourceMappingURL=ToolboxButton.js.map