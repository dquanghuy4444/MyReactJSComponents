export default class CustomImage {
  constructor(mimeType) {
    this.mimeType = mimeType;
  }

  get imageType() {
    return this.mimeType.split("/")[1];
  }
}
