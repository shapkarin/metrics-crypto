import { observable, action } from 'mobx';

const defaults = {
  assets: {
    selectedMetric: '',
    query: '',
  },
  metrics: {
    selectedAsset: '',
    query: '',
    ids: [],
  },
};

class FiltersStore {
  @observable
  assets = defaults.assets;

  @observable
  metrics = defaults.metrics;

  @action
  filterMetrics(asset) {
    const { metrics, name: selected } = asset;

    this.metrics.selectedAsset = selected;
    this.metrics.ids = metrics.map(({ metric }) => metric) ?? [];
  }

  @action
  filterAssets(metric) {
    this.assets.selectedMetric = metric.name;
    this.assets.metric = metric.name;
  }

  @action
  setQuery(type, query) {
    if (!this.hasOwnProperty(type)) {
      throw new Error(`FiltersStore does not has "${type}" property`);
    }
    this[type].query = query;
  }

  @action
  reset(type) {
    if (!this.hasOwnProperty(type)) {
      throw new Error(`FiltersStore does not has "${type}" property`);
    }
    this[type] = defaults[type];
  }
}

export default new FiltersStore();
