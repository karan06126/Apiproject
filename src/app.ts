import server from './server';

// tslint:disable-next-line:radix
const port = parseInt(process.env.PORT || '4000');

const starter = new server().start(port)
    // tslint:disable-next-line:no-shadowed-variable
  .then(port => console.log(`Running on port ${port}`))
  .catch(error => {
    console.log(error)
  });

export default starter;