import { observable, computed, action } from 'mobx';
import { Metric } from '../models';
import filtersStore from './filters';

class MetricsStore {
  constructor() {
    this.fetchData();
  }

  @observable.ref
  list = [];

  @observable
  related = [];

  @observable
  query = '';

  @observable
  selected = '';

  @computed
  get filteredByMetric() {
    const result = this.list.filter(({ name }) =>
      filtersStore.metrics.ids.includes(name)
    );
    return result.length ? result : this.list;
  }

  @computed
  get filteredByQuery() {
    const queryLowerCased = filtersStore.metrics.query.toLocaleLowerCase();
    const byIDs = this.filteredByMetric.filter(
      ({ name }) => name.toLocaleLowerCase() === queryLowerCased
    );
    const byFullName = this.filteredByMetric.filter(({ full_name }) =>
      full_name.toLocaleLowerCase().startsWith(queryLowerCased)
    );
    const result = [...byIDs, ...byFullName].filter(
      (value, index, self) => self.indexOf(value) === index
    );

    return result;
  }

  @computed
  get filtered() {
    return this.filteredByQuery;
  }

  async fetchData() {
    const { data } = await (
      await fetch('https://community-api.coinmetrics.io/v4/catalog/metrics')
    ).json();
    this.setList(data.map((a) => new Metric(a)));
  }

  @action
  setList(list) {
    this.list = list;
  }
}

export default new MetricsStore();
