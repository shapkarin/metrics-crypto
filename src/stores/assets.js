import { observable, computed, action } from 'mobx';
import { Asset } from '../models';
import filtersStore from './filters';

class AssetsStore {
  constructor() {
    this.fetchData();
  }

  @observable.ref
  list = [];

  @computed
  get filteredByMetric() {
    const result = this.list.filter(({ metrics }) =>
      metrics?.find(
        ({ metric }) => metric === filtersStore.assets.selectedMetric
      )
    );
    return result.length ? result : this.list;
  }

  @computed
  get filteredByQuery() {
    const queryLowerCased = filtersStore.assets.query.toLocaleLowerCase();
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
      await fetch('https://community-api.coinmetrics.io/v4/catalog/assets')
    ).json();
    const filtered = data.reduce(
      (accumulator, item) =>
        item.metrics?.length ? [...accumulator, new Asset(item)] : accumulator,
      []
    );
    this.setList(filtered);
  }

  @action
  setList(list) {
    this.list = list;
  }
}

export default new AssetsStore();
