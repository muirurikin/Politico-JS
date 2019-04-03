class Office {

  constructor () {
    this.offices = [
      { "name": "ODM", "type": "local govt"},
      { "name": "Jubilee", "type": "local govt"},
      { "name": "Wiper", "type": "local govt"},
      { "name": "Nasa", "type": "local govt"},
      { "name": "Kanu", "type": "local govt"}
    ];
  }

  find () {
    return this.offices;
  }

  findById() {
    return this.offices.find(office => office.id === id);
  }

  create(data) {
    const { name, type } = data
    let newOffice = {
      id: this.offices.length + 1,
      name,
      type,
    }

    this.offices.push(newOffice);

    return newOffice;
  }
}

module.exports = new Office();