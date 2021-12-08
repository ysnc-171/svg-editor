import { EditorLayout } from '../../components/organisms/EditorLayout';
import { Coordinates } from '../../types/types';
import { Tools_List } from '../Editor';
import {
  generateCircle,
  generateEllipse as generateEllipse,
} from '../helper/coordinates';
import { Ellipse } from '../Shapes/Ellipse';
import { Line } from '../Shapes/Line';
import { Tool } from './Tool';

export class EllipseTool extends Tool<Ellipse> {
  constructor(
    target: HTMLCanvasElement,
    previewLayer: HTMLCanvasElement,
    self: EditorLayout,
    offset: Coordinates
  ) {
    super(target, self, offset, previewLayer);
    this.resetPreview();
    this.toolName = Tools_List.ELLIPSE;
    const renderingContext = this.drawLayer.getContext('2d');
    if (renderingContext) {
      this.context = renderingContext;
    }
  }

  draw = () => {
    this.currentShape && this.pen.drawEllipse(this.currentShape, this.context);
    this.resetPreview();
  };

  executeAction = () => {
    this.drawLayer.addEventListener('mousemove', this.onMove);
    this.drawLayer.addEventListener('mousedown', this.onDown);
    this.drawLayer.addEventListener('mouseup', this.onUp);
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
  };

  destroy = () => {
    this.drawLayer.removeEventListener('mousemove', this.onMove);
    this.drawLayer.removeEventListener('mousedown', this.onDown);
    this.drawLayer.removeEventListener('mouseup', this.onUp);
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    return this.allShapes;
  };

  onDown = (event: MouseEvent) => {
    this.previousCoordinates = this.getCoords(event);
    this.isDrawing = true;
  };

  onUp = (event: MouseEvent) => {
    this.isDrawing = false;
    this.currentCoordinates = this.getCoords(event);
    if (this.isCircle) {
      this.currentShape = generateCircle(
        this.previousCoordinates,
        this.currentCoordinates
      );
    } else {
      this.currentShape = generateEllipse(
        this.previousCoordinates,
        this.currentCoordinates
      );
    }
    this.allShapes.push(this.currentShape);

    this.draw();
  };
  isCircle: boolean = false;

  onKeyDown = (event: KeyboardEvent) => {
    if (event.ctrlKey) {
      this.isCircle = true;
    }
  };

  onKeyUp = (event: KeyboardEvent) => {
    this.isCircle = false;
  };

  onMove = (event: MouseEvent) => {
    this.currentCoordinates = this.getCoords(event);
    this.resetPreview();

    if (this.isDrawing && this.previewLayer) {
      if (this.isCircle) {
        const previewShape = generateCircle(
          this.previousCoordinates,
          this.currentCoordinates,
          true
        );
        this.currentShape = previewShape;
        this.pen.drawEllipse(previewShape, this.previewContext);
      } else {
        const previewShape = generateEllipse(
          this.previousCoordinates,
          this.currentCoordinates,
          true
        );
        this.currentShape = previewShape;
        this.pen.drawEllipse(previewShape, this.previewContext);
      }
    }
  };
}