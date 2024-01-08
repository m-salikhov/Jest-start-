class OctokitFake {
  constructor(data) {
    this.data = data;
  }

  repos = {
    listForUser: () => {
      return Promise.resolve({ data: this.data });
    },
  };
}

export default OctokitFake;
