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

module.exports = Office;