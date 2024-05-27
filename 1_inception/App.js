// this {} is the place where we give attributes to the corresponding tag
const heading = React.createElement('h1',{id:'heading'},'Hello, world! using React');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);