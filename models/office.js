class Office {

  constructor () {
    this.offices = [];
  }

  find () {
    return this.offices
  }

  findById() {
    return this.offices.find(office => office.id === id);
  }
}