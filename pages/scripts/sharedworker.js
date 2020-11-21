const mutations = {
  ADD: 'ADD',
  SET: 'SET'
};

let browserInstances = [];
let messages = [];

onconnect = function(e) {
  const port = e.ports[0];

  browserInstances.push(port);

  port.onmessage = function({ data }) {
    switch(data.mutation) {
      case mutations.ADD:
        messages = [...messages, data.value];
        break;
      case mutations.SET:
        messages = data.value;
        break;
    }

    postMessage({ ...data, messages });
  }
}

function postMessage(message) {
  if (!Array.isArray(message.value)) {
    message.value = [message.value];
  }

  browserInstances.map(instance => {
    instance.postMessage(message);
  });
}
