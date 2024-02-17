export default class Asset {
  constructor({ asset, full_name, metrics }) {
    this.name = asset;
    this.full_name = full_name;
    this.metrics = metrics;
  }
}
